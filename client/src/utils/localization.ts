export type Lang = 'zh' | 'en';

export const TEXTS = {
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

        claim_btn: "領取加班費",
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

        claim_btn: "Claim Salary",
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
const LOG_MAP: Record<string, string> = {
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
    "You are free.": "🕊️ 你自由了。(記得繳回公司筆電)",
    
};

const EMP_RULES = [
    "【守則 4】若在茶水間看見沒穿制服的清潔工，請立即閉眼倒數十秒。",
    "【守則 12】本公司不提供紅色包裝的方糖，若在走廊看見請勿食用。",
    "【守則 7】聽到老闆在背後叫你的名字時，千萬不要回頭。",
    "【守則 9】若電梯門在深夜自動打開且內部無人，請勿進入。",
    "【守則 2】嚴禁在深夜撥打分機號碼「4444」，即便電話響起也不要接聽。",
    "【守則 15】如果你發現同事的臉變成了模糊的黑影，請正常與其交談並儘速離開。",
    "【系統警告】偵測到未經授權的理智波動，請前往 HR 部門領取安定劑（已過期）。"
];



export const processLog = (text: string, lang: Lang): string => {
    if (!text) return "";
    
    if (lang === 'en') {
        return text
            .replace("=== Quick Investigation ===", "📜 [Quick Report]")
            .replace("Escaped", "Escaped 🚪")
            .replace("Looping", "Looping 🔄")
            .replace("MADNESS", "MENTAL BREAKDOWN 💀");
    }

    // 1. 精確查表 (優先)
    if (LOG_MAP[text]) return LOG_MAP[text];

    // 2. 模糊/變數處理
    let t = text;
    
    // 結局處理 (因為合約這些是 hardcoded 但可能會混在其他 log 裡)
    if (t.includes("Result: Mind Shattered")) return "💀 結果：心智破碎。";
    if (t.includes("Result: You found the exit")) return "🎉 結果：你找到了出口！";
    if (t.includes("It was a trap.")) return "🔄 那是陷阱。你又回到了原點。";
    // 🚪 規則怪談隨機植入 (20% 機率)
    // 只有在特定關鍵語句出現時才觸發，增加真實感
    if (t.includes("Deeper") || t.includes("stairwell")) {
        if (Math.random() < 0.2) {
            const rule = EMP_RULES[Math.floor(Math.random() * EMP_RULES.length)];
            return `\n⚠️ ${rule}\n${t}`;
        }
    }
    
    // 通用替換
    t = t.replace("Escaped", "打卡下班")
         .replace("Looping", "無限加班")
         .replace("MADNESS", "過勞死(精神崩潰)")
         .replace("Staff #", "員工編號 #");

    return t;
};