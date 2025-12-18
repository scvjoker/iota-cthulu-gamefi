```markdown
# 🐙 Project Cthulhu-Fi: IOTA Workshop DEMO Project

[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://iota-cthulu-gamefi-ma82.vercel.app/)
[![IOTA EVM](https://img.shields.io/badge/Network-IOTA%20EVM-blue?style=for-the-badge)](https://www.iota.org/)
[![Built with Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)

這是一個在 **IOTA Workshop Taiwan** 中展示的實作成果。本專案將 IOTA 的高性能與 Move 智能合約的物件導向特性，具現化為一個具備深沉敘事感的 Web3 TRPG 遊戲。

**Project Cthulhu-Fi** is a demo project showcased at **IOTA Workshop Taiwan**. It leverages IOTA's high performance and Move smart contract's object-oriented features to create an immersive Web3 TRPG experience with a deep narrative.

> **「歡迎入職。在這裡，每一次 SAN 值的扣除，都是一筆真實的鏈上交易。」**
> *"Welcome aboard. Here, every deduction of SAN is a real on-chain transaction."*

---

## 📖 專案介紹 (Introduction)

**Escape the Corporate Abyss** is a GameFi project built on the IOTA Rebased Testnet. It satirizes corporate culture using a horror TRPG narrative.
Unlike traditional web games, every decision—from "Rushing down stairs" to "Gazing into the Abyss"—is a **real blockchain transaction**. We utilize IOTA's native **random module** to ensure every fate is cryptographically fair, and **ScoreEvents** to permanently record the deepest depths reached by players on the chain.

本專案利用 IOTA 的高效能與隨機數模組，打造了一個「社畜逃生」的恐怖遊戲。每一次的抉擇都是一筆鏈上交易，並且所有「鬼打牆」與「精神崩潰」的判定皆由智能合約公正執行。

---

## 🛠 技術實作亮點 (Technical Highlights)

本專案深度應用了工作坊所學的關鍵技術，驗證了 IOTA 處理高頻互動與複雜資產邏輯的能力：
This project deeply applies key technologies from the workshop, verifying IOTA's capability in handling high-frequency interactions and complex asset logic:

### 1. 深度物件解析與可視化 (Deep Object Integration)
- **超越餘額查詢**: 不同於一般的 DApp 僅讀取代幣餘額，本專案透過 SDK 深入讀取 `Investigator` Move 物件的特定 `struct` 欄位（STR, DEX, SAN）。
- **即時數據驅動**: 利用 **Chart.js** 將鏈上的抽象數據轉化為動態雷達圖。前端即時監聽合約狀態，當 SAN 值變動時，圖表會立即更新。
- **English**: Unlike standard DApps that only read balances, this project uses the SDK to query specific fields (STR, DEX, SAN) within the Move Object. We use **Chart.js** to visualize on-chain data into a dynamic radar chart that updates instantly as contract state changes.

### 2. 完全鏈上隨機性與事件處理 (On-Chain Randomness)
- **真隨機數應用**: 遊戲中的檢定並非由前端 JavaScript 生成，而是發送交易調用 **IOTA Randomness Object**，確保結果的公平性與不可篡改性。
- **事件驅動敘事**: 實作了對 `ScenarioEvent` 的精準捕捉。前端解析合約回傳的 `outcome`（如 "Madness" 或 "Escaped"），根據鏈上運算結果觸發對應的結局動畫。
- **English**: Game checks are not frontend simulations but real transactions invoking the **IOTA Randomness Object**. The frontend captures `ScenarioEvent` emitted by the contract to trigger cinematic endings based on the verifiable on-chain outcome.

### 3. 資產生命週期：SBT 結算機制 (Asset Lifecycle: Burn & Mint)
- **創新的離職系統**: 完整實作了資產的生命週期管理。
    - **Mint**: 玩家入職，鑄造可轉移的 NFT。
    - **Resign (Burn)**: 玩家離職，觸發合約銷毀該 NFT。
    - **SBT Issuance**: 作為銷毀的回報，合約自動鑄造不可轉讓的 **Memorial SBT (靈魂綁定代幣)**，將玩家的最終成績永久寫入鏈上。
- **English**: We implemented a full asset lifecycle. "Resigning" triggers a **Burn** transaction for the Investigator NFT. In return, the contract automatically mints a non-transferable **Memorial SBT**, permanently recording the player's achievements on-chain.

---

## 🛠 技術棧 (Tech Stack)

- **Frontend Framework**: [Next.js 15 (App Router)](https://nextjs.org)
- **Blockchain SDK**: [IOTA SDK](https://sdk.iota.org) & [IOTA dApp Kit](https://sdk.iota.org/dapp-kit)
- **Styling**: Tailwind CSS v4 (採用最新的線性漸層標準)
- **Visualization**: Chart.js (React-Chartjs-2)
- **Deployment**: Vercel

---

## 🚀 本地開發指南 (Local Development)

### 1. Clone & Install
```bash
git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
cd YOUR_REPO_NAME
npm install

```

### 2. Configuration (Optional)

合約地址已配置於 `src/utils/constants.ts`。由於這是 Demo 專案，你可以直接修改該檔案中的常數，無需建立 `.env` 檔案。
Contract addresses are hardcoded in `src/utils/constants.ts` for ease of demonstration. You can modify them directly there.

### 3. Run Dev Server

```bash
npm run dev

```

Open `http://localhost:3000` to start the investigation.

---

## 🌐 部署指南 (Deployment on Vercel)

本專案已針對 **Vercel** 進行優化。請依照以下步驟將你的 DApp 部署至公開網絡：
This project is optimized for **Vercel**. Follow these steps to deploy:

1. **Import Repository**: 在 Vercel 儀表板匯入你的 GitHub 專案。 (Import your GitHub repo on Vercel dashboard.)
2. **Set Root Directory (Critical)**: 如果你的 Next.js 專案位於子資料夾（例如 `/client`），請務必在 **Framework Preset** 設定中將 **Root Directory** 指向該資料夾。 (If your project is in a subfolder like `/client`, set the **Root Directory** setting to that folder.)
3. **Deploy**: 點擊部署。由於常數已寫死在程式碼中，**無需**額外設定環境變數。 (Click Deploy. No environment variables are needed as constants are hardcoded.)

---

## 🎮 核心功能演示 (Demo Walkthrough)

1. **Dashboard Initialization**: 連接錢包後，系統會透過 `getOwnedObjects` 自動抓取並解析玩家擁有的調查員 NFT。
2. **Investigation**: 點擊按鈕發起 Move Call，扣除 Gas 與 SAN 值，換取 EXP。
3. **Live Updates**: 觀察雷達圖如何隨著鏈上交易確認而即時變形。
4. **Resignation**: 執行離職操作，演示將動態 NFT 銷毀並轉換為靜態 SBT 證書的過程。

---

## 🤝 聯絡與反饋 (Contact & Feedback)

感謝 IOTA Workshop Taiwan 提供技術指導。
如有任何合約或前端整合問題，歡迎提出 Issue 討論。

**「別回頭，老闆正在 IOTA 鏈上盯著你的交易紀錄。」**
**"Don't look back. The Boss is watching you on IOTA."**

```

```