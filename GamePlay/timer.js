import { rl } from "../initialGameState.js";

let timer; // Timer variable

// Timer function
export function startTimer(seconds) {
  let remainingTime = seconds;

  timer = setInterval(() => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    const display = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    // Display remaining time every 5 seconds
    if(remainingTime % 5 === 0){
      console.log(`\nTime remaining: ${display}`);
    }

    if (remainingTime <= 0) {
      clearInterval(timer);
      console.log("\nTime's up! The case remains unsolved.");
      rl.close();
    }

    remainingTime--;
  }, 1000);
}
