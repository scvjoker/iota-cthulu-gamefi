"use client";

import { useCurrentAccount, useSignAndExecuteTransaction, useIotaClient } from "@iota/dapp-kit";
import { Transaction } from "@iota/iota-sdk/transactions";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { PACKAGE_ID, MODULE_NAME, RANDOM_OBJECT_ID } from "@/utils/constants";

export function GameDashboard() {
  const account = useCurrentAccount();
  const client = useIotaClient();
  const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransaction();

  const [loading, setLoading] = useState(false);
  const [investigator, setInvestigator] = useState<any>(null);
  
  // 自動抓取玩家擁有的調查員物件
  const fetchInvestigator = async () => {
    if (!account) return;
    
    const objects = await client.getOwnedObjects({
      owner: account.address,
      options: { showType: true, showContent: true }
    });

    const targetType = `${PACKAGE_ID}::${MODULE_NAME}::Investigator`;
    const found = objects.data.find((obj) => obj.data?.type === targetType);

    if (found && found.data?.content?.dataType === "moveObject") {
      // @ts-ignore
      setInvestigator(found.data.content.fields);
      // @ts-ignore
      setInvestigator(prev => ({ ...prev, id: found.data.objectId }));
    }
  };

  useEffect(() => {
    fetchInvestigator();
  }, [account]);

  // 1. 鑄造角色 (Mint)
  const mint = () => {
    setLoading(true);
    const tx = new Transaction();
    
    tx.moveCall({
      target: `${PACKAGE_ID}::${MODULE_NAME}::mint`,
      arguments: [
        tx.object(RANDOM_OBJECT_ID),
        tx.pure.vector("u8", Array.from(new TextEncoder().encode("Detective John")))
      ],
    });

    executeTx(tx, "鑄造調查員");
  };

  // 2. 理智檢定 (Sanity Check)
  const sanityCheck = () => {
    if (!investigator) return;
    setLoading(true);
    const tx = new Transaction();

    tx.moveCall({
      target: `${PACKAGE_ID}::${MODULE_NAME}::sanity_check`,
      arguments: [
        tx.object(investigator.id),
        tx.object(RANDOM_OBJECT_ID)
      ],
    });

    executeTx(tx, "理智檢定");
  };

  // 3. 瘋狂連發 (修正版：修復 TypeScript 語法錯誤)
  const batchSanityCheck = () => {
    if (!investigator) return;
    setLoading(true);
    const tx = new Transaction();

    tx.moveCall({
      target: `${PACKAGE_ID}::${MODULE_NAME}::batch_sanity_check`,
      arguments: [
        tx.object(investigator.id),
        tx.object(RANDOM_OBJECT_ID)
      ],
    });

    // Gas 給夠
    tx.setGasBudget(500000000);

    signAndExecuteTransaction(
      { transaction: tx, options: { showEffects: true, showEvents: true, showObjectChanges: true } },
      {
        onSuccess: (result) => {
            console.log("🔥 完整交易結果:", result);

            // 1. 寬鬆過濾：只要包含 Module Name 就抓出來
            const events = result.events?.filter(e => 
                e.type.includes(MODULE_NAME) || e.type.includes("CheckEvent")
            ) || [];

            // 👇 修改這裡：直接用數字計算，不要用 string | number 混用
            let successCount = 0;
            let failCount = 0;
            let becameMad = false;
            let hasEvents = false;

            if (events.length > 0) {
                hasEvents = true;
                // A計畫：如果有抓到事件，直接統計
                events.forEach((e: any) => {
                    if (e.parsedJson?.is_success) {
                        successCount++;
                    } else {
                        failCount++;
                    }
                    if (e.parsedJson?.msg?.includes("MAD") || e.parsedJson?.msg?.includes("failures")) becameMad = true;
                });
            } else {
                // B計畫：沒抓到事件 (RPC延遲)，但交易成功
                console.warn("⚠️ 沒抓到事件，切換為備用顯示模式");
            }

            if (becameMad) {
                toast.error("😱 精神崩潰！", { description: "你在連續的檢定中徹底發瘋了..." });
            } else {
                // 這裡處理顯示邏輯：如果有抓到事件顯示數字，沒抓到顯示 "?"
                const successText = hasEvents ? successCount : "?";
                const failText = hasEvents ? failCount : "?";

                const desc = hasEvents 
                    ? `成功抵抗: ${successText} 次 / 受到傷害: ${failText} 次`
                    : "儀式完成！數據已更新 (請查看數值變化)";
                
                toast.success(`連發結束`, { description: desc });
            }

            setLoading(false);
            setTimeout(fetchInvestigator, 2000); // 延遲久一點確保同步
        },
        onError: (err) => {
            console.error(err);
            toast.error("連發失敗: " + err.message);
            setLoading(false);
        }
      }
    );
  };

  // 通用交易執行函式
  const executeTx = (tx: Transaction, actionName: string) => {
    tx.setGasBudget(50000000); 

    signAndExecuteTransaction(
      { transaction: tx, options: { showEffects: true, showEvents: true } },
      {
        onSuccess: (result) => {
            console.log("交易成功:", result);
            toast.success(`${actionName} 成功！`);
            
            const event = result.events?.find(e => e.type.includes("CheckEvent"));
            if (event) {
                // @ts-ignore
                const msg = event.parsedJson?.msg;
                // @ts-ignore
                const isSuccess = event.parsedJson?.is_success;
                toast(isSuccess ? "🎉 大成功！" : "😱 檢定失敗！", {
                    description: msg,
                    action: { label: "關閉", onClick: () => {} }
                });
            }

            setLoading(false);
            setTimeout(fetchInvestigator, 1000);
        },
        onError: (err) => {
            console.error(err);
            toast.error(`交易失敗: ${err.message}`);
            setLoading(false);
        }
      }
    );
  };

  // 圖片顯示邏輯
  const getImageUrl = () => {
    if (!investigator) return "/images/egg.png";
    if (investigator.is_mad) return "/images/madness.png";
    return "/images/investigator.png";
  };

  if (!account) {
    return <div className="text-center p-10 text-xl text-yellow-400">⚠️ 請先連接右上角錢包</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <Card className="bg-slate-900 border-slate-700 text-slate-100 shadow-2xl">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>🕵️ 舊日調查員</span>
            {investigator && <span className="text-xs text-slate-500">Lv.1</span>}
          </CardTitle>
          <CardDescription className="text-slate-400">
             {investigator ? `ID: ${investigator.id.slice(0,6)}...` : "尚未招募"}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex flex-col items-center gap-6">
          {/* 角色圖片 */}
          <div className={`relative w-64 h-64 rounded-xl overflow-hidden border-4 transition-all duration-500 
              ${investigator?.is_mad 
                  ? 'border-red-600 shadow-[0_0_30px_rgba(220,38,38,0.6)] animate-shake' 
                  : 'border-slate-600'}`
          }>
             <img src={getImageUrl()} alt="Character" className="w-full h-full object-cover" />
             {investigator?.is_mad && (
                 <div className="absolute inset-0 bg-red-900/30 flex items-center justify-center">
                     <span className="text-4xl font-bold text-red-500 rotate-12 border-4 border-red-500 p-2 animate-pulse">
                        MADNESS
                     </span>
                 </div>
             )}
          </div>

          {/* 數值面板 */}
          {investigator ? (
            <div className="w-full space-y-4">
               <div className="grid grid-cols-2 gap-4 text-center">
                   <div className="bg-slate-800 p-2 rounded">
                       <div className="text-xs text-slate-400">STR (力量)</div>
                       <div className="text-xl font-bold text-orange-400">{investigator.str}</div>
                   </div>
                   <div className="bg-slate-800 p-2 rounded">
                       <div className="text-xs text-slate-400">DEX (敏捷)</div>
                       <div className="text-xl font-bold text-green-400">{investigator.dex}</div>
                   </div>
               </div>

               <div className="space-y-1">
                   <div className="flex justify-between text-sm">
                       <span className={investigator.is_mad ? "text-red-500 font-bold" : "text-blue-400"}>
                           SAN (理智值)
                       </span>
                       <span>{investigator.san} / {investigator.max_san}</span>
                   </div>
                   <Progress 
                       value={(investigator.san / investigator.max_san) * 100} 
                       className={`h-3 bg-slate-800 ${investigator.is_mad ? "[&>div]:bg-red-600" : "[&>div]:bg-blue-500"}`} 
                   />
               </div>

               <div className="space-y-1">
                   <div className="flex justify-between text-sm text-yellow-500">
                       <span>EXP (經驗)</span>
                       <span>{investigator.exp}</span>
                   </div>
                   <Progress value={Math.min(investigator.exp, 100)} className="h-2 bg-slate-800 [&>div]:bg-yellow-500" />
               </div>

               <div className="grid grid-cols-2 gap-3 pt-2">
                   <Button 
                       onClick={sanityCheck} 
                       disabled={loading || investigator.is_mad} 
                       variant="outline"
                       className="w-full border-indigo-500 text-indigo-400 hover:bg-indigo-950 disabled:opacity-50"
                   >
                       🎲 單次檢定
                   </Button>
                   <Button 
                       onClick={batchSanityCheck} 
                       disabled={loading || investigator.is_mad} 
                       className="w-full bg-red-700 hover:bg-red-600 animate-pulse font-bold disabled:opacity-50"
                   >
                       🔥 瘋狂連發 (x5)
                   </Button>
               </div>

            </div>
          ) : (
            <Button onClick={mint} disabled={loading} className="w-full h-12 text-lg bg-emerald-600 hover:bg-emerald-500">
                {loading ? "召喚中..." : "🕯️ 招募調查員 (Mint)"}
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}