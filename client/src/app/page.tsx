"use client";

import { ConnectButton } from "@iota/dapp-kit";
import { GameDashboard } from "@/components/GameDashboard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 to-black p-4">
      {/* 頁首導航列 */}
      <nav className="flex justify-between items-center max-w-4xl mx-auto py-6 border-b border-slate-800 mb-8">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🐙</span>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            IOTA TRPG
          </h1>
        </div>
        <ConnectButton />
      </nav>

      {/* 遊戲主區塊 */}
      <GameDashboard />

      {/* 頁尾 */}
      <footer className="text-center text-slate-600 mt-20 text-sm">
        Powered by IOTA Move Rebased & Next.js
      </footer>
    </main>
  );
}