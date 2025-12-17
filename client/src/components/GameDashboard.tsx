"use client";

import { useCurrentAccount, useSignAndExecuteTransaction, useIotaClient } from "@iota/dapp-kit";
import { Transaction } from "@iota/iota-sdk/transactions";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { PACKAGE_ID, MODULE_NAME, RANDOM_OBJECT_ID } from "@/utils/constants";
import { Volume2, VolumeX, History, Trophy, Globe } from "lucide-react";

// --- 🌏 多語言字典 (Localization) ---
const TEXTS = {
    zh: {
        title: "IOTA 逃離血汗辦公大樓",
        subtitle: "基於 IOTA 區塊鏈的無限加班模擬器",
        recruit_btn: "+ 招募新社畜",
        list_title: "👥 員工名單",
        status_mad: "💀 過勞死",
        status_sane: "SAN值",
        act_check: "🎲 單次檢定",
        act_batch: "🔥 瘋狂連發",
        act_quick: "⚡ 快速通關",
        act_quick_desc: "自動執行 (適合刷寶)",
        act_manual: "🖐️ 沉浸體驗",
        act_manual_desc: "手動決策 (RP模式)",
        choice_run: "🏃 逃跑 (DEX)",
        choice_hide: "🫣 躲藏 (LUK)",
        choice_gaze: "👁️ 凝視 (POW)",
        warn_loop: "⚠️ 輪迴之中... 請選擇",
        history_title: "冒險履歷",
        rank_title: "🏆 輪迴排行榜 (最深層數)",
        intro_lines: [
            "你是一名可憐加班的社畜，不知不覺已經到深夜......",
            "當你回過神時，公司已經停電。",
            "電梯毫無反應，你只好推開厚重的安全門，走向有綠色逃生標誌的樓梯間。",
            "角落散落著一些遺落的薄款方形包裝袋。",
            "灰塵味很重，你忍不住打了一個噴嚏——",
            "「哈啾！」",
            "......嘩啦。",
            "身後的防火門重重地關上了。",
            "因為太過昏暗，你已經找不到原本的門把手。",
            "只好繼續往下走。",
            "但有一種不祥的預感，正像墨水般在你心底蔓延......"
        ],
        outro_madness: [
            "你的意識開始模糊...",
            "樓梯間的牆壁開始蠕動，變成了老闆的臉。",
            "「明天記得提早來開會...」",
            "你放棄了思考。",
            "你成為了這棟大樓結構的一部分。",
            "永遠。"
        ],
        outro_escaped: [
            "新鮮的空氣！",
            "你推開了一樓的大門，警衛驚訝地看著你。",
            "路燈昏黃，但至少是真實的。",
            "你回頭看了一眼那棟漆黑的大樓。",
            "「終於出來了...」",
            "你看了看手機上的時間。",
            "「該死，明天還是要來上班。」"
        ]
    },
    en: {
        title: "IOTA TRPG: Escape the Corporate Abyss",
        subtitle: "Infinite Overtime Simulator on IOTA Chain",
        recruit_btn: "+ Recruit Newbie",
        list_title: "👥 Staff List",
        status_mad: "💀 KIA (Overworked)",
        status_sane: "Sanity",
        act_check: "🎲 Single Check",
        act_batch: "🔥 Batch Check",
        act_quick: "⚡ Quick Run",
        act_quick_desc: "Auto Play (Farming)",
        act_manual: "🖐️ Immersive",
        act_manual_desc: "Manual RP Mode",
        choice_run: "🏃 Run (DEX)",
        choice_hide: "🫣 Hide (LUK)",
        choice_gaze: "👁️ Gaze (POW)",
        warn_loop: "⚠️ In the Loop... Choose wisely",
        history_title: "Adventure History",
        rank_title: "🏆 Leaderboard (Max Depth)",
        intro_lines: [
            "You are a poor corporate slave, working overtime late into the night...",
            "When you snap out of it, the power is out.",
            "The elevator is dead. You push open the heavy safety door to the stairwell.",
            "Empty condom wrapper are scattered in the corner.",
            "The dust is thick. You sneeze—",
            "\"Achoo!\"",
            "...SLAM.",
            "The fire door behind you slams shut.",
            "It's too dark to find the handle.",
            "You have no choice but to go down.",
            "But an ominous feeling spreads in your heart like ink..."
        ],
        outro_madness: [
            "Your consciousness begins to fade...",
            "The walls of the stairwell start to writhe, turning into your boss's face.",
            "\"Remember to come in early for the meeting tomorrow...\"",
            "You stop thinking.",
            "You become part of the building's structure.",
            "Forever."
        ],
        outro_escaped: [
            "Fresh air!",
            "You push open the lobby door. The security guard looks at you in shock.",
            "The streetlights are dim, but real.",
            "You look back at the pitch-black building.",
            "\"Finally out...\"",
            "You check the time on your phone.",
            "\"Damn it. I still have to work tomorrow.\""
        ]
    }
};

