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

    if (isNaN(suspectIndex) || suspectIndex < 0 || suspectIndex >= suspects.length) {
      console.log("Invalid choice, try again.\n");
      return mainMenu();
    }

    const accused = suspects[suspectIndex];
    const cluesIndicatingAccused = cluesFound.filter((clue) => clue.linkedTo === accused.name);

    console.log(`\nYou accuse ${accused.name}!`);

    // Determine outcome based on accusation
    if (accused.name === actualCulprit) {
      // Check if enough clues have been gathered
      if (cluesIndicatingAccused.length < 2) {
        console.log("You don’t have enough evidence to support that accusation yet!\n");
        return mainMenu();
      } else {
        console.log(`Congratulations! You correctly identified the culprit as ${accused.name}.`);
        gameOver("win");
      }
    } else {
      console.log(`Unfortunately, ${accused.name} is not the culprit.`);
      gameOver("lose");
    }
  });
}
