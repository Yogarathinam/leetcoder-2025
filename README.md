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

- **Node.js** (>= 18.x recommended) – [https://nodejs.org/](https://nodejs.org/)  
- **Google Chrome** (Stable version)  
- **Git** (Optional, for cloning)

---

## 🛠️ Setup Instructions

### 1. Clone this repository

```bash
git clone https://github.com/Yogarathinam/leetcoder-2025.git
cd leetcoder-2025
```

Or download ZIP and extract manually.

---

### 2. Install dependencies

```bash
yarn install
```

> If `yarn` is not installed:
>
> ```bash
> npm install -g yarn
> ```

---

### 3. Create `.env` file

Inside the root folder, create a file named `.env` and paste:

```env
; Your email ID — used for storing profile-specific data folders
USER_EMAIL=your_email@example.com

; Chrome executable path — get it from chrome://version
GOOGLE_CHROME_EXECUTABLE_PATH=C:/Program Files/Google/Chrome/Application/chrome.exe
```

📌 **How to find Chrome Executable Path:**

1. Open Chrome  
2. Visit `chrome://version`  
3. Copy the **"Executable Path"**  
4. Paste it into the `.env` file

---

### 4. First-time login setup

Run the following to launch a Chrome window and login manually:

```bash
node login.js
```

> ⚠️ This saves your login session using Chrome’s user profile under `UserData/`.

---

### 5. Start the bot 🚀

```bash
node index.js
```

It will:

- Log in using your saved session  
- Navigate to problems  
- Paste matching code  
- Submit and move to the next problem  
- Repeat until all known problems are done

---



## ✏️ How Solutions Work

1. It reads the file  
2. Pastes the code into the editor  
3. Submits it  
4. Waits for "Accepted" confirmation via:

```html
<span data-e2e-locator="submission-result">Accepted</span>
```

---

## ✅ Supported Languages

Currently supports solutions in **C++** (default).  
You can modify the default language inside `Content.js` if needed.

---

## 🧑‍💻 Contributing & Credits

- Original repo: [@chanpreet3000/Leetcoder](https://github.com/chanpreet3000/Leetcoder)  
- This version updated by [@Yogarathinam](https://github.com/Yogarathinam)  
  Includes major bug fixes, DOM selector updates, success checks, and modern compatibility.

> 💡 If you want a plug-and-play version that just **works with 2025 LeetCode**, use this fork.

---

## ⚠️ Disclaimer

This project is for **educational and automation research** only.  
Do **NOT** use it to fake submissions, plagiarize, or violate LeetCode's [Terms of Use](https://leetcode.com/terms/).

You are solely responsible for any misuse.

---

## 🧾 License

MIT License — free to modify, fork, and reuse with credit.

---
