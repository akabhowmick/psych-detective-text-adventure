import { actualCulprit, cluesFound, mainMenu } from "../game.js";
import { suspects, rl } from "../initialGameState.js";
import { gameOver } from "./gameOver.js";

export function makeAccusation() {
  console.log("\nWho do you think committed the crime?");
  suspects.forEach((suspect, index) => {
    console.log(`${index + 1}. ${suspect.name}`);
  });

  rl.question("Enter the suspect number: ", (choice) => {
    const suspectIndex = parseInt(choice) - 1;

    if (suspects[suspectIndex]) {
      const accused = suspects[suspectIndex];
      const cluesIndicatingAccused = cluesFound.filter((clue) => clue.linkedTo === accused.name);
      console.log(`\nYou accuse ${accused.name}!`);

      // To avoid correctly guessing the suspect, the user must at least encounter 2 clues that link the crime to the suspect
      if (cluesIndicatingAccused <= 2) {
        console.log(`You don't have enough information to make that accusation yet!\n`);
        mainMenu();
      } else {
        if (accused === actualCulprit) {
          gameOver("win");
        } else {
          gameOver("lose");
        }
      }
    } else {
      console.log("Invalid choice, try again. \n");
      mainMenu();
    }
  });
}
