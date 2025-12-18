"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Activity, History, PieChart, Layers, Dice5 } from "lucide-react";
import { Lang } from "@/utils/localization"; 

// --- 🔥 Chart.js 修正：必須在這裡引入並註冊 ---
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement
} from 'chart.js';
import { Radar, Doughnut, Bar } from 'react-chartjs-2';

// 註冊所有需要的圖表元件
ChartJS.register(
  RadialLinearScale, // 雷達圖必須
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement,      // 圓餅圖必須
  CategoryScale,   // 長條圖必須
  LinearScale,
  BarElement
);

// --- 📚 研究報告專用字典 ---
const RESEARCH_TEXTS = {
    zh: {
        tabs: { analysis: "源頭分析", evolution: "演化脈絡", architecture: "Web3 架構" },
        analysis_title: "來源分析：《人格解體》與 TRPG 系統",
        analysis_desc: "本區塊拆解核心機制。要進行 Web3 轉化，必須先量化「角色屬性」與「隨機性檢定」，這是鏈上邏輯的基礎。",
        chart_radar_title: "調查員屬性模型",
        chart_radar_label: "調查員數值 (偵探模版)",
        radar_labels: ['STR 力量', 'CON 體質', 'SIZ 體型', 'DEX 敏捷', 'APP 外貌', 'INT 智力', 'POW 意志', 'EDU 教育'],
        analysis_insight: "GameFi 觀點：這些數值 (STR, INT, SAN) 將成為 NFT 的 Metadata。在 IOTA EVM 上，這些屬性不可篡改，直接影響智能合約的檢定條件。",
        dice_title: "D100 檢定機制模擬",
        dice_desc: "核心玩法在於「技能檢定」。系統生成 1-100 的隨機數，若小於技能值則成功。鏈上需透過 0x8::random 模組實現。",
        dice_target: "目標技能值",
        dice_btn: "投擲 D100",
        dice_status: { ready: "準備檢定", crit: "大成功! (Critical)", fumble: "大失敗! (Fumble)", extreme: "極難成功 (Extreme)", hard: "困難成功 (Hard)", success: "成功 (Success)", fail: "失敗 (Failure)" },
        evo_title: "演化脈絡：從桌面到區塊鏈",
        evo_desc: "GameFi 不僅是玩賺，而是解決 TRPG「信任成本」與 CRPG「資產封閉」的問題。",
        evo_stages: [
            { title: "TRPG 時代", desc: ["極高自由度 (想像力)", "依賴人類主持 (KP)", "信任機制薄弱"] },
            { title: "CRPG 時代", desc: ["視覺化體驗 (如人格解體)", "自動化計算 (黑盒)", "資產無法帶出遊戲"] },
            { title: "GameFi 時代", desc: ["規則怪談化 (合約即規則)", "資產互通 (NFT Avatar)", "IOTA EVM 公正檢定"] }
        ],
        evo_chart_labels: ['敘事自由度', '視覺表現', '資產所有權', '規則透明度'],
        evo_datasets: ['TRPG (桌上)', 'CRPG (人格解體)', 'GameFi (Web3)'],
        arch_title: "Web3 系統架構：IOTA EVM",
        arch_desc: "針對「規則怪談」GameFi 的技術選型。以 IOTA EVM 為主，Next.js 為前端。",
        stack_title: "技術堆疊 (Tech Stack)",
        stack_layers: [
            { name: "應用層 (Next.js)", desc: "React Client: UI 渲染、錢包連接、視覺反饋" },
            { name: "邏輯層 (Contract)", desc: "Move Smart Contracts: Avatar NFT, 規則引擎, 隨機數生成" },
            { name: "數據層 (Storage)", desc: "On-Chain Objects: 角色狀態、事件紀錄 (Events)" }
        ],
        token_title: "生態系價值流動",
        token_labels: ['玩家獎勵池 (P2E)', '創作者基金 (UGC)', '生態系發展', '流動性提供', '團隊與早期投資'],
        code_comment: "// 案例研究：規則怪談的合約邏輯 (Move)"
    },
    en: {
        tabs: { analysis: "Source Analysis", evolution: "Evolution", architecture: "Web3 Arch" },
        analysis_title: "Source Analysis: Depersonalization & TRPG",
        analysis_desc: "Deconstructing core mechanics. To adapt for Web3, we must quantify 'Attributes' and 'RNG Checks', forming the basis of on-chain logic.",
        chart_radar_title: "Investigator Attribute Model",
        chart_radar_label: "Stats (Detective Template)",
        radar_labels: ['STR', 'CON', 'SIZ', 'DEX', 'APP', 'INT', 'POW', 'EDU'],
        analysis_insight: "GameFi Insight: These stats (STR, INT, SAN) become NFT Metadata. On IOTA EVM, they are immutable and directly influence smart contract checks.",
        dice_title: "D100 Check Mechanism",
        dice_desc: "Core gameplay relies on 'Skill Checks'. RNG 1-100; roll under skill to succeed. On-chain implementation requires 0x8::random.",
        dice_target: "Target Skill",
        dice_btn: "Roll D100",
        dice_status: { ready: "Ready to Roll", crit: "Critical Success!", fumble: "Fumble!", extreme: "Extreme Success", hard: "Hard Success", success: "Success", fail: "Failure" },
        evo_title: "Evolution: Tabletop to Blockchain",
        evo_desc: "GameFi isn't just P2E; it solves TRPG's 'Trust Cost' and CRPG's 'Closed Assets' issues.",
        evo_stages: [
            { title: "TRPG Era", desc: ["High Freedom (Imagination)", "Relies on Human Host (KP)", "Weak Trust Mechanism"] },
            { title: "CRPG Era", desc: ["Visualized Experience", "Automated calc (Blackbox)", "Assets locked in-game"] },
            { title: "GameFi Era", desc: ["Contract as Rule (Weird)", "Interoperable Assets (NFT)", "Fair On-Chain Verification"] }
        ],
        evo_chart_labels: ['Narrative Freedom', 'Visuals', 'Asset Ownership', 'Transparency'],
        evo_datasets: ['TRPG (Tabletop)', 'CRPG (Digital)', 'GameFi (Web3)'],
        arch_title: "Web3 Architecture: IOTA EVM",
        arch_desc: "Tech stack selection for 'Rules of Weird' GameFi. Based on IOTA EVM and Next.js.",
        stack_title: "Tech Stack",
        stack_layers: [
            { name: "App Layer (Next.js)", desc: "React Client: Rendering, Wallet Connect, Visual Feedback" },
            { name: "Logic Layer (Contract)", desc: "Move Smart Contracts: Avatar NFT, Rule Engine, RNG" },
            { name: "Data Layer (Storage)", desc: "On-Chain Objects: Character State, Event Logs" }
        ],
        token_title: "Ecosystem Value Flow",
        token_labels: ['P2E Pool', 'UGC Fund', 'Ecosystem Growth', 'Liquidity', 'Team & Early Investors'],
        code_comment: "// Case Study: Rule Contract Logic (Move)"
    }
};

