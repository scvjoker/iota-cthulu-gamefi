"use client";

import { useState, useEffect } from "react";
import { ConnectButton } from "@iota/dapp-kit"; 
import { BookOpen, Gamepad2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BGMPlayer } from "@/components/shared/BGMPlayer";
import { GameDashboard } from "@/components/GameDashboard"; // 修正為相對路徑或別名
import { ResearchView } from "@/components/ResearchView"; 
import { Lang } from "@/utils/localization";

export default function Home() {
  const [activeTab, setActiveTab] = useState<'research' | 'simulation'>('research');
  const [lang, setLang] = useState<Lang>('zh');
  
  // 🔥 關鍵修復：解決 Hydration Mismatch
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("game_lang") as Lang;
    if (savedLang) setLang(savedLang);
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'zh' ? 'en' : 'zh';
    setLang(newLang);
    localStorage.setItem("game_lang", newLang);
  };

  // 在組件完全掛載前，渲染一個靜態背景，防止伺服器/客戶端 HTML 不一致
  if (!mounted) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      {/* 📺 CRT 掃描線 */}
      <div className="scanlines pointer-events-none"></div>

      {/* 🌌 全域動態背景 */}
      <div className="fixed inset-0 z-[-1] bg-black">
          {/* Layer 1: Research Mode (科技藍) */}
          <div 
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
                background: 'radial-gradient(circle at top, #172554 0%, #0f172a 40%, #000000 100%)',
                opacity: activeTab === 'research' ? 1 : 0
            }}
          ></div>

          {/* Layer 2: Simulation Mode (恐怖紅) */}
          <div 
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
                background: 'radial-gradient(circle at top, #450a0a 0%, #2e0202 40%, #000000 100%)',
                opacity: activeTab === 'simulation' ? 1 : 0
            }}
          ></div>

          {/* Layer 3: 網格紋理 */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', 
                backgroundSize: '40px 40px' 
            }}
          ></div>
      </div>

      <BGMPlayer />

      {/* 導航列 */}
      <nav className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/80 backdrop-blur-md px-4 py-3 flex justify-between items-center shadow-lg">
          {/* 左側 LOGO */}
          <div className="flex items-center gap-3 group cursor-default">
              <div className="w-8 h-8 bg-linear-to-br from-indigo-600 to-violet-600 rounded flex items-center justify-center font-bold text-white shadow-lg transition-transform group-hover:scale-110 uppercase text-xs">C</div>
              <span className="font-bold tracking-widest text-slate-200 hidden md:inline uppercase text-xs">Project Cthulhu-GameFi</span>
          </div>
          
          {/* 中間 Tab 切換器 */}
          <div className="flex bg-white/5 p-1 rounded-lg border border-white/10">
              <button 
                onClick={() => setActiveTab('research')} 
                className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-[10px] font-bold transition-all duration-300 ${activeTab === 'research' ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]' : 'text-slate-400 hover:text-white hover:bg-white/10'}`}
              >
                  <BookOpen size={14} /> RESEARCH
              </button>
              <button 
                onClick={() => setActiveTab('simulation')} 
                className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-[10px] font-bold transition-all duration-300 ${activeTab === 'simulation' ? 'bg-red-700 text-white shadow-[0_0_15px_rgba(185,28,28,0.4)]' : 'text-slate-400 hover:text-white hover:bg-white/10'}`}
              >
                  <Gamepad2 size={14} /> SIMULATION
              </button>
          </div>

          {/* 右側 工具列 */}
          <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={toggleLang} className="text-slate-400 hover:text-white hover:bg-white/10 h-9 px-3 border border-white/5">
                  <Globe size={16} /> <span className="ml-1 text-[10px] font-bold font-mono">{lang.toUpperCase()}</span>
              </Button>
              {/* 錢包連接按鈕容器 */}
              <div className="iota-wallet-btn-container">
                  <ConnectButton />
              </div>
          </div>
      </nav>

      {/* 主內容區 */}
      <main className="relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
            {activeTab === 'research' ? (
                <ResearchView lang={lang} />
            ) : (
                <GameDashboard lang={lang} />
            )}
          </div>
      </main>
    </div>
  );
}