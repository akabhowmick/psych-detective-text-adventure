import { actualCulprit, cluesFound, mainMenu } from "../game.js"
import { suspects, rl } from "../initialGameState.js";


export function makeAccusation() {
  console.log("\nWho do you think committed the crime?");
  suspects.forEach((suspect, index) => {
    console.log(`${index + 1}. ${suspect.name}`);
  });

  rl.question("Enter the suspect number: ", (choice) => {
    const suspectIndex = parseInt(choice) - 1;

    if (suspects[suspectIndex]) {
      const accused = suspects[suspectIndex];
      console.log(`\nYou accuse ${accused.name}!`);

      // Check if the accusation is correct
      if (accused === actualCulprit && cluesFound.length >= 3) {
        console.log("\nCongratulations! You’ve solved the case. Justice is served.");
      } else {
        console.log(`\nWrong accusation! ${accused.name} is innocent, and the real culprit escaped.`);
      }

      rl.close();
    } else {
      console.log("Invalid choice, try again. \n");
      mainMenu();
    }
  });
}