export function ResearchView({ lang }: { lang: Lang }) {
    // 安全檢查：如果 lang 沒傳進來，預設為 'zh'
    const safeLang = lang || 'zh';
    const activeTexts = RESEARCH_TEXTS[safeLang]; 
    const [activeSection, setActiveSection] = useState('analysis');
    
    // 1. 雷達圖數據
    const radarData = {
        labels: activeTexts.radar_labels,
        datasets: [{
            label: activeTexts.chart_radar_label,
            data: [50, 60, 55, 70, 60, 80, 50, 75],
            backgroundColor: 'rgba(79, 70, 229, 0.2)',
            borderColor: '#4f46e5',
            borderWidth: 2,
            pointBackgroundColor: '#fff',
        }],
    };
    
    // 2. 長條圖數據
    const evolutionData = {
        labels: activeTexts.evo_chart_labels,
        datasets: [
            { label: activeTexts.evo_datasets[0], data: [95, 20, 10, 60], backgroundColor: 'rgba(255, 255, 255, 0.2)' },
            { label: activeTexts.evo_datasets[1], data: [70, 90, 30, 80], backgroundColor: 'rgba(52, 211, 153, 0.5)' },
            { label: activeTexts.evo_datasets[2], data: [60, 75, 100, 100], backgroundColor: 'rgba(139, 92, 246, 0.5)' },
        ]
    };

    // 3. 圓餅圖數據
    const tokenomicsData = {
        labels: activeTexts.token_labels,
        datasets: [{
            data: [40, 25, 15, 10, 10],
            backgroundColor: ['#4f46e5', '#10b981', '#8b5cf6', '#0ea5e9', '#64748b'],
            borderWidth: 0
        }]
    };

    // 骰子模擬器
    const [diceResult, setDiceResult] = useState<string>("--");
    const [checkResult, setCheckResult] = useState<string>(activeTexts.dice_status.ready);
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
                
                if (finalRoll === 1) { setCheckResult(activeTexts.dice_status.crit); setCheckColor("text-yellow-400"); }
                else if (finalRoll === 100) { setCheckResult(activeTexts.dice_status.fumble); setCheckColor("text-red-500"); }
                else if (finalRoll <= 10) { setCheckResult(activeTexts.dice_status.extreme); setCheckColor("text-indigo-300"); } 
                else if (finalRoll <= 25) { setCheckResult(activeTexts.dice_status.hard); setCheckColor("text-indigo-400"); } 
                else if (finalRoll <= 50) { setCheckResult(activeTexts.dice_status.success); setCheckColor("text-emerald-400"); }
                else { setCheckResult(activeTexts.dice_status.fail); setCheckColor("text-red-400"); }
            }
        }, 50);
    };

    return (
        <div className="w-full max-w-7xl mx-auto p-4 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Area */}
            <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 p-6 rounded-xl shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-2xl font-bold shadow-inner text-white">C</div>
                        <div>
                            <h2 className="text-2xl font-bold text-white tracking-wide">Project Cthulhu-GameFi</h2>
                            <p className="text-slate-400 text-sm">Research Terminal & Architecture Analysis</p>
                        </div>
                    </div>
                    {/* 分頁按鈕 */}
                    <div className="flex gap-2 bg-slate-950/50 p-1 rounded-lg border border-slate-800">
                        <button onClick={() => setActiveSection('analysis')} className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeSection === 'analysis' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}>{activeTexts.tabs.analysis}</button>
                        <button onClick={() => setActiveSection('evolution')} className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeSection === 'evolution' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}>{activeTexts.tabs.evolution}</button>
                        <button onClick={() => setActiveSection('architecture')} className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeSection === 'architecture' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}>{activeTexts.tabs.architecture}</button>
                    </div>
                </div>

                {/* 內容顯示區 */}
                <div className="min-h-[400px]">
                    
                    {/* --- 1. 源頭分析 --- */}
                    {activeSection === 'analysis' && (
                        <div className="space-y-6 animate-in fade-in">
                            <div className="border-l-4 border-indigo-500 pl-4 mb-4">
                                <h3 className="text-xl font-bold text-white">{activeTexts.analysis_title}</h3>
                                <p className="text-sm text-slate-400 mt-1">{activeTexts.analysis_desc}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-700">
                                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2"><Activity size={18}/> {activeTexts.chart_radar_title}</h3>
                                    <div className="h-[300px] flex items-center justify-center">
                                        <Radar data={radarData} options={{ scales: { r: { angleLines: { color: 'rgba(255,255,255,0.1)' }, grid: { color: 'rgba(255,255,255,0.1)' }, pointLabels: { color: '#cbd5e1', font: { size: 12 } }, suggestedMin: 0, suggestedMax: 100 } }, plugins: { legend: { display: false } } }} />
                                    </div>
                                    <p className="mt-4 text-xs text-slate-400 border-l-2 border-indigo-500 pl-2 bg-indigo-900/10 p-2 rounded">
                                        {activeTexts.analysis_insight}
                                    </p>
                                </div>
                                
                                <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-700 flex flex-col justify-center items-center relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-10"><Dice5 size={100} /></div>
                                    <h3 className="text-lg font-semibold text-white mb-2">{activeTexts.dice_title}</h3>
                                    <p className="text-xs text-slate-500 mb-6 text-center px-4">{activeTexts.dice_desc}</p>
                                    
                                    <div className="text-6xl font-mono font-bold text-white mb-2 animate-pulse text-shadow-glow">{diceResult}</div>
                                    <div className={`text-xl font-bold mb-6 ${checkColor}`}>{checkResult}</div>
                                    
                                    <div className="w-full px-10 mb-4">
                                        <div className="flex justify-between text-xs text-slate-400 mb-1"><span>{activeTexts.dice_target}</span><span className="text-white font-bold">50</span></div>
                                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden"><div className="h-full bg-indigo-500 w-1/2"></div></div>
                                    </div>

                                    <Button onClick={rollDice} className="w-full max-w-xs bg-indigo-600 hover:bg-indigo-500 text-white font-bold h-12 shadow-lg shadow-indigo-500/20">
                                        {activeTexts.dice_btn}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* --- 2. 演化脈絡 --- */}
                    {activeSection === 'evolution' && (
                        <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-700 animate-in fade-in space-y-6">
                            <div className="border-l-4 border-emerald-500 pl-4">
                                <h3 className="text-xl font-bold text-white">{activeTexts.evo_title}</h3>
                                <p className="text-sm text-slate-400 mt-1">{activeTexts.evo_desc}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                {activeTexts.evo_stages.map((stage, idx) => (
                                    <div key={idx} className="p-4 bg-slate-900 rounded border border-slate-700 hover:border-emerald-500 transition-colors group">
                                        <div className="text-4xl font-serif text-slate-700 font-bold mb-2 group-hover:text-emerald-500/50 transition-colors">{["I", "II", "III"][idx]}</div>
                                        <strong className="text-emerald-400 block mb-2 text-lg">{stage.title}</strong>
                                        <ul className="text-slate-400 space-y-1 list-disc list-inside">
                                            {stage.desc.map((d, i) => <li key={i}>{d}</li>)}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <div className="h-[300px]">
                                <Bar data={evolutionData} options={{ indexAxis: 'y', responsive: true, maintainAspectRatio: false, scales: { x: { grid: { color: 'rgba(255,255,255,0.1)' } }, y: { grid: { display: false }, ticks: { color: '#cbd5e1' } } }, plugins: { legend: { labels: { color: '#cbd5e1' } } } }} />
                            </div>
                        </div>
                    )}

                    {/* --- 3. Web3 架構 --- */}
                    {activeSection === 'architecture' && (
                        <div className="space-y-6 animate-in fade-in">
                            <div className="border-l-4 border-violet-500 pl-4">
                                <h3 className="text-xl font-bold text-white">{activeTexts.arch_title}</h3>
                                <p className="text-sm text-slate-400 mt-1">{activeTexts.arch_desc}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Stack Diagram */}
                                <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-700">
                                    <h3 className="text-lg font-bold text-violet-400 mb-4 flex items-center gap-2"><Layers size={18}/> {activeTexts.stack_title}</h3>
                                    <div className="space-y-4">
                                        {activeTexts.stack_layers.map((layer, idx) => (
                                            <div key={idx} className="flex items-center">
                                                <div className="w-24 text-right text-xs font-bold text-slate-500 mr-4">{layer.name.split(" ")[0]}<br/>{layer.name.split(" ")[1]}</div>
                                                <div className={`flex-1 bg-slate-800 p-3 rounded border-l-4 ${idx===0?'border-blue-500':idx===1?'border-violet-500':'border-emerald-500'} text-sm text-slate-200 shadow-lg relative`}>
                                                    <div className="font-bold text-blue-400">{layer.name}</div>
                                                    <div className="text-xs text-slate-400">{layer.desc}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tokenomics */}
                                <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-700 flex flex-col items-center">
                                    <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2"><PieChart size={18}/> {activeTexts.token_title}</h3>
                                    <div className="w-64 h-64">
                                        <Doughnut data={tokenomicsData} options={{ plugins: { legend: { position: 'bottom', labels: { color: '#cbd5e1', font: { size: 11 } } } } }} />
                                    </div>
                                </div>
                            </div>

                            {/* Code Snippet */}
                            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 font-mono text-xs overflow-x-auto shadow-inner">
                                <div className="text-slate-500 mb-2">{activeTexts.code_comment}</div>
                                <div className="text-purple-400">public fun <span className="text-blue-400">interact_with_door</span>(player: &mut Investigator, door_color: String) &#123;</div>
                                <div className="pl-4 text-slate-300"><span className="text-slate-500">// Rule: Red door sets SAN to 0</span></div>
                                <div className="pl-4 text-purple-400">if (door_color == b"RED") &#123;</div>
                                <div className="pl-8 text-slate-300">player.san = 0;</div>
                                <div className="pl-8 text-slate-300">player.is_mad = true;</div>
                                <div className="pl-8 text-yellow-400">event::emit(MadnessEvent &#123; reason: b"VIOLATED_RULE_1" &#125;);</div>
                                <div className="pl-4 text-purple-400">&#125; else &#123;</div>
                                <div className="pl-8 text-slate-300">player.exp = player.exp + 10;</div>
                                <div className="pl-4 text-purple-400">&#125;</div>
                                <div className="text-purple-400">&#125;</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}