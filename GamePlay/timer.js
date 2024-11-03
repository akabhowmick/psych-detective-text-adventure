import { rl } from "../initialGameState.js";

let timer; // Timer variable
export const timeLimit = 5 * 60; // 5 minutes in seconds

// Timer function
export function startTimer(seconds) {
  let remainingTime = seconds;

  timer = setInterval(() => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    const display = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    console.log(`Time remaining: ${display}`);

    if (remainingTime <= 0) {
      clearInterval(timer);
      console.log("\nTime's up! The case remains unsolved.");
      rl.close();
    }

    remainingTime--;
  }, 1000);
}
