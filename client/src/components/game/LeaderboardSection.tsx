import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
import { toast } from "sonner";
import { PACKAGE_ID, MODULE_NAME } from "@/utils/constants";
import { TEXTS, Lang } from "@/utils/localization";

export function LeaderboardSection({ client, lang }: { client: any, lang: Lang }) {
    const [scores, setScores] = useState<any[]>([]);
    
    const fetchLeaderboard = async () => { 
        try { 
            const events = await client.queryEvents({ query: { MoveModule: { package: PACKAGE_ID, module: MODULE_NAME } } }); 
            const rawScores = events.data.filter((e: any) => e.type.includes("ScoreEvent")).map((e: any) => e.parsedJson).sort((a: any, b: any) => Number(b.depth) - Number(a.depth)).slice(0, 10); 
            setScores(rawScores); 
        } catch (e) { } 
    };
    
    useEffect(() => { fetchLeaderboard(); }, []);
    
    const handleClaim = () => { 
        toast.error(TEXTS[lang].claim_error, { duration: 4000, style: { border: '1px solid #ef4444', background: '#220000', color: '#fca5a5' } }); 
    };
    
    return (
        <Card className="mt-6 bg-slate-900/80 border-amber-600/30 backdrop-blur-sm">
            <CardHeader><CardTitle className="flex justify-between text-amber-500"><span className="flex gap-2"><Trophy className="w-5 h-5"/> {TEXTS[lang].rank_title}</span><div className="flex gap-2"><Button variant="outline" size="sm" onClick={handleClaim} className="h-6 text-xs bg-yellow-900/30 border-yellow-600/50 text-yellow-400 hover:bg-yellow-900/60">💰 {TEXTS[lang].claim_btn}</Button><Button variant="ghost" size="sm" onClick={fetchLeaderboard}>🔄</Button></div></CardTitle></CardHeader>
            <CardContent><div className="space-y-2">{scores.map((score, idx) => (<div key={idx} className="flex justify-between items-center bg-black/40 p-2 px-4 rounded border border-slate-800"><div className="flex items-center gap-3"><span className="font-bold font-mono text-yellow-400">#{idx+1}</span><span className="text-slate-200">{score.name}</span></div><div className="flex items-center gap-4"><span className={`text-xs px-2 py-0.5 rounded ${score.outcome==="Madness"?"bg-red-900/50 text-red-400":"bg-green-900/50 text-green-400"}`}>{score.outcome === "Madness" ? (lang==='zh'?"💀 過勞":"💀 Dead") : (lang==='zh'?"🚪 下班":"🚪 Out")}</span><span className="text-amber-500 font-bold">{score.depth} F</span></div></div>))}</div></CardContent>
        </Card>
    );
}