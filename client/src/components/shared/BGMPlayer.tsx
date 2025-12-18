"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

export function BGMPlayer() {
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    useEffect(() => {
        const tryPlay = async () => { if (audioRef.current) { audioRef.current.volume = 0.3; try { await audioRef.current.play(); } catch (e) { setIsPlaying(false); const unlock = () => { if(audioRef.current){audioRef.current.play(); setIsPlaying(true); document.removeEventListener('click', unlock);} }; document.addEventListener('click', unlock); } } };
        tryPlay();
    }, []);
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <audio ref={audioRef} src="/bgm.mp3" loop />
            <Button onClick={() => {if(audioRef.current){ if(isPlaying){audioRef.current.pause();setIsPlaying(false)}else{audioRef.current.play();setIsPlaying(true)} }}} variant="outline" className={`rounded-full w-12 h-12 p-0 shadow-lg border-2 transition-all ${isPlaying ? "bg-indigo-600 border-indigo-400 text-white animate-pulse" : "bg-slate-900 border-slate-600 text-slate-400"}`}>
                {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </Button>
        </div>
    );
}