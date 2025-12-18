(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/iota-cthulhu-gamefi/client/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/iota-cthulhu-gamefi/client/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
function Button(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "4012b4d0846b1a9937b3822cd218fc0893353f7a8e3601ac83a6d24829266d2f") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4012b4d0846b1a9937b3822cd218fc0893353f7a8e3601ac83a6d24829266d2f";
    }
    let className;
    let props;
    let t1;
    let t2;
    let t3;
    if ($[1] !== t0) {
        ({ className, variant: t1, size: t2, asChild: t3, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
        $[5] = t2;
        $[6] = t3;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
        t2 = $[5];
        t3 = $[6];
    }
    const variant = t1 === undefined ? "default" : t1;
    const size = t2 === undefined ? "default" : t2;
    const asChild = t3 === undefined ? false : t3;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    let t4;
    if ($[7] !== className || $[8] !== size || $[9] !== variant) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        }));
        $[7] = className;
        $[8] = size;
        $[9] = variant;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== Comp || $[12] !== props || $[13] !== size || $[14] !== t4 || $[15] !== variant) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
            "data-slot": "button",
            "data-variant": variant,
            "data-size": size,
            className: t4,
            ...props
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ui/button.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[11] = Comp;
        $[12] = props;
        $[13] = size;
        $[14] = t4;
        $[15] = variant;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    return t5;
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/iota-cthulhu-gamefi/client/src/utils/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
const PACKAGE_ID = "0x7981e1a673513c1ac47e523e58b6aaa37a378c6bc7861c7640a7db53797764d9";
const MODULE_NAME = "investigator";
const RANDOM_OBJECT_ID = "0x8";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/iota-cthulhu-gamefi/client/src/utils/localization.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        act_check: "🎲 單次檢定",
        act_batch: "🔥 瘋狂連發",
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
        claim_btn: "領取加班費",
        claim_error: "🚫 系統錯誤：公司財務狀況不佳，暫停出金。",
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
        act_check: "🎲 Single Check",
        act_batch: "🔥 Batch Check",
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
        claim_btn: "Claim Salary",
        claim_error: "🚫 System Error: Corporate insolvency. Withdrawals suspended.",
        intro_lines: [
            "You are a poor corporate slave, working overtime late into the night...",
            "When you snap out of it, the power is out.",
            "The elevator is dead. You push open the heavy safety door to the stairwell.",
            "Empty candom wrappers are scattered in the corner.",
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
const processLog = (text, lang)=>{
    if (!text) return "";
    // 如果是英文模式，直接回傳清理過的英文 (稍微美化)
    if (lang === 'en') {
        return text.replace("=== Quick Investigation ===", "📜 [Quick Report]").replace("Escaped", "Escaped 🚪").replace("Looping", "Looping 🔄").replace("MADNESS", "MENTAL BREAKDOWN 💀");
    }
    // 中文模式：執行翻譯映射
    let t = text;
    // 標題
    t = t.replace("=== Quick Investigation ===", "📜【快速調查報告】");
    // 環境
    t = t.replace("[Vision: Human Realm] Cold concrete stairs. Smell of rust. (Normal)", "👁️【幻覺：人道】冰冷的逃生梯，牆上貼著「禁止堆放雜物」，空氣中有過勞的汗水味。").replace("[Vision: Deva Realm] Golden clouds. You feel peaceful. (CON+10)", "👁️【幻覺：天道】樓梯間灑滿了午後的陽光，像是發薪日一樣令人安心。(體質+10)").replace("[Vision: Asura Realm] The walls bleed. War drums fuel rage. (DEX+5)", "👁️【幻覺：修羅道】牆壁滲出紅墨水，耳邊傳來鍵盤敲擊的戰鼓聲，你感到莫名的暴躁。(敏捷+5)").replace("[Vision: Hungry Ghost Realm] Weeping faces grab your ankles. (DEX-10)", "👁️【幻覺：餓鬼道】地面伸出無數蒼白的手（像是討債的客戶），試圖抓住你的腳踝。(敏捷-10)").replace("[Vision: Hell Realm] Absolute darkness. The Abyss stares back. (Stats -20)", "👁️【幻覺：地獄道】絕對的黑暗。像是無止盡的加班地獄，深淵正在回望你。(全屬性大幅下降)");
    // 快速結果
    t = t.replace("> Rushed down successfully. Distance created.", "✅ 你跨過散落的文件夾，成功衝下樓梯。").replace("> Stumbled! The shadow catches up. (-2 SAN)", "❌ 你被電源線絆倒了！背後的腳步聲逼近。(SAN -2)").replace("Result: You escaped the stairwell. (+15 EXP)", "🎉【結局】你推開了逃生門...是新鮮空氣！(EXP +15)").replace("Result: The stairs loop back to the start. (Depth+1, SAN dmg)", "🔄【結局】你推開門...卻發現自己回到了公司的茶水間。鬼打牆了。(輪迴深度+1)").replace("Result: Mind Shattered.", "💀【結局】精神崩潰。你放棄了思考，成為了這棟大樓永遠的員工。");
    // 手動劇情
    t = t.replace("You step into the infinite stairwell...", "🚪 除夕夜的最後一班電梯壞了，你踏入樓梯間...").replace("The air changes. What do you do?", "空氣變得凝重，日光燈管開始閃爍。你要怎麼做？").replace("You successfully evaded the shadow.", "✅ 你躲進了雜物堆，成功避開了那東西的巡視。").replace("You broke the loop and found the exit!", "🎉 你打破了加班的詛咒，找到了通往一樓的出口！").replace("FAILURE. The shadow grabs you...", "❌ 失敗。一隻冰冷的手搭上了你的肩膀...").replace("You fall down the stairs... and land back where you started. (Loop Depth +1)", "🔄 你滾落樓梯...抬頭一看，樓層牌依然寫著同樣的數字。(輪迴深度+1)").replace("Your mind cannot take another loop. It shatters.", "💀 你再也無法忍受了。你加入了祂們。").replace("You stared into the Abyss, and learned its secret. (Clue Found! SAN Restored)", "👁️ 你凝視著黑暗深處，看清了老闆的真面目。你洞悉了這間公司的秘密。(發現線索！SAN值恢復)");
    // 通用
    t = t.replace("Escaped", "打卡下班").replace("Looping", "無限加班").replace("MADNESS", "過勞死(精神崩潰)");
    return t;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/iota-cthulhu-gamefi/client/src/components/shared/BGMPlayer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BGMPlayer",
    ()=>BGMPlayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/volume-x.js [app-client] (ecmascript) <export default as VolumeX>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function BGMPlayer() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "d81f2846ec36d1f06d8b3b451cb106d6f7d4d045e8ea33cbc8586ec40f55bedc") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d81f2846ec36d1f06d8b3b451cb106d6f7d4d045e8ea33cbc8586ec40f55bedc";
    }
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "BGMPlayer[useEffect()]": ()=>{
                const tryPlay = {
                    "BGMPlayer[useEffect() > tryPlay]": async ()=>{
                        if (audioRef.current) {
                            audioRef.current.volume = 0.3;
                            ;
                            try {
                                await audioRef.current.play();
                            } catch (t2) {
                                setIsPlaying(false);
                                const unlock = {
                                    "BGMPlayer[useEffect() > tryPlay > unlock]": ()=>{
                                        if (audioRef.current) {
                                            audioRef.current.play();
                                            setIsPlaying(true);
                                            document.removeEventListener("click", unlock);
                                        }
                                    }
                                }["BGMPlayer[useEffect() > tryPlay > unlock]"];
                                document.addEventListener("click", unlock);
                            }
                        }
                    }
                }["BGMPlayer[useEffect() > tryPlay]"];
                tryPlay();
            }
        })["BGMPlayer[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
            ref: audioRef,
            src: "/bgm.mp3",
            loop: true
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/shared/BGMPlayer.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== isPlaying) {
        t3 = ({
            "BGMPlayer[<Button>.onClick]": ()=>{
                if (audioRef.current) {
                    if (isPlaying) {
                        audioRef.current.pause();
                        setIsPlaying(false);
                    } else {
                        audioRef.current.play();
                        setIsPlaying(true);
                    }
                }
            }
        })["BGMPlayer[<Button>.onClick]"];
        $[4] = isPlaying;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const t4 = `rounded-full w-12 h-12 p-0 shadow-lg border-2 transition-all ${isPlaying ? "bg-indigo-600 border-indigo-400 text-white animate-pulse" : "bg-slate-900 border-slate-600 text-slate-400"}`;
    let t5;
    if ($[6] !== isPlaying) {
        t5 = isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/shared/BGMPlayer.tsx",
            lineNumber: 86,
            columnNumber: 22
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/shared/BGMPlayer.tsx",
            lineNumber: 86,
            columnNumber: 46
        }, this);
        $[6] = isPlaying;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t3 || $[9] !== t4 || $[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-6 right-6 z-50",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: t3,
                    variant: "outline",
                    className: t4,
                    children: t5
                }, void 0, false, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/shared/BGMPlayer.tsx",
                    lineNumber: 94,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/shared/BGMPlayer.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    return t6;
}
_s(BGMPlayer, "rtB+Afhss/5oKQ7HX0RFysjkf2g=");
_c = BGMPlayer;
var _c;
__turbopack_context__.k.register(_c, "BGMPlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/iota-cthulhu-gamefi/client/src/components/shared/CinematicText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CinematicText",
    ()=>CinematicText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CinematicText(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "a843de3e381b1df0c9b5570a56262bfea2e339f970d946465e14c3894ca346b9") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a843de3e381b1df0c9b5570a56262bfea2e339f970d946465e14c3894ca346b9";
    }
    const { lines, onComplete, isMadness: t1 } = t0;
    const isMadness = t1 === undefined ? false : t1;
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [opacity, setOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t2;
    if ($[1] !== index || $[2] !== lines || $[3] !== onComplete) {
        t2 = ({
            "CinematicText[useEffect()]": ()=>{
                setTimeout({
                    "CinematicText[useEffect() > setTimeout()]": ()=>setOpacity(1)
                }["CinematicText[useEffect() > setTimeout()]"], 100);
                const readTime = Math.max(2000, lines[index].length * 150);
                const timer = setTimeout({
                    "CinematicText[useEffect() > setTimeout()]": ()=>{
                        setOpacity(0);
                        setTimeout({
                            "CinematicText[useEffect() > setTimeout() > setTimeout()]": ()=>{
                                if (index < lines.length - 1) {
                                    setIndex(_CinematicTextUseEffectSetTimeoutSetTimeoutSetIndex);
                                } else {
                                    onComplete();
                                }
                            }
                        }["CinematicText[useEffect() > setTimeout() > setTimeout()]"], 1000);
                    }
                }["CinematicText[useEffect() > setTimeout()]"], readTime);
                return ()=>clearTimeout(timer);
            }
        })["CinematicText[useEffect()]"];
        $[1] = index;
        $[2] = lines;
        $[3] = onComplete;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== index) {
        t3 = [
            index
        ];
        $[5] = index;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    const t4 = `text-xl md:text-2xl font-serif tracking-widest leading-loose text-center transition-opacity duration-1000 ${isMadness ? "text-red-600 font-bold animate-pulse" : "text-slate-200"}`;
    let t5;
    if ($[7] !== opacity) {
        t5 = {
            opacity
        };
        $[7] = opacity;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const t6 = lines[index];
    let t7;
    if ($[9] !== t4 || $[10] !== t5 || $[11] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            style: t5,
            children: t6
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/shared/CinematicText.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-10 text-slate-600 text-xs animate-pulse",
            children: "(Click to skip)"
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/shared/CinematicText.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== onComplete || $[15] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-8 cursor-pointer",
            onClick: onComplete,
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/shared/CinematicText.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[14] = onComplete;
        $[15] = t7;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    return t9;
}
_s(CinematicText, "f2PRUegSIoaS2qBNs3jCroh/+fg=");
_c = CinematicText;
function _CinematicTextUseEffectSetTimeoutSetTimeoutSetIndex(prev) {
    return prev + 1;
}
var _c;
__turbopack_context__.k.register(_c, "CinematicText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/iota-cthulhu-gamefi/client/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function Card(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ui/card.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c = Card;
function CardHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card-header",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ui/card.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c1 = CardHeader;
function CardTitle(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card-title",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ui/card.tsx",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c2 = CardTitle;
function CardDescription(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card-description",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ui/card.tsx",
            lineNumber: 159,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c3 = CardDescription;
function CardAction(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card-action",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ui/card.tsx",
            lineNumber: 200,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c4 = CardAction;
function CardContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card-content",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ui/card.tsx",
            lineNumber: 241,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c5 = CardContent;
function CardFooter(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card-footer",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ui/card.tsx",
            lineNumber: 282,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HistorySection",
    ()=>HistorySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/utils/localization.ts [app-client] (ecmascript)");
;
;
;
;
;
function HistorySection(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "5413cebbe833c33ed1e9783a3bfeee3bc14f64dd7384c77f4a02dc59e7dccc09") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5413cebbe833c33ed1e9783a3bfeee3bc14f64dd7384c77f4a02dc59e7dccc09";
    }
    const { history, lang } = t0;
    if (history.length === 0) {
        return null;
    }
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const t2 = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXTS"][lang];
    let t3;
    if ($[2] !== t2.history_title) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                className: "flex items-center gap-2 text-slate-300",
                children: [
                    t1,
                    " ",
                    t2.history_title
                ]
            }, void 0, true, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                lineNumber: 30,
                columnNumber: 22
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[2] = t2.history_title;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== history || $[5] !== lang) {
        let t5;
        if ($[7] !== lang) {
            t5 = ({
                "HistorySection[(anonymous)()]": (entry, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black/40 p-4 rounded border-l-4 border-slate-700 hover:border-indigo-500 transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-xs text-slate-500 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: new Date(entry.timestamp).toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                                        lineNumber: 41,
                                        columnNumber: 242
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: entry.outcome === "MADNESS" ? "text-red-500" : "text-green-500",
                                        children: entry.outcome
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                                        lineNumber: 41,
                                        columnNumber: 299
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                                lineNumber: 41,
                                columnNumber: 176
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: entry.logs.map({
                                    "HistorySection[(anonymous)() > entry.logs.map()]": (log, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-slate-300 font-mono border-l-2 border-slate-800 pl-2 ml-1",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["processLog"])(log, lang)
                                        }, i, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                                            lineNumber: 42,
                                            columnNumber: 79
                                        }, this)
                                }["HistorySection[(anonymous)() > entry.logs.map()]"])
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                                lineNumber: 41,
                                columnNumber: 409
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                        lineNumber: 41,
                        columnNumber: 58
                    }, this)
            })["HistorySection[(anonymous)()]"];
            $[7] = lang;
            $[8] = t5;
        } else {
            t5 = $[8];
        }
        t4 = history.slice().reverse().map(t5);
        $[4] = history;
        $[5] = lang;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "space-y-4 max-h-96 overflow-y-auto custom-scrollbar",
            children: t4
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t3 || $[12] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "mt-6 bg-slate-900/50 border-slate-800",
            children: [
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[11] = t3;
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    return t6;
}
_c = HistorySection;
var _c;
__turbopack_context__.k.register(_c, "HistorySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeaderboardSection",
    ()=>LeaderboardSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/utils/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/utils/localization.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
function LeaderboardSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "2d2042d2c1416a40c693c27e0061d87cc97b0f290c8a8332247713fde8371dce") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2d2042d2c1416a40c693c27e0061d87cc97b0f290c8a8332247713fde8371dce";
    }
    const { client, lang } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [scores, setScores] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] !== client) {
        t2 = ({
            "LeaderboardSection[fetchLeaderboard]": async ()=>{
                ;
                try {
                    const events = await client.queryEvents({
                        query: {
                            MoveModule: {
                                package: __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PACKAGE_ID"],
                                module: __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODULE_NAME"]
                            }
                        }
                    });
                    const rawScores = events.data.filter(_LeaderboardSectionFetchLeaderboardEventsDataFilter).map(_LeaderboardSectionFetchLeaderboardAnonymous).sort(_LeaderboardSectionFetchLeaderboardAnonymous2).slice(0, 10);
                    setScores(rawScores);
                } catch (t3) {
                    const e = t3;
                }
            }
        })["LeaderboardSection[fetchLeaderboard]"];
        $[2] = client;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const fetchLeaderboard = t2;
    let t3;
    if ($[4] !== fetchLeaderboard) {
        t3 = ({
            "LeaderboardSection[useEffect()]": ()=>{
                fetchLeaderboard();
            }
        })["LeaderboardSection[useEffect()]"];
        $[4] = fetchLeaderboard;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [];
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[7] !== lang) {
        t5 = ({
            "LeaderboardSection[handleClaim]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXTS"][lang].claim_error, {
                    duration: 4000,
                    style: {
                        border: "1px solid #ef4444",
                        background: "#220000",
                        color: "#fca5a5"
                    }
                });
            }
        })["LeaderboardSection[handleClaim]"];
        $[7] = lang;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const handleClaim = t5;
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    const t7 = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXTS"][lang];
    let t8;
    if ($[10] !== t7.rank_title) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex gap-2",
            children: [
                t6,
                " ",
                t7.rank_title
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[10] = t7.rank_title;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    const t9 = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXTS"][lang];
    let t10;
    if ($[12] !== handleClaim || $[13] !== t9.claim_btn) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            size: "sm",
            onClick: handleClaim,
            className: "h-6 text-xs bg-yellow-900/30 border-yellow-600/50 text-yellow-400 hover:bg-yellow-900/60",
            children: [
                "💰 ",
                t9.claim_btn
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
            lineNumber: 115,
            columnNumber: 11
        }, this);
        $[12] = handleClaim;
        $[13] = t9.claim_btn;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== fetchLeaderboard) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "ghost",
            size: "sm",
            onClick: fetchLeaderboard,
            children: "🔄"
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
            lineNumber: 124,
            columnNumber: 11
        }, this);
        $[15] = fetchLeaderboard;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] !== t10 || $[18] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[17] = t10;
        $[18] = t11;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== t12 || $[21] !== t8) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                className: "flex justify-between text-amber-500",
                children: [
                    t8,
                    t12
                ]
            }, void 0, true, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
                lineNumber: 141,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, this);
        $[20] = t12;
        $[21] = t8;
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] !== lang || $[24] !== scores) {
        let t15;
        if ($[26] !== lang) {
            t15 = ({
                "LeaderboardSection[scores.map()]": (score, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center bg-black/40 p-2 px-4 rounded border border-slate-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold font-mono text-yellow-400",
                                        children: [
                                            "#",
                                            idx + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
                                        lineNumber: 153,
                                        columnNumber: 216
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-200",
                                        children: score.name
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
                                        lineNumber: 153,
                                        columnNumber: 287
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
                                lineNumber: 153,
                                columnNumber: 175
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-xs px-2 py-0.5 rounded ${score.outcome === "Madness" ? "bg-red-900/50 text-red-400" : "bg-green-900/50 text-green-400"}`,
                                        children: score.outcome === "Madness" ? lang === "zh" ? "\uD83D\uDC80 \u904E\u52DE" : "\uD83D\uDC80 Dead" : lang === "zh" ? "\uD83D\uDEAA \u4E0B\u73ED" : "\uD83D\uDEAA Out"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
                                        lineNumber: 153,
                                        columnNumber: 386
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-amber-500 font-bold",
                                        children: [
                                            score.depth,
                                            " F"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
                                        lineNumber: 153,
                                        columnNumber: 702
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
                                lineNumber: 153,
                                columnNumber: 345
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
                        lineNumber: 153,
                        columnNumber: 61
                    }, this)
            })["LeaderboardSection[scores.map()]"];
            $[26] = lang;
            $[27] = t15;
        } else {
            t15 = $[27];
        }
        t14 = scores.map(t15);
        $[23] = lang;
        $[24] = scores;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    let t15;
    if ($[28] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: t14
            }, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
                lineNumber: 169,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[28] = t14;
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    let t16;
    if ($[30] !== t13 || $[31] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "mt-6 bg-slate-900/80 border-amber-600/30 backdrop-blur-sm",
            children: [
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[30] = t13;
        $[31] = t15;
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    return t16;
}
_s(LeaderboardSection, "OJBKG96Jp01C96Qc4oSAlhSLKxI=");
_c = LeaderboardSection;
function _LeaderboardSectionFetchLeaderboardAnonymous2(a, b) {
    return Number(b.depth) - Number(a.depth);
}
function _LeaderboardSectionFetchLeaderboardAnonymous(e_1) {
    return e_1.parsedJson;
}
function _LeaderboardSectionFetchLeaderboardEventsDataFilter(e_0) {
    return e_0.type.includes("ScoreEvent");
}
var _c;
__turbopack_context__.k.register(_c, "LeaderboardSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/iota-cthulhu-gamefi/client/src/components/ui/progress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@radix-ui/react-progress/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Progress(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "a6379c7b0f5d267cf85dc1626833718286434e07e9ff163c52d01d8dc5765b57") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a6379c7b0f5d267cf85dc1626833718286434e07e9ff163c52d01d8dc5765b57";
    }
    let className;
    let props;
    let value;
    if ($[1] !== t0) {
        ({ className, value, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = value;
    } else {
        className = $[2];
        props = $[3];
        value = $[4];
    }
    let t1;
    if ($[5] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", className);
        $[5] = className;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    const t2 = `translateX(-${100 - (value || 0)}%)`;
    let t3;
    if ($[7] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "progress-indicator",
            className: "bg-primary h-full w-full flex-1 transition-all",
            style: {
                transform: t2
            }
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ui/progress.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== props || $[10] !== t1 || $[11] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "progress",
            className: t1,
            ...props,
            children: t3
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ui/progress.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[9] = props;
        $[10] = t1;
        $[11] = t3;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    return t4;
}
_c = Progress;
;
var _c;
__turbopack_context__.k.register(_c, "Progress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SimulationView",
    ()=>SimulationView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/ui/progress.tsx [app-client] (ecmascript)");
// 引入更多圖標
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2d$pattern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/fingerprint-pattern.js [app-client] (ecmascript) <export default as Fingerprint>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-client] (ecmascript) <export default as Gamepad2>");
"use client";
;
;
;
;
;
;
function SimulationView(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(61);
    if ($[0] !== "d1bb7775beaca116d9d59ef8c531968f17f7b15cee77867c3001442690806e40") {
        for(let $i = 0; $i < 61; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d1bb7775beaca116d9d59ef8c531968f17f7b15cee77867c3001442690806e40";
    }
    const { account, investigators, currentInvestigator, loading, t, mint, sanityCheck, batchSanityCheck, playQuick, playManualStart, playManualAction, setSelectedId, getImageUrl } = t0;
    if (!account) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center h-[50vh] text-amber-400 animate-pulse",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-6xl mb-4",
                        children: "⚠️"
                    }, void 0, false, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                        lineNumber: 35,
                        columnNumber: 109
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl font-bold",
                        children: "Please Connect Wallet"
                    }, void 0, false, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                        lineNumber: 35,
                        columnNumber: 148
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                lineNumber: 35,
                columnNumber: 12
            }, this);
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    }
    let t1;
    if ($[2] !== t.list_title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-2 bg-slate-950/50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                className: "text-slate-200 text-sm uppercase tracking-wider",
                children: t.list_title
            }, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                lineNumber: 44,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[2] = t.list_title;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== currentInvestigator?.id || $[5] !== getImageUrl || $[6] !== investigators || $[7] !== setSelectedId) {
        let t3;
        if ($[9] !== currentInvestigator?.id || $[10] !== getImageUrl || $[11] !== setSelectedId) {
            t3 = ({
                "SimulationView[investigators.map()]": (inv)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: {
                            "SimulationView[investigators.map() > <div>.onClick]": ()=>setSelectedId(inv.id)
                        }["SimulationView[investigators.map() > <div>.onClick]"],
                        className: `p-2 rounded-lg cursor-pointer border transition-all flex items-center gap-3 relative ${currentInvestigator?.id === inv.id ? "border-indigo-500 bg-indigo-900/20" : "border-slate-800 hover:bg-slate-800/50"} ${inv.is_mad ? "opacity-50 grayscale" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-full overflow-hidden bg-slate-950 border border-slate-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: getImageUrl(inv),
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                    lineNumber: 57,
                                    columnNumber: 421
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 57,
                                columnNumber: 330
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-bold text-xs text-slate-200 truncate w-24",
                                        children: inv.name
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 57,
                                        columnNumber: 529
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-slate-400 block font-mono",
                                        children: inv.is_mad ? "KIA" : `SAN: ${inv.san}`
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 57,
                                        columnNumber: 609
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 57,
                                columnNumber: 496
                            }, this)
                        ]
                    }, inv.id, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                        lineNumber: 55,
                        columnNumber: 55
                    }, this)
            })["SimulationView[investigators.map()]"];
            $[9] = currentInvestigator?.id;
            $[10] = getImageUrl;
            $[11] = setSelectedId;
            $[12] = t3;
        } else {
            t3 = $[12];
        }
        t2 = investigators.map(t3);
        $[4] = currentInvestigator?.id;
        $[5] = getImageUrl;
        $[6] = investigators;
        $[7] = setSelectedId;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[13] !== loading || $[14] !== mint || $[15] !== t.recruit_btn) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: mint,
            disabled: loading,
            className: "w-full mt-4 bg-emerald-600 hover:bg-emerald-500 text-xs h-8 shadow-lg",
            children: t.recruit_btn
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[13] = loading;
        $[14] = mint;
        $[15] = t.recruit_btn;
        $[16] = t3;
    } else {
        t3 = $[16];
    }
    let t4;
    if ($[17] !== t2 || $[18] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto p-3 space-y-2 custom-scrollbar",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[17] = t2;
        $[18] = t3;
        $[19] = t4;
    } else {
        t4 = $[19];
    }
    let t5;
    if ($[20] !== t1 || $[21] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "lg:col-span-3 bg-slate-900/90 border-slate-700 h-[600px] flex flex-col shadow-2xl backdrop-blur-sm",
            children: [
                t1,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[20] = t1;
        $[21] = t4;
        $[22] = t5;
    } else {
        t5 = $[22];
    }
    let t6;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[23] = t6;
    } else {
        t6 = $[23];
    }
    let t7;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
            size: 18,
            className: "text-indigo-400"
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[24] = t7;
    } else {
        t7 = $[24];
    }
    const t8 = currentInvestigator?.name || "No Selection";
    let t9;
    if ($[25] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center gap-2",
            children: [
                t7,
                " ",
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[25] = t8;
        $[26] = t9;
    } else {
        t9 = $[26];
    }
    let t10;
    if ($[27] !== currentInvestigator) {
        t10 = currentInvestigator && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-mono bg-slate-800 px-2 py-1 rounded text-slate-400 border border-slate-700",
            children: [
                "ID: ",
                currentInvestigator.id.slice(0, 6),
                "..."
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
            lineNumber: 128,
            columnNumber: 34
        }, this);
        $[27] = currentInvestigator;
        $[28] = t10;
    } else {
        t10 = $[28];
    }
    let t11;
    if ($[29] !== t10 || $[30] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "bg-slate-950/80 border-b border-slate-800 pb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                className: "text-slate-100 flex justify-between items-center",
                children: [
                    t9,
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                lineNumber: 136,
                columnNumber: 82
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[29] = t10;
        $[30] = t9;
        $[31] = t11;
    } else {
        t11 = $[31];
    }
    let t12;
    if ($[32] !== currentInvestigator || $[33] !== getImageUrl) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "flex-1 p-6 flex flex-col gap-6 overflow-y-auto",
            children: currentInvestigator ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative w-24 h-24 rounded-lg overflow-hidden border-2 shadow-xl shrink-0 ${currentInvestigator.is_mad ? "border-red-600 animate-pulse" : "border-indigo-400"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: getImageUrl(currentInvestigator),
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 145,
                                        columnNumber: 327
                                    }, this),
                                    currentInvestigator.is_mad && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-red-900/60 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold text-white bg-red-600 px-1 transform -rotate-12",
                                            children: "DECEASED"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                            lineNumber: 145,
                                            columnNumber: 524
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 145,
                                        columnNumber: 443
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 145,
                                columnNumber: 149
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-xs text-slate-400 uppercase font-bold tracking-wider",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Sanity Level"
                                            }, void 0, false, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                                lineNumber: 145,
                                                columnNumber: 766
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    currentInvestigator.san,
                                                    " / ",
                                                    currentInvestigator.max_san
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                                lineNumber: 145,
                                                columnNumber: 791
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 145,
                                        columnNumber: 670
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                        value: currentInvestigator.san / currentInvestigator.max_san * 100,
                                        className: `h-2 bg-slate-800 ${currentInvestigator.is_mad ? "[&>div]:bg-red-600" : "[&>div]:bg-indigo-500"}`
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 145,
                                        columnNumber: 867
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between mt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs bg-black/40 px-2 py-1 rounded border border-slate-700 text-yellow-400 font-mono flex items-center gap-1 shadow-md",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2d$pattern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__["Fingerprint"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 1239
                                                    }, this),
                                                    " ",
                                                    currentInvestigator.exp,
                                                    " MIST"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                                lineNumber: 145,
                                                columnNumber: 1100
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs bg-black/40 px-2 py-1 rounded border border-slate-700 text-purple-400 font-mono flex items-center gap-1 shadow-md",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 1440
                                                    }, this),
                                                    " ",
                                                    currentInvestigator.clues,
                                                    " Clues"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                                lineNumber: 145,
                                                columnNumber: 1301
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 145,
                                        columnNumber: 1057
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 145,
                                columnNumber: 636
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                        lineNumber: 145,
                        columnNumber: 108
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-950/50 p-3 rounded border border-slate-800 flex justify-between items-center shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-500 font-bold",
                                        children: "STR (力量)"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 145,
                                        columnNumber: 1670
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-mono text-orange-400",
                                        children: currentInvestigator.str
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 145,
                                        columnNumber: 1736
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 145,
                                columnNumber: 1557
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-950/50 p-3 rounded border border-slate-800 flex justify-between items-center shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-500 font-bold",
                                        children: "DEX (敏捷)"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 145,
                                        columnNumber: 1939
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-mono text-green-400",
                                        children: currentInvestigator.dex
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 145,
                                        columnNumber: 2005
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 145,
                                columnNumber: 1826
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-950/50 p-3 rounded border border-slate-800 flex justify-between items-center shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-500 font-bold",
                                        children: "SAN (意志)"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 145,
                                        columnNumber: 2207
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-mono text-blue-400",
                                        children: currentInvestigator.san
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 145,
                                        columnNumber: 2273
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 145,
                                columnNumber: 2094
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-950/50 p-3 rounded border border-slate-800 flex justify-between items-center shadow-sm opacity-60",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-500 font-bold",
                                        children: "LUK (運氣)"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 145,
                                        columnNumber: 2485
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-mono text-gray-400",
                                        children: "50"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 145,
                                        columnNumber: 2551
                                    }, this),
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 145,
                                columnNumber: 2361
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                        lineNumber: 145,
                        columnNumber: 1517
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-950 p-3 rounded border border-slate-800 space-y-2 shadow-inner",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-500 flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                                lineNumber: 145,
                                                columnNumber: 2828
                                            }, this),
                                            " Current Depth"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 145,
                                        columnNumber: 2771
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-400 font-mono font-bold text-sm",
                                        children: [
                                            "B",
                                            currentInvestigator.loop_depth,
                                            "F"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 145,
                                        columnNumber: 2869
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 145,
                                columnNumber: 2712
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-500 flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                                lineNumber: 145,
                                                columnNumber: 3091
                                            }, this),
                                            " Status"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 145,
                                        columnNumber: 3034
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `${currentInvestigator.is_mad ? "text-red-500" : "text-emerald-500"} font-mono font-bold`,
                                        children: currentInvestigator.is_mad ? "CRITICAL (DEAD)" : "STABLE"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 145,
                                        columnNumber: 3127
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 145,
                                columnNumber: 2975
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                        lineNumber: 145,
                        columnNumber: 2623
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full flex flex-col items-center justify-center text-slate-600 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                        size: 48,
                        opacity: 0.2
                    }, void 0, false, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                        lineNumber: 145,
                        columnNumber: 3406
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm",
                        children: "Select personnel to view data"
                    }, void 0, false, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                        lineNumber: 145,
                        columnNumber: 3438
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                lineNumber: 145,
                columnNumber: 3319
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[32] = currentInvestigator;
        $[33] = getImageUrl;
        $[34] = t12;
    } else {
        t12 = $[34];
    }
    let t13;
    if ($[35] !== t11 || $[36] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "lg:col-span-5 bg-slate-900/90 border-slate-700 shadow-2xl relative overflow-hidden backdrop-blur-sm h-[600px] flex flex-col",
            children: [
                t6,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[35] = t11;
        $[36] = t12;
        $[37] = t13;
    } else {
        t13 = $[37];
    }
    let t14;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "bg-slate-950/80 border-b border-slate-800 pb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                className: "text-slate-100 flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                        lineNumber: 163,
                        columnNumber: 131
                    }, this),
                    " Action Panel"
                ]
            }, void 0, true, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                lineNumber: 163,
                columnNumber: 82
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[38] = t14;
    } else {
        t14 = $[38];
    }
    let t15;
    if ($[39] !== batchSanityCheck || $[40] !== currentInvestigator || $[41] !== loading || $[42] !== playManualAction || $[43] !== playManualStart || $[44] !== playQuick || $[45] !== sanityCheck || $[46] !== t.act_batch || $[47] !== t.act_check || $[48] !== t.act_manual || $[49] !== t.act_manual_desc || $[50] !== t.act_quick || $[51] !== t.act_quick_desc || $[52] !== t.choice_gaze || $[53] !== t.choice_hide || $[54] !== t.choice_run || $[55] !== t.warn_loop) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "lg:col-span-4 bg-slate-900/90 border-slate-700 shadow-2xl backdrop-blur-sm h-[600px] flex flex-col",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "flex-1 p-6 flex flex-col gap-4 overflow-y-auto",
                    children: currentInvestigator ? currentInvestigator.active_scenario === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-slate-400 mb-2 uppercase font-bold",
                                children: "Basic Operations"
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 170,
                                columnNumber: 274
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: sanityCheck,
                                        disabled: loading || currentInvestigator.is_mad,
                                        variant: "outline",
                                        className: "h-12 border-indigo-500/30 text-indigo-300 hover:bg-indigo-950/50",
                                        children: t.act_check
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 170,
                                        columnNumber: 401
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: batchSanityCheck,
                                        disabled: loading || currentInvestigator.is_mad,
                                        className: "h-12 bg-red-900/30 text-red-200 border border-red-800/50 hover:bg-red-900/60",
                                        children: t.act_batch
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 170,
                                        columnNumber: 597
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 170,
                                columnNumber: 361
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-slate-800 my-2"
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 170,
                                columnNumber: 798
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-slate-400 mb-2 uppercase font-bold",
                                children: "Exploration"
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 170,
                                columnNumber: 848
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: playQuick,
                                disabled: loading || currentInvestigator.is_mad,
                                className: "h-20 bg-slate-800 border-slate-700 hover:bg-slate-700 flex flex-col gap-1 items-start pl-4 shadow-lg w-full mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg text-white",
                                        children: t.act_quick
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 170,
                                        columnNumber: 1132
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-400",
                                        children: t.act_quick_desc
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 170,
                                        columnNumber: 1189
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 170,
                                columnNumber: 930
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: playManualStart,
                                disabled: loading || currentInvestigator.is_mad,
                                className: "h-20 bg-indigo-900/40 border-indigo-500/40 hover:bg-indigo-900/60 flex flex-col gap-1 items-start pl-4 shadow-lg w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg text-indigo-100",
                                        children: t.act_manual
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 170,
                                        columnNumber: 1479
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-indigo-400",
                                        children: t.act_manual_desc
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 170,
                                        columnNumber: 1542
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 170,
                                columnNumber: 1264
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black/60 p-6 rounded-lg border border-red-500/30 shadow-[0_0_30px_rgba(220,38,38,0.1)] flex-1 flex flex-col justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-400 text-center text-lg font-bold mb-8 animate-pulse",
                                children: t.warn_loop
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 170,
                                columnNumber: 1768
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: {
                                            "SimulationView[<Button>.onClick]": ()=>playManualAction(1)
                                        }["SimulationView[<Button>.onClick]"],
                                        disabled: loading,
                                        className: "w-full h-14 bg-slate-800 hover:bg-slate-700 border border-slate-600 flex justify-between px-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl",
                                                children: "🏃"
                                            }, void 0, false, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                                lineNumber: 172,
                                                columnNumber: 177
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-sm text-slate-200",
                                                children: t.choice_run
                                            }, void 0, false, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                                lineNumber: 172,
                                                columnNumber: 212
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 170,
                                        columnNumber: 1889
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: {
                                            "SimulationView[<Button>.onClick]": ()=>playManualAction(2)
                                        }["SimulationView[<Button>.onClick]"],
                                        disabled: loading,
                                        className: "w-full h-14 bg-slate-800 hover:bg-slate-700 border border-slate-600 flex justify-between px-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl",
                                                children: "🫣"
                                            }, void 0, false, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                                lineNumber: 174,
                                                columnNumber: 177
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-sm text-slate-200",
                                                children: t.choice_hide
                                            }, void 0, false, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                                lineNumber: 174,
                                                columnNumber: 212
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 172,
                                        columnNumber: 293
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: {
                                            "SimulationView[<Button>.onClick]": ()=>playManualAction(3)
                                        }["SimulationView[<Button>.onClick]"],
                                        disabled: loading,
                                        className: "w-full h-14 bg-purple-900/40 hover:bg-purple-900/60 border border-purple-500/50 flex justify-between px-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl",
                                                children: "👁️"
                                            }, void 0, false, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                                lineNumber: 176,
                                                columnNumber: 189
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-sm text-purple-200",
                                                children: t.choice_gaze
                                            }, void 0, false, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                                lineNumber: 176,
                                                columnNumber: 225
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 174,
                                        columnNumber: 294
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 170,
                                columnNumber: 1862
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                        lineNumber: 170,
                        columnNumber: 1625
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-slate-600 mt-10",
                        children: "Waiting for selection..."
                    }, void 0, false, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                        lineNumber: 176,
                        columnNumber: 323
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                    lineNumber: 170,
                    columnNumber: 133
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[39] = batchSanityCheck;
        $[40] = currentInvestigator;
        $[41] = loading;
        $[42] = playManualAction;
        $[43] = playManualStart;
        $[44] = playQuick;
        $[45] = sanityCheck;
        $[46] = t.act_batch;
        $[47] = t.act_check;
        $[48] = t.act_manual;
        $[49] = t.act_manual_desc;
        $[50] = t.act_quick;
        $[51] = t.act_quick_desc;
        $[52] = t.choice_gaze;
        $[53] = t.choice_hide;
        $[54] = t.choice_run;
        $[55] = t.warn_loop;
        $[56] = t15;
    } else {
        t15 = $[56];
    }
    let t16;
    if ($[57] !== t13 || $[58] !== t15 || $[59] !== t5) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto mt-4 grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in zoom-in-95 duration-500",
            children: [
                t5,
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[57] = t13;
        $[58] = t15;
        $[59] = t5;
        $[60] = t16;
    } else {
        t16 = $[60];
    }
    return t16;
}
_c = SimulationView;
var _c;
__turbopack_context__.k.register(_c, "SimulationView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResearchView",
    ()=>ResearchView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-client] (ecmascript) <export default as PieChart>");
