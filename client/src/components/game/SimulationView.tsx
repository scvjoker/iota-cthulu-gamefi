"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
// 🔥 1. 導入 ChartJS 核心組件
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from "react-chartjs-2";
import { 
    User, Fingerprint, MapPin, Brain, Activity, 
    Gamepad2, AlertTriangle, TrendingDown, Archive, 
    Briefcase, FileText 
} from "lucide-react";
import { toast } from "sonner";

// 🔥 2. 必須在此註冊組件，雷達圖才能顯示
ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

export function SimulationView({ 
    account, investigators, memorials, currentInvestigator, loading, t, 
    mint, 
    singleSanityCheck, batchSanityCheck, playQuick, playManualStart, playManualAction, 
    resign, 
    setSelectedId, onViewCert, getImageUrl, lang 
}: any) {
    const [listTab, setListTab] = useState<'active' | 'archive'>('active');

    if (!account) return (
        <div className="flex flex-col items-center justify-center h-[50vh] text-amber-400 animate-pulse">
            <div className="text-6xl mb-4">⚠️</div>
            <div className="text-xl font-bold">Please Connect Wallet</div>
        </div>
    );

    const depth = currentInvestigator?.loop_depth || 0;
    const san = currentInvestigator?.san || 0;
    const penalty = depth * 5;
    const survivalRate = Math.max(5, Math.min(100, san - penalty)); 

    const isCritical = currentInvestigator && !currentInvestigator.is_mad && currentInvestigator.san < 30;
    const isSanDanger = currentInvestigator && currentInvestigator.san < 30;

    // 🔥 雷達圖數據配置
    const radarData = {
        labels: ['STR', 'DEX', 'SAN', 'POW', 'CON', 'INT'],
        datasets: [{
            label: 'Personnel Stats',
            data: [
                currentInvestigator?.str || 0,
                currentInvestigator?.dex || 0,
                currentInvestigator?.san || 0,
                currentInvestigator?.str || 0, 
                50, 
                50  
            ],
            backgroundColor: isSanDanger ? 'rgba(220, 38, 38, 0.4)' : 'rgba(99, 102, 241, 0.2)',
            borderColor: isSanDanger ? 'rgba(220, 38, 38, 1)' : 'rgba(99, 102, 241, 1)',
            borderWidth: isSanDanger ? 3 : 2,
            pointBackgroundColor: isSanDanger ? '#ef4444' : '#6366f1',
        }]
    };

    const radarOptions = {
        animations: isSanDanger ? {
            tension: {
                duration: 800,
                easing: 'easeInOutSine' as const,
                from: 0.1,
                to: 0.3,
                loop: true
            }
        } : {
            tension: { duration: 0 }
        },
        scales: {
            r: {
                angleLines: { color: 'rgba(71, 85, 105, 0.5)' },
                grid: { color: 'rgba(71, 85, 105, 0.3)' },
                pointLabels: { 
                    color: isSanDanger ? '#ef4444' : '#94a3b8', 
                    font: { size: 10, weight: (isSanDanger ? 'bold' : 'normal') as any } 
                },
                ticks: { display: false },
                suggestedMin: 0,
                suggestedMax: 100
            }
        },
        plugins: { legend: { display: false } },
        maintainAspectRatio: false
    };

    return (
        <div className={`max-w-6xl mx-auto mt-4 grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in zoom-in-95 duration-500 ${isCritical ? "madness-glitch" : ""}`}>
            
            {/* 左側：員工/檔案列表 */}
            <Card className="lg:col-span-3 bg-slate-900/90 border-slate-700 h-[600px] flex flex-col shadow-2xl backdrop-blur-sm">
                <CardHeader className="pb-2 bg-slate-950/50 px-3 pt-3">
                    <div className="flex justify-between items-center mb-2">
                        <CardTitle className="text-slate-200 text-sm uppercase tracking-wider">{t.list_title}</CardTitle>
                        <div className="flex gap-1 bg-slate-900 p-1 rounded border border-slate-800">
                            <button onClick={() => setListTab('active')} className={`p-1.5 rounded transition-colors ${listTab==='active'?'bg-indigo-600 text-white':'text-slate-500 hover:text-slate-300'}`}>
                                <Briefcase size={14}/>
                            </button>
                            <button onClick={() => setListTab('archive')} className={`p-1.5 rounded transition-colors ${listTab==='archive'?'bg-amber-700 text-white':'text-slate-500 hover:text-slate-300'}`}>
                                <Archive size={14}/>
                            </button>
                        </div>
                    </div>
                </CardHeader>
                
                <div className="flex-1 overflow-y-auto p-3 space-y-2 custom-scrollbar">
                    {listTab === 'active' ? (
                        <>
                            {investigators.length === 0 && <div className="text-xs text-slate-500 text-center py-4">No active staff.</div>}
                            {investigators.map((inv: any) => (
                                <div key={inv.id} onClick={() => setSelectedId(inv.id)} className={`p-2 rounded-lg cursor-pointer border transition-all flex items-center gap-3 relative ${currentInvestigator?.id === inv.id ? "border-indigo-500 bg-indigo-900/20" : "border-slate-800 hover:bg-slate-800/50"} ${inv.is_mad ? "opacity-50 grayscale" : ""}`}>
                                    <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-950 border border-slate-600"><img src={getImageUrl(inv)} className="w-full h-full object-cover" alt="avatar" /></div>
                                    <div className="overflow-hidden"><div className="font-bold text-xs text-slate-200 truncate w-24">{inv.name}</div><span className="text-[10px] text-slate-400 block font-mono">{inv.is_mad ? "KIA" : `SAN: ${inv.san}`}</span></div>
                                </div>
                            ))}
                            <Button onClick={mint} disabled={loading} className="w-full mt-4 bg-emerald-600 hover:bg-emerald-500 text-xs h-8 shadow-lg">{t.recruit_btn}</Button>
                        </>
                    ) : (
                        <>
                            {memorials.length === 0 && <div className="text-xs text-slate-500 text-center py-4">No records found.</div>}
                            {memorials.map((sbt: any) => (
                                <div key={sbt.id} onClick={() => onViewCert(sbt)} className="p-2 rounded-lg cursor-pointer border border-slate-800 hover:border-amber-700/50 hover:bg-amber-900/10 transition-all flex items-center gap-3 group">
                                    <div className="w-8 h-8 rounded-sm overflow-hidden bg-[#fdfbf7] border border-slate-400 flex items-center justify-center">
                                        <FileText size={16} className="text-slate-800"/>
                                    </div>
                                    <div className="overflow-hidden flex-1">
                                        <div className="font-bold text-xs text-slate-300 truncate group-hover:text-amber-400 transition-colors">{sbt.name}</div>
                                        <span className="text-[10px] text-slate-500 block font-mono">B{sbt.final_depth}F | {sbt.career_exp} EXP</span>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </Card>

            {/* 中間：角色儀表板 */}
            <Card className="lg:col-span-5 bg-slate-900/90 border-slate-700 shadow-2xl relative overflow-hidden backdrop-blur-sm h-[600px] flex flex-col">
                <div className="absolute top-0 right-0 w-full h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                <CardHeader className="bg-slate-950/80 border-b border-slate-800 pb-4">
                    <CardTitle className="text-slate-100 flex justify-between items-center">
                        <span className="flex items-center gap-2"><User size={18} className="text-indigo-400"/> {currentInvestigator?.name || "No Selection"}</span>
                        {currentInvestigator && <span className="text-xs font-mono bg-slate-800 px-2 py-1 rounded text-slate-400 border border-slate-700">ID: {currentInvestigator.id.slice(0,6)}...</span>}
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 p-6 flex flex-col gap-4 overflow-y-auto">
                    {currentInvestigator ? (
                        <>
                            <div className="flex gap-4 items-center">
                                 <div className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 shadow-xl shrink-0 ${currentInvestigator.is_mad ? 'border-red-600 animate-pulse' : 'border-indigo-400'}`}>
                                    <img src={getImageUrl(currentInvestigator)} className="w-full h-full object-cover" alt="current-avatar" />
                                 </div>
                                 <div className="flex-1 space-y-2">
                                    <div className="flex justify-between text-xs text-slate-400 uppercase font-bold tracking-wider"><span>Sanity Level</span><span>{currentInvestigator.san} / {currentInvestigator.max_san}</span></div>
                                    <Progress value={(currentInvestigator.san / currentInvestigator.max_san) * 100} className={`h-2 bg-slate-800 ${currentInvestigator.is_mad ? "[&>div]:bg-red-600" : "[&>div]:bg-indigo-500"}`}/>
                                    <div className="flex justify-between mt-2">
                                        <div className="text-[10px] bg-black/40 px-2 py-1 rounded border border-slate-700 text-yellow-400 font-mono flex items-center gap-1 shadow-md"><Fingerprint size={12}/> {currentInvestigator.exp} MIST</div>
                                        <div className="text-[10px] bg-black/40 px-2 py-1 rounded border border-slate-700 text-purple-400 font-mono flex items-center gap-1 shadow-md"><Brain size={12}/> {currentInvestigator.clues || 0} Clues</div>
                                    </div>
                                 </div>
                            </div>

                            <div className={`h-52 w-full my-2 transition-all duration-500 ${isSanDanger ? "radar-danger" : ""}`}>
                                <Radar data={radarData} options={radarOptions} />
                            </div>

                            <div className="bg-slate-950 p-3 rounded border border-slate-800 space-y-2 shadow-inner">
                                <div className="flex justify-between items-center text-xs"><span className="text-slate-500 flex items-center gap-1"><MapPin size={12}/> Depth</span><span className="text-red-400 font-mono font-bold text-sm">B{currentInvestigator.loop_depth}F</span></div>
                                <div className="flex justify-between items-center text-xs"><span className="text-slate-500 flex items-center gap-1"><Activity size={12}/> Status</span><span className={`${currentInvestigator.is_mad?"text-red-500":"text-emerald-500"} font-mono font-bold`}>{currentInvestigator.is_mad ? "CRITICAL" : "STABLE"}</span></div>
                            </div>
                        </>
                    ) : <div className="h-full flex flex-col items-center justify-center text-slate-600 gap-4"><User size={48} opacity={0.2} /><div className="text-sm">Select personnel</div></div>}
                </CardContent>
            </Card>

            {/* 右側：控制面板 */}
            <Card className="lg:col-span-4 bg-slate-900/90 border-slate-700 shadow-2xl backdrop-blur-sm h-[600px] flex flex-col">
                <CardHeader className="bg-slate-950/80 border-b border-slate-800 pb-4"><CardTitle className="text-slate-100 flex gap-2"><Gamepad2 size={18}/> Action Panel</CardTitle></CardHeader>
                <CardContent className="flex-1 p-6 flex flex-col gap-4 overflow-y-auto">
                    {currentInvestigator ? (
                        currentInvestigator.active_scenario === 0 ? (
                            <>
                                <div className="text-xs text-slate-400 mb-1 uppercase font-bold">{t.demo_section || "Demo / Test"}</div>
                                <div className="grid grid-cols-2 gap-2">
                                    <Button onClick={singleSanityCheck} disabled={loading||currentInvestigator.is_mad} variant="outline" className="h-10 border-yellow-500/30 text-yellow-300 hover:bg-yellow-950/50 text-xs">{t.act_check}</Button>
                                    <Button onClick={batchSanityCheck} disabled={loading||currentInvestigator.is_mad} className="h-10 bg-yellow-900/30 text-yellow-200 border border-yellow-800/50 hover:bg-yellow-900/60 text-xs">{t.act_batch}</Button>
                                </div>

                                <div className="border-t border-slate-800 my-1"></div>
                                <div className="text-xs text-slate-400 mb-1 uppercase font-bold">{t.exploration_section || "Exploration"}</div>
                                
                                <div className="bg-black/40 p-2 rounded border border-slate-700 mb-2 space-y-1">
                                    <div className="flex justify-between items-center text-[10px]"><span className="flex items-center gap-1 text-slate-400"><TrendingDown size={10}/> Survival</span><span className={`${survivalRate < 30 ? "text-red-500" : "text-emerald-400"} font-mono`}>{survivalRate}%</span></div>
                                    <Progress value={survivalRate} className="h-1 bg-slate-800 [&>div]:bg-slate-500"/>
                                </div>

                                <Button onClick={playQuick} disabled={loading||currentInvestigator.is_mad} className="h-16 bg-slate-800 border-slate-700 hover:bg-slate-700 flex flex-col gap-1 items-start pl-4 shadow-lg w-full mb-2"><span className="text-base text-white">{t.act_quick}</span><span className="text-[10px] text-slate-400">{t.act_quick_desc}</span></Button>
                                <Button onClick={playManualStart} disabled={loading||currentInvestigator.is_mad} className="h-16 bg-indigo-900/40 border-indigo-500/40 hover:bg-indigo-900/60 flex flex-col gap-1 items-start pl-4 shadow-lg w-full"><span className="text-base text-indigo-100">{t.act_manual}</span><span className="text-[10px] text-indigo-400">{t.act_manual_desc}</span></Button>
                                
                                <div className="border-t border-slate-800 my-1"></div>
                                <div className="text-xs text-slate-400 mb-1 uppercase font-bold">{lang === 'zh' ? '財務部' : 'Finance'}</div>
                                
                                {/* 🔥 修正文字重疊問題：根據語系顯示文字，並增加內容填充與最小寬度控制 */}
                                <Button 
                                    disabled={loading || currentInvestigator.is_mad}
                                    className="w-full bg-transparent border border-dashed border-slate-600 text-slate-400 hover:bg-slate-800 h-10 text-[11px] mb-1 px-2 overflow-hidden"
                                    onClick={() => toast.error(t.claim_error || "System Error.")}
                                >
                                    <span className="truncate">
                                        {lang === 'zh' ? '💰 領取加班費' : '💰 Claim Salary'}
                                    </span>
                                </Button>

                                <div className="text-xs text-red-400 mb-1 uppercase font-bold">{t.career_end || "Career End"}</div>
                                <Button onClick={resign} disabled={loading || currentInvestigator.is_mad} className="w-full bg-red-900/20 border border-red-900/50 hover:bg-red-900/40 text-red-400 h-8 text-[10px]">{t.act_resign_btn || "Resign"}</Button>
                            </>
                        ) : (
                            <div className="bg-black/60 p-4 rounded-lg border border-red-500/30 shadow-[0_0_30px_rgba(220,38,38,0.1)] flex-1 flex flex-col justify-center">
                                <p className="text-red-400 text-center text-base font-bold mb-4 animate-pulse">{t.warn_loop}</p>
                                <div className="space-y-2">
                                    <Button onClick={() => playManualAction(1)} disabled={loading} className="w-full h-12 bg-slate-800 hover:bg-slate-700 border border-slate-600 flex justify-between px-6"><span className="text-lg">🏃</span><span className="font-bold text-xs text-slate-200">{t.choice_run}</span></Button>
                                    <Button onClick={() => playManualAction(2)} disabled={loading} className="w-full h-12 bg-slate-800 hover:bg-slate-700 border border-slate-600 flex justify-between px-6"><span className="text-lg">🫣</span><span className="font-bold text-xs text-slate-200">{t.choice_hide}</span></Button>
                                    <Button onClick={() => playManualAction(3)} disabled={loading} className="w-full h-12 bg-purple-900/40 hover:bg-purple-900/60 border border-purple-500/50 flex justify-between px-6"><span className="text-xl">👁️</span><span className="font-bold text-xs text-purple-200">{t.choice_gaze}</span></Button>
                                </div>
                            </div>
                        )
                    ) : <div className="text-center text-slate-600 mt-10 text-sm">Waiting for selection...</div>}
                </CardContent>
            </Card>
        </div>
    );
}