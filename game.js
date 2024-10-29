// game.js
import * as readline from "readline";

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Game state
let playerName;
let clues = [];
let suspects = [
  { name: "Mr. Green", alibi: "Claims to have been at a restaurant." },
  { name: "Ms. Scarlet", alibi: "Says she was at the library." },
  { name: "Prof. Plum", alibi: "Claims to have been at home alone." },
];

// Function to start the game
function startGame() {
  console.log("Welcome to Psych Detective!");
  rl.question("What is your name, detective? ", (name) => {
    playerName = name;
    console.log(`Alright, Detective ${playerName}, let's get to work!`);
    mainMenu();
  });
}

// Main menu function
function mainMenu() {
  console.log("\nWhat would you like to do?");
  console.log("1. Investigate a location");
  console.log("2. Question a suspect");
  console.log("3. Review clues");
  console.log("4. Make an accusation");
  rl.question("Choose an option: ", (choice) => {
    switch (choice) {
      case "1":
        investigateLocation();
        break;
      case "2":
        questionSuspect();
        break;
      case "3":
        reviewClues();
        break;
      case "4":
        makeAccusation();
        break;
      default:
        console.log("Invalid choice, try again.");
        mainMenu();
    }
  });
}

// Investigate a location
function investigateLocation() {
  console.log("\nYou arrive at the crime scene.");
  const clue = {
    description: "You find a suspicious note hidden under a table.",
    value: "A clue indicating a meeting place.",
  };
  clues.push(clue);
  console.log(`Clue found: ${clue.description}`);
  mainMenu();
}

// Question a suspect
function questionSuspect() {
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
      clues.push({ description: `Interviewed ${suspect.name}`, value: suspect.alibi });
    } else {
      console.log("Invalid choice, try again.");
    }
    mainMenu();
  });
}

// Review clues
function reviewClues() {
  console.log("\nClues gathered so far:");
  if (clues.length === 0) {
    console.log("No clues yet.");
  } else {
    clues.forEach((clue, index) => {
      console.log(`${index + 1}. ${clue.description} - ${clue.value}`);
    });
  }
  mainMenu();
}

// Make an accusation
function makeAccusation() {
  console.log("\nWho do you think committed the crime?");
  suspects.forEach((suspect, index) => {
    console.log(`${index + 1}. ${suspect.name}`);
  });
  rl.question("Enter the suspect number: ", (choice) => {
    const suspectIndex = parseInt(choice) - 1;
    if (suspects[suspectIndex]) {
      const accused = suspects[suspectIndex];
      console.log(`\nYou accuse ${accused.name}!`);
      // End the game (for now) with a placeholder outcome
      console.log("To be continued... (Implement case resolution logic)");
      rl.close();
    } else {
      console.log("Invalid choice, try again.");
      mainMenu();
    }
  });
}

export default { startGame };