// Chart.js 元件 (注意：Chart.js 的註冊會在父層完成，這裡直接用)
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ResearchView() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('analysis');
    // Data
    const radarData = {
        labels: [
            'STR',
            'CON',
            'SIZ',
            'DEX',
            'APP',
            'INT',
            'POW',
            'EDU'
        ],
        datasets: [
            {
                label: 'Investigator Stats',
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
    const evolutionData = {
        labels: [
            'Narrative',
            'Visuals',
            'Ownership',
            'Transparency'
        ],
        datasets: [
            {
                label: 'TRPG',
                data: [
                    95,
                    20,
                    10,
                    60
                ],
                backgroundColor: 'rgba(255, 255, 255, 0.2)'
            },
            {
                label: 'CRPG',
                data: [
                    80,
                    90,
                    30,
                    85
                ],
                backgroundColor: 'rgba(52, 211, 153, 0.5)'
            },
            {
                label: 'GameFi',
                data: [
                    70,
                    75,
                    100,
                    100
                ],
                backgroundColor: 'rgba(139, 92, 246, 0.5)'
            }
        ]
    };
    const tokenomicsData = {
        labels: [
            'P2E Pool',
            'UGC Fund',
            'Ecosystem',
            'Liquidity',
            'Team'
        ],
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
    // Dice Sim
    const [diceResult, setDiceResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("--");
    const [checkResult, setCheckResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Ready");
    const [checkColor, setCheckColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("text-slate-500");
    const rollDice = ()=>{
        let steps = 0;
        const interval = setInterval(()=>{
            setDiceResult(String(Math.floor(Math.random() * 100) + 1));
            steps++;
            if (steps >= 10) {
                clearInterval(interval);
                const finalRoll = Math.floor(Math.random() * 100) + 1;
                setDiceResult(String(finalRoll));
                if (finalRoll <= 5) {
                    setCheckResult("Critical!");
                    setCheckColor("text-yellow-400");
                } else if (finalRoll > 95) {
                    setCheckResult("Fumble!");
                    setCheckColor("text-red-500");
                } else if (finalRoll <= 50) {
                    setCheckResult("Success");
                    setCheckColor("text-emerald-400");
                } else {
                    setCheckResult("Failure");
                    setCheckColor("text-red-400");
                }
            }
        }, 50);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-7xl mx-auto p-4 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-900/80 backdrop-blur-md border border-slate-700 p-6 rounded-xl shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-2xl font-bold shadow-inner text-white",
                                    children: "C"
                                }, void 0, false, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                    lineNumber: 81,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold text-white tracking-wide",
                                            children: "Project Cthulhu-Fi"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                            lineNumber: 82,
                                            columnNumber: 30
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-400 text-sm",
                                            children: "Research Terminal & Architecture Analysis"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                            lineNumber: 82,
                                            columnNumber: 113
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                    lineNumber: 82,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                            lineNumber: 80,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 bg-slate-950/50 p-1 rounded-lg",
                            children: [
                                'analysis',
                                'evolution',
                                'architecture'
                            ].map((sec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab(sec),
                                    className: `px-4 py-2 rounded-md text-sm font-medium transition-all capitalize ${activeTab === sec ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`,
                                    children: sec
                                }, sec, false, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                    lineNumber: 85,
                                    columnNumber: 79
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                            lineNumber: 84,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                    lineNumber: 79,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-h-[400px]",
                    children: [
                        activeTab === 'analysis' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-950/50 p-6 rounded-xl border border-slate-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-white mb-4 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 111
                                                }, this),
                                                " Investigator Attributes"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                            lineNumber: 92,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-[300px] flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Radar"], {
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
                                                                color: '#cbd5e1'
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
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                                lineNumber: 93,
                                                columnNumber: 93
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                            lineNumber: 93,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 text-xs text-slate-400 border-l-2 border-indigo-500 pl-2",
                                            children: "这些數值將直接對應 NFT Metadata，作為鏈上隨機數檢定 (VRF) 的門檻值。"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                            lineNumber: 115,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                    lineNumber: 91,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-950/50 p-6 rounded-xl border border-slate-700 flex flex-col justify-center items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-white mb-4",
                                            children: "On-Chain VRF Simulator"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                            lineNumber: 118,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-6xl font-mono font-bold text-white mb-2 animate-pulse text-shadow-glow",
                                            children: diceResult
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                            lineNumber: 119,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-xl font-bold mb-6 ${checkColor}`,
                                            children: checkResult
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                            lineNumber: 120,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: rollDice,
                                            className: "w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold h-12 shadow-lg",
                                            children: "Simulate Check (Target: 50)"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                            lineNumber: 121,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 text-xs text-slate-500",
                                            children: [
                                                "模拟 IOTA ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    children: "0x8::random"
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 84
                                                }, this),
                                                " 模组行为"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                            lineNumber: 122,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                    lineNumber: 117,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                            lineNumber: 90,
                            columnNumber: 50
                        }, this),
                        activeTab === 'evolution' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-950/50 p-6 rounded-xl border border-slate-700 animate-in fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                            lineNumber: 126,
                                            columnNumber: 109
                                        }, this),
                                        " Evolution: Tabletop to Blockchain"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                    lineNumber: 126,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[300px] mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
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
                                                    }
                                                }
                                            }
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                        lineNumber: 127,
                                        columnNumber: 61
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                    lineNumber: 127,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                            lineNumber: 125,
                            columnNumber: 51
                        }, this),
                        activeTab === 'architecture' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-950/50 p-6 rounded-xl border border-slate-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-violet-400 mb-4",
                                            children: "IOTA Tech Stack"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                            lineNumber: 146,
                                            columnNumber: 101
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3 text-sm text-slate-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-slate-500",
                                                            children: "Frontend:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 252
                                                        }, this),
                                                        " Next.js 14 + Tailwind + IOTA dApp Kit"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 225
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-slate-500",
                                                            children: "Contract:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 381
                                                        }, this),
                                                        " Move Smart Contract (IOTA Rebased)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 354
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-slate-500",
                                                            children: "Storage:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 507
                                                        }, this),
                                                        " On-Chain Objects (Structs) + Events"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 480
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                            lineNumber: 146,
                                            columnNumber: 176
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                    lineNumber: 146,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-950/50 p-6 rounded-xl border border-slate-700 flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-blue-400 mb-4 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__["PieChart"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 205
                                                }, this),
                                                " Tokenomics"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                            lineNumber: 147,
                                            columnNumber: 128
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-64 h-64",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Doughnut"], {
                                                data: tokenomicsData,
                                                options: {
                                                    plugins: {
                                                        legend: {
                                                            position: 'bottom',
                                                            labels: {
                                                                color: '#cbd5e1'
                                                            }
                                                        }
                                                    }
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                                lineNumber: 147,
                                                columnNumber: 270
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                            lineNumber: 147,
                                            columnNumber: 243
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                                    lineNumber: 147,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                            lineNumber: 145,
                            columnNumber: 54
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
                    lineNumber: 89,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
            lineNumber: 78,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/research/ResearchView.tsx",
        lineNumber: 77,
        columnNumber: 10
    }, this);
}
_s(ResearchView, "PZ2xdz8i8Qw9Sk5CCXmGZJyBgUo=");
_c = ResearchView;
var _c;
__turbopack_context__.k.register(_c, "ResearchView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx'\n\n'import', and 'export' cannot be used outside of module code");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/iota-cthulhu-gamefi/client/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/dapp-kit/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$GameDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function Home() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "8a05ed0a535add157a153585d0b06be9a14f6ec2d273425f4d779fd0f69045dd") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8a05ed0a535add157a153585d0b06be9a14f6ec2d273425f4d779fd0f69045dd";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 to-black p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex justify-between items-center max-w-4xl mx-auto py-6 border-b border-slate-800 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-3xl",
                                    children: "🐙"
                                }, void 0, false, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                                    lineNumber: 16,
                                    columnNumber: 281
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent",
                                    children: "IOTA TRPG"
                                }, void 0, false, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                                    lineNumber: 16,
                                    columnNumber: 317
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                            lineNumber: 16,
                            columnNumber: 240
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectButton"], {}, void 0, false, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                            lineNumber: 16,
                            columnNumber: 447
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                    lineNumber: 16,
                    columnNumber: 135
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$GameDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GameDashboard"], {}, void 0, false, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                    lineNumber: 16,
                    columnNumber: 470
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "text-center text-slate-600 mt-20 text-sm",
                    children: "Powered by IOTA Move Rebased & Next.js"
                }, void 0, false, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                    lineNumber: 16,
                    columnNumber: 487
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
            lineNumber: 16,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=iota-cthulhu-gamefi_client_src_2c6f6c1d._.js.map