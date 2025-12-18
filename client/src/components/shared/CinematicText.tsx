"use client";
import { useState, useEffect } from "react";

export function CinematicText({ lines, onComplete, isMadness = false }: { lines: string[], onComplete: () => void, isMadness?: boolean }) {
    const [index, setIndex] = useState(0);
    const [opacity, setOpacity] = useState(0);
    useEffect(() => {
        setTimeout(() => setOpacity(1), 100);
        const readTime = Math.max(2000, lines[index].length * 150);
        const timer = setTimeout(() => {
            setOpacity(0);
            setTimeout(() => { if (index < lines.length - 1) setIndex(prev => prev + 1); else onComplete(); }, 1000);
        }, readTime);
        return () => clearTimeout(timer);
    }, [index]);
    return (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-8 cursor-pointer" onClick={onComplete}>
            <div className={`text-xl md:text-2xl font-serif tracking-widest leading-loose text-center transition-opacity duration-1000 ${isMadness ? "text-red-600 font-bold animate-pulse" : "text-slate-200"}`} style={{ opacity: opacity }}>{lines[index]}</div>
            <div className="absolute bottom-10 text-slate-600 text-xs animate-pulse">(Click to skip)</div>
        </div>
    );
}