type Lang = 'zh' | 'en';

// --- Log 處理器 (根據語言處理) ---
const processLog = (text: string, lang: Lang): string => {
    if (!text) return "";
    
    // 如果是英文模式，直接回傳清理過的英文 (稍微美化)
    if (lang === 'en') {
        return text
            .replace("=== Quick Investigation ===", "📜 [Quick Report]")
            .replace("Escaped", "Escaped 🚪")
            .replace("Looping", "Looping 🔄")
            .replace("MADNESS", "MENTAL BREAKDOWN 💀");
    }

    // 中文模式：執行翻譯映射
    let t = text;
    // 標題
    t = t.replace("=== Quick Investigation ===", "📜【快速調查報告】");
    // 環境
    t = t.replace("[Vision: Human Realm] Cold concrete stairs. Smell of rust. (Normal)", "👁️【幻覺：人道】冰冷的逃生梯，牆上貼著「禁止堆放雜物」，空氣中有過勞的汗水味。")
         .replace("[Vision: Deva Realm] Golden clouds. You feel peaceful. (CON+10)", "👁️【幻覺：天道】樓梯間灑滿了午後的陽光，像是發薪日一樣令人安心。(體質+10)")
         .replace("[Vision: Asura Realm] The walls bleed. War drums fuel rage. (DEX+5)", "👁️【幻覺：修羅道】牆壁滲出紅墨水，耳邊傳來鍵盤敲擊的戰鼓聲，你感到莫名的暴躁。(敏捷+5)")
         .replace("[Vision: Hungry Ghost Realm] Weeping faces grab your ankles. (DEX-10)", "👁️【幻覺：餓鬼道】地面伸出無數蒼白的手（像是討債的客戶），試圖抓住你的腳踝。(敏捷-10)")
         .replace("[Vision: Hell Realm] Absolute darkness. The Abyss stares back. (Stats -20)", "👁️【幻覺：地獄道】絕對的黑暗。像是無止盡的加班地獄，深淵正在回望你。(全屬性大幅下降)");
    // 快速結果
    t = t.replace("> Rushed down successfully. Distance created.", "✅ 你跨過散落的文件夾，成功衝下樓梯。")
         .replace("> Stumbled! The shadow catches up. (-2 SAN)", "❌ 你被電源線絆倒了！背後的腳步聲逼近。(SAN -2)")
         .replace("Result: You escaped the stairwell. (+15 EXP)", "🎉【結局】你推開了逃生門...是新鮮空氣！(EXP +15)")
         .replace("Result: The stairs loop back to the start. (Depth+1, SAN dmg)", "🔄【結局】你推開門...卻發現自己回到了公司的茶水間。鬼打牆了。(輪迴深度+1)")
         .replace("Result: Mind Shattered.", "💀【結局】精神崩潰。你放棄了思考，成為了這棟大樓永遠的員工。");
    // 手動劇情
    t = t.replace("You step into the infinite stairwell...", "🚪 除夕夜的最後一班電梯壞了，你踏入樓梯間...")
         .replace("The air changes. What do you do?", "空氣變得凝重，日光燈管開始閃爍。你要怎麼做？")
         .replace("You successfully evaded the shadow.", "✅ 你躲進了雜物堆，成功避開了那東西的巡視。")
         .replace("You broke the loop and found the exit!", "🎉 你打破了加班的詛咒，找到了通往一樓的出口！")
         .replace("FAILURE. The shadow grabs you...", "❌ 失敗。一隻冰冷的手搭上了你的肩膀...")
         .replace("You fall down the stairs... and land back where you started. (Loop Depth +1)", "🔄 你滾落樓梯...抬頭一看，樓層牌依然寫著同樣的數字。(輪迴深度+1)")
         .replace("Your mind cannot take another loop. It shatters.", "💀 你再也無法忍受了。你加入了祂們。")
         .replace("You stared into the Abyss, and learned its secret. (Clue Found! SAN Restored)", "👁️ 你凝視著黑暗深處，看清了老闆的真面目。你洞悉了這間公司的秘密。(發現線索！SAN值恢復)");
    // 通用
    t = t.replace("Escaped", "打卡下班").replace("Looping", "無限加班").replace("MADNESS", "過勞死(精神崩潰)");
    return t;
};

