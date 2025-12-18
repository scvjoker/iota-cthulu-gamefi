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
const PACKAGE_ID = "0xa42fd9753810179c2d4dee5b2d3b832eefd5769658ea5d1a333247e68d983af2";
const MODULE_NAME = "investigator";
const RANDOM_OBJECT_ID = "0x8";
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
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scroll$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/scroll.js [app-client] (ecmascript) <export default as Scroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/ui/card.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/utils/localization'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
;
function HistorySection(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "587d4ab109e2e433d1e57d3cb161732ed658ed970f824b34c9cbf0a22d31e0b1") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "587d4ab109e2e433d1e57d3cb161732ed658ed970f824b34c9cbf0a22d31e0b1";
    }
    const { history, lang } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scroll$3e$__["Scroll"], {
            size: 16,
            className: "text-indigo-400"
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const t2 = lang === "zh" ? "\u5192\u96AA\u65E5\u8A8C" : "Adventure Logs";
    let t3;
    if ($[2] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "bg-slate-950/80 border-b border-slate-800 pb-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                className: "text-slate-200 text-sm flex items-center gap-2",
                children: [
                    t1,
                    " ",
                    t2
                ]
            }, void 0, true, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                lineNumber: 30,
                columnNumber: 81
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[2] = t2;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== history || $[5] !== lang) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "flex-1 overflow-y-auto p-0 custom-scrollbar",
            children: history.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full flex flex-col items-center justify-center text-slate-600 text-xs",
                children: "No records found."
            }, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                lineNumber: 38,
                columnNumber: 103
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "divide-y divide-slate-800",
                children: history.map({
                    "HistorySection[history.map()]": (entry, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 hover:bg-slate-800/30 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-start mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded w-fit ${entry.outcome === "Madness" ? "bg-red-900/30 text-red-400" : entry.outcome === "Escaped" ? "bg-emerald-900/30 text-emerald-400" : entry.outcome === "Resigned" ? "bg-gray-700 text-gray-300" : "bg-indigo-900/30 text-indigo-300"}`,
                                                    children: entry.outcome
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 213
                                                }, this),
                                                entry.investigatorName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-slate-500 mt-1 font-mono",
                                                    children: entry.investigatorName
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 580
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                                            lineNumber: 39,
                                            columnNumber: 182
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-slate-600 flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    size: 10
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 747
                                                }, this),
                                                " ",
                                                new Date(entry.timestamp).toLocaleTimeString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                                            lineNumber: 39,
                                            columnNumber: 678
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                                    lineNumber: 39,
                                    columnNumber: 127
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        entry.logs.slice(0, 3).map({
                                            "HistorySection[history.map() > (anonymous)()]": (log, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-400 font-mono line-clamp-1",
                                                    children: processLog(log, lang)
                                                }, j, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 78
                                                }, this)
                                        }["HistorySection[history.map() > (anonymous)()]"]),
                                        entry.logs.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-slate-600 italic",
                                            children: [
                                                "... +",
                                                entry.logs.length - 3,
                                                " more"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                                            lineNumber: 41,
                                            columnNumber: 93
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                                    lineNumber: 39,
                                    columnNumber: 828
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                            lineNumber: 39,
                            columnNumber: 58
                        }, this)
                }["HistorySection[history.map()]"])
            }, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
                lineNumber: 38,
                columnNumber: 218
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[4] = history;
        $[5] = lang;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t3 || $[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "bg-slate-900/90 border-slate-700 shadow-xl backdrop-blur-sm h-[400px] flex flex-col",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    return t5;
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
(()=>{
    const e = new Error("Cannot find module '@/utils/localization'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
                __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(TEXTS[lang].claim_error, {
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
    const t7 = TEXTS[lang];
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
    const t9 = TEXTS[lang];
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
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2d$pattern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/fingerprint-pattern.js [app-client] (ecmascript) <export default as Fingerprint>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-client] (ecmascript) <export default as Gamepad2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
"use client";
;
;
;
;
;
;
function SimulationView(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(61);
    if ($[0] !== "b44d0f37b277e6133c0ca4919f637a9c0640e28383ae7b1ff62de5abe368a7e3") {
        for(let $i = 0; $i < 61; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b44d0f37b277e6133c0ca4919f637a9c0640e28383ae7b1ff62de5abe368a7e3";
    }
    const { account, investigators, currentInvestigator, loading, t, mint, singleSanityCheck, batchSanityCheck, playQuick, playManualStart, playManualAction, resign, setSelectedId, getImageUrl } = t0;
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
    const depth = currentInvestigator?.loop_depth || 0;
    const san = currentInvestigator?.san || 0;
    const penalty = depth * 5;
    const survivalRate = Math.max(5, Math.min(100, san - penalty));
    let t1;
    if ($[2] !== t.list_title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-2 bg-slate-950/50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                className: "text-slate-200 text-sm uppercase tracking-wider",
                children: t.list_title
            }, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                lineNumber: 48,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
            lineNumber: 48,
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
                                    lineNumber: 61,
                                    columnNumber: 421
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 61,
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
                                        lineNumber: 61,
                                        columnNumber: 529
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-slate-400 block font-mono",
                                        children: inv.is_mad ? "KIA" : `SAN: ${inv.san}`
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 61,
                                        columnNumber: 609
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 61,
                                columnNumber: 496
                            }, this)
                        ]
                    }, inv.id, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                        lineNumber: 59,
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
            lineNumber: 81,
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
            lineNumber: 91,
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
            lineNumber: 100,
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
            lineNumber: 109,
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
            lineNumber: 116,
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
            lineNumber: 124,
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
            lineNumber: 132,
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
                lineNumber: 140,
                columnNumber: 82
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
            lineNumber: 140,
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
                                        lineNumber: 149,
                                        columnNumber: 327
                                    }, this),
                                    currentInvestigator.is_mad && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-red-900/60 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold text-white bg-red-600 px-1 transform -rotate-12",
                                            children: "DECEASED"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                            lineNumber: 149,
                                            columnNumber: 524
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 149,
                                        columnNumber: 443
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 149,
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
                                                lineNumber: 149,
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
                                                lineNumber: 149,
                                                columnNumber: 791
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 149,
                                        columnNumber: 670
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                        value: currentInvestigator.san / currentInvestigator.max_san * 100,
                                        className: `h-2 bg-slate-800 ${currentInvestigator.is_mad ? "[&>div]:bg-red-600" : "[&>div]:bg-indigo-500"}`
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 149,
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
                                                        lineNumber: 149,
                                                        columnNumber: 1239
                                                    }, this),
                                                    " ",
                                                    currentInvestigator.exp,
                                                    " MIST"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                                lineNumber: 149,
                                                columnNumber: 1100
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs bg-black/40 px-2 py-1 rounded border border-slate-700 text-purple-400 font-mono flex items-center gap-1 shadow-md",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 1440
                                                    }, this),
                                                    " ",
                                                    currentInvestigator.clues || 0,
                                                    " Clues"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                                lineNumber: 149,
                                                columnNumber: 1301
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 149,
                                        columnNumber: 1057
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 149,
                                columnNumber: 636
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                        lineNumber: 149,
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
                                        children: "STR"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 149,
                                        columnNumber: 1675
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-mono text-orange-400",
                                        children: currentInvestigator.str
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 149,
                                        columnNumber: 1736
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 149,
                                columnNumber: 1562
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-950/50 p-3 rounded border border-slate-800 flex justify-between items-center shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-500 font-bold",
                                        children: "DEX"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 149,
                                        columnNumber: 1939
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-mono text-green-400",
                                        children: currentInvestigator.dex
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 149,
                                        columnNumber: 2000
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 149,
                                columnNumber: 1826
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-950/50 p-3 rounded border border-slate-800 flex justify-between items-center shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-500 font-bold",
                                        children: "SAN"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 149,
                                        columnNumber: 2202
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-mono text-blue-400",
                                        children: currentInvestigator.san
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 149,
                                        columnNumber: 2263
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 149,
                                columnNumber: 2089
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-950/50 p-3 rounded border border-slate-800 flex justify-between items-center shadow-sm opacity-60",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-500 font-bold",
                                        children: "LUK"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 149,
                                        columnNumber: 2475
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-mono text-gray-400",
                                        children: "50"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 149,
                                        columnNumber: 2536
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 149,
                                columnNumber: 2351
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                        lineNumber: 149,
                        columnNumber: 1522
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
                                                lineNumber: 149,
                                                columnNumber: 2812
                                            }, this),
                                            " Depth"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 149,
                                        columnNumber: 2755
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
                                        lineNumber: 149,
                                        columnNumber: 2845
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 149,
                                columnNumber: 2696
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
                                                lineNumber: 149,
                                                columnNumber: 3067
                                            }, this),
                                            " Status"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 149,
                                        columnNumber: 3010
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `${currentInvestigator.is_mad ? "text-red-500" : "text-emerald-500"} font-mono font-bold`,
                                        children: currentInvestigator.is_mad ? "CRITICAL" : "STABLE"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 149,
                                        columnNumber: 3103
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 149,
                                columnNumber: 2951
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                        lineNumber: 149,
                        columnNumber: 2607
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
                        lineNumber: 149,
                        columnNumber: 3375
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm",
                        children: "Select personnel"
                    }, void 0, false, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                        lineNumber: 149,
                        columnNumber: 3407
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                lineNumber: 149,
                columnNumber: 3288
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
            lineNumber: 149,
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
            lineNumber: 158,
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
                        lineNumber: 167,
                        columnNumber: 131
                    }, this),
                    " Action Panel"
                ]
            }, void 0, true, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                lineNumber: 167,
                columnNumber: 82
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[38] = t14;
    } else {
        t14 = $[38];
    }
    let t15;
    if ($[39] !== batchSanityCheck || $[40] !== currentInvestigator || $[41] !== loading || $[42] !== playManualAction || $[43] !== playManualStart || $[44] !== playQuick || $[45] !== resign || $[46] !== singleSanityCheck || $[47] !== survivalRate || $[48] !== t.act_manual || $[49] !== t.act_manual_desc || $[50] !== t.act_quick || $[51] !== t.act_quick_desc || $[52] !== t.choice_gaze || $[53] !== t.choice_hide || $[54] !== t.choice_run || $[55] !== t.warn_loop) {
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
                                children: "Demo / Stress Test"
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 174,
                                columnNumber: 274
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: singleSanityCheck,
                                        disabled: loading || currentInvestigator.is_mad,
                                        variant: "outline",
                                        className: "h-12 border-yellow-500/30 text-yellow-300 hover:bg-yellow-950/50",
                                        children: "🎲 Single Check"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 174,
                                        columnNumber: 403
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: batchSanityCheck,
                                        disabled: loading || currentInvestigator.is_mad,
                                        className: "h-12 bg-yellow-900/30 text-yellow-200 border border-yellow-800/50 hover:bg-yellow-900/60",
                                        children: "🔥 Batch (x3)"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 174,
                                        columnNumber: 607
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 174,
                                columnNumber: 363
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-slate-800 my-2"
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 174,
                                columnNumber: 820
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-slate-400 mb-2 uppercase font-bold",
                                children: "Exploration"
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 174,
                                columnNumber: 870
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-black/40 p-3 rounded border border-slate-700 mb-2 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1 text-slate-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 1148
                                                    }, this),
                                                    " Survival"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                                lineNumber: 174,
                                                columnNumber: 1091
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${survivalRate < 30 ? "text-red-500" : "text-emerald-400"} font-mono`,
                                                children: [
                                                    survivalRate,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                                lineNumber: 174,
                                                columnNumber: 1190
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 174,
                                        columnNumber: 1032
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                        value: survivalRate,
                                        className: "h-1 bg-slate-800 [&>div]:bg-slate-500"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 174,
                                        columnNumber: 1307
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center text-xs mt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1 text-slate-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 1511
                                                    }, this),
                                                    " Escape"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                                lineNumber: 174,
                                                columnNumber: 1454
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-yellow-500 font-mono",
                                                children: [
                                                    5,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                                lineNumber: 174,
                                                columnNumber: 1552
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 174,
                                        columnNumber: 1390
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 174,
                                columnNumber: 952
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
                                        lineNumber: 174,
                                        columnNumber: 1821
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-400",
                                        children: t.act_quick_desc
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 174,
                                        columnNumber: 1878
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 174,
                                columnNumber: 1619
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
                                        lineNumber: 174,
                                        columnNumber: 2168
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-indigo-400",
                                        children: t.act_manual_desc
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 174,
                                        columnNumber: 2231
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 174,
                                columnNumber: 1953
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-slate-800 my-2"
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 174,
                                columnNumber: 2308
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-red-400 mb-2 uppercase font-bold",
                                children: "Career End"
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 174,
                                columnNumber: 2358
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: resign,
                                disabled: loading || currentInvestigator.is_mad,
                                className: "w-full bg-red-900/20 border border-red-900/50 hover:bg-red-900/40 text-red-400 h-10 text-xs",
                                children: "💔 Submit Resignation (Burn NFT)"
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 174,
                                columnNumber: 2437
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
                                lineNumber: 174,
                                columnNumber: 2805
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
                                                lineNumber: 176,
                                                columnNumber: 177
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-sm text-slate-200",
                                                children: t.choice_run
                                            }, void 0, false, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                                lineNumber: 176,
                                                columnNumber: 212
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 174,
                                        columnNumber: 2926
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
                                                lineNumber: 178,
                                                columnNumber: 177
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-sm text-slate-200",
                                                children: t.choice_hide
                                            }, void 0, false, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                                lineNumber: 178,
                                                columnNumber: 212
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 176,
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
                                                lineNumber: 180,
                                                columnNumber: 189
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-sm text-purple-200",
                                                children: t.choice_gaze
                                            }, void 0, false, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                                lineNumber: 180,
                                                columnNumber: 225
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                        lineNumber: 178,
                                        columnNumber: 294
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                                lineNumber: 174,
                                columnNumber: 2899
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                        lineNumber: 174,
                        columnNumber: 2662
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-slate-600 mt-10",
                        children: "Waiting for selection..."
                    }, void 0, false, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                        lineNumber: 180,
                        columnNumber: 323
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
                    lineNumber: 174,
                    columnNumber: 133
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx",
            lineNumber: 174,
            columnNumber: 11
        }, this);
        $[39] = batchSanityCheck;
        $[40] = currentInvestigator;
        $[41] = loading;
        $[42] = playManualAction;
        $[43] = playManualStart;
        $[44] = playQuick;
        $[45] = resign;
        $[46] = singleSanityCheck;
        $[47] = survivalRate;
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
            lineNumber: 204,
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
"[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameDashboard",
    ()=>GameDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/dapp-kit/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/Transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/utils/constants.ts [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/utils/localization'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$shared$2f$CinematicText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/shared/CinematicText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$game$2f$HistorySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/game/HistorySection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$game$2f$LeaderboardSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/game/LeaderboardSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$game$2f$SimulationView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/game/SimulationView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/ui/button.tsx [app-client] (ecmascript)");
// Chart.js 註冊
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RadialLinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Filler"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"]);
// AdventureOverlay 保持不變，只負責顯示當下的冒險 Log
function AdventureOverlay(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "3598fc423b2e9b14a808749f9332268c7801d2b8907b91598e967968f28f6ac3") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3598fc423b2e9b14a808749f9332268c7801d2b8907b91598e967968f28f6ac3";
    }
    const { logs, onClose, outcome, lang } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [displayLogs, setDisplayLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const bottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    if ($[2] !== currentIndex || $[3] !== lang || $[4] !== logs) {
        t2 = ({
            "AdventureOverlay[useEffect()]": ()=>{
                if (currentIndex < logs.length) {
                    const timer = setTimeout({
                        "AdventureOverlay[useEffect() > setTimeout()]": ()=>{
                            setDisplayLogs({
                                "AdventureOverlay[useEffect() > setTimeout() > setDisplayLogs()]": (prev)=>[
                                        ...prev,
                                        processLog(logs[currentIndex], lang)
                                    ]
                            }["AdventureOverlay[useEffect() > setTimeout() > setDisplayLogs()]"]);
                            setCurrentIndex(_AdventureOverlayUseEffectSetTimeoutSetCurrentIndex);
                        }
                    }["AdventureOverlay[useEffect() > setTimeout()]"], 800);
                    return ()=>clearTimeout(timer);
                }
            }
        })["AdventureOverlay[useEffect()]"];
        $[2] = currentIndex;
        $[3] = lang;
        $[4] = logs;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== currentIndex || $[7] !== logs) {
        t3 = [
            currentIndex,
            logs
        ];
        $[6] = currentIndex;
        $[7] = logs;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "AdventureOverlay[useEffect()]": ()=>{
                bottomRef.current?.scrollIntoView({
                    behavior: "smooth"
                });
            }
        })["AdventureOverlay[useEffect()]"];
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== displayLogs) {
        t5 = [
            displayLogs
        ];
        $[10] = displayLogs;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    const isFinished = currentIndex >= logs.length;
    const isFinalEnding = outcome === "MADNESS" || outcome === "Escaped" || outcome === "Madness" || outcome === "Resigned";
    let t6;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 border-b border-slate-800 bg-slate-900",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-mono text-green-500 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "animate-pulse",
                        children: "●"
                    }, void 0, false, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 105,
                        columnNumber: 143
                    }, this),
                    " TRPG LOG"
                ]
            }, void 0, true, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                lineNumber: 105,
                columnNumber: 70
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== displayLogs) {
        t7 = displayLogs.map(_AdventureOverlayDisplayLogsMap);
        $[13] = displayLogs;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: bottomRef
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto p-6 font-mono text-base space-y-4 custom-scrollbar",
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        $[16] = t7;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== isFinalEnding || $[19] !== isFinished || $[20] !== onClose || $[21] !== outcome) {
        t10 = isFinished && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 border-t border-slate-800 flex justify-center bg-slate-900",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: {
                    "AdventureOverlay[<Button>.onClick]": ()=>onClose(isFinalEnding, outcome)
                }["AdventureOverlay[<Button>.onClick]"],
                className: "w-full max-w-sm bg-slate-100 text-black hover:bg-white font-bold text-lg h-12",
                children: outcome === "Looping" ? "\uD83D\uDD04 Continue" : "\uD83D\uDEAA Close"
            }, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                lineNumber: 135,
                columnNumber: 105
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 135,
            columnNumber: 25
        }, this);
        $[18] = isFinalEnding;
        $[19] = isFinished;
        $[20] = onClose;
        $[21] = outcome;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== t10 || $[24] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-6 animate-in fade-in duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl w-full h-[80vh] flex flex-col gap-4 border-x border-slate-800 bg-slate-950/50",
                children: [
                    t6,
                    t9,
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                lineNumber: 148,
                columnNumber: 137
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[23] = t10;
        $[24] = t9;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    return t11;
}
_s(AdventureOverlay, "Y5zKOIhgaQzXUi3bQz3/IpguaSM=");
_c = AdventureOverlay;
function _AdventureOverlayDisplayLogsMap(log, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-l-2 border-slate-700 pl-4 py-2 animate-in slide-in-from-left-2 fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-300",
            children: log
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 158,
            columnNumber: 115
        }, this)
    }, idx, false, {
        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
        lineNumber: 158,
        columnNumber: 10
    }, this);
}
function _AdventureOverlayUseEffectSetTimeoutSetCurrentIndex(prev_0) {
    return prev_0 + 1;
}
function GameDashboard({ lang }) {
    _s1();
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentAccount"])();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIotaClient"])();
    const { mutate: signAndExecuteTransaction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignAndExecuteTransaction"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [investigators, setInvestigators] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [adventureData, setAdventureData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showIntro, setShowIntro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [outroType, setOutroType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("none");
    // 🔥 修正 1: 使用包含 PACKAGE_ID 的 Key，確保換合約後 Log 不會混淆
    const STORAGE_KEY = `iota_trpg_history_${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PACKAGE_ID"]}`;
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameDashboard.useEffect": ()=>{
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) try {
                setHistory(JSON.parse(saved));
            } catch (e) {}
        }
    }["GameDashboard.useEffect"], []);
    const currentInvestigator = investigators.find((i)=>i.id === selectedId);
    const t = TEXTS[lang];
    // 🔥 修正 2: 儲存 History 時，加入角色 ID 和名稱
    const addToHistory = (logs, outcome)=>{
        if (!currentInvestigator) return;
        const newEntry = {
            id: crypto.randomUUID(),
            // 給 Log 一個唯一 ID
            timestamp: Date.now(),
            logs,
            outcome,
            investigatorId: currentInvestigator.id,
            // 綁定角色 ID
            investigatorName: currentInvestigator.name // 綁定角色名稱
        };
        const newHistory = [
            newEntry,
            ...history
        ]; // 新的在最前
        setHistory(newHistory);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
    };
    const fetchInvestigators = async ()=>{
        if (!account) return;
        const objects = await client.getOwnedObjects({
            owner: account.address,
            options: {
                showType: true,
                showContent: true
            }
        });
        const targetType = `${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PACKAGE_ID"]}::${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODULE_NAME"]}::Investigator`;
        const foundList = objects.data.filter((obj)=>obj.data?.type === targetType).map((obj_0)=>{
            if (obj_0.data?.content?.dataType === "moveObject") return {
                ...obj_0.data.content.fields,
                id: obj_0.data.objectId
            };
            return null;
        }).filter(Boolean);
        setInvestigators(foundList);
        if (!selectedId && foundList.length > 0) setSelectedId(foundList[0].id);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameDashboard.useEffect": ()=>{
            fetchInvestigators();
        }
    }["GameDashboard.useEffect"], [
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
                        const r_0 = await client.getTransactionBlock({
                            digest: result.digest,
                            options: {
                                showEvents: true,
                                showEffects: true
                            }
                        });
                        events = r_0.events || [];
                    } catch (e_0) {}
                }
                const event = events.find((e_1)=>e_1.type.includes("ScenarioEvent"));
                if (event) {
                    // 顯示冒險視窗
                    setAdventureData({
                        logs: event.parsedJson?.logs,
                        outcome: event.parsedJson?.outcome
                    });
                    // 寫入歷史紀錄
                    addToHistory(event.parsedJson?.logs, event.parsedJson?.outcome);
                }
                setLoading(false);
            },
            onError: (e_2)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(e_2.message);
                setLoading(false);
            }
        });
    };
    const mint = ()=>{
        const tx_0 = new __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]();
        tx_0.moveCall({
            target: `${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PACKAGE_ID"]}::${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODULE_NAME"]}::mint`,
            arguments: [
                tx_0.object(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANDOM_OBJECT_ID"]),
                tx_0.pure.vector("u8", Array.from(new TextEncoder().encode("Staff #" + Math.floor(Math.random() * 9000 + 1000))))
            ]
        });
        tx_0.setGasBudget(50000000);
        signAndExecuteTransaction({
            transaction: tx_0,
            options: {
                showEffects: true,
                showEvents: true
            }
        }, {
            onSuccess: ()=>{
                setLoading(false);
                setTimeout(fetchInvestigators, 1000);
                setShowIntro(true);
            },
            onError: (err)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message);
                setLoading(false);
            }
        });
    };
    const resign = ()=>{
        if (!currentInvestigator) return;
        const tx_1 = new __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]();
        tx_1.moveCall({
            target: `${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PACKAGE_ID"]}::${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODULE_NAME"]}::resign`,
            arguments: [
                tx_1.object(currentInvestigator.id)
            ]
        });
        tx_1.setGasBudget(50000000);
        signAndExecuteTransaction({
            transaction: tx_1,
            options: {
                showEffects: true,
                showEvents: true
            }
        }, {
            onSuccess: (result_0)=>{
                setLoading(false);
                __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(lang === 'zh' ? "離職手續已完成 (NFT 銷毀)" : "Resignation Accepted (NFT Burned)");
                const logs_0 = [
                    "=== HR Department ===",
                    "Resignation letter received.",
                    "NFT Access Card destroyed.",
                    "You are free."
                ];
                setAdventureData({
                    logs: logs_0,
                    outcome: "Resigned"
                });
                addToHistory(logs_0, "Resigned");
                setTimeout(()=>{
                    fetchInvestigators();
                    setSelectedId(null);
                }, 1000);
            },
            onError: (err_0)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err_0.message);
                setLoading(false);
            }
        });
    };
    const singleSanityCheck = ()=>{
        if (!currentInvestigator) return;
        const tx_2 = new __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]();
        tx_2.moveCall({
            target: `${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PACKAGE_ID"]}::${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODULE_NAME"]}::sanity_check`,
            arguments: [
                tx_2.object(currentInvestigator.id),
                tx_2.object(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANDOM_OBJECT_ID"])
            ]
        });
        executeScenarioTx(tx_2);
    };
    const batchSanityCheck = ()=>{
        if (!currentInvestigator) return;
        const tx_3 = new __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]();
        tx_3.moveCall({
            target: `${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PACKAGE_ID"]}::${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODULE_NAME"]}::batch_sanity_check`,
            arguments: [
                tx_3.object(currentInvestigator.id),
                tx_3.object(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANDOM_OBJECT_ID"])
            ]
        });
        executeScenarioTx(tx_3);
    };
    const playQuick = ()=>{
        if (!currentInvestigator) return;
        const tx_4 = new __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]();
        tx_4.moveCall({
            target: `${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PACKAGE_ID"]}::${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODULE_NAME"]}::play_stairs_quick`,
            arguments: [
                tx_4.object(currentInvestigator.id),
                tx_4.object(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANDOM_OBJECT_ID"])
            ]
        });
        executeScenarioTx(tx_4);
    };
    const playManualStart = ()=>{
        if (!currentInvestigator) return;
        const tx_5 = new __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]();
        tx_5.moveCall({
            target: `${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PACKAGE_ID"]}::${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODULE_NAME"]}::manual_start`,
            arguments: [
                tx_5.object(currentInvestigator.id),
                tx_5.object(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANDOM_OBJECT_ID"])
            ]
        });
        executeScenarioTx(tx_5);
    };
    const playManualAction = (c)=>{
        if (!currentInvestigator) return;
        const tx_6 = new __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]();
        tx_6.moveCall({
            target: `${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PACKAGE_ID"]}::${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODULE_NAME"]}::manual_resolve`,
            arguments: [
                tx_6.object(currentInvestigator.id),
                tx_6.object(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANDOM_OBJECT_ID"]),
                tx_6.pure.u8(c)
            ]
        });
        executeScenarioTx(tx_6);
    };
    const getImageUrl = (inv)=>inv?.is_mad ? "/images/madness.png" : "/images/investigator.png";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showIntro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$shared$2f$CinematicText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CinematicText"], {
                lines: t.intro_lines,
                onComplete: ()=>setShowIntro(false)
            }, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                lineNumber: 382,
                columnNumber: 25
            }, this),
            outroType !== "none" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$shared$2f$CinematicText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CinematicText"], {
                lines: outroType === "madness" ? t.outro_madness : t.outro_escaped,
                onComplete: ()=>setOutroType("none"),
                isMadness: outroType === "madness"
            }, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                lineNumber: 383,
                columnNumber: 36
            }, this),
            adventureData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdventureOverlay, {
                logs: adventureData.logs,
                outcome: adventureData.outcome,
                lang: lang,
                onClose: (ended, outcome_0)=>{
                    setAdventureData(null);
                    fetchInvestigators();
                    if (ended) setOutroType(outcome_0.toLowerCase().includes("mad") ? "madness" : "escaped");
                }
            }, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                lineNumber: 384,
                columnNumber: 29
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto mt-8 px-4 pb-20 animate-in fade-in zoom-in-95 duration-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-indigo-600 font-serif tracking-widest uppercase mb-2",
                                children: t.title
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 391,
                                columnNumber: 49
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 text-sm tracking-widest",
                                children: t.subtitle
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 391,
                                columnNumber: 226
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 391,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$game$2f$SimulationView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimulationView"], {
                        account: account,
                        investigators: investigators,
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
                        getImageUrl: getImageUrl,
                        lang: lang
                    }, void 0, false, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 392,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$game$2f$HistorySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HistorySection"], {
                                history: history,
                                lang: lang
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 395,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$game$2f$LeaderboardSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeaderboardSection"], {
                                client: client,
                                lang: lang
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 396,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 393,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                lineNumber: 390,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true);
}
_s1(GameDashboard, "oXIJ3ty1L/PTRvWffVBvY4sDEPc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIotaClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignAndExecuteTransaction"]
    ];
});
_c1 = GameDashboard;
var _c, _c1;
__turbopack_context__.k.register(_c, "AdventureOverlay");
__turbopack_context__.k.register(_c1, "GameDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResearchView",
    ()=>ResearchView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-client] (ecmascript) <export default as PieChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dice$2d$5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dice5$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/dice-5.js [app-client] (ecmascript) <export default as Dice5>");
