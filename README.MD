# 🐙 Cthulhu Mythos on IOTA: Fully On-Chain TRPG

> A decentralized Sanity Check game powered by IOTA Move Rebased, leveraging on-chain VRF and Programmable Transaction Blocks (PTB).

![Project Banner](https://placehold.co/600x200/1e293b/FFF?text=IOTA+Cthulhu+TRPG)

## 📖 Introduction
This project is a Proof-of-Concept for a fully on-chain TRPG (Tabletop Role-Playing Game) built on the IOTA Rebased Testnet. It demonstrates how to utilize **IOTA's `random` module** for fair gameplay and **Batch Transactions** to create intense, high-frequency gaming experiences without user friction.

Players mint an "Investigator" NFT with randomized stats (STR, DEX, SAN) and perform "Sanity Checks" against the Great Old Ones.

## ✨ Key Features

### 1. Verifiable On-Chain Randomness (VRF)
Unlike traditional EVM games that rely on oracle callbacks or insecure block hashes, this project uses IOTA's native `0x8` Random module.
- **Fair Minting:** Investigator stats are generated atomically on-chain.
- **Unpredictable Outcomes:** Every Sanity Check is truly random and verifiable.

### 2. Batch Transactions (The "Madness" Mode)
We leverage IOTA's unique architecture to execute **5x Sanity Checks in a single atomic transaction**.
- **User Experience:** No need to sign 5 separate pop-ups.
- **Efficiency:** Demonstrates the power of Move's composability and IOTA's high throughput.

### 3. Dynamic NFT State
The `Investigator` object evolves based on gameplay results:
- **EXP Growth:** Successful checks grant experience.
- **Madness State:** If SAN drops to 0, the NFT is permanently marked as `is_mad`, changing its visual representation in the frontend.

## 🛠 Tech Stack

- **Blockchain:** IOTA Rebased Testnet (Move)
- **Frontend:** Next.js 14, Tailwind CSS, shadcn/ui
- **Integration:** @iota/dapp-kit, @iota/iota-sdk
- **Runtime:** Bun

## 🚀 Getting Started

### Prerequisites
- [Bun](https://bun.sh/) installed
- [IOTA CLI](https://docs.iota.org/) installed
- An IOTA Wallet (e.g., IOTA Wallet) with Testnet tokens

### 1. Clone the Repo
```bash
git clone [https://github.com/YOUR_USERNAME/iota-cthulhu-trpg.git](https://github.com/YOUR_USERNAME/iota-cthulhu-trpg.git)
cd iota-cthulhu-trpg

2. Deploy Smart Contract (Backend)
Bash

cd contracts/trpg_core
iota move build
iota client publish --gas-budget 500000000
Copy the Package ID from the output.

3. Configure Frontend
Open client/src/utils/constants.ts and paste your Package ID:

TypeScript

export const PACKAGE_ID = "0xYour_Package_ID_Here";
4. Run the Game
Bash

cd ../../client
bun install
bun dev
Open http://localhost:3000 to play!

📜 Contract Interface
The core logic resides in investigator.move:

Rust

// Core struct representing the player
public struct Investigator has key, store {
    id: UID,
    name: String,
    san: u8,      // Sanity Point
    is_mad: bool, // Madness Status
    // ...
}

// Atomic Batch Check Function
entry fun batch_sanity_check(item: &mut Investigator, r: &Random, ctx: &mut TxContext) {
    // Executes 5 checks in a single loop on-chain
}
太棒了！🎉 恭喜你完成了一個完整的全鏈上 GameFi 專案！在 Hackathon 中，程式碼是骨架，但 README 是靈魂。評審通常沒有時間跑每一個專案，他們會先看 README 和 GitHub 上的呈現。我們分兩步走：先處理 Git 上傳，再寫一份專業的 README。第一階段：上傳到 GitHub1. 準備 .gitignore (非常重要！)我們要防止垃圾檔案（如 node_modules 或編譯後的 build 資料夾）被上傳。請在專案根目錄 (~/iota-cthulhu-game/) 建立一個檔案叫做 .gitignore，貼上以下內容：Plaintext# Dependencies
node_modules
.pnp
.pnp.js

# Testing
.coverage
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Next.js build output
.next/
out/
build/
dist/

# IOTA Move build output
contracts/**/build
contracts/**/Move.lock
2. 初始化 Git 並提交請在終端機執行以下指令（確保在 ~/iota-cthulhu-game/）：Bash# 1. 初始化 Git
git init

# 2. 加入所有檔案
git add .

# 3. 提交第一版
git commit -m "Initial commit: IOTA Cthulhu TRPG GameFi Demo"
3. 推送到 GitHub去 GitHub.com 登入。右上角點 + -> New repository。Repository name 填：iota-cthulhu-trpg (或你喜歡的名字)。Public/Private 看你需求 (Hackathon 通常要 Public)。點 Create repository。看到這個畫面後，複製 "…or push an existing repository from the command line" 那段指令，通常長這樣：Bashgit remote add origin https://github.com/你的帳號/iota-cthulhu-trpg.git
git branch -M main
git push -u origin main
第二階段：專業級 README.md (Hackathon 專用)這份 README 專門為了展示 IOTA 的技術特點（VRF 隨機數、Move 合約、PTB 批量交易）而寫。請在根目錄建立 README.md，並貼上以下內容：Markdown# 🐙 Cthulhu Mythos on IOTA: Fully On-Chain TRPG

> A decentralized Sanity Check game powered by IOTA Move Rebased, leveraging on-chain VRF and Programmable Transaction Blocks (PTB).

![Project Banner](https://placehold.co/600x200/1e293b/FFF?text=IOTA+Cthulhu+TRPG)

## 📖 Introduction
This project is a Proof-of-Concept for a fully on-chain TRPG (Tabletop Role-Playing Game) built on the IOTA Rebased Testnet. It demonstrates how to utilize **IOTA's `random` module** for fair gameplay and **Batch Transactions** to create intense, high-frequency gaming experiences without user friction.

Players mint an "Investigator" NFT with randomized stats (STR, DEX, SAN) and perform "Sanity Checks" against the Great Old Ones.

## ✨ Key Features

### 1. Verifiable On-Chain Randomness (VRF)
Unlike traditional EVM games that rely on oracle callbacks or insecure block hashes, this project uses IOTA's native `0x8` Random module.
- **Fair Minting:** Investigator stats are generated atomically on-chain.
- **Unpredictable Outcomes:** Every Sanity Check is truly random and verifiable.

### 2. Batch Transactions (The "Madness" Mode)
We leverage IOTA's unique architecture to execute **5x Sanity Checks in a single atomic transaction**.
- **User Experience:** No need to sign 5 separate pop-ups.
- **Efficiency:** Demonstrates the power of Move's composability and IOTA's high throughput.

### 3. Dynamic NFT State
The `Investigator` object evolves based on gameplay results:
- **EXP Growth:** Successful checks grant experience.
- **Madness State:** If SAN drops to 0, the NFT is permanently marked as `is_mad`, changing its visual representation in the frontend.

## 🛠 Tech Stack

- **Blockchain:** IOTA Rebased Testnet (Move)
- **Frontend:** Next.js 14, Tailwind CSS, shadcn/ui
- **Integration:** @iota/dapp-kit, @iota/iota-sdk
- **Runtime:** Bun

## 🚀 Getting Started

### Prerequisites
- [Bun](https://bun.sh/) installed
- [IOTA CLI](https://docs.iota.org/) installed
- An IOTA Wallet (e.g., IOTA Wallet) with Testnet tokens

### 1. Clone the Repo
```bash
git clone [https://github.com/YOUR_USERNAME/iota-cthulhu-trpg.git](https://github.com/YOUR_USERNAME/iota-cthulhu-trpg.git)
cd iota-cthulhu-trpg
2. Deploy Smart Contract (Backend)Bashcd contracts/trpg_core
iota move build
iota client publish --gas-budget 500000000
Copy the Package ID from the output.3. Configure FrontendOpen client/src/utils/constants.ts and paste your Package ID:TypeScriptexport const PACKAGE_ID = "0xYour_Package_ID_Here";
4. Run the GameBashcd ../../client
bun install
bun dev
Open http://localhost:3000 to play!📜 Contract InterfaceThe core logic resides in investigator.move:Rust// Core struct representing the player
public struct Investigator has key, store {
    id: UID,
    name: String,
    san: u8,      // Sanity Point
    is_mad: bool, // Madness Status
    // ...
}

// Atomic Batch Check Function
entry fun batch_sanity_check(item: &mut Investigator, r: &Random, ctx: &mut TxContext) {
    // Executes 5 checks in a single loop on-chain
}
📸 ScreenshotsInitial StateMinted InvestigatorMadness State



🤝 Contributing
Built for the IOTA Hackathon 2025.