// --- 通用電影式文字 (開頭/結尾) ---
function CinematicText({ lines, onComplete, isMadness = false }: { lines: string[], onComplete: () => void, isMadness?: boolean }) {
    const [index, setIndex] = useState(0);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        setTimeout(() => setOpacity(1), 100);
        const readTime = Math.max(2000, lines[index].length * 150);
        const timer = setTimeout(() => {
            setOpacity(0);
            setTimeout(() => {
                if (index < lines.length - 1) setIndex(prev => prev + 1);
                else onComplete();
            }, 1000);
        }, readTime);
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-8 cursor-pointer" onClick={onComplete}>
            <div 
                className={`text-xl md:text-2xl font-serif tracking-widest leading-loose text-center transition-opacity duration-1000 ease-in-out ${isMadness ? "text-red-600 font-bold animate-pulse" : "text-slate-200"}`}
                style={{ opacity: opacity }}
            >
                {lines[index]}
            </div>
            <div className="absolute bottom-10 text-slate-600 text-xs animate-pulse">(Click to skip)</div>
        </div>
    );
}

// --- 音樂播放器 ---
function BGMPlayer() {
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    useEffect(() => {
        const tryPlay = async () => { if (audioRef.current) { audioRef.current.volume = 0.3; try { await audioRef.current.play(); } catch (e) { setIsPlaying(false); const unlock = () => { if(audioRef.current){audioRef.current.play(); setIsPlaying(true); document.removeEventListener('click', unlock);} }; document.addEventListener('click', unlock); } } };
        tryPlay();
    }, []);
    return (
        <div className="fixed bottom-6 right-6 z-40">
            <audio ref={audioRef} src="/bgm.mp3" loop />
            <Button onClick={() => {if(audioRef.current){ if(isPlaying){audioRef.current.pause();setIsPlaying(false)}else{audioRef.current.play();setIsPlaying(true)} }}} variant="outline" className={`rounded-full w-12 h-12 p-0 shadow-lg border-2 transition-all ${isPlaying ? "bg-indigo-600 border-indigo-400 text-white animate-pulse" : "bg-slate-900 border-slate-600 text-slate-400"}`}>
                {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </Button>
        </div>
    );
}

// --- 冒險日誌覆蓋層 (含結局觸發邏輯) ---
function AdventureOverlay({ logs, onClose, outcome, lang }: { logs: string[], onClose: (ended: boolean, outcome: string) => void, outcome: string, lang: Lang }) {
    const [displayLogs, setDisplayLogs] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (currentIndex < logs.length) {
            const timer = setTimeout(() => {
                setDisplayLogs(prev => [...prev, processLog(logs[currentIndex], lang)]); 
                setCurrentIndex(prev => prev + 1);
            }, 800); 
            return () => clearTimeout(timer);
        }
    }, [currentIndex, logs]);

    useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [displayLogs]);
    const isFinished = currentIndex >= logs.length;

    // 判斷是否為最終結局 (如果還在 Looping 就不算結束)
    const isFinalEnding = outcome === "MADNESS" || outcome === "Escaped" || outcome === "Madness";

    return (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-6 animate-in fade-in duration-300">
            <div className="max-w-2xl w-full h-[80vh] flex flex-col gap-4 border-x border-slate-800 bg-slate-950/50">
                <div className="p-4 border-b border-slate-800 bg-slate-900">
                    <h2 className="text-xl font-mono text-green-500 flex items-center gap-2">
                        <span className="animate-pulse">●</span> TRPG LOG
                    </h2>
                </div>
                <div className="flex-1 overflow-y-auto p-6 font-mono text-base space-y-4 custom-scrollbar">
                    {displayLogs.map((log, idx) => (
                        <div key={idx} className="border-l-2 border-slate-700 pl-4 py-2 animate-in slide-in-from-left-2 fade-in">
                            <span className={log.includes("幻覺")||log.includes("Vision") ? "text-purple-400 font-bold" : log.includes("成功")||log.includes("Escaped") ? "text-emerald-400" : log.includes("失敗")||log.includes("Looping") ? "text-orange-400" : log.includes("崩潰")||log.includes("Shattered") ? "text-red-500 font-bold text-xl block mt-2" : "text-slate-300"}>{log}</span>
                        </div>
                    ))}
                    <div ref={bottomRef} />
                </div>
                {isFinished && (
                    <div className="p-6 border-t border-slate-800 flex justify-center bg-slate-900">
                        <Button onClick={() => onClose(isFinalEnding, outcome)} className="w-full max-w-sm bg-slate-100 text-black hover:bg-white font-bold text-lg h-12">
                            {outcome === "Looping" ? (lang==='zh' ? "🔄 繼續輪迴" : "🔄 Continue Loop") : (lang==='zh' ? "🚪 結束調查" : "🚪 Close Log")}
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}

// --- 排行榜 ---
function LeaderboardSection({ client, lang }: { client: any, lang: Lang }) {
    const [scores, setScores] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const fetchLeaderboard = async () => {
        setLoading(true);
        try {
            const events = await client.queryEvents({ query: { MoveModule: { package: PACKAGE_ID, module: MODULE_NAME } } });
            const rawScores = events.data.filter((e: any) => e.type.includes("ScoreEvent")).map((e: any) => e.parsedJson).sort((a: any, b: any) => Number(b.depth) - Number(a.depth)).slice(0, 10);
            setScores(rawScores);
        } catch (e) { }
        setLoading(false);
    };
    useEffect(() => { fetchLeaderboard(); }, []);
    return (
        <Card className="mt-6 bg-slate-900/80 border-amber-600/30">
            <CardHeader><CardTitle className="flex justify-between text-amber-500"><span className="flex gap-2"><Trophy className="w-5 h-5"/> {TEXTS[lang].rank_title}</span><Button variant="ghost" size="sm" onClick={fetchLeaderboard}>🔄</Button></CardTitle></CardHeader>
            <CardContent>
                <div className="space-y-2">{scores.map((score, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-black/40 p-2 px-4 rounded border border-slate-800">
                        <div className="flex items-center gap-3"><span className={`font-bold font-mono w-6 text-right ${idx<3?"text-yellow-400":"text-slate-500"}`}>#{idx+1}</span><span className="text-slate-200">{score.name}</span></div>
                        <div className="flex items-center gap-4"><span className={`text-xs px-2 py-0.5 rounded ${score.outcome==="Madness"?"bg-red-900/50 text-red-400":"bg-green-900/50 text-green-400"}`}>{score.outcome}</span><span className="text-amber-500 font-bold">{score.depth} F</span></div>
                    </div>
                ))}</div>
            </CardContent>
        </Card>
    );
}

// --- 歷史紀錄 ---
function HistorySection({ history, lang }: { history: any[], lang: Lang }) {
    if (history.length === 0) return null;
    return (
        <Card className="mt-6 bg-slate-900/50 border-slate-800">
            <CardHeader><CardTitle className="flex items-center gap-2 text-slate-300"><History className="w-5 h-5" /> {TEXTS[lang].history_title}</CardTitle></CardHeader>
            <CardContent className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                {history.slice().reverse().map((entry, idx) => (
                    <div key={idx} className="bg-black/40 p-4 rounded border-l-4 border-slate-700 hover:border-indigo-500 transition-all">
                        <div className="flex justify-between text-xs text-slate-500 mb-2"><span>{new Date(entry.timestamp).toLocaleString()}</span><span className={entry.outcome === "MADNESS" ? "text-red-500" : "text-green-500"}>{entry.outcome}</span></div>
                        <div className="space-y-1">{entry.logs.map((log: string, i: number) => (<div key={i} className="text-sm text-slate-300 font-mono border-l-2 border-slate-800 pl-2 ml-1">{processLog(log, lang)}</div>))}</div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}

// --- 主元件 ---
export function GameDashboard() {
  const account = useCurrentAccount();
  const client = useIotaClient();
  const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransaction();

  // 🔥 State
  const [lang, setLang] = useState<Lang>('zh'); // 語言狀態
  const [loading, setLoading] = useState(false);
  const [investigators, setInvestigators] = useState<any[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  
  // 冒險資料
  const [adventureData, setAdventureData] = useState<{logs: string[], outcome: string} | null>(null);
  
  // 劇情控制
  const [showIntro, setShowIntro] = useState(true);
  const [outroType, setOutroType] = useState<"none" | "madness" | "escaped">("none");

  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => { const saved = localStorage.getItem("iota_trpg_history"); if (saved) try { setHistory(JSON.parse(saved)); } catch (e) {} }, []);
  const addToHistory = (logs: string[], outcome: string) => { const newEntry = { timestamp: Date.now(), logs, outcome }; const newHistory = [...history, newEntry]; setHistory(newHistory); localStorage.setItem("iota_trpg_history", JSON.stringify(newHistory)); };

  const currentInvestigator = investigators.find(i => i.id === selectedId);
  const t = TEXTS[lang]; // 當前語言包

  const fetchInvestigators = async () => {
    if (!account) return;
    const objects = await client.getOwnedObjects({ owner: account.address, options: { showType: true, showContent: true } });
    const targetType = `${PACKAGE_ID}::${MODULE_NAME}::Investigator`;
    const foundList = objects.data.filter((obj) => obj.data?.type === targetType).map((obj) => { if (obj.data?.content?.dataType === "moveObject") return { ...obj.data.content.fields, id: obj.data.objectId }; return null; }).filter(Boolean);
    setInvestigators(foundList);
    if (!selectedId && foundList.length > 0) {
        // @ts-ignore
        const saneOne = foundList.find((i: any) => !i.is_mad);
        // @ts-ignore
        setSelectedId(saneOne ? saneOne.id : foundList[0].id);
    }
  };
  useEffect(() => { fetchInvestigators(); }, [account]);

  // Tx Helpers
  const executeTx = (tx: Transaction, actionName: string) => {
    tx.setGasBudget(50000000); 
    signAndExecuteTransaction({ transaction: tx, options: { showEffects: true, showEvents: true } }, {
        onSuccess: (result) => { setLoading(false); setTimeout(fetchInvestigators, 1000); toast.success("Success"); },
        onError: (err) => { toast.error(err.message); setLoading(false); }
    });
  };

  const executeScenarioTx = async (tx: Transaction) => {
      setLoading(true);
      tx.setGasBudget(100000000); 
      signAndExecuteTransaction({ transaction: tx, options: { showEffects: true, showEvents: true } }, {
          onSuccess: async (result) => {
              let events = result.events || [];
              if (events.length === 0) {
                  toast.loading("Waiting for block...", { id: "retry" });
                  await new Promise(resolve => setTimeout(resolve, 2000));
                  try { const r = await client.getTransactionBlock({ digest: result.digest, options: { showEvents: true, showEffects: true } }); events = r.events || []; toast.dismiss("retry"); } catch (e) { }
              }
              const event = events.find(e => e.type.includes("ScenarioEvent"));
              if (event) {
                  // @ts-ignore
                  const logs = event.parsedJson?.logs || [];
                  // @ts-ignore
                  const outcome = event.parsedJson?.outcome || "";
                  setAdventureData({ logs, outcome });
                  addToHistory(logs, outcome);
              } else {
                   toast.warning("Lag detected, showing mock");
                   setAdventureData({ logs: ["(Blockchain lag...)", "Please check history later"], outcome: "Looping" });
              }
              setLoading(false);
          },
          onError: (err) => { toast.error(err.message); setLoading(false); }
      });
  };

  const mint = () => {
    const tx = new Transaction();
    tx.moveCall({ target: `${PACKAGE_ID}::${MODULE_NAME}::mint`, arguments: [ tx.object(RANDOM_OBJECT_ID), tx.pure.vector("u8", Array.from(new TextEncoder().encode("Staff #" + Math.floor(Math.random()*9000+1000)))) ] });
    
    tx.setGasBudget(50000000); 
    signAndExecuteTransaction({ transaction: tx, options: { showEffects: true, showEvents: true } }, {
        onSuccess: () => { setLoading(false); setTimeout(fetchInvestigators, 1000); setShowIntro(true); },
        onError: (err) => { toast.error(err.message); setLoading(false); }
    });
  };

  // Actions
  const sanityCheck = () => { if (!currentInvestigator) return; const tx = new Transaction(); tx.moveCall({ target: `${PACKAGE_ID}::${MODULE_NAME}::sanity_check`, arguments: [ tx.object(currentInvestigator.id), tx.object(RANDOM_OBJECT_ID) ] }); executeTx(tx, "Check"); };
  const batchSanityCheck = () => { if (!currentInvestigator) return; const tx = new Transaction(); tx.moveCall({ target: `${PACKAGE_ID}::${MODULE_NAME}::batch_sanity_check`, arguments: [ tx.object(currentInvestigator.id), tx.object(RANDOM_OBJECT_ID) ] }); executeTx(tx, "Batch"); };
  const playQuick = () => { if (!currentInvestigator) return; const tx = new Transaction(); tx.moveCall({ target: `${PACKAGE_ID}::${MODULE_NAME}::play_stairs_quick`, arguments: [tx.object(currentInvestigator.id), tx.object(RANDOM_OBJECT_ID)] }); executeScenarioTx(tx); };
  const playManualStart = () => { if (!currentInvestigator) return; const tx = new Transaction(); tx.moveCall({ target: `${PACKAGE_ID}::${MODULE_NAME}::manual_start`, arguments: [tx.object(currentInvestigator.id), tx.object(RANDOM_OBJECT_ID)] }); executeScenarioTx(tx); };
  const playManualAction = (choice: number) => { if (!currentInvestigator) return; const tx = new Transaction(); tx.moveCall({ target: `${PACKAGE_ID}::${MODULE_NAME}::manual_resolve`, arguments: [tx.object(currentInvestigator.id), tx.object(RANDOM_OBJECT_ID), tx.pure.u8(choice)] }); executeScenarioTx(tx); };
  
  const getImageUrl = (inv: any) => inv?.is_mad ? "/images/madness.png" : "/images/investigator.png";

  if (!account) return <div className="text-center p-10 text-yellow-400">⚠️ 請先連接錢包 / Connect Wallet</div>;

  return (
    <>
      <BGMPlayer />
      
      {/* 語言切換按鈕 (右上角) */}
      <div className="fixed top-4 right-4 z-50">
          <Button variant="outline" onClick={() => setLang(l => l === 'zh' ? 'en' : 'zh')} className="bg-slate-900 border-slate-600 text-slate-300 gap-2">
              <Globe size={16} /> {lang === 'zh' ? 'English' : '中文'}
          </Button>
      </div>

      {/* 開場動畫 */}
      {showIntro && <CinematicText lines={t.intro_lines} onComplete={() => setShowIntro(false)} />}
      
      {/* 結局動畫 (根據結果不同) */}
      {outroType === "madness" && <CinematicText lines={t.outro_madness} onComplete={() => setOutroType("none")} isMadness={true} />}
      {outroType === "escaped" && <CinematicText lines={t.outro_escaped} onComplete={() => setOutroType("none")} />}

      {/* 冒險日誌 (關閉時觸發結局判斷) */}
      {adventureData && (
        <AdventureOverlay 
            logs={adventureData.logs} 
            outcome={adventureData.outcome} 
            lang={lang}
            onClose={(ended, outcome) => { 
                setAdventureData(null); 
                fetchInvestigators();
                // 如果遊戲結束，觸發對應的電影結局
                if (ended) {
                    if (outcome === "MADNESS" || outcome === "Madness") setOutroType("madness");
                    else if (outcome === "Escaped") setOutroType("escaped");
                }
            }} 
        />
      )}

      {/* 標題區 */}
      <div className="max-w-4xl mx-auto mt-10 text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-indigo-600 font-serif tracking-widest uppercase">
              {t.title}
          </h1>
          <p className="text-slate-500 text-sm tracking-widest">{t.subtitle}</p>
      </div>

      <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 pb-20">
        {/* 左側列表 */}
        <Card className="md:col-span-1 bg-slate-900 border-slate-700 h-[500px] flex flex-col shadow-xl">
            <CardHeader className="pb-2"><CardTitle>{t.list_title}</CardTitle></CardHeader>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                {investigators.map((inv) => (
                    <div key={inv.id} onClick={() => setSelectedId(inv.id)} className={`p-3 rounded-lg cursor-pointer border-2 transition-all flex items-center gap-3 relative ${selectedId === inv.id ? "border-indigo-500 bg-slate-800" : "border-slate-700"} ${inv.is_mad ? "opacity-70 grayscale" : ""}`}>
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-950 border border-slate-600"><img src={getImageUrl(inv)} className="w-full h-full object-cover" /></div>
                        <div className="font-bold text-sm text-slate-200">{inv.name} <span className="text-xs text-slate-400 block">{inv.is_mad ? t.status_mad : `${t.status_sane}: ${inv.san}`}</span></div>
                    </div>
                ))}
                <Button onClick={mint} disabled={loading} className="w-full mt-4 bg-emerald-700 hover:bg-emerald-600">{t.recruit_btn}</Button>
            </div>
        </Card>

        {/* 右側操作 */}
        <Card className="md:col-span-2 bg-slate-900 border-slate-700 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl -z-10 pointer-events-none" />
            <CardHeader><CardTitle>{currentInvestigator?.name || (lang==='zh'?"請選擇角色":"Select Character")}</CardTitle></CardHeader>
            <CardContent className="flex flex-col gap-6">
                {currentInvestigator ? (
                    <>
                        <div className="flex gap-6 items-start">
                             <div className={`relative w-32 h-32 rounded-xl overflow-hidden border-4 shrink-0 shadow-xl transition-all duration-300 ${currentInvestigator.is_mad ? 'border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.8)] animate-pulse' : 'border-slate-600'}`}>
                                <img src={getImageUrl(currentInvestigator)} className="w-full h-full object-cover" />
                                {currentInvestigator.is_mad && <div className="absolute inset-0 bg-red-900/50 flex items-center justify-center z-10"><span className="text-xl font-bold text-red-500 -rotate-12 border-2 border-red-500 p-1 bg-black/50">MAD</span></div>}
                             </div>
                             <div className="flex-1 space-y-4 pt-1">
                                <div className="grid grid-cols-3 gap-2 text-center">
                                    <div className="bg-slate-950/50 p-2 rounded border border-slate-800"><div className="text-xs text-slate-500">STR</div><div className="text-lg font-bold text-orange-400">{currentInvestigator.str}</div></div>
                                    <div className="bg-slate-950/50 p-2 rounded border border-slate-800"><div className="text-xs text-slate-500">DEX</div><div className="text-lg font-bold text-green-400">{currentInvestigator.dex}</div></div>
                                    <div className="bg-slate-950/50 p-2 rounded border border-slate-800"><div className="text-xs text-slate-500">SAN</div><div className="text-lg font-bold text-blue-400">{currentInvestigator.san}</div></div>
                                </div>
                                <div className="space-y-1"><div className="flex justify-between text-xs text-slate-400"><span>{t.status_sane}</span><span>{currentInvestigator.san}/{currentInvestigator.max_san}</span></div><Progress value={(currentInvestigator.san / currentInvestigator.max_san) * 100} className={`h-2 bg-slate-800 ${currentInvestigator.is_mad ? "[&>div]:bg-red-600" : "[&>div]:bg-blue-500"}`}/></div>
                                <div className="flex justify-between items-center text-xs font-mono bg-black/30 p-2 rounded border border-slate-800"><span>Loop: <span className="text-red-400">{currentInvestigator.loop_depth||0}</span></span><span>Clues: <span className="text-purple-400">{currentInvestigator.clues||0}</span></span><span>EXP: <span className="text-yellow-400">{currentInvestigator.exp}</span></span></div>
                             </div>
                        </div>
                        <hr className="border-slate-800" />
                        <div className="space-y-4">
                             {currentInvestigator.active_scenario === 0 ? (
                                <>
                                    <div className="grid grid-cols-2 gap-3 mb-4"><Button onClick={sanityCheck} disabled={loading||currentInvestigator.is_mad} variant="outline" className="h-12 border-indigo-500/50 text-indigo-300">{t.act_check}</Button><Button onClick={batchSanityCheck} disabled={loading||currentInvestigator.is_mad} className="h-12 bg-red-900/80 text-red-100">{t.act_batch}</Button></div>
                                    <div className="grid grid-cols-2 gap-4"><Button onClick={playQuick} disabled={loading||currentInvestigator.is_mad} className="h-24 bg-slate-800 border-slate-700 flex flex-col gap-1 pl-4 items-start"><span className="text-xl">{t.act_quick}</span><span className="text-xs text-slate-500">{t.act_quick_desc}</span></Button><Button onClick={playManualStart} disabled={loading||currentInvestigator.is_mad} className="h-24 bg-indigo-900/50 border-indigo-500/50 flex flex-col gap-1 pl-4 items-start"><span className="text-xl">{t.act_manual}</span><span className="text-xs text-indigo-300">{t.act_manual_desc}</span></Button></div>
                                </>
                             ) : (
                                <div className="bg-black/40 p-6 rounded-lg border border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.2)] animate-pulse-slow">
                                    <p className="text-indigo-300 text-center text-lg font-bold mb-6">{t.warn_loop}</p>
                                    <div className="grid grid-cols-3 gap-3">
                                        <Button onClick={() => playManualAction(1)} disabled={loading} className="h-20 bg-red-900/60 hover:bg-red-800 border border-red-700/50 flex flex-col"><span className="text-2xl mb-1">🏃</span><span className="font-bold text-xs">{t.choice_run}</span></Button>
                                        <Button onClick={() => playManualAction(2)} disabled={loading} className="h-20 bg-blue-900/60 hover:bg-blue-800 border border-blue-700/50 flex flex-col"><span className="text-2xl mb-1">🫣</span><span className="font-bold text-xs">{t.choice_hide}</span></Button>
                                        <Button onClick={() => playManualAction(3)} disabled={loading} className="h-20 bg-purple-900/60 hover:bg-purple-800 border border-purple-500/50 flex flex-col"><span className="text-2xl mb-1">👁️</span><span className="font-bold text-xs">{t.choice_gaze}</span></Button>
                                    </div>
                                </div>
                             )}
                        </div>
                    </>
                ) : <div className="h-64 flex flex-col items-center justify-center text-slate-500 gap-4"><div className="text-4xl animate-bounce">👈</div><div>{lang==='zh'?"請從左側列表選擇一位調查員":"Select an investigator"}</div></div>}
            </CardContent>
        </Card>
      </div>
      <div className="max-w-4xl mx-auto pb-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        <HistorySection history={history} lang={lang} />
        <LeaderboardSection client={client} lang={lang} />
      </div>
    </>
  );
}