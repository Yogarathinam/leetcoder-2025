# ⚙️ Leetcoder 2025

> 🧠 Automate your LeetCode submissions using pre-saved answers  
> ✅ Compatible with the latest LeetCode layout (as of June 2025)  
> 🪟 Works only on **Windows** + **Chrome**  
> 💡 No AI, No API — just pure automation from stored solutions

---

## 📌 Overview

**Leetcoder 2025** is a fully automated tool that logs into your LeetCode account, opens each problem, pastes the pre-saved solution code, submits it, and continues to the next one — perfect for coursework completion, analysis, or personal archives.

This version is a **heavily modified and fixed fork** of [@chanpreet3000](https://github.com/chanpreet3000)'s original [Leetcoder](https://github.com/chanpreet3000/Leetcoder), updated to work with:

- 🔄 LeetCode's latest **dynamic UI**
- 🧩 Fixed and working DOM selectors
- 🗃️ Preloaded solutions from local files
- 🛠️ Puppeteer-core with updated automation

---

## 📁 Features

- ✅ **Automatic Login** via persistent Chrome profile
- 📥 **Uses Pre-saved Solutions** (no API/AI)
- 🧠 **Pastes the Solution Automatically**
- 🚀 **Submits and Moves to Next Problem**
- 📝 **Tracks Solved Problems**
- 🔁 **Resumes from Last Unsolved Problem**
- 🔍 **Detects Submission Success** (via DOM)

---

## 🖥️ Requirements

Make sure you have the following installed:

- **Node.js** (>= 18.x recommended) – https://nodejs.org/
- **Google Chrome** (Stable version)
- **Git** (Optional, for cloning)

---

## 🛠️ Setup Instructions

### 1. Clone this repository

```bash
git clone https://github.com/Yogarathinam/leetcoder-2025.git
cd leetcoder-2025
Or download ZIP and extract manually.

2. Install dependencies
bash
Copy
Edit
yarn install
If yarn is not installed, install it with:

bash
Copy
Edit
npm install -g yarn
3. Create .env file
Inside the root folder, create a file named .env and paste:

env
Copy
Edit
; Your email ID — used for storing profile-specific data folders
USER_EMAIL=your_email@example.com

; Chrome executable path — get it from chrome://version
GOOGLE_CHROME_EXECUTABLE_PATH=C:/Program Files/Google/Chrome/Application/chrome.exe
📌 How to find Chrome Executable Path:

Open Chrome

Visit chrome://version

Copy the "Executable Path"

Paste it into the .env file

4. First-time login setup
Run the following to launch a Chrome window and login manually:

bash
Copy
Edit
node login.js
⚠️ This saves your login session using Chrome’s user profile under UserData/.

5. Start the bot 🚀
bash
Copy
Edit
node index.js
It will:

Log in using your saved session

Navigate to problems

Paste matching code

Submit and move to the next problem

Repeat until all known problems are done
