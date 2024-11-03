import { suspects, rl } from "../initialGameState.js";
import { mainMenu, cluesFound } from "../game.js";

export function questionSuspect() {
  console.log("\nChoose a suspect to question:");
  suspects.forEach((suspect, index) => {
    console.log(`${index + 1}. ${suspect.name}`);
  });
  rl.question("Who would you like to question? ", (choice) => {
    const suspectIndex = parseInt(choice) - 1;
    if (suspects[suspectIndex]) {
      const suspect = suspects[suspectIndex];
      console.log(`\nQuestioning ${suspect.name}...`);
      console.log(`Alibi: ${suspect.alibi}`);
      cluesFound.push({
        description: `Interviewed ${suspect.name}`,
        value: suspect.alibi,
        linkedTo: suspect.name,
      });
    } else {
      console.log("Invalid choice, try again.");
    }
    mainMenu();
  });
}
