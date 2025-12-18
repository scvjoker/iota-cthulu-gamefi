# 🐙 Cthulhu Mythos on IOTA: Fully On-Chain TRPG
## DEMO:🏢IOTA TRPG: Escape the Corporate Abyss (逃離血汗辦公大樓)

![IOTA](https://img.shields.io/badge/IOTA-Testnet-lightgrey)
![Move](https://img.shields.io/badge/Smart_Contract-Move-blue)
![Next.js](https://img.shields.io/badge/Frontend-Next.js-black)
![License](https://img.shields.io/badge/License-MIT-green)

> A fully on-chain survival TRPG powered by **IOTA Move Rebased**. Will you escape the infinite overtime, or become part of the building structure forever?
>
> 全鏈上生存 TRPG。基於 IOTA 智能合約的無限加班模擬器。你會成功逃脫，還是永遠成為大樓結構的一部分？

---

## 📖 Introduction (介紹)

**Escape the Corporate Abyss** is a GameFi project built on the IOTA Rebased Testnet. It satirizes corporate culture using a horror TRPG narrative.

Unlike traditional web games, every decision—from "Rushing down stairs" to "Gazing into the Abyss"—is a **real blockchain transaction**. We utilize **IOTA's native `random` module** to ensure every fate is cryptographically fair, and **ScoreEvents** to permanently record the deepest depths reached by players on the chain.

本專案利用 IOTA 的高效能與隨機數模組，打造了一個「社畜逃生」的恐怖遊戲。每一次的抉擇都是一筆鏈上交易，並且所有「鬼打牆」與「精神崩潰」的判定皆由智能合約公正執行。

## ✨ Key Features (特色)

### 1. 🌏 Bilingual & Cinematic Experience (沈浸式體驗)
- **Cinematic Intro/Outro:** Full-screen text animations set the horror tone upon minting a new character.
- **I18n Support:** One-click switch between **English** and **Traditional Chinese**.
- **Background Music:** Integrated ambient soundscapes (with browser auto-play workarounds).

### 2. 🎲 Verifiable On-Chain Randomness (VRF)
We utilize the `0x8` Random module to determine:
- **Environment Generation:** Human Realm, Asura Realm, or Hell Realm (each with different stat modifiers).
- **Skill Checks:** STR (Constitution), DEX (Agility), and SAN (Willpower) checks are resolved atomically on-chain.

### 3. 🏆 On-Chain Leaderboard (排行榜)
- **ScoreEvent:** When a player escapes or goes mad, the contract emits a `ScoreEvent`.
- **Global Ranking:** The frontend queries the blockchain history to display the **Top 10 players** who survived the deepest loops.

### 4. ⚡ Batch Transactions (PTB)
Leveraging IOTA's **Programmable Transaction Blocks (PTB)**:
- **"Madness Mode" (瘋狂連發):** Players can execute 5 sequential skill checks in a **single atomic transaction** to speed up the farming process.

---

## 🛠 Tech Stack

- **Blockchain:** IOTA Rebased Testnet
- **Smart Contract:** Move (2024 beta edition)
- **Frontend:** Next.js 14, Tailwind CSS, Shadcn/ui, Lucide React
- **Client SDK:** `@iota/dapp-kit`, `@iota/iota-sdk`
- **Storage:** LocalStorage (History) + On-Chain Events (Leaderboard)

---

## 🚀 Getting Started

### Prerequisites
- [Bun](https://bun.sh/) (or Node.js)
- [IOTA CLI](https://docs.iota.org/) installed
- IOTA Wallet extension

### 1. Clone the Repository
```bash
git clone [https://github.com/scvjoker/iota-trpg-escape.git](https://github.com/scvjoker/iota-trpg-escape.git)
cd iota-trpg-escape

```

### 2. Deploy Smart Contract (Backend)

```bash
cd contracts/trpg_core
iota move build
iota client publish --gas-budget 500000000

```

> ⚠️ **Important:** Copy the **Package ID** from the terminal output.

### 3. Configure Frontend

Open `client/src/utils/constants.ts` and paste your Package ID:

```typescript
// client/src/utils/constants.ts
export const PACKAGE_ID = "0xYOUR_PACKAGE_ID_HERE";
export const MODULE_NAME = "investigator";
export const RANDOM_OBJECT_ID = "0x8";

```

### 4. Run the Game

```bash
cd ../../client
bun install
bun dev

```

Open `http://localhost:3000`.

---

## 📜 Smart Contract Logic

The core loop logic handles the "Ghost in the Stairwell" (鬼打牆) mechanic:

```rust
// contracts/trpg_core/sources/investigator.move

if (is_success) {
    // ... logic for escaping or finding clues ...
    if (item.loop_depth > 0) {
        // Emit ScoreEvent for Leaderboard
        event::emit(ScoreEvent { 
            name: item.name, 
            depth: item.loop_depth, 
            outcome: string::utf8(b"Escaped") 
        });
    }
} else {
    // Failure leads to deeper loops (鬼打牆)
    item.loop_depth = item.loop_depth + 1;
    item.san = item.san - dmg;
    // ...
}

```

---

## 📸 Screenshots

| **Recruitment (Mint)** | **Infinite Loop** | **Leaderboard** |

---

## 🤝 Contributing

Built for the **IOTA Hackathon 2025**.

* **Developer:** [scvjoker]
* **License:** MIT
