module.exports = [
"[project]/iota-cthulhu-gamefi/client/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/iota-cthulhu-gamefi/client/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        "data-variant": variant,
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/iota-cthulhu-gamefi/client/src/components/shared/BGMPlayer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BGMPlayer",
    ()=>BGMPlayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-ssr] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/volume-x.js [app-ssr] (ecmascript) <export default as VolumeX>");
"use client";
;
;
;
;
function BGMPlayer() {
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const tryPlay = async ()=>{
            if (audioRef.current) {
                audioRef.current.volume = 0.3;
                try {
                    await audioRef.current.play();
                } catch (e) {
                    setIsPlaying(false);
                    const unlock = ()=>{
                        if (audioRef.current) {
                            audioRef.current.play();
                            setIsPlaying(true);
                            document.removeEventListener('click', unlock);
                        }
                    };
                    document.addEventListener('click', unlock);
                }
            }
        };
        tryPlay();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-6 right-6 z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: audioRef,
                src: "/bgm.mp3",
                loop: true
            }, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/shared/BGMPlayer.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                onClick: ()=>{
                    if (audioRef.current) {
                        if (isPlaying) {
                            audioRef.current.pause();
                            setIsPlaying(false);
                        } else {
                            audioRef.current.play();
                            setIsPlaying(true);
                        }
                    }
                },
                variant: "outline",
                className: `rounded-full w-12 h-12 p-0 shadow-lg border-2 transition-all ${isPlaying ? "bg-indigo-600 border-indigo-400 text-white animate-pulse" : "bg-slate-900 border-slate-600 text-slate-400"}`,
                children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/shared/BGMPlayer.tsx",
                    lineNumber: 17,
                    columnNumber: 30
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/shared/BGMPlayer.tsx",
                    lineNumber: 17,
                    columnNumber: 54
                }, this)
            }, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/shared/BGMPlayer.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/shared/BGMPlayer.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
}),
"[project]/iota-cthulhu-gamefi/client/src/utils/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 這是剛剛部署得到的 Package ID
__turbopack_context__.s([
    "MODULE_NAME",
    ()=>MODULE_NAME,
    "PACKAGE_ID",
    ()=>PACKAGE_ID,
    "RANDOM_OBJECT_ID",
    ()=>RANDOM_OBJECT_ID
]);
const PACKAGE_ID = "0xa42fd9753810179c2d4dee5b2d3b832eefd5769658ea5d1a333247e68d983af2";
const MODULE_NAME = "investigator";
const RANDOM_OBJECT_ID = "0x8";
}),
"[project]/iota-cthulhu-gamefi/client/src/utils/localization.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TEXTS",
    ()=>TEXTS,
    "processLog",
    ()=>processLog
]);
const TEXTS = {
    zh: {
        title: "IOTA TRPG：逃離血汗辦公大樓",
        subtitle: "基於 IOTA 區塊鏈的無限加班模擬器",
        recruit_btn: "+ 招募新社畜",
        list_title: "👥 員工名單",
        status_mad: "💀 過勞死",
        status_sane: "SAN值",
        // UI
        demo_section: "🛠️ 演示 / 壓力測試",
        exploration_section: "🔦 探索行動",
        career_end: "🚪 職涯終點",
        act_resign_btn: "💔 提交離職申請 (銷毀NFT)",
        act_check: "🎲 單次檢定",
        act_batch: "🔥 瘋狂連發 (x3)",
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
        claim_btn: "💰 領取加班費 (Claim Salary)",
        claim_error: "🚫 系統錯誤：公司財務狀況不佳，暫停出金。",
        cert_title: "離職證明書",
        cert_content: "茲證明員工",
        cert_content2: "於無限迴廊任職期間，雖飽受精神折磨但仍勉強倖存。",
        cert_stat_depth: "最終深度",
        cert_stat_mist: "累積 MIST",
        cert_stamp: "准予離職",
        cert_dept: "IOTA 人資部",
        cert_close: "收下證書 (關閉)",
        intro_lines: [
            "你是一名可憐加班的社畜，不知不覺已經到深夜......",
            "當你回過神時，公司已經停電。",
            "電梯毫無反應，你只好推開厚重的安全門，走向有綠色逃生標誌的樓梯間。",
            "角落散落著一些遺落的方形薄款包裝袋。",
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
        demo_section: "🛠️ Demo / Stress Test",
        exploration_section: "🔦 Exploration",
        career_end: "🚪 Career End",
        act_resign_btn: "💔 Submit Resignation (Burn NFT)",
        act_check: "🎲 Single Check",
        act_batch: "🔥 Batch Check (x3)",
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
        claim_btn: "💰 Claim Salary",
        claim_error: "🚫 System Error: Corporate insolvency. Withdrawals suspended.",
        // 🔥 New: Certificate Texts
        cert_title: "Certificate of Release",
        cert_content: "This certifies that Staff",
        cert_content2: "has survived the infinite stairwell (barely).",
        cert_stat_depth: "Final Depth",
        cert_stat_mist: "Total MIST",
        cert_stamp: "APPROVED",
        cert_dept: "IOTA HR Dept.",
        cert_close: "Accept & Close",
        intro_lines: [
            "You are a poor corporate slave, working overtime late into the night...",
            "When you snap out of it, the power is out.",
            "The elevator is dead. You push open the heavy safety door to the stairwell.",
            "Empty condom wrappers are scattered in the corner.",
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
// 🔥 修正後的 Log 映射表 (完全對應合約 V6.1 的字串)
const LOG_MAP = {
    // --- Demo / Resign (來自 resign, sanity_check, batch_sanity_check) ---
    "Single Check Initiated...": "🎲 你遭受主管的壓力測試...",
    "Failed! SAN damaged.": "❌定失敗！理智受損。",
    "Passed! You remain calm.": "✅ 檢定通過！你保持了冷靜。",
    "BATCH CHECK (x3) START": "🔥 你遭受主管的高強度PUA...",
    "-[Fail] SAN -2": "⚠️ [失敗] 精神受創 (SAN -2)",
    "-[Pass] Safe": "🛡️ [通過] 安全過關",
    "Result: MADNESS CONSUMED YOU.": "💀 結果：過勞死。你撐不住了。",
    "Result: You survived the barrage.": "✨ 結果：你撐過了這波專案死線。",
    "Resigned (SBT Minted)": "📝 離職手續已完成 (獲得紀念章 SBT)",
    // --- Quick Mode (來自 play_stairs_quick) ---
    "=== Quick Investigation ===": "📜【快速調查報告】",
    "Exhaustion... Your mind crumbles from fatigue.": "💤 精神耗弱... 你的肝在哀號，心智崩潰。",
    "> Rushed down successfully.": "🏃 成功衝下樓梯。",
    "> Stumbled! (-5 SAN)": "🤕 跌倒了！(SAN -5)",
    "Deeper... (Depth +1)": "↘️ 越來越深... (深度 +1)",
    // --- Manual Mode (來自 manual_start, manual_resolve) ---
    // 這裡就是你原本對不上的地方，合約把字串縮短了
    "You step into the stairwell...": "🚪 你踏入了樓梯間...",
    "The air changes. What do you do?": "空氣變了。你要做什麼？",
    "Success. Deeper.": "✅ 成功。你前往了下一層。",
    "FAILURE.": "❌ 失敗。黑暗吞噬了你。",
    // --- Visions (來自 get_realm_vision) ---
    // 合約也縮短了這邊的描述
    "[Vision: Human Realm] Rust and dust.": "👁️【幻覺】充滿鐵鏽與灰塵的味道。",
    "[Vision: Deva Realm] Golden light.": "👁️【幻覺】聖光！聖光降臨啊啊啊",
    "[Vision: Asura Realm] Walls bleeding.": "👁️【幻覺】牆壁正在滲血。",
    "[Vision: Hungry Ghost Realm] Hands grabbing you.": "👁️【幻覺】無數隻手試圖抓住你。",
    "[Vision: Hell Realm] Absolute void.": "👁️【幻覺】絕對的虛無。",
    // 🔥🔥🔥 新增：前端模擬的離職 Log (就是你剛剛看到的那幾句) 🔥🔥🔥
    "=== HR Department ===": "🏢【人資部門通知】",
    "Resignation letter received.": "✅ 已收到您的離職申請書。",
    "NFT Access Card destroyed.": "💳 員工識別證 (NFT) 已銷毀。",
    "You are free.": "🕊️ 你自由了。(記得繳回公司筆電)"
};
const processLog = (text, lang)=>{
    if (!text) return "";
    if (lang === 'en') {
        return text.replace("=== Quick Investigation ===", "📜 [Quick Report]").replace("Escaped", "Escaped 🚪").replace("Looping", "Looping 🔄").replace("MADNESS", "MENTAL BREAKDOWN 💀");
    }
    // 1. 精確查表 (優先)
    if (LOG_MAP[text]) return LOG_MAP[text];
    // 2. 模糊/變數處理
    let t = text;
    // 結局處理 (因為合約這些是 hardcoded 但可能會混在其他 log 裡)
    if (t.includes("Result: Mind Shattered")) return "💀 結果：心智破碎。";
    if (t.includes("Result: You found the exit")) return "🎉 結果：你找到了出口！";
    if (t.includes("It was a trap.")) return "🔄 那是陷阱。你又回到了原點。";
    // 通用替換
    t = t.replace("Escaped", "打卡下班").replace("Looping", "無限加班").replace("MADNESS", "過勞死(精神崩潰)").replace("Staff #", "員工編號 #");
    return t;
};
}),
"[project]/iota-cthulhu-gamefi/client/src/components/shared/CinematicText.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CinematicText",
    ()=>CinematicText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function CinematicText({ lines, onComplete, isMadness = false }) {
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [opacity, setOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setTimeout(()=>setOpacity(1), 100);
        const readTime = Math.max(2000, lines[index].length * 150);
        const timer = setTimeout(()=>{
            setOpacity(0);
            setTimeout(()=>{
                if (index < lines.length - 1) setIndex((prev)=>prev + 1);
                else onComplete();
            }, 1000);
        }, readTime);
        return ()=>clearTimeout(timer);
    }, [
        index
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-8 cursor-pointer",
        onClick: onComplete,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `text-xl md:text-2xl font-serif tracking-widest leading-loose text-center transition-opacity duration-1000 ${isMadness ? "text-red-600 font-bold animate-pulse" : "text-slate-200"}`,
                style: {
                    opacity: opacity
                },
                children: lines[index]
            }, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/shared/CinematicText.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-10 text-slate-600 text-xs animate-pulse",
                children: "(Click to skip)"
            }, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/shared/CinematicText.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/shared/CinematicText.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
}),
"[project]/iota-cthulhu-gamefi/client/src/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HistorySection",
    ()=>HistorySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scroll$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/scroll.js [app-ssr] (ecmascript) <export default as Scroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$localization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/utils/localization.ts [app-ssr] (ecmascript)"); // 記得 import processLog
