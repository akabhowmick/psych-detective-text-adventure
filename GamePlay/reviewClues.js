import { cluesFound, mainMenu } from "../game.js";

export function reviewClues() {
  console.log("\nClues gathered so far:");
  
  if (cluesFound.length === 0) {
    console.log("No clues found yet.");
  } else {
    cluesFound.forEach((clue, index) => {
      console.log(
        `${index + 1}. ${clue.description} - ${
          clue.type === "suspect" ? clue.value : `clue linked to ${clue.linkedTo}`
        }`
      );
    });
  }
  mainMenu();
}
