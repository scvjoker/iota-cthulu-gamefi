"use client";

import { Scroll, Clock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { processLog, Lang } from "@/utils/localization"; // 記得 import processLog

export function HistorySection({ history, lang }: { history: any[], lang: Lang }) {
    return (
        <Card className="bg-slate-900/90 border-slate-700 shadow-xl backdrop-blur-sm h-[400px] flex flex-col">
            <CardHeader className="bg-slate-950/80 border-b border-slate-800 pb-3">
                <CardTitle className="text-slate-200 text-sm flex items-center gap-2">
                    <Scroll size={16} className="text-indigo-400"/> {lang === 'zh' ? '冒險日誌' : 'Adventure Logs'}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto p-0 custom-scrollbar">
                {history.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-slate-600 text-xs">
                        No records found.
                    </div>
                ) : (
                    <div className="divide-y divide-slate-800">
                        {history.map((entry: any, i: number) => (
                            <div key={i} className="p-4 hover:bg-slate-800/30 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex flex-col">
                                        <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded w-fit ${
                                            entry.outcome === 'Madness' ? 'bg-red-900/30 text-red-400' : 
                                            entry.outcome === 'Escaped' ? 'bg-emerald-900/30 text-emerald-400' : 
                                            entry.outcome === 'Resigned' ? 'bg-gray-700 text-gray-300' :
                                            'bg-indigo-900/30 text-indigo-300'
                                        }`}>
                                            {entry.outcome}
                                        </span>
                                        {/* 🔥 顯示角色名稱 */}
                                        {entry.investigatorName && (
                                            <span className="text-[10px] text-slate-500 mt-1 font-mono">
                                                {entry.investigatorName}
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-[10px] text-slate-600 flex items-center gap-1">
                                        <Clock size={10}/> {new Date(entry.timestamp).toLocaleTimeString()}
                                    </span>
                                </div>
                                <div className="space-y-1">
                                    {entry.logs.slice(0, 3).map((log: string, j: number) => (
                                        <p key={j} className="text-xs text-slate-400 font-mono line-clamp-1">
                                            {processLog(log, lang)}
                                        </p>
                                    ))}
                                    {entry.logs.length > 3 && <p className="text-[10px] text-slate-600 italic">... +{entry.logs.length - 3} more</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}