"use client";
;
;
;
;
function HistorySection({ history, lang }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: "bg-slate-900/90 border-slate-700 shadow-xl backdrop-blur-sm h-[400px] flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "bg-slate-950/80 border-b border-slate-800 pb-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-slate-200 text-sm flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scroll$3e$__["Scroll"], {
                            size: 16,
                            className: "text-indigo-400"
                        }, void 0, false, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                            lineNumber: 12,
                            columnNumber: 21
                        }, this),
                        " ",
                        lang === 'zh' ? '冒險日誌' : 'Adventure Logs'
                    ]
                }, void 0, true, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                    lineNumber: 11,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "flex-1 overflow-y-auto p-0 custom-scrollbar",
                children: history.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full flex flex-col items-center justify-center text-slate-600 text-xs",
                    children: "No records found."
                }, void 0, false, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                    lineNumber: 17,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "divide-y divide-slate-800",
                    children: history.map((entry, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 hover:bg-slate-800/30 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-start mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded w-fit ${entry.outcome === 'Madness' ? 'bg-red-900/30 text-red-400' : entry.outcome === 'Escaped' ? 'bg-emerald-900/30 text-emerald-400' : entry.outcome === 'Resigned' ? 'bg-gray-700 text-gray-300' : 'bg-indigo-900/30 text-indigo-300'}`,
                                                    children: entry.outcome
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 41
                                                }, this),
                                                entry.investigatorName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-slate-500 mt-1 font-mono",
                                                    children: entry.investigatorName
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                                            lineNumber: 25,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-slate-600 flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    size: 10
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 41
                                                }, this),
                                                " ",
                                                new Date(entry.timestamp).toLocaleTimeString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                                            lineNumber: 41,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                                    lineNumber: 24,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        entry.logs.slice(0, 3).map((log, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400 font-mono line-clamp-1",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$localization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["processLog"])(log, lang)
                                            }, j, false, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                                                lineNumber: 47,
                                                columnNumber: 41
                                            }, this)),
                                        entry.logs.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-slate-600 italic",
                                            children: [
                                                "... +",
                                                entry.logs.length - 3,
                                                " more"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                                            lineNumber: 51,
                                            columnNumber: 63
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                                    lineNumber: 45,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                            lineNumber: 23,
                            columnNumber: 29
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                    lineNumber: 21,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
}),
"[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeaderboardSection",
    ()=>LeaderboardSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/utils/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$localization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/utils/localization.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function LeaderboardSection({ client, lang }) {
    const [scores, setScores] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const fetchLeaderboard = async ()=>{
        try {
            const events = await client.queryEvents({
                query: {
                    MoveModule: {
                        package: __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PACKAGE_ID"],
                        module: __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODULE_NAME"]
                    }
                }
            });
            const rawScores = events.data.filter((e)=>e.type.includes("ScoreEvent")).map((e)=>e.parsedJson).sort((a, b)=>Number(b.depth) - Number(a.depth)).slice(0, 10);
            setScores(rawScores);
        } catch (e) {}
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchLeaderboard();
    }, []);
    const handleClaim = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$localization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXTS"][lang].claim_error, {
            duration: 4000,
            style: {
                border: '1px solid #ef4444',
                background: '#220000',
                color: '#fca5a5'
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: "mt-6 bg-slate-900/80 border-amber-600/30 backdrop-blur-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "flex justify-between text-amber-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
                                    lineNumber: 28,
                                    columnNumber: 113
                                }, this),
                                " ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$localization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXTS"][lang].rank_title
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
                            lineNumber: 28,
                            columnNumber: 84
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: handleClaim,
                                    className: "h-6 text-xs bg-yellow-900/30 border-yellow-600/50 text-yellow-400 hover:bg-yellow-900/60",
                                    children: [
                                        "💰 ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$localization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXTS"][lang].claim_btn
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
                                    lineNumber: 28,
                                    columnNumber: 202
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: fetchLeaderboard,
                                    children: "🔄"
                                }, void 0, false, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
                                    lineNumber: 28,
                                    columnNumber: 396
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
                            lineNumber: 28,
                            columnNumber: 174
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
                    lineNumber: 28,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: scores.map((score, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center bg-black/40 p-2 px-4 rounded border border-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold font-mono text-yellow-400",
                                            children: [
                                                "#",
                                                idx + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
                                            lineNumber: 29,
                                            columnNumber: 237
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-200",
                                            children: score.name
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
                                            lineNumber: 29,
                                            columnNumber: 306
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
                                    lineNumber: 29,
                                    columnNumber: 196
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-xs px-2 py-0.5 rounded ${score.outcome === "Madness" ? "bg-red-900/50 text-red-400" : "bg-green-900/50 text-green-400"}`,
                                            children: score.outcome === "Madness" ? lang === 'zh' ? "💀 過勞" : "💀 Dead" : lang === 'zh' ? "🚪 下班" : "🚪 Out"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
                                            lineNumber: 29,
                                            columnNumber: 405
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-amber-500 font-bold",
                                            children: [
                                                score.depth,
                                                " F"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
                                            lineNumber: 29,
                                            columnNumber: 647
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
                                    lineNumber: 29,
                                    columnNumber: 364
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
                            lineNumber: 29,
                            columnNumber: 82
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
                    lineNumber: 29,
                    columnNumber: 26
                }, this)
            }, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
        lineNumber: 27,
        columnNumber: 9
    }, this);
}
}),
"[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameDashboard",
    ()=>GameDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/dapp-kit/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/Transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/utils/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$localization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/utils/localization.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$shared$2f$CinematicText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/shared/CinematicText.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$game$2f$HistorySection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$game$2f$LeaderboardSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/game/SimulationView'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stamp$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/stamp.js [app-ssr] (ecmascript) <export default as Stamp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/chart.js/dist/chart.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RadialLinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Filler"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"]);
