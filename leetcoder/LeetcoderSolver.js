import { sleep } from "../utils/utils.js";
import clipboardy from "clipboardy";
import Logger from "../utils/Logger.js";
import FileManager from "../managers/FileManager.js";
import { getBrowserDetails } from "../managers/BrowserManager.js";

class LeetcoderSolver {
  static async #checkIfSolvedEarlier(problemName) {
    const solvedProblemSet = await FileManager.getSolvedProblemSet();
    return solvedProblemSet.has(problemName);
  }

  static async #solveProblemWithName(problemName) {
    const { page } = await getBrowserDetails();
    await page.goto(`https://leetcode.com/problems/${problemName}`, {
      waitUntil: "domcontentloaded",
    });

    try {
      await page.waitForSelector(".view-lines", { timeout: 15000 });
    
      Logger.success(`[SOLVING]\t\t\t:${problemName}`);
      const { code, language } = await FileManager.getProblemDetails(problemName);
      Logger.success(`[PROBLEM_DETAILS]\t\t: ${JSON.stringify({ language, code })}`);
    
      // Open language dropdown
      await page.waitForSelector('button[aria-haspopup="dialog"]', { timeout: 15000 });
      await page.click('button[aria-haspopup="dialog"]');
    
      // Choose language
      await page.waitForSelector('div.text-text-primary', { timeout: 10000 });
      const langMap = {
        cpp: "C++", java: "Java", python3: "Python3", mysql: "MySQL"
      };
      const langText = langMap[language];
      const options = await page.$$('div.text-text-primary');
      for (const option of options) {
        const text = await option.evaluate(el => el.textContent.trim());
        if (text === langText) {
          await option.click();
          break;
        }
      }
    
      // Wait and inject code
      await page.waitForSelector(".view-lines", { timeout: 10000 });
      await page.evaluate(codeText => {
        const editor = window.monaco?.editor?.getModels?.()[0];
        if (editor) editor.setValue(codeText);
      }, code);
    
      // Submit
      const submitBtn = await page.$x("//span[contains(text(), 'Submit')]");
      if (submitBtn.length > 0) {
        await submitBtn[0].click();
      } else {
        throw new Error("Submit button not found");
      }
    
      // Wait max 30s for "Accepted" result OR page redirect
      try {
        await page.waitForSelector('span[data-e2e-locator="submission-result"]', { timeout: 30000 });

        const resultText = await page.$eval('span[data-e2e-locator="submission-result"]', el => el.textContent.trim());
        
        if (resultText === "Accepted") {
          Logger.success(`[ACCEPTED]\t\t\t:${problemName}`);
          await FileManager.setSolvedProblemSet(problemName);
        } else {
          Logger.warn(`[WARN] Submission result not accepted: ${problemName} → ${resultText}`);
        }
        
    
        Logger.success(`[ACCEPTED]\t\t\t:${problemName}`);
        await FileManager.setSolvedProblemSet(problemName);
      } catch (waitError) {
        Logger.error(`[WARN] Could not confirm acceptance in time: ${problemName}`);
      }
    
      await sleep(1);
    } catch (err) {
      if (err.message.includes("Target closed")) {
        Logger.warn(`[POSSIBLY_ACCEPTED]\t\t:${problemName} - Target closed, assuming submission`);
        await FileManager.setSolvedProblemSet(problemName); // Optional
      } else {
        Logger.error(`[FAILED]\t\t: Failed to solve the ${problemName} problem with error`, err);
      }
    }
  }

  static async #solveProblems(problemNames) {
    for (const problemName of problemNames) {
      const checkIfSolved = await this.#checkIfSolvedEarlier(problemName);
      if (!checkIfSolved) {
        await this.#solveProblemWithName(problemName);
      } else {
        Logger.success(`[SOLVED_EARLIER]\t\t:${problemName}`);
      }
    }
  }

  static async solve() {
    Logger.success("<<<< Starting Leetcoder Solver >>>>");
    const allProblemsName = await FileManager.getAllProblemsNames();
    await this.#solveProblems(allProblemsName);
    Logger.success("<<<< Exiting Leetcoder Solver >>>>");
  }
}

export default LeetcoderSolver;
