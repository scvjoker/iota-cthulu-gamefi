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
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/components/ui/progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/src/utils/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/volume-x.js [app-client] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-client] (ecmascript) <export default as Gamepad2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-client] (ecmascript) <export default as PieChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2d$pattern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/fingerprint-pattern.js [app-client] (ecmascript) <export default as Fingerprint>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
// --- Chart.js 註冊 (用於雷達圖與分析) ---
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
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
__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RadialLinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Filler"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"]);
// --- 🌏 多語言字典 ---
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
            "角落散落著一些遺落的胃藥包裝袋。",
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
            "你成為了這棟大樓結構的一部分。",
            "永遠。"
        ],
        outro_escaped: [
            "新鮮的空氣！",
            "你終於出來了...",
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
            "The fire door slams shut behind you.",
            "An ominous feeling spreads..."
        ],
        outro_madness: [
            "Your consciousness fades...",
            "You become part of the building.",
            "Forever."
        ],
        outro_escaped: [
            "Fresh air!",
            "Finally out...",
            "\"Damn, I still have work tomorrow.\""
        ]
    }
};
// --- Log 處理器 ---
const processLog = (text, lang)=>{
    if (!text) return "";
    if (lang === 'en') return text.replace("Escaped", "Escaped 🚪").replace("Looping", "Looping 🔄").replace("MADNESS", "MENTAL BREAKDOWN 💀");
    let t = text;
    t = t.replace("=== Quick Investigation ===", "📜【快速調查報告】");
    t = t.replace("[Vision: Human Realm] Cold concrete stairs. Smell of rust. (Normal)", "👁️【幻覺：人道】冰冷的逃生梯，牆上貼著「禁止堆放雜物」，空氣中有過勞的汗水味。").replace("[Vision: Deva Realm] Golden clouds. You feel peaceful. (CON+10)", "👁️【幻覺：天道】樓梯間灑滿了午後的陽光，像是發薪日一樣令人安心。(體質+10)").replace("[Vision: Asura Realm] The walls bleed. War drums fuel rage. (DEX+5)", "👁️【幻覺：修羅道】牆壁滲出紅墨水，耳邊傳來鍵盤敲擊的戰鼓聲，你感到莫名的暴躁。(敏捷+5)").replace("[Vision: Hungry Ghost Realm] Weeping faces grab your ankles. (DEX-10)", "👁️【幻覺：餓鬼道】地面伸出無數蒼白的手（像是討債的客戶），試圖抓住你的腳踝。(敏捷-10)").replace("[Vision: Hell Realm] Absolute darkness. The Abyss stares back. (Stats -20)", "👁️【幻覺：地獄道】絕對的黑暗。像是無止盡的加班地獄，深淵正在回望你。(全屬性大幅下降)");
    t = t.replace("> Rushed down successfully. Distance created.", "✅ 你跨過散落的文件夾，成功衝下樓梯。").replace("> Stumbled! The shadow catches up. (-2 SAN)", "❌ 你被電源線絆倒了！背後的腳步聲逼近。(SAN -2)").replace("Result: You escaped the stairwell. (+15 EXP)", "🎉【結局】你推開了逃生門...是新鮮空氣！(EXP +15)").replace("Result: The stairs loop back to the start. (Depth+1, SAN dmg)", "🔄【結局】你推開門...卻發現自己回到了公司的茶水間。鬼打牆了。(輪迴深度+1)").replace("Result: Mind Shattered.", "💀【結局】精神崩潰。你放棄了思考，成為了這棟大樓永遠的員工。");
    t = t.replace("You step into the infinite stairwell...", "🚪 除夕夜的最後一班電梯壞了，你踏入樓梯間...").replace("The air changes. What do you do?", "空氣變得凝重，日光燈管開始閃爍。你要怎麼做？").replace("You successfully evaded the shadow.", "✅ 你躲進了雜物堆，成功避開了那東西的巡視。").replace("You broke the loop and found the exit!", "🎉 你打破了加班的詛咒，找到了通往一樓的出口！").replace("FAILURE. The shadow grabs you...", "❌ 失敗。一隻冰冷的手搭上了你的肩膀...").replace("You fall down the stairs... and land back where you started. (Loop Depth +1)", "🔄 你滾落樓梯...抬頭一看，樓層牌依然寫著同樣的數字。(輪迴深度+1)").replace("Your mind cannot take another loop. It shatters.", "💀 你再也無法忍受了。你加入了祂們。").replace("You stared into the Abyss, and learned its secret. (Clue Found! SAN Restored)", "👁️ 你凝視著黑暗深處，看清了老闆的真面目。你洞悉了這間公司的秘密。(發現線索！SAN值恢復)");
    t = t.replace("Escaped", "打卡下班").replace("Looping", "無限加班").replace("MADNESS", "過勞死(精神崩潰)");
    return t;
};
// --- 音樂播放器 ---
function BGMPlayer() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "3678ef6565ad5f505ce403ec7e721188044a09c033f0d994419dc87a1aedb90e") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3678ef6565ad5f505ce403ec7e721188044a09c033f0d994419dc87a1aedb90e";
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
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 139,
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
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 167,
            columnNumber: 22
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 167,
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
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                    lineNumber: 175,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 175,
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
// --- 電影式文字 ---
function CinematicText(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "3678ef6565ad5f505ce403ec7e721188044a09c033f0d994419dc87a1aedb90e") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3678ef6565ad5f505ce403ec7e721188044a09c033f0d994419dc87a1aedb90e";
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
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 258,
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
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 268,
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
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 275,
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
_s1(CinematicText, "f2PRUegSIoaS2qBNs3jCroh/+fg=");
_c1 = CinematicText;
// --- 分頁 1: Research View (React Port of HTML) ---
function _CinematicTextUseEffectSetTimeoutSetTimeoutSetIndex(prev) {
    return prev + 1;
}
function ResearchView() {
    _s2();
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('analysis');
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
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                    lineNumber: 358,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold text-white tracking-wide",
                                            children: "Project Cthulhu-Fi"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                            lineNumber: 359,
                                            columnNumber: 30
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-400 text-sm",
                                            children: "Research Terminal & Architecture Analysis"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                            lineNumber: 359,
                                            columnNumber: 113
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                    lineNumber: 359,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                            lineNumber: 357,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 bg-slate-950/50 p-1 rounded-lg",
                            children: [
                                'analysis',
                                'evolution',
                                'architecture'
                            ].map((sec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveSection(sec),
                                    className: `px-4 py-2 rounded-md text-sm font-medium transition-all capitalize ${activeSection === sec ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`,
                                    children: sec
                                }, sec, false, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                    lineNumber: 362,
                                    columnNumber: 79
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                            lineNumber: 361,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                    lineNumber: 356,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-h-[400px]",
                    children: [
                        activeSection === 'analysis' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 111
                                                }, this),
                                                " Investigator Attributes"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                            lineNumber: 368,
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
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                                lineNumber: 369,
                                                columnNumber: 93
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                            lineNumber: 369,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 text-xs text-slate-400 border-l-2 border-indigo-500 pl-2",
                                            children: "Meta-data Visualization for NFT Assets."
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                            lineNumber: 391,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                    lineNumber: 367,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-950/50 p-6 rounded-xl border border-slate-700 flex flex-col justify-center items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-white mb-4",
                                            children: "On-Chain VRF Simulator"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                            lineNumber: 394,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-6xl font-mono font-bold text-white mb-2 animate-pulse text-shadow-glow",
                                            children: diceResult
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                            lineNumber: 395,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-xl font-bold mb-6 ${checkColor}`,
                                            children: checkResult
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                            lineNumber: 396,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: rollDice,
                                            className: "w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold h-12 shadow-lg",
                                            children: "Simulate Check (Target: 50)"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                            lineNumber: 397,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                    lineNumber: 393,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                            lineNumber: 366,
                            columnNumber: 54
                        }, this),
                        activeSection === 'evolution' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-950/50 p-6 rounded-xl border border-slate-700 animate-in fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                            lineNumber: 400,
                                            columnNumber: 226
                                        }, this),
                                        " Evolution"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                    lineNumber: 400,
                                    columnNumber: 146
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
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 400,
                                        columnNumber: 294
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                    lineNumber: 400,
                                    columnNumber: 262
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                            lineNumber: 400,
                            columnNumber: 55
                        }, this),
                        activeSection === 'architecture' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-950/50 p-6 rounded-xl border border-slate-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-violet-400 mb-4",
                                            children: "Stack"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                            lineNumber: 417,
                                            columnNumber: 204
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3 text-sm text-slate-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "Frontend: Next.js + IOTA SDK"
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                                    lineNumber: 417,
                                                    columnNumber: 318
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "Contract: Move"
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                                    lineNumber: 417,
                                                    columnNumber: 355
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                            lineNumber: 417,
                                            columnNumber: 269
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                    lineNumber: 417,
                                    columnNumber: 132
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
                                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                                    lineNumber: 417,
                                                    columnNumber: 565
                                                }, this),
                                                " Tokenomics"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                            lineNumber: 417,
                                            columnNumber: 488
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
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                                lineNumber: 417,
                                                columnNumber: 630
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                            lineNumber: 417,
                                            columnNumber: 603
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                    lineNumber: 417,
                                    columnNumber: 389
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                            lineNumber: 417,
                            columnNumber: 58
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                    lineNumber: 365,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 355,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
        lineNumber: 354,
        columnNumber: 10
    }, this);
}
_s2(ResearchView, "wsiz/CCiveo47nS0dbSQfSoyRsE=");
_c2 = ResearchView;
// --- 🎮 分頁 2: Simulation View (角色儀表板與遊戲邏輯) ---
function SimulationView(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(61);
    if ($[0] !== "3678ef6565ad5f505ce403ec7e721188044a09c033f0d994419dc87a1aedb90e") {
        for(let $i = 0; $i < 61; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3678ef6565ad5f505ce403ec7e721188044a09c033f0d994419dc87a1aedb90e";
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
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 459,
                        columnNumber: 109
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl font-bold",
                        children: "Please Connect Wallet"
                    }, void 0, false, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 459,
                        columnNumber: 148
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                lineNumber: 459,
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
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                lineNumber: 468,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 468,
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
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                    lineNumber: 481,
                                    columnNumber: 421
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 481,
                                columnNumber: 330
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-bold text-xs text-slate-200 truncate w-24",
                                        children: inv.name
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 481,
                                        columnNumber: 529
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-slate-400 block font-mono",
                                        children: inv.is_mad ? "KIA" : `SAN: ${inv.san}`
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 481,
                                        columnNumber: 609
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 481,
                                columnNumber: 496
                            }, this)
                        ]
                    }, inv.id, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 479,
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
            className: "w-full mt-4 bg-emerald-600 hover:bg-emerald-500 text-xs h-8",
            children: t.recruit_btn
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 501,
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
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 511,
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
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 520,
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
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 529,
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
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 536,
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
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 544,
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
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 552,
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
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                lineNumber: 560,
                columnNumber: 82
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 560,
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
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 569,
                                        columnNumber: 327
                                    }, this),
                                    currentInvestigator.is_mad && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-red-900/60 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold text-white bg-red-600 px-1 transform -rotate-12",
                                            children: "DECEASED"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                            lineNumber: 569,
                                            columnNumber: 524
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 569,
                                        columnNumber: 443
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 569,
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
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                                lineNumber: 569,
                                                columnNumber: 766
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    currentInvestigator.san,
                                                    " / ",
                                                    currentInvestigator.max_san
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                                lineNumber: 569,
                                                columnNumber: 791
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 569,
                                        columnNumber: 670
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                        value: currentInvestigator.san / currentInvestigator.max_san * 100,
                                        className: `h-2 bg-slate-800 ${currentInvestigator.is_mad ? "[&>div]:bg-red-600" : "[&>div]:bg-indigo-500"}`
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 569,
                                        columnNumber: 867
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between mt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs bg-black/40 px-2 py-1 rounded border border-slate-700 text-yellow-400 font-mono flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2d$pattern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__["Fingerprint"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                                        lineNumber: 569,
                                                        columnNumber: 1229
                                                    }, this),
                                                    " ",
                                                    currentInvestigator.exp,
                                                    " MIST"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                                lineNumber: 569,
                                                columnNumber: 1100
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs bg-black/40 px-2 py-1 rounded border border-slate-700 text-purple-400 font-mono flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                                        lineNumber: 569,
                                                        columnNumber: 1420
                                                    }, this),
                                                    " ",
                                                    currentInvestigator.clues,
                                                    " Clues"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                                lineNumber: 569,
                                                columnNumber: 1291
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 569,
                                        columnNumber: 1057
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 569,
                                columnNumber: 636
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 569,
                        columnNumber: 108
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-950/50 p-3 rounded border border-slate-800 flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-500 font-bold",
                                        children: "STR (力量)"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 569,
                                        columnNumber: 1640
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-mono text-orange-400",
                                        children: currentInvestigator.str
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 569,
                                        columnNumber: 1706
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 569,
                                columnNumber: 1537
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-950/50 p-3 rounded border border-slate-800 flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-500 font-bold",
                                        children: "DEX (敏捷)"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 569,
                                        columnNumber: 1899
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-mono text-green-400",
                                        children: currentInvestigator.dex
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 569,
                                        columnNumber: 1965
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 569,
                                columnNumber: 1796
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-950/50 p-3 rounded border border-slate-800 flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-500 font-bold",
                                        children: "SAN (意志)"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 569,
                                        columnNumber: 2157
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-mono text-blue-400",
                                        children: currentInvestigator.san
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 569,
                                        columnNumber: 2223
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 569,
                                columnNumber: 2054
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-950/50 p-3 rounded border border-slate-800 flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-500 font-bold",
                                        children: "LUK (運氣)"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 569,
                                        columnNumber: 2414
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-mono text-yellow-400",
                                        children: "50"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 569,
                                        columnNumber: 2480
                                    }, this),
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 569,
                                columnNumber: 2311
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 569,
                        columnNumber: 1497
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-950 p-3 rounded border border-slate-800 space-y-2",
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
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                                lineNumber: 569,
                                                columnNumber: 2746
                                            }, this),
                                            " Current Depth"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 569,
                                        columnNumber: 2689
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-400 font-mono font-bold",
                                        children: [
                                            "B",
                                            currentInvestigator.loop_depth,
                                            "F"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 569,
                                        columnNumber: 2787
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 569,
                                columnNumber: 2630
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
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                                lineNumber: 569,
                                                columnNumber: 3001
                                            }, this),
                                            " Status"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 569,
                                        columnNumber: 2944
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `${currentInvestigator.is_mad ? "text-red-500" : "text-emerald-500"} font-mono`,
                                        children: currentInvestigator.is_mad ? "CRITICAL" : "STABLE"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 569,
                                        columnNumber: 3037
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 569,
                                columnNumber: 2885
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 569,
                        columnNumber: 2554
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full flex flex-col items-center justify-center text-slate-600 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                        size: 48,
                        opacity: 0.2
                    }, void 0, false, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 569,
                        columnNumber: 3299
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm",
                        children: "Select personnel to view data"
                    }, void 0, false, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 569,
                        columnNumber: 3331
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                lineNumber: 569,
                columnNumber: 3212
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 569,
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
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 578,
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
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 587,
                        columnNumber: 131
                    }, this),
                    " Action Panel"
                ]
            }, void 0, true, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                lineNumber: 587,
                columnNumber: 82
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 587,
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
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 594,
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
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 594,
                                        columnNumber: 401
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: batchSanityCheck,
                                        disabled: loading || currentInvestigator.is_mad,
                                        className: "h-12 bg-red-900/30 text-red-200 border border-red-800/50 hover:bg-red-900/60",
                                        children: t.act_batch
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 594,
                                        columnNumber: 597
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 594,
                                columnNumber: 361
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-slate-800 my-2"
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 594,
                                columnNumber: 798
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-slate-400 mb-2 uppercase font-bold",
                                children: "Exploration"
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 594,
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
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 594,
                                        columnNumber: 1132
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-400",
                                        children: t.act_quick_desc
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 594,
                                        columnNumber: 1189
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 594,
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
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 594,
                                        columnNumber: 1479
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-indigo-400",
                                        children: t.act_manual_desc
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 594,
                                        columnNumber: 1542
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 594,
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
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 594,
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
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                                lineNumber: 596,
                                                columnNumber: 177
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-sm text-slate-200",
                                                children: t.choice_run
                                            }, void 0, false, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                                lineNumber: 596,
                                                columnNumber: 212
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 594,
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
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                                lineNumber: 598,
                                                columnNumber: 177
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-sm text-slate-200",
                                                children: t.choice_hide
                                            }, void 0, false, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                                lineNumber: 598,
                                                columnNumber: 212
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 596,
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
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                                lineNumber: 600,
                                                columnNumber: 189
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-sm text-purple-200",
                                                children: t.choice_gaze
                                            }, void 0, false, {
                                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                                lineNumber: 600,
                                                columnNumber: 225
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 598,
                                        columnNumber: 294
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 594,
                                columnNumber: 1862
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 594,
                        columnNumber: 1625
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-slate-600 mt-10",
                        children: "Waiting for selection..."
                    }, void 0, false, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 600,
                        columnNumber: 323
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                    lineNumber: 594,
                    columnNumber: 133
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 594,
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
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 624,
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
_c3 = SimulationView;
// --- 附加元件 (Log & Leaderboard) ---
function AdventureOverlay(t0) {
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "3678ef6565ad5f505ce403ec7e721188044a09c033f0d994419dc87a1aedb90e") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3678ef6565ad5f505ce403ec7e721188044a09c033f0d994419dc87a1aedb90e";
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
    const isFinalEnding = outcome === "MADNESS" || outcome === "Escaped" || outcome === "Madness";
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
                        lineNumber: 720,
                        columnNumber: 143
                    }, this),
                    " TRPG LOG"
                ]
            }, void 0, true, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                lineNumber: 720,
                columnNumber: 70
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 720,
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
            lineNumber: 735,
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
            lineNumber: 742,
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
                lineNumber: 750,
                columnNumber: 105
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 750,
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
                lineNumber: 763,
                columnNumber: 137
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 763,
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
_s3(AdventureOverlay, "Y5zKOIhgaQzXUi3bQz3/IpguaSM=");
_c4 = AdventureOverlay;
function _AdventureOverlayDisplayLogsMap(log, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-l-2 border-slate-700 pl-4 py-2 animate-in slide-in-from-left-2 fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-300",
            children: log
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 773,
            columnNumber: 115
        }, this)
    }, idx, false, {
        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
        lineNumber: 773,
        columnNumber: 10
    }, this);
}
function _AdventureOverlayUseEffectSetTimeoutSetCurrentIndex(prev_0) {
    return prev_0 + 1;
}
function LeaderboardSection(t0) {
    _s4();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "3678ef6565ad5f505ce403ec7e721188044a09c033f0d994419dc87a1aedb90e") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3678ef6565ad5f505ce403ec7e721188044a09c033f0d994419dc87a1aedb90e";
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
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 867,
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
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 875,
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
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 884,
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
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 893,
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
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 901,
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
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                lineNumber: 910,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 910,
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
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 922,
                                        columnNumber: 216
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-200",
                                        children: score.name
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 922,
                                        columnNumber: 287
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 922,
                                columnNumber: 175
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-xs px-2 py-0.5 rounded ${score.outcome === "Madness" ? "bg-red-900/50 text-red-400" : "bg-green-900/50 text-green-400"}`,
                                        children: score.outcome === "Madness" ? lang === "zh" ? "\uD83D\uDC80 \u904E\u52DE" : "\uD83D\uDC80 Dead" : lang === "zh" ? "\uD83D\uDEAA \u4E0B\u73ED" : "\uD83D\uDEAA Out"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 922,
                                        columnNumber: 386
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-amber-500 font-bold",
                                        children: [
                                            score.depth,
                                            " F"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 922,
                                        columnNumber: 702
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 922,
                                columnNumber: 345
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 922,
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
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                lineNumber: 938,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 938,
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
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 946,
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
_s4(LeaderboardSection, "OJBKG96Jp01C96Qc4oSAlhSLKxI=");
_c5 = LeaderboardSection;
function _LeaderboardSectionFetchLeaderboardAnonymous2(a, b) {
    return Number(b.depth) - Number(a.depth);
}
function _LeaderboardSectionFetchLeaderboardAnonymous(e_1) {
    return e_1.parsedJson;
}
function _LeaderboardSectionFetchLeaderboardEventsDataFilter(e_0) {
    return e_0.type.includes("ScoreEvent");
}
function HistorySection(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "3678ef6565ad5f505ce403ec7e721188044a09c033f0d994419dc87a1aedb90e") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3678ef6565ad5f505ce403ec7e721188044a09c033f0d994419dc87a1aedb90e";
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
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 981,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const t2 = TEXTS[lang];
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
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                lineNumber: 989,
                columnNumber: 22
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 989,
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
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 1000,
                                        columnNumber: 242
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: entry.outcome === "MADNESS" ? "text-red-500" : "text-green-500",
                                        children: entry.outcome
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 1000,
                                        columnNumber: 299
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 1000,
                                columnNumber: 176
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: entry.logs.map({
                                    "HistorySection[(anonymous)() > entry.logs.map()]": (log, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-slate-300 font-mono border-l-2 border-slate-800 pl-2 ml-1",
                                            children: processLog(log, lang)
                                        }, i, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                            lineNumber: 1001,
                                            columnNumber: 79
                                        }, this)
                                }["HistorySection[(anonymous)() > entry.logs.map()]"])
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 1000,
                                columnNumber: 409
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 1000,
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
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 1018,
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
            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
            lineNumber: 1026,
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
_c6 = HistorySection;
function GameDashboard() {
    _s5();
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentAccount"])();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIotaClient"])();
    const { mutate: signAndExecuteTransaction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignAndExecuteTransaction"])();
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('zh');
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('research');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [investigators, setInvestigators] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [adventureData, setAdventureData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showIntro, setShowIntro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [outroType, setOutroType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("none");
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameDashboard.useEffect": ()=>{
            const saved = localStorage.getItem("iota_trpg_history");
            if (saved) try {
                setHistory(JSON.parse(saved));
            } catch (e) {}
        }
    }["GameDashboard.useEffect"], []);
    const addToHistory = (logs, outcome)=>{
        const newEntry = {
            timestamp: Date.now(),
            logs,
            outcome
        };
        const newHistory = [
            ...history,
            newEntry
        ];
        setHistory(newHistory);
        localStorage.setItem("iota_trpg_history", JSON.stringify(newHistory));
    };
    const currentInvestigator = investigators.find((i)=>i.id === selectedId);
    const t = TEXTS[lang];
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
        if (!selectedId && foundList.length > 0) setSelectedId(foundList[0].id); // @ts-ignore
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameDashboard.useEffect": ()=>{
            fetchInvestigators();
        }
    }["GameDashboard.useEffect"], [
        account
    ]);
    // Actions
    const executeTx = (tx, actionName)=>{
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
                setTimeout(fetchInvestigators, 1000);
                __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Success");
            },
            onError: (e_0)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(e_0.message);
                setLoading(false);
            }
        });
    };
    const executeScenarioTx = async (tx_0)=>{
        setLoading(true);
        tx_0.setGasBudget(100000000);
        signAndExecuteTransaction({
            transaction: tx_0,
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
                    } catch (e_1) {}
                }
                const event = events.find((e_2)=>e_2.type.includes("ScenarioEvent"));
                if (event) {
                    setAdventureData({
                        logs: event.parsedJson?.logs,
                        outcome: event.parsedJson?.outcome
                    });
                    addToHistory(event.parsedJson?.logs, event.parsedJson?.outcome);
                }
                setLoading(false);
            },
            onError: (e_3)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(e_3.message);
                setLoading(false);
            }
        });
    };
    const mint = ()=>{
        const tx_1 = new __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]();
        tx_1.moveCall({
            target: `${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PACKAGE_ID"]}::${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODULE_NAME"]}::mint`,
            arguments: [
                tx_1.object(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANDOM_OBJECT_ID"]),
                tx_1.pure.vector("u8", Array.from(new TextEncoder().encode("Staff #" + Math.floor(Math.random() * 9000 + 1000))))
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
    const sanityCheck = ()=>{
        if (!currentInvestigator) return;
        const tx_2 = new __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]();
        tx_2.moveCall({
            target: `${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PACKAGE_ID"]}::${__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODULE_NAME"]}::sanity_check`,
            arguments: [
                tx_2.object(currentInvestigator.id),
                tx_2.object(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANDOM_OBJECT_ID"])
            ]
        });
        executeTx(tx_2, "Check");
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
        executeTx(tx_3, "Batch");
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
    // Dynamic Background Logic
    const bgGradient = activeTab === 'simulation' ? "from-indigo-950 via-slate-950 to-black" // Horror Mode
     : "from-slate-800 via-slate-900 to-black"; // Research Mode
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen text-slate-100 font-sans selection:bg-indigo-500/30 transition-all duration-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 z-[-1] bg-slate-950`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${bgGradient} transition-all duration-1000 ease-in-out`
                    }, void 0, false, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 1235,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-20",
                        style: {
                            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                            backgroundSize: '40px 40px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 1236,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                lineNumber: 1234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BGMPlayer, {}, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                lineNumber: 1242,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md px-6 py-3 flex justify-between items-center shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 bg-gradient-to-br from-indigo-600 to-violet-600 rounded flex items-center justify-center font-bold text-white shadow-lg",
                                children: "C"
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 1247,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold tracking-wider text-slate-200 hidden md:inline",
                                children: "Project Cthulhu-Fi"
                            }, void 0, false, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 1248,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 1246,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex bg-slate-800/50 p-1 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('research'),
                                className: `flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'research' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 1253,
                                        columnNumber: 19
                                    }, this),
                                    " Research"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 1252,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('simulation'),
                                className: `flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'simulation' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                        lineNumber: 1256,
                                        columnNumber: 19
                                    }, this),
                                    " Simulation"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                lineNumber: 1255,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 1251,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "sm",
                        onClick: ()=>setLang((l)=>l === 'zh' ? 'en' : 'zh'),
                        className: "text-slate-400 hover:text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                            lineNumber: 1261,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                        lineNumber: 1260,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                lineNumber: 1245,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "relative",
                children: activeTab === 'research' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResearchView, {}, void 0, false, {
                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                    lineNumber: 1267,
                    columnNumber: 39
                }, this) : // Game View
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        showIntro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CinematicText, {
                            lines: t.intro_lines,
                            onComplete: ()=>setShowIntro(false)
                        }, void 0, false, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                            lineNumber: 1270,
                            columnNumber: 33
                        }, this),
                        outroType !== "none" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CinematicText, {
                            lines: outroType === "madness" ? t.outro_madness : t.outro_escaped,
                            onComplete: ()=>setOutroType("none"),
                            isMadness: outroType === "madness"
                        }, void 0, false, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                            lineNumber: 1271,
                            columnNumber: 44
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
                            lineNumber: 1272,
                            columnNumber: 37
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
                                            lineNumber: 1280,
                                            columnNumber: 27
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500 text-sm tracking-widest",
                                            children: t.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                            lineNumber: 1281,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                    lineNumber: 1279,
                                    columnNumber: 23
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationView, {
                                    account: account,
                                    investigators: investigators,
                                    currentInvestigator: currentInvestigator,
                                    loading: loading,
                                    t: t,
                                    mint: mint,
                                    sanityCheck: sanityCheck,
                                    batchSanityCheck: batchSanityCheck,
                                    playQuick: playQuick,
                                    playManualStart: playManualStart,
                                    playManualAction: playManualAction,
                                    setSelectedId: setSelectedId,
                                    getImageUrl: getImageUrl,
                                    lang: lang
                                }, void 0, false, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                    lineNumber: 1284,
                                    columnNumber: 23
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 grid grid-cols-1 md:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HistorySection, {
                                            history: history,
                                            lang: lang
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                            lineNumber: 1287,
                                            columnNumber: 27
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LeaderboardSection, {
                                            client: client,
                                            lang: lang
                                        }, void 0, false, {
                                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                            lineNumber: 1288,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                                    lineNumber: 1286,
                                    columnNumber: 23
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                            lineNumber: 1278,
                            columnNumber: 19
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
                lineNumber: 1266,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/iota-cthulhu-gamefi/client/src/components/GameDashboard.tsx",
        lineNumber: 1232,
        columnNumber: 10
    }, this);
}
_s5(GameDashboard, "PfAkrgRE0NA95YZNQK2978T/zSs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIotaClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignAndExecuteTransaction"]
    ];
});
_c7 = GameDashboard;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "BGMPlayer");
__turbopack_context__.k.register(_c1, "CinematicText");
__turbopack_context__.k.register(_c2, "ResearchView");
__turbopack_context__.k.register(_c3, "SimulationView");
__turbopack_context__.k.register(_c4, "AdventureOverlay");
__turbopack_context__.k.register(_c5, "LeaderboardSection");
__turbopack_context__.k.register(_c6, "HistorySection");
__turbopack_context__.k.register(_c7, "GameDashboard");
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

//# sourceMappingURL=iota-cthulhu-gamefi_client_src_5ef486e3._.js.map