// --- AdventureOverlay (保持不變) ---
function AdventureOverlay({ logs, onClose, outcome, lang }) {
    const [displayLogs, setDisplayLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const bottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (currentIndex < logs.length) {
            const timer = setTimeout(()=>{
                setDisplayLogs((prev)=>[
                        ...prev,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$localization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["processLog"])(logs[currentIndex], lang)
                    ]);
                setCurrentIndex((prev)=>prev + 1);
            }, 800);
            return ()=>clearTimeout(timer);
        }
    }, [
        currentIndex,
        logs
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        displayLogs
    ]);
    const isFinished = currentIndex >= logs.length;
    const isFinalEnding = outcome === "MADNESS" || outcome === "Escaped" || outcome === "Madness" || outcome === "Resigned";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-6 animate-in fade-in duration-300",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl w-full h-[80vh] flex flex-col gap-4 border-x border-slate-800 bg-slate-950/50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-b border-slate-800 bg-slate-900",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-mono text-green-500 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "animate-pulse",
                                children: "●"
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 33,
                                columnNumber: 150
                            }, this),
                            " TRPG LOG"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 33,
                        columnNumber: 77
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                    lineNumber: 33,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-6 font-mono text-base space-y-4 custom-scrollbar",
                    children: [
                        displayLogs.map((log, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-l-2 border-slate-700 pl-4 py-2 animate-in slide-in-from-left-2 fade-in",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-300",
                                    children: log
                                }, void 0, false, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                    lineNumber: 35,
                                    columnNumber: 158
                                }, this)
                            }, idx, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 35,
                                columnNumber: 53
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: bottomRef
                        }, void 0, false, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                            lineNumber: 36,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                    lineNumber: 34,
                    columnNumber: 17
                }, this),
                isFinished && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-t border-slate-800 flex justify-center bg-slate-900",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>onClose(isFinalEnding, outcome),
                        className: "w-full max-w-sm bg-slate-100 text-black hover:bg-white font-bold text-lg h-12",
                        children: outcome === "Looping" ? "🔄 Continue" : "🚪 Close"
                    }, void 0, false, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 38,
                        columnNumber: 112
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                    lineNumber: 38,
                    columnNumber: 32
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 32,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
        lineNumber: 31,
        columnNumber: 9
    }, this);
}
// --- 離職證書組件 (讀取 SBT 資料) ---
function ResignationCertificate({ data, onClose, t }) {
    if (!data) return null;
    // 兼容：如果是 SBT (final_depth) 或 NFT (loop_depth)
    const depth = data.final_depth !== undefined ? data.final_depth : data.loop_depth;
    const exp = data.career_exp !== undefined ? data.career_exp : data.exp;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-500 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#fdfbf7] text-slate-900 w-full max-w-md p-8 shadow-2xl relative transform rotate-1 animate-in zoom-in-95 duration-500 border border-slate-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-2 border-2 border-double border-slate-800 pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                    lineNumber: 55,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center font-serif space-y-6 pt-4 relative z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center text-slate-800 mb-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                size: 48,
                                strokeWidth: 1
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 57,
                                columnNumber: 78
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                            lineNumber: 57,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold border-b-2 border-slate-800 pb-4 inline-block px-8 tracking-widest",
                            children: t.cert_title
                        }, void 0, false, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                            lineNumber: 58,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-lg leading-relaxed text-slate-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: t.cert_content
                                }, void 0, false, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                    lineNumber: 60,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl font-bold my-2 text-indigo-900 font-mono bg-slate-100 py-1",
                                    children: data.name
                                }, void 0, false, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                    lineNumber: 61,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: t.cert_content2
                                }, void 0, false, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                    lineNumber: 62,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                            lineNumber: 59,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4 text-sm border-t border-dashed border-slate-400 pt-4 mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-right text-slate-500",
                                    children: [
                                        t.cert_stat_depth,
                                        ":"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                    lineNumber: 65,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-left font-bold font-mono text-xl",
                                    children: [
                                        "B",
                                        depth,
                                        "F"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                    lineNumber: 66,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-right text-slate-500",
                                    children: [
                                        t.cert_stat_mist,
                                        ":"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                    lineNumber: 67,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-left font-bold font-mono text-xl",
                                    children: exp
                                }, void 0, false, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                    lineNumber: 68,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end mt-8 pt-4 relative",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-6 right-8 transform rotate-[-15deg] opacity-90 animate-in zoom-in duration-300 delay-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-4 border-red-700 text-red-700 px-4 py-2 font-black text-xl tracking-widest uppercase rounded-sm flex items-center gap-2 shadow-sm",
                                        style: {
                                            mixBlendMode: 'multiply'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stamp$3e$__["Stamp"], {
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                                lineNumber: 73,
                                                columnNumber: 33
                                            }, this),
                                            " ",
                                            t.cert_stamp
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 72,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-red-700/80 text-[10px] text-center mt-1 font-bold",
                                        children: t.cert_dept
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 75,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 71,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                            lineNumber: 70,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                    lineNumber: 56,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: onClose,
                        className: "w-full bg-slate-900 text-white hover:bg-slate-800 h-12 font-bold tracking-wide shadow-lg",
                        children: t.cert_close
                    }, void 0, false, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 80,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                    lineNumber: 79,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 54,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
        lineNumber: 53,
        columnNumber: 9
    }, this);
}
function GameDashboard({ lang }) {
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCurrentAccount"])();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIotaClient"])();
    const { mutate: signAndExecuteTransaction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSignAndExecuteTransaction"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [investigators, setInvestigators] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [memorials, setMemorials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // 🔥 新增：SBT 列表
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [adventureData, setAdventureData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [viewingCert, setViewingCert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // 🔥 新增：正在查看哪張證書
    const [showIntro, setShowIntro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [outroType, setOutroType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("none");
    const STORAGE_KEY = `iota_trpg_history_${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PACKAGE_ID"]}`;
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) try {
            setHistory(JSON.parse(saved));
        } catch (e) {}
    }, []);
    const currentInvestigator = investigators.find((i)=>i.id === selectedId);
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$localization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXTS"][lang];
    const addToHistory = (logs, outcome)=>{
        if (!currentInvestigator) return;
        const newEntry = {
            id: crypto.randomUUID(),
            timestamp: Date.now(),
            logs,
            outcome,
            investigatorId: currentInvestigator.id,
            investigatorName: currentInvestigator.name
        };
        const newHistory = [
            newEntry,
            ...history
        ];
        setHistory(newHistory);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
    };
    // 🔥 核心修改：同時抓取 Investigator 和 MemorialSBT
    const fetchData = async ()=>{
        if (!account) return;
        const objects = await client.getOwnedObjects({
            owner: account.address,
            options: {
                showType: true,
                showContent: true
            }
        });
        const investType = `${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PACKAGE_ID"]}::${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODULE_NAME"]}::Investigator`;
        const sbtType = `${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PACKAGE_ID"]}::${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODULE_NAME"]}::MemorialSBT`;
        const activeList = [];
        const resignedList = [];
        objects.data.forEach((obj)=>{
            if (obj.data?.content?.dataType === "moveObject") {
                const type = obj.data.type;
                const fields = {
                    ...obj.data.content.fields,
                    id: obj.data.objectId
                };
                if (type === investType) activeList.push(fields);
                else if (type === sbtType) resignedList.push(fields);
            }
        });
        setInvestigators(activeList);
        setMemorials(resignedList);
        // 如果沒有選中人，且有現職員工，預設選第一個
        if (!selectedId && activeList.length > 0) setSelectedId(activeList[0].id);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchData();
    }, [
        account
    ]);
    const executeScenarioTx = async (tx)=>{
        setLoading(true);
        tx.setGasBudget(100000000);
        signAndExecuteTransaction({
            transaction: tx,
            options: {
                showEffects: true,
                showEvents: true
            }
        }, {
            onSuccess: async (result)=>{
                let events = result.events || [];
                if (events.length === 0) {
                    await new Promise((r)=>setTimeout(r, 2000));
                    try {
                        const r = await client.getTransactionBlock({
                            digest: result.digest,
                            options: {
                                showEvents: true,
                                showEffects: true
                            }
                        });
                        events = r.events || [];
                    } catch (e) {}
                }
                const event = events.find((e)=>e.type.includes("ScenarioEvent"));
                if (event) {
                    setAdventureData({
                        logs: event.parsedJson?.logs,
                        outcome: event.parsedJson?.outcome
                    });
                    addToHistory(event.parsedJson?.logs, event.parsedJson?.outcome);
                }
                setLoading(false);
            },
            onError: (e)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(e.message);
                setLoading(false);
            }
        });
    };
    const mint = ()=>{
        const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transaction"]();
        tx.moveCall({
            target: `${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PACKAGE_ID"]}::${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODULE_NAME"]}::mint`,
            arguments: [
                tx.object(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RANDOM_OBJECT_ID"]),
                tx.pure.vector("u8", Array.from(new TextEncoder().encode("Staff #" + Math.floor(Math.random() * 9000 + 1000))))
            ]
        });
        tx.setGasBudget(50000000);
        signAndExecuteTransaction({
            transaction: tx,
            options: {
                showEffects: true,
                showEvents: true
            }
        }, {
            onSuccess: ()=>{
                setLoading(false);
                setTimeout(fetchData, 1000);
                setShowIntro(true);
            },
            onError: (err)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(err.message);
                setLoading(false);
            }
        });
    };
    // 離職邏輯
    const resign = ()=>{
        if (!currentInvestigator) return;
        const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transaction"]();
        tx.moveCall({
            target: `${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PACKAGE_ID"]}::${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODULE_NAME"]}::resign`,
            arguments: [
                tx.object(currentInvestigator.id)
            ]
        });
        tx.setGasBudget(50000000);
        signAndExecuteTransaction({
            transaction: tx,
            options: {
                showEffects: true,
                showEvents: true
            }
        }, {
            onSuccess: (result)=>{
                setLoading(false);
                __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(lang === 'zh' ? "離職手續已完成 (NFT 銷毀)" : "Resignation Accepted (NFT Burned)");
                const logs = [
                    "=== HR Department ===",
                    "Resignation letter received.",
                    "NFT Access Card destroyed.",
                    "You are free."
                ];
                addToHistory(logs, "Resigned");
                // 交易成功後，重新抓取列表 (新的 SBT 就會出現)
                setTimeout(()=>{
                    fetchData();
                    setSelectedId(null);
                }, 1000);
            },
            onError: (err)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(err.message);
                setLoading(false);
            }
        });
    };
    const singleSanityCheck = ()=>{
        if (!currentInvestigator) return;
        const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transaction"]();
        tx.moveCall({
            target: `${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PACKAGE_ID"]}::${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODULE_NAME"]}::sanity_check`,
            arguments: [
                tx.object(currentInvestigator.id),
                tx.object(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RANDOM_OBJECT_ID"])
            ]
        });
        executeScenarioTx(tx);
    };
    const batchSanityCheck = ()=>{
        if (!currentInvestigator) return;
        const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transaction"]();
        tx.moveCall({
            target: `${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PACKAGE_ID"]}::${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODULE_NAME"]}::batch_sanity_check`,
            arguments: [
                tx.object(currentInvestigator.id),
                tx.object(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RANDOM_OBJECT_ID"])
            ]
        });
        executeScenarioTx(tx);
    };
    const playQuick = ()=>{
        if (!currentInvestigator) return;
        const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transaction"]();
        tx.moveCall({
            target: `${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PACKAGE_ID"]}::${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODULE_NAME"]}::play_stairs_quick`,
            arguments: [
                tx.object(currentInvestigator.id),
                tx.object(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RANDOM_OBJECT_ID"])
            ]
        });
        executeScenarioTx(tx);
    };
    const playManualStart = ()=>{
        if (!currentInvestigator) return;
        const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transaction"]();
        tx.moveCall({
            target: `${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PACKAGE_ID"]}::${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODULE_NAME"]}::manual_start`,
            arguments: [
                tx.object(currentInvestigator.id),
                tx.object(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RANDOM_OBJECT_ID"])
            ]
        });
        executeScenarioTx(tx);
    };
    const playManualAction = (c)=>{
        if (!currentInvestigator) return;
        const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transaction"]();
        tx.moveCall({
            target: `${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PACKAGE_ID"]}::${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODULE_NAME"]}::manual_resolve`,
            arguments: [
                tx.object(currentInvestigator.id),
                tx.object(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RANDOM_OBJECT_ID"]),
                tx.pure.u8(c)
            ]
        });
        executeScenarioTx(tx);
    };
    const getImageUrl = (inv)=>inv?.is_mad ? "/images/madness.png" : "/images/investigator.png";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showIntro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$shared$2f$CinematicText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CinematicText"], {
                lines: t.intro_lines,
                onComplete: ()=>setShowIntro(false)
            }, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                lineNumber: 215,
                columnNumber: 25
            }, this),
            outroType !== "none" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$shared$2f$CinematicText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CinematicText"], {
                lines: outroType === "madness" ? t.outro_madness : t.outro_escaped,
                onComplete: ()=>setOutroType("none"),
                isMadness: outroType === "madness"
            }, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                lineNumber: 216,
                columnNumber: 36
            }, this),
            adventureData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AdventureOverlay, {
                logs: adventureData.logs,
                outcome: adventureData.outcome,
                lang: lang,
                onClose: (ended, outcome)=>{
                    setAdventureData(null);
                    fetchData();
                    if (ended) setOutroType(outcome.toLowerCase().includes("mad") ? "madness" : "escaped");
                }
            }, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                lineNumber: 218,
                columnNumber: 29
            }, this),
            viewingCert && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResignationCertificate, {
                data: viewingCert,
                t: t,
                onClose: ()=>setViewingCert(null)
            }, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                lineNumber: 221,
                columnNumber: 27
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto mt-8 px-4 pb-20 animate-in fade-in zoom-in-95 duration-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-indigo-600 font-serif tracking-widest uppercase mb-2",
                                children: t.title
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 224,
                                columnNumber: 49
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 text-sm tracking-widest",
                                children: t.subtitle
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 224,
                                columnNumber: 226
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 224,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationView, {
                        account: account,
                        investigators: investigators,
                        memorials: memorials,
                        currentInvestigator: currentInvestigator,
                        loading: loading,
                        t: t,
                        mint: mint,
                        singleSanityCheck: singleSanityCheck,
                        batchSanityCheck: batchSanityCheck,
                        playQuick: playQuick,
                        playManualStart: playManualStart,
                        playManualAction: playManualAction,
                        resign: resign,
                        setSelectedId: setSelectedId,
                        onViewCert: setViewingCert,
                        getImageUrl: getImageUrl,
                        lang: lang
                    }, void 0, false, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 225,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$game$2f$HistorySection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HistorySection"], {
                                history: history,
                                lang: lang
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 243,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$game$2f$LeaderboardSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LeaderboardSection"], {
                                client: client,
                                lang: lang
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 244,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 242,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                lineNumber: 223,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResearchView",
    ()=>ResearchView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-ssr] (ecmascript) <export default as PieChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dice$2d$5$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dice5$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/dice-5.js [app-ssr] (ecmascript) <export default as Dice5>");
