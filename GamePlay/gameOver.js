import { rl } from "../initialGameState.js";
import { playerName } from "../game.js";

export function gameOver(outcome) {
  switch (outcome) {
    case "win":
      console.log("\nCongratulations, Detective! You correctly identified the culprit!");
      console.log("Justice has been served, thanks to your keen observation and deduction skills.");
      break;

    case "lose":
      console.log("\nOh no! The culprit has escaped.");
      console.log("Better luck next time, Detective ${playerName}!");
      break;

    case "timeout":
      console.log("\nTime's up! The culprit slipped away while you were investigating.");
      console.log("Remember, every second counts in the world of crime-solving!");
      break;

    case "quit":
      console.log(`Goodbye, Detective ${playerName}!`);
      console.log("\nGame terminated by the player.");
      break;

    default:
      console.log("\nGame over.");
  }
  rl.close();
}