// --- 🔥 Chart.js 修正：必須在這裡引入並註冊 ---
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// 註冊所有需要的圖表元件
__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RadialLinearScale"], // 雷達圖必須
__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Filler"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"], // 圓餅圖必須
__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], // 長條圖必須
__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"]);
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
    _s();
    // 安全檢查：如果 lang 沒傳進來，預設為 'zh'
    const safeLang = lang || 'zh';
    const activeTexts = RESEARCH_TEXTS[safeLang];
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('analysis');
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
    const [diceResult, setDiceResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("--");
    const [checkResult, setCheckResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(activeTexts.dice_status.ready);
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
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                    lineNumber: 227,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold text-white tracking-wide",
                                            children: "Project Cthulhu-Fi"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 229,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-400 text-sm",
                                            children: "Research Terminal & Architecture Analysis"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 230,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                    lineNumber: 228,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                            lineNumber: 226,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 bg-slate-950/50 p-1 rounded-lg border border-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveSection('analysis'),
                                    className: `px-4 py-2 rounded-md text-sm font-medium transition-all ${activeSection === 'analysis' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`,
                                    children: activeTexts.tabs.analysis
                                }, void 0, false, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                    lineNumber: 235,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveSection('evolution'),
                                    className: `px-4 py-2 rounded-md text-sm font-medium transition-all ${activeSection === 'evolution' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`,
                                    children: activeTexts.tabs.evolution
                                }, void 0, false, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                    lineNumber: 236,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveSection('architecture'),
                                    className: `px-4 py-2 rounded-md text-sm font-medium transition-all ${activeSection === 'architecture' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`,
                                    children: activeTexts.tabs.architecture
                                }, void 0, false, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                    lineNumber: 237,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                            lineNumber: 234,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                    lineNumber: 225,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-h-[400px]",
                    children: [
                        activeSection === 'analysis' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6 animate-in fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-l-4 border-indigo-500 pl-4 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-white",
                                            children: activeTexts.analysis_title
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 247,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-400 mt-1",
                                            children: activeTexts.analysis_desc
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 248,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                    lineNumber: 246,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
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
                                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 115
                                                        }, this),
                                                        " ",
                                                        activeTexts.chart_radar_title
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 37
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
                                                        lineNumber: 255,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-4 text-xs text-slate-400 border-l-2 border-indigo-500 pl-2 bg-indigo-900/10 p-2 rounded",
                                                    children: activeTexts.analysis_insight
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 252,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-950/50 p-6 rounded-xl border border-slate-700 flex flex-col justify-center items-center relative overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-0 right-0 p-4 opacity-10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dice$2d$5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dice5$3e$__["Dice5"], {
                                                        size: 100
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 92
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-white mb-2",
                                                    children: activeTexts.dice_title
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500 mb-6 text-center px-4",
                                                    children: activeTexts.dice_desc
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-6xl font-mono font-bold text-white mb-2 animate-pulse text-shadow-glow",
                                                    children: diceResult
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `text-xl font-bold mb-6 ${checkColor}`,
                                                    children: checkResult
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full px-10 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between text-xs text-slate-400 mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: activeTexts.dice_target
                                                                }, void 0, false, {
                                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                                    lineNumber: 295,
                                                                    columnNumber: 107
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white font-bold",
                                                                    children: "50"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                                    lineNumber: 295,
                                                                    columnNumber: 145
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                            lineNumber: 295,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-2 bg-slate-700 rounded-full overflow-hidden",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-full bg-indigo-500 w-1/2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                                lineNumber: 296,
                                                                columnNumber: 104
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                            lineNumber: 296,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: rollDice,
                                                    className: "w-full max-w-xs bg-indigo-600 hover:bg-indigo-500 text-white font-bold h-12 shadow-lg shadow-indigo-500/20",
                                                    children: activeTexts.dice_btn
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 286,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                    lineNumber: 251,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                            lineNumber: 245,
                            columnNumber: 54
                        }, this),
                        activeSection === 'evolution' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-950/50 p-6 rounded-xl border border-slate-700 animate-in fade-in space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-l-4 border-emerald-500 pl-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-white",
                                            children: activeTexts.evo_title
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 309,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-400 mt-1",
                                            children: activeTexts.evo_desc
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 310,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                    lineNumber: 308,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm",
                                    children: activeTexts.evo_stages.map((stage, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 bg-slate-900 rounded border border-slate-700 hover:border-emerald-500 transition-colors group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl font-serif text-slate-700 font-bold mb-2 group-hover:text-emerald-500/50 transition-colors",
                                                    children: [
                                                        "I",
                                                        "II",
                                                        "III"
                                                    ][idx]
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-emerald-400 block mb-2 text-lg",
                                                    children: stage.title
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "text-slate-400 space-y-1 list-disc list-inside",
                                                    children: stage.desc.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: d
                                                        }, i, false, {
                                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 71
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 314,
                                            columnNumber: 77
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                    lineNumber: 313,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[300px]",
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
                                        lineNumber: 324,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                    lineNumber: 323,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                            lineNumber: 307,
                            columnNumber: 55
                        }, this),
                        activeSection === 'architecture' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6 animate-in fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-l-4 border-violet-500 pl-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-white",
                                            children: activeTexts.arch_title
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 357,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-400 mt-1",
                                            children: activeTexts.arch_desc
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 358,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                    lineNumber: 356,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-950/50 p-6 rounded-xl border border-slate-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-violet-400 mb-4 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                            lineNumber: 364,
                                                            columnNumber: 116
                                                        }, this),
                                                        " ",
                                                        activeTexts.stack_title
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: activeTexts.stack_layers.map((layer, idx_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-24 text-right text-xs font-bold text-slate-500 mr-4",
                                                                    children: [
                                                                        layer.name.split(" ")[0],
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                                            lineNumber: 367,
                                                                            columnNumber: 146
                                                                        }, this),
                                                                        layer.name.split(" ")[1]
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                                    lineNumber: 367,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `flex-1 bg-slate-800 p-3 rounded border-l-4 ${idx_0 === 0 ? 'border-blue-500' : idx_0 === 1 ? 'border-violet-500' : 'border-emerald-500'} text-sm text-slate-200 shadow-lg relative`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-bold text-blue-400",
                                                                            children: layer.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                                            lineNumber: 369,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-slate-400",
                                                                            children: layer.desc
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                                            lineNumber: 370,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                                    lineNumber: 368,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, idx_0, true, {
                                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                            lineNumber: 366,
                                                            columnNumber: 89
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 363,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-950/50 p-6 rounded-xl border border-slate-700 flex flex-col items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-blue-400 mb-4 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__["PieChart"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                            lineNumber: 378,
                                                            columnNumber: 114
                                                        }, this),
                                                        " ",
                                                        activeTexts.token_title
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 37
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
                                                        lineNumber: 380,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 377,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                    lineNumber: 361,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-900 p-4 rounded-xl border border-slate-800 font-mono text-xs overflow-x-auto shadow-inner",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-slate-500 mb-2",
                                            children: activeTexts.code_comment
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 399,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-purple-400",
                                            children: [
                                                "public fun ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-blue-400",
                                                    children: "interact_with_door"
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 77
                                                }, this),
                                                "(player: &mut Investigator, door_color: String) {"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 400,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pl-4 text-slate-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-500",
                                                children: "// Rule: Red door sets SAN to 0"
                                            }, void 0, false, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                                lineNumber: 401,
                                                columnNumber: 70
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 401,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pl-4 text-purple-400",
                                            children: 'if (door_color == b"RED") {'
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 402,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pl-8 text-slate-300",
                                            children: "player.san = 0;"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 403,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pl-8 text-slate-300",
                                            children: "player.is_mad = true;"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 404,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pl-8 text-yellow-400",
                                            children: 'event::emit(MadnessEvent { reason: b"VIOLATED_RULE_1" });'
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 405,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pl-4 text-purple-400",
                                            children: "} else {"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 406,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pl-8 text-slate-300",
                                            children: "player.exp = player.exp + 10;"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 407,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pl-4 text-purple-400",
                                            children: "}"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 408,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-purple-400",
                                            children: "}"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                            lineNumber: 409,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                                    lineNumber: 398,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                            lineNumber: 355,
                            columnNumber: 58
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
                    lineNumber: 242,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
            lineNumber: 224,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx",
        lineNumber: 222,
        columnNumber: 10
    }, this);
}
_s(ResearchView, "XmQNMpwzdOIYSbonZX0HVrbMrKY=");
_c = ResearchView;
var _c;
__turbopack_context__.k.register(_c, "ResearchView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/iota-cthulhu-gamefi/client/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/dapp-kit/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-client] (ecmascript) <export default as Gamepad2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$shared$2f$BGMPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/shared/BGMPlayer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$GameDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ResearchView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/ResearchView.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(41);
    if ($[0] !== "a38ba2f089762e4fdc7653c1e8841e26df11cb9a7c2697cdc806282425c044ff") {
        for(let $i = 0; $i < 41; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a38ba2f089762e4fdc7653c1e8841e26df11cb9a7c2697cdc806282425c044ff";
    }
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("research");
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("zh");
    const t0 = activeTab === "research" ? 1 : 0;
    let t1;
    if ($[1] !== t0) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            style: {
                background: "radial-gradient(circle at top, #172554 0%, #0f172a 40%, #000000 100%)",
                opacity: t0
            }
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const t2 = activeTab === "simulation" ? 1 : 0;
    let t3;
    if ($[3] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            style: {
                background: "radial-gradient(circle at top, #450a0a 0%, #2e0202 40%, #000000 100%)",
                opacity: t2
            }
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 opacity-20 pointer-events-none",
            style: {
                backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
            }
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t1 || $[7] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[-1] bg-black",
            children: [
                t1,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[6] = t1;
        $[7] = t3;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$shared$2f$BGMPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BGMPlayer"], {}, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 bg-gradient-to-br from-indigo-600 to-violet-600 rounded flex items-center justify-center font-bold text-white shadow-lg",
                    children: "C"
                }, void 0, false, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                    lineNumber: 74,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold tracking-wider text-slate-200 hidden md:inline",
                    children: "Project Cthulhu-Fi"
                }, void 0, false, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                    lineNumber: 74,
                    columnNumber: 203
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "Home[<button>.onClick]": ()=>setActiveTab("research")
        })["Home[<button>.onClick]"];
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    const t9 = `flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === "research" ? "bg-indigo-600 text-white shadow-lg" : "text-slate-400 hover:text-white hover:bg-white/10"}`;
    let t10;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
            size: 16
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
            lineNumber: 91,
            columnNumber: 11
        }, this);
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t8,
            className: t9,
            children: [
                t10,
                " Research"
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, this);
        $[13] = t9;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "Home[<button>.onClick]": ()=>setActiveTab("simulation")
        })["Home[<button>.onClick]"];
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    const t13 = `flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === "simulation" ? "bg-red-700 text-white shadow-lg" : "text-slate-400 hover:text-white hover:bg-white/10"}`;
    let t14;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"], {
            size: 16
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    let t15;
    if ($[17] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t12,
            className: t13,
            children: [
                t14,
                " Simulation"
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, this);
        $[17] = t13;
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    let t16;
    if ($[19] !== t11 || $[20] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex bg-white/5 p-1 rounded-lg border border-white/10",
            children: [
                t11,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
            lineNumber: 131,
            columnNumber: 11
        }, this);
        $[19] = t11;
        $[20] = t15;
        $[21] = t16;
    } else {
        t16 = $[21];
    }
    let t17;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = ({
            "Home[<Button>.onClick]": ()=>setLang(_HomeButtonOnClickSetLang)
        })["Home[<Button>.onClick]"];
        $[22] = t17;
    } else {
        t17 = $[22];
    }
    let t18;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[23] = t18;
    } else {
        t18 = $[23];
    }
    let t19;
    if ($[24] !== lang) {
        t19 = lang.toUpperCase();
        $[24] = lang;
        $[25] = t19;
    } else {
        t19 = $[25];
    }
    let t20;
    if ($[26] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "ghost",
            size: "sm",
            onClick: t17,
            className: "text-slate-400 hover:text-white hover:bg-white/10",
            children: [
                t18,
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "ml-1 text-xs",
                    children: t19
                }, void 0, false, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                    lineNumber: 164,
                    columnNumber: 127
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[26] = t19;
        $[27] = t20;
    } else {
        t20 = $[27];
    }
    let t21;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectButton"], {
            className: "!bg-indigo-600 hover:!bg-indigo-700 text-white font-bold px-4 py-2 rounded"
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[28] = t21;
    } else {
        t21 = $[28];
    }
    let t22;
    if ($[29] !== t20) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[29] = t20;
        $[30] = t22;
    } else {
        t22 = $[30];
    }
    let t23;
    if ($[31] !== t16 || $[32] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "sticky top-0 z-40 w-full border-b border-white/10 bg-black/80 backdrop-blur-md px-4 py-3 flex justify-between items-center shadow-lg",
            children: [
                t7,
                t16,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
            lineNumber: 187,
            columnNumber: 11
        }, this);
        $[31] = t16;
        $[32] = t22;
        $[33] = t23;
    } else {
        t23 = $[33];
    }
    let t24;
    if ($[34] !== activeTab || $[35] !== lang) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "relative",
            children: activeTab === "research" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ResearchView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResearchView"], {
                lang: lang
            }, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                lineNumber: 196,
                columnNumber: 66
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$GameDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GameDashboard"], {
                lang: lang
            }, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
                lineNumber: 196,
                columnNumber: 97
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
            lineNumber: 196,
            columnNumber: 11
        }, this);
        $[34] = activeTab;
        $[35] = lang;
        $[36] = t24;
    } else {
        t24 = $[36];
    }
    let t25;
    if ($[37] !== t23 || $[38] !== t24 || $[39] !== t5) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen text-slate-100 font-sans selection:bg-indigo-500/30",
            children: [
                t5,
                t6,
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/app/page.tsx",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[37] = t23;
        $[38] = t24;
        $[39] = t5;
        $[40] = t25;
    } else {
        t25 = $[40];
    }
    return t25;
}
_s(Home, "UK9Z7qRFY8qvEQnvxu6/5q7NTXs=");
_c = Home;
function _HomeButtonOnClickSetLang(l) {
    return l === "zh" ? "en" : "zh";
}
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=iota-cthulhu-gamefi_client_src_c06bf553._.js.map