// --- 🔥 Chart.js 修正：必須在這裡引入並註冊 ---
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/chart.js/dist/chart.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/react-chartjs-2/dist/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
// 註冊所有需要的圖表元件
__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RadialLinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Filler"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"]);
// --- 📚 研究報告專用字典 ---
const RESEARCH_TEXTS = {
    zh: {
        tabs: {
            analysis: "源頭分析",
            evolution: "演化脈絡",
            architecture: "Web3 架構"
        },
        analysis_title: "來源分析：《人格解體》與 TRPG 系統",
        analysis_desc: "本區塊拆解核心機制。要進行 Web3 轉化，必須先量化「角色屬性」與「隨機性檢定」，這是鏈上邏輯的基礎。",
        chart_radar_title: "調查員屬性模型",
        chart_radar_label: "調查員數值 (偵探模版)",
        radar_labels: [
            'STR 力量',
            'CON 體質',
            'SIZ 體型',
            'DEX 敏捷',
            'APP 外貌',
            'INT 智力',
            'POW 意志',
            'EDU 教育'
        ],
        analysis_insight: "GameFi 觀點：這些數值 (STR, INT, SAN) 將成為 NFT 的 Metadata。在 IOTA EVM 上，這些屬性不可篡改，直接影響智能合約的檢定條件。",
        dice_title: "D100 檢定機制模擬",
        dice_desc: "核心玩法在於「技能檢定」。系統生成 1-100 的隨機數，若小於技能值則成功。鏈上需透過 0x8::random 模組實現。",
        dice_target: "目標技能值",
        dice_btn: "投擲 D100",
        dice_status: {
            ready: "準備檢定",
            crit: "大成功! (Critical)",
            fumble: "大失敗! (Fumble)",
            extreme: "極難成功 (Extreme)",
            hard: "困難成功 (Hard)",
            success: "成功 (Success)",
            fail: "失敗 (Failure)"
        },
        evo_title: "演化脈絡：從桌面到區塊鏈",
        evo_desc: "GameFi 不僅是玩賺，而是解決 TRPG「信任成本」與 CRPG「資產封閉」的問題。",
        evo_stages: [
            {
                title: "TRPG 時代",
                desc: [
                    "極高自由度 (想像力)",
                    "依賴人類主持 (KP)",
                    "信任機制薄弱"
                ]
            },
            {
                title: "CRPG 時代",
                desc: [
                    "視覺化體驗 (如人格解體)",
                    "自動化計算 (黑盒)",
                    "資產無法帶出遊戲"
                ]
            },
            {
                title: "GameFi 時代",
                desc: [
                    "規則怪談化 (合約即規則)",
                    "資產互通 (NFT Avatar)",
                    "IOTA EVM 公正檢定"
                ]
            }
        ],
        evo_chart_labels: [
            '敘事自由度',
            '視覺表現',
            '資產所有權',
            '規則透明度'
        ],
        evo_datasets: [
            'TRPG (桌上)',
            'CRPG (人格解體)',
            'GameFi (Web3)'
        ],
        arch_title: "Web3 系統架構：IOTA EVM",
        arch_desc: "針對「規則怪談」GameFi 的技術選型。以 IOTA EVM 為主，Next.js 為前端。",
        stack_title: "技術堆疊 (Tech Stack)",
        stack_layers: [
            {
                name: "應用層 (Next.js)",
                desc: "React Client: UI 渲染、錢包連接、視覺反饋"
            },
            {
                name: "邏輯層 (Contract)",
                desc: "Move Smart Contracts: Avatar NFT, 規則引擎, 隨機數生成"
            },
            {
                name: "數據層 (Storage)",
                desc: "On-Chain Objects: 角色狀態、事件紀錄 (Events)"
            }
        ],
        token_title: "生態系價值流動",
        token_labels: [
            '玩家獎勵池 (P2E)',
            '創作者基金 (UGC)',
            '生態系發展',
            '流動性提供',
            '團隊與早期投資'
        ],
        code_comment: "// 案例研究：規則怪談的合約邏輯 (Move)"
    },
    en: {
        tabs: {
            analysis: "Source Analysis",
            evolution: "Evolution",
            architecture: "Web3 Arch"
        },
        analysis_title: "Source Analysis: Depersonalization & TRPG",
        analysis_desc: "Deconstructing core mechanics. To adapt for Web3, we must quantify 'Attributes' and 'RNG Checks', forming the basis of on-chain logic.",
        chart_radar_title: "Investigator Attribute Model",
        chart_radar_label: "Stats (Detective Template)",
        radar_labels: [
            'STR',
            'CON',
            'SIZ',
            'DEX',
            'APP',
            'INT',
            'POW',
            'EDU'
        ],
        analysis_insight: "GameFi Insight: These stats (STR, INT, SAN) become NFT Metadata. On IOTA EVM, they are immutable and directly influence smart contract checks.",
        dice_title: "D100 Check Mechanism",
        dice_desc: "Core gameplay relies on 'Skill Checks'. RNG 1-100; roll under skill to succeed. On-chain implementation requires 0x8::random.",
        dice_target: "Target Skill",
        dice_btn: "Roll D100",
        dice_status: {
            ready: "Ready to Roll",
            crit: "Critical Success!",
            fumble: "Fumble!",
            extreme: "Extreme Success",
            hard: "Hard Success",
            success: "Success",
            fail: "Failure"
        },
        evo_title: "Evolution: Tabletop to Blockchain",
        evo_desc: "GameFi isn't just P2E; it solves TRPG's 'Trust Cost' and CRPG's 'Closed Assets' issues.",
        evo_stages: [
            {
                title: "TRPG Era",
                desc: [
                    "High Freedom (Imagination)",
                    "Relies on Human Host (KP)",
                    "Weak Trust Mechanism"
                ]
            },
            {
                title: "CRPG Era",
                desc: [
                    "Visualized Experience",
                    "Automated calc (Blackbox)",
                    "Assets locked in-game"
                ]
            },
            {
                title: "GameFi Era",
                desc: [
                    "Contract as Rule (Weird)",
                    "Interoperable Assets (NFT)",
                    "Fair On-Chain Verification"
                ]
            }
        ],
        evo_chart_labels: [
            'Narrative Freedom',
            'Visuals',
            'Asset Ownership',
            'Transparency'
        ],
        evo_datasets: [
            'TRPG (Tabletop)',
            'CRPG (Digital)',
            'GameFi (Web3)'
        ],
        arch_title: "Web3 Architecture: IOTA EVM",
        arch_desc: "Tech stack selection for 'Rules of Weird' GameFi. Based on IOTA EVM and Next.js.",
        stack_title: "Tech Stack",
        stack_layers: [
            {
                name: "App Layer (Next.js)",
                desc: "React Client: Rendering, Wallet Connect, Visual Feedback"
            },
            {
                name: "Logic Layer (Contract)",
                desc: "Move Smart Contracts: Avatar NFT, Rule Engine, RNG"
            },
            {
                name: "Data Layer (Storage)",
                desc: "On-Chain Objects: Character State, Event Logs"
            }
        ],
        token_title: "Ecosystem Value Flow",
        token_labels: [
            'P2E Pool',
            'UGC Fund',
            'Ecosystem Growth',
            'Liquidity',
            'Team & Early Investors'
        ],
        code_comment: "// Case Study: Rule Contract Logic (Move)"
    }
};
function ResearchView({ lang }) {
    // 安全檢查：如果 lang 沒傳進來，預設為 'zh'
    const safeLang = lang || 'zh';
    const activeTexts = RESEARCH_TEXTS[safeLang];
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('analysis');
    // 1. 雷達圖數據
    const radarData = {
        labels: activeTexts.radar_labels,
        datasets: [
            {
                label: activeTexts.chart_radar_label,
                data: [
                    50,
                    60,
                    55,
                    70,
                    60,
                    80,
                    50,
                    75
                ],
                backgroundColor: 'rgba(79, 70, 229, 0.2)',
                borderColor: '#4f46e5',
                borderWidth: 2,
                pointBackgroundColor: '#fff'
            }
        ]
    };
    // 2. 長條圖數據
    const evolutionData = {
        labels: activeTexts.evo_chart_labels,
        datasets: [
            {
                label: activeTexts.evo_datasets[0],
                data: [
                    95,
                    20,
                    10,
                    60
                ],
                backgroundColor: 'rgba(255, 255, 255, 0.2)'
            },
            {
                label: activeTexts.evo_datasets[1],
                data: [
                    70,
                    90,
                    30,
                    80
                ],
                backgroundColor: 'rgba(52, 211, 153, 0.5)'
            },
            {
                label: activeTexts.evo_datasets[2],
                data: [
                    60,
                    75,
                    100,
                    100
                ],
                backgroundColor: 'rgba(139, 92, 246, 0.5)'
            }
        ]
    };
    // 3. 圓餅圖數據
    const tokenomicsData = {
        labels: activeTexts.token_labels,
        datasets: [
            {
                data: [
                    40,
                    25,
                    15,
                    10,
                    10
                ],
                backgroundColor: [
                    '#4f46e5',
                    '#10b981',
                    '#8b5cf6',
                    '#0ea5e9',
                    '#64748b'
                ],
                borderWidth: 0
            }
        ]
    };
    // 骰子模擬器
    const [diceResult, setDiceResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("--");
    const [checkResult, setCheckResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(activeTexts.dice_status.ready);
    const [checkColor, setCheckColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("text-slate-500");
    const rollDice = ()=>{
        let steps = 0;
        const interval = setInterval(()=>{
            setDiceResult(String(Math.floor(Math.random() * 100) + 1));
            steps++;
            if (steps >= 10) {
                clearInterval(interval);
                const finalRoll = Math.floor(Math.random() * 100) + 1;
                setDiceResult(String(finalRoll));
                if (finalRoll === 1) {
                    setCheckResult(activeTexts.dice_status.crit);
                    setCheckColor("text-yellow-400");
                } else if (finalRoll === 100) {
                    setCheckResult(activeTexts.dice_status.fumble);
                    setCheckColor("text-red-500");
                } else if (finalRoll <= 10) {
                    setCheckResult(activeTexts.dice_status.extreme);
                    setCheckColor("text-indigo-300");
                } else if (finalRoll <= 25) {
                    setCheckResult(activeTexts.dice_status.hard);
                    setCheckColor("text-indigo-400");
                } else if (finalRoll <= 50) {
                    setCheckResult(activeTexts.dice_status.success);
                    setCheckColor("text-emerald-400");
                } else {
                    setCheckResult(activeTexts.dice_status.fail);
                    setCheckColor("text-red-400");
                }
            }
        }, 50);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-7xl mx-auto p-4 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-900/80 backdrop-blur-md border border-slate-700 p-6 rounded-xl shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-2xl font-bold shadow-inner text-white",
                                    children: "C"
                                }, void 0, false, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                    lineNumber: 180,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold text-white tracking-wide",
                                            children: "Project Cthulhu-Fi"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 182,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-400 text-sm",
                                            children: "Research Terminal & Architecture Analysis"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 183,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                    lineNumber: 181,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                            lineNumber: 179,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 bg-slate-950/50 p-1 rounded-lg border border-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveSection('analysis'),
                                    className: `px-4 py-2 rounded-md text-sm font-medium transition-all ${activeSection === 'analysis' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`,
                                    children: activeTexts.tabs.analysis
                                }, void 0, false, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                    lineNumber: 188,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveSection('evolution'),
                                    className: `px-4 py-2 rounded-md text-sm font-medium transition-all ${activeSection === 'evolution' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`,
                                    children: activeTexts.tabs.evolution
                                }, void 0, false, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                    lineNumber: 189,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveSection('architecture'),
                                    className: `px-4 py-2 rounded-md text-sm font-medium transition-all ${activeSection === 'architecture' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`,
                                    children: activeTexts.tabs.architecture
                                }, void 0, false, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                    lineNumber: 190,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                            lineNumber: 187,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                    lineNumber: 178,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-h-[400px]",
                    children: [
                        activeSection === 'analysis' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6 animate-in fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-l-4 border-indigo-500 pl-4 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-white",
                                            children: activeTexts.analysis_title
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 201,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-400 mt-1",
                                            children: activeTexts.analysis_desc
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 202,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                    lineNumber: 200,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-950/50 p-6 rounded-xl border border-slate-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-white mb-4 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 115
                                                        }, this),
                                                        " ",
                                                        activeTexts.chart_radar_title
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-[300px] flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Radar"], {
                                                        data: radarData,
                                                        options: {
                                                            scales: {
                                                                r: {
                                                                    angleLines: {
                                                                        color: 'rgba(255,255,255,0.1)'
                                                                    },
                                                                    grid: {
                                                                        color: 'rgba(255,255,255,0.1)'
                                                                    },
                                                                    pointLabels: {
                                                                        color: '#cbd5e1',
                                                                        font: {
                                                                            size: 12
                                                                        }
                                                                    },
                                                                    suggestedMin: 0,
                                                                    suggestedMax: 100
                                                                }
                                                            },
                                                            plugins: {
                                                                legend: {
                                                                    display: false
                                                                }
                                                            }
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-4 text-xs text-slate-400 border-l-2 border-indigo-500 pl-2 bg-indigo-900/10 p-2 rounded",
                                                    children: activeTexts.analysis_insight
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 206,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-950/50 p-6 rounded-xl border border-slate-700 flex flex-col justify-center items-center relative overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-0 right-0 p-4 opacity-10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dice$2d$5$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dice5$3e$__["Dice5"], {
                                                        size: 100
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 92
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-white mb-2",
                                                    children: activeTexts.dice_title
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500 mb-6 text-center px-4",
                                                    children: activeTexts.dice_desc
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-6xl font-mono font-bold text-white mb-2 animate-pulse text-shadow-glow",
                                                    children: diceResult
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `text-xl font-bold mb-6 ${checkColor}`,
                                                    children: checkResult
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full px-10 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between text-xs text-slate-400 mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: activeTexts.dice_target
                                                                }, void 0, false, {
                                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                                    lineNumber: 225,
                                                                    columnNumber: 107
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white font-bold",
                                                                    children: "50"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                                    lineNumber: 225,
                                                                    columnNumber: 145
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                            lineNumber: 225,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-2 bg-slate-700 rounded-full overflow-hidden",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-full bg-indigo-500 w-1/2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                                lineNumber: 226,
                                                                columnNumber: 104
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: rollDice,
                                                    className: "w-full max-w-xs bg-indigo-600 hover:bg-indigo-500 text-white font-bold h-12 shadow-lg shadow-indigo-500/20",
                                                    children: activeTexts.dice_btn
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 216,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                    lineNumber: 205,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                            lineNumber: 199,
                            columnNumber: 25
                        }, this),
                        activeSection === 'evolution' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-950/50 p-6 rounded-xl border border-slate-700 animate-in fade-in space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-l-4 border-emerald-500 pl-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-white",
                                            children: activeTexts.evo_title
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 241,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-400 mt-1",
                                            children: activeTexts.evo_desc
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 242,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                    lineNumber: 240,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm",
                                    children: activeTexts.evo_stages.map((stage, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 bg-slate-900 rounded border border-slate-700 hover:border-emerald-500 transition-colors group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl font-serif text-slate-700 font-bold mb-2 group-hover:text-emerald-500/50 transition-colors",
                                                    children: [
                                                        "I",
                                                        "II",
                                                        "III"
                                                    ][idx]
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-emerald-400 block mb-2 text-lg",
                                                    children: stage.title
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "text-slate-400 space-y-1 list-disc list-inside",
                                                    children: stage.desc.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: d
                                                        }, i, false, {
                                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                            lineNumber: 251,
                                                            columnNumber: 71
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 247,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                    lineNumber: 245,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[300px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                                        data: evolutionData,
                                        options: {
                                            indexAxis: 'y',
                                            responsive: true,
                                            maintainAspectRatio: false,
                                            scales: {
                                                x: {
                                                    grid: {
                                                        color: 'rgba(255,255,255,0.1)'
                                                    }
                                                },
                                                y: {
                                                    grid: {
                                                        display: false
                                                    },
                                                    ticks: {
                                                        color: '#cbd5e1'
                                                    }
                                                }
                                            },
                                            plugins: {
                                                legend: {
                                                    labels: {
                                                        color: '#cbd5e1'
                                                    }
                                                }
                                            }
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                        lineNumber: 258,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                    lineNumber: 257,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                            lineNumber: 239,
                            columnNumber: 25
                        }, this),
                        activeSection === 'architecture' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6 animate-in fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-l-4 border-violet-500 pl-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-white",
                                            children: activeTexts.arch_title
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 267,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-400 mt-1",
                                            children: activeTexts.arch_desc
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 268,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                    lineNumber: 266,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-950/50 p-6 rounded-xl border border-slate-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-violet-400 mb-4 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 116
                                                        }, this),
                                                        " ",
                                                        activeTexts.stack_title
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: activeTexts.stack_layers.map((layer, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-24 text-right text-xs font-bold text-slate-500 mr-4",
                                                                    children: [
                                                                        layer.name.split(" ")[0],
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                                            lineNumber: 278,
                                                                            columnNumber: 146
                                                                        }, this),
                                                                        layer.name.split(" ")[1]
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                                    lineNumber: 278,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `flex-1 bg-slate-800 p-3 rounded border-l-4 ${idx === 0 ? 'border-blue-500' : idx === 1 ? 'border-violet-500' : 'border-emerald-500'} text-sm text-slate-200 shadow-lg relative`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-bold text-blue-400",
                                                                            children: layer.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                                            lineNumber: 280,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-slate-400",
                                                                            children: layer.desc
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                                            lineNumber: 281,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                                    lineNumber: 279,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                            lineNumber: 277,
                                                            columnNumber: 45
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 273,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-950/50 p-6 rounded-xl border border-slate-700 flex flex-col items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-blue-400 mb-4 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__["PieChart"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 114
                                                        }, this),
                                                        " ",
                                                        activeTexts.token_title
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-64 h-64",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Doughnut"], {
                                                        data: tokenomicsData,
                                                        options: {
                                                            plugins: {
                                                                legend: {
                                                                    position: 'bottom',
                                                                    labels: {
                                                                        color: '#cbd5e1',
                                                                        font: {
                                                                            size: 11
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 289,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                    lineNumber: 271,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-900 p-4 rounded-xl border border-slate-800 font-mono text-xs overflow-x-auto shadow-inner",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-slate-500 mb-2",
                                            children: activeTexts.code_comment
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 299,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-purple-400",
                                            children: [
                                                "public fun ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-blue-400",
                                                    children: "interact_with_door"
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 77
                                                }, this),
                                                "(player: &mut Investigator, door_color: String) {"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 300,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pl-4 text-slate-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-500",
                                                children: "// Rule: Red door sets SAN to 0"
                                            }, void 0, false, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                lineNumber: 301,
                                                columnNumber: 70
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 301,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pl-4 text-purple-400",
                                            children: 'if (door_color == b"RED") {'
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 302,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pl-8 text-slate-300",
                                            children: "player.san = 0;"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 303,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pl-8 text-slate-300",
                                            children: "player.is_mad = true;"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 304,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pl-8 text-yellow-400",
                                            children: 'event::emit(MadnessEvent { reason: b"VIOLATED_RULE_1" });'
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 305,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pl-4 text-purple-400",
                                            children: "} else {"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 306,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pl-8 text-slate-300",
                                            children: "player.exp = player.exp + 10;"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 307,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pl-4 text-purple-400",
                                            children: "}"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 308,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-purple-400",
                                            children: "}"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 309,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                    lineNumber: 298,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                            lineNumber: 265,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                    lineNumber: 195,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
            lineNumber: 177,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
        lineNumber: 175,
        columnNumber: 9
    }, this);
}
}),
"[project]/iota-cthulhu-gamefi/client/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/dapp-kit/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-ssr] (ecmascript) <export default as Gamepad2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$shared$2f$BGMPlayer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/shared/BGMPlayer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$GameDashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ResearchView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function Home() {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('research');
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('zh');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen text-slate-100 font-sans selection:bg-indigo-500/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scanlines"
            }, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[-1] bg-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                        style: {
                            // 這裡直接寫死 CSS 漸層，保證瀏覽器能讀懂
                            background: 'radial-gradient(circle at top, #172554 0%, #0f172a 40%, #000000 100%)',
                            opacity: activeTab === 'research' ? 1 : 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                        style: {
                            // 直接寫死 CSS 漸層
                            background: 'radial-gradient(circle at top, #450a0a 0%, #2e0202 40%, #000000 100%)',
                            opacity: activeTab === 'simulation' ? 1 : 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-20 pointer-events-none",
                        style: {
                            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                            backgroundSize: '40px 40px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$shared$2f$BGMPlayer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BGMPlayer"], {}, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "sticky top-0 z-40 w-full border-b border-white/10 bg-black/80 backdrop-blur-md px-4 py-3 flex justify-between items-center shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 bg-gradient-to-br from-indigo-600 to-violet-600 rounded flex items-center justify-center font-bold text-white shadow-lg",
                                children: "C"
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                                lineNumber: 58,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold tracking-wider text-slate-200 hidden md:inline",
                                children: "Project Cthulhu-Fi"
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex bg-white/5 p-1 rounded-lg border border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('research'),
                                className: `flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'research' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/10'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 19
                                    }, this),
                                    " Research"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('simulation'),
                                className: `flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'simulation' ? 'bg-red-700 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/10'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 19
                                    }, this),
                                    " Simulation"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: ()=>setLang((l)=>l === 'zh' ? 'en' : 'zh'),
                                className: "text-slate-400 hover:text-white hover:bg-white/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 19
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-1 text-xs",
                                        children: lang.toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 39
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectButton"], {
                                className: "!bg-indigo-600 hover:!bg-indigo-700 text-white font-bold px-4 py-2 rounded"
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "relative",
                children: activeTab === 'research' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ResearchView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResearchView"], {
                    lang: lang
                }, void 0, false, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                    lineNumber: 90,
                    columnNumber: 15
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$GameDashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GameDashboard"], {
                    lang: lang
                }, void 0, false, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                    lineNumber: 92,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=iota-cthulhu-gamefi_client_src_8df3148e._.js.map