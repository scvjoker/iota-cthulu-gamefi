"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Activity, History, PieChart } from "lucide-react";
// Chart.js 元件 (注意：Chart.js 的註冊會在父層完成，這裡直接用)
import { Radar, Doughnut, Bar } from 'react-chartjs-2';

export function ResearchView() {
    const [activeTab, setActiveTab] = useState('analysis');
    
    // Data
    const radarData = {
        labels: ['STR', 'CON', 'SIZ', 'DEX', 'APP', 'INT', 'POW', 'EDU'],
        datasets: [{ label: 'Investigator Stats', data: [50, 60, 55, 70, 60, 80, 50, 75], backgroundColor: 'rgba(79, 70, 229, 0.2)', borderColor: '#4f46e5', borderWidth: 2, pointBackgroundColor: '#fff' }],
    };
    
    const evolutionData = {
        labels: ['Narrative', 'Visuals', 'Ownership', 'Transparency'],
        datasets: [
            { label: 'TRPG', data: [95, 20, 10, 60], backgroundColor: 'rgba(255, 255, 255, 0.2)' },
            { label: 'CRPG', data: [80, 90, 30, 85], backgroundColor: 'rgba(52, 211, 153, 0.5)' },
            { label: 'GameFi', data: [70, 75, 100, 100], backgroundColor: 'rgba(139, 92, 246, 0.5)' },
        ]
    };

    const tokenomicsData = {
        labels: ['P2E Pool', 'UGC Fund', 'Ecosystem', 'Liquidity', 'Team'],
        datasets: [{ data: [40, 25, 15, 10, 10], backgroundColor: ['#4f46e5', '#10b981', '#8b5cf6', '#0ea5e9', '#64748b'], borderWidth: 0 }]
    };

    // Dice Sim
    const [diceResult, setDiceResult] = useState<string>("--");
    const [checkResult, setCheckResult] = useState<string>("Ready");
    const [checkColor, setCheckColor] = useState("text-slate-500");

    const rollDice = () => {
        let steps = 0;
        const interval = setInterval(() => {
            setDiceResult(String(Math.floor(Math.random() * 100) + 1));
            steps++;
            if (steps >= 10) {
                clearInterval(interval);
                const finalRoll = Math.floor(Math.random() * 100) + 1;
                setDiceResult(String(finalRoll));
                if (finalRoll <= 5) { setCheckResult("Critical!"); setCheckColor("text-yellow-400"); }
                else if (finalRoll > 95) { setCheckResult("Fumble!"); setCheckColor("text-red-500"); }
                else if (finalRoll <= 50) { setCheckResult("Success"); setCheckColor("text-emerald-400"); }
                else { setCheckResult("Failure"); setCheckColor("text-red-400"); }
            }
        }, 50);
    };

    return (
        <div className="w-full max-w-7xl mx-auto p-4 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 p-6 rounded-xl shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-2xl font-bold shadow-inner text-white">C</div>
                        <div><h2 className="text-2xl font-bold text-white tracking-wide">Project Cthulhu-Fi</h2><p className="text-slate-400 text-sm">Research Terminal & Architecture Analysis</p></div>
                    </div>
                    <div className="flex gap-2 bg-slate-950/50 p-1 rounded-lg">
                        {['analysis', 'evolution', 'architecture'].map(sec => (
                            <button key={sec} onClick={() => setActiveTab(sec)} className={`px-4 py-2 rounded-md text-sm font-medium transition-all capitalize ${activeTab === sec ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}>{sec}</button>
                        ))}
                    </div>
                </div>

                <div className="min-h-[400px]">
                    {activeTab === 'analysis' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in">
                            <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-700">
                                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2"><Activity size={18}/> Investigator Attributes</h3>
                                <div className="h-[300px] flex items-center justify-center"><Radar data={radarData} options={{ scales: { r: { angleLines: { color: 'rgba(255,255,255,0.1)' }, grid: { color: 'rgba(255,255,255,0.1)' }, pointLabels: { color: '#cbd5e1' }, suggestedMin: 0, suggestedMax: 100 } }, plugins: { legend: { display: false } } }} /></div>
                                <p className="mt-4 text-xs text-slate-400 border-l-2 border-indigo-500 pl-2">这些數值將直接對應 NFT Metadata，作為鏈上隨機數檢定 (VRF) 的門檻值。</p>
                            </div>
                            <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-700 flex flex-col justify-center items-center">
                                <h3 className="text-lg font-semibold text-white mb-4">On-Chain VRF Simulator</h3>
                                <div className="text-6xl font-mono font-bold text-white mb-2 animate-pulse text-shadow-glow">{diceResult}</div>
                                <div className={`text-xl font-bold mb-6 ${checkColor}`}>{checkResult}</div>
                                <Button onClick={rollDice} className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold h-12 shadow-lg">Simulate Check (Target: 50)</Button>
                                <p className="mt-4 text-xs text-slate-500">模拟 IOTA <code>0x8::random</code> 模组行为</p>
                            </div>
                        </div>
                    )}
                    {activeTab === 'evolution' && (
                        <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-700 animate-in fade-in">
                            <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2"><History size={20}/> Evolution: Tabletop to Blockchain</h3>
                            <div className="h-[300px] mb-6"><Bar data={evolutionData} options={{ indexAxis: 'y', responsive: true, maintainAspectRatio: false, scales: { x: { grid: { color: 'rgba(255,255,255,0.1)' } }, y: { grid: { display: false } } } }} /></div>
                        </div>
                    )}
                    {activeTab === 'architecture' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in">
                            <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-700"><h3 className="text-xl font-bold text-violet-400 mb-4">IOTA Tech Stack</h3><ul className="space-y-3 text-sm text-slate-300"><li className="flex gap-2"><span className="font-bold text-slate-500">Frontend:</span> Next.js 14 + Tailwind + IOTA dApp Kit</li><li className="flex gap-2"><span className="font-bold text-slate-500">Contract:</span> Move Smart Contract (IOTA Rebased)</li><li className="flex gap-2"><span className="font-bold text-slate-500">Storage:</span> On-Chain Objects (Structs) + Events</li></ul></div>
                            <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-700 flex flex-col items-center"><h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2"><PieChart size={18}/> Tokenomics</h3><div className="w-64 h-64"><Doughnut data={tokenomicsData} options={{ plugins: { legend: { position: 'bottom', labels: { color: '#cbd5e1' } } } }} /></div></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}