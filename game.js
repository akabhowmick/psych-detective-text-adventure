// game.js

import { welcomeArt } from "./ASCIIArt.js";
import { rl, suspects, locations, allClues } from "./initialGameState.js";

// Initial game
let playerName;
export let cluesFound = [];
export let visitedLocations = new Set();

// Function to assign a random culprit
function assignRandomCulprit() {
  const randomIndex = Math.floor(Math.random() * suspects.length);
  return suspects[randomIndex];
}

let actualCulprit = assignRandomCulprit();
console.log(actualCulprit);


// Randomize clues each game, separating true leads and red herrings
function getRandomClues(numClues) {
  const shuffledClues = allClues.sort(() => 0.5 - Math.random());
  return shuffledClues.slice(0, numClues);
}

// Usage Example
const selectedClues = getRandomClues(10); // Get 10 random clues for this game.
console.log(selectedClues);

// Function to start the game
export function startGame() {
  console.log(welcomeArt);
  rl.question("What is your name, detective? ", (name) => {
    playerName = name;
    console.log(`Alright, Detective ${playerName}, let's get to work!`);
    mainMenu();
  });
}

// Main menu function
export function mainMenu() {
  rl.question("Click any button to view the main menu ", () => {
    console.log("\nWhat would you like to do?");
    console.log("1. Investigate a location");
    console.log("2. Question a suspect");
    console.log("3. Review the clues found so far");
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
  });
}

// Investigate a location
function investigateLocation() {
  console.log("\nChoose a location to investigate:");
  locations.forEach((location, index) => {
    if (!visitedLocations.has(location)) {
      console.log(`${index + 1}. ${location}`);
    }
  });

  rl.question("Enter the location number: ", (choice) => {
    const locationIndex = parseInt(choice) - 1;
    const location = locations[locationIndex];
    if (location && !visitedLocations.has(location)) {
      console.log(`\nYou investigate the ${location}.`);
      visitedLocations.add(location);
      const locationClues = allClues.filter(clue => clue.location === location);
      const randomClue = locationClues[Math.floor(Math.random() * locationClues.length)];
      cluesFound.push(randomClue);
      console.log(`Clue found: ${randomClue.description}`);
    } else {
      console.log("Invalid choice or location already investigated.");
    }
    mainMenu();
  });
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
      cluesFound.push({ description: `Interviewed ${suspect.name}`, value: suspect.alibi });
    } else {
      console.log("Invalid choice, try again.");
    }
    mainMenu();
  });
}

// Review cluesFound
function reviewClues() {
  console.log("\nClues gathered so far:");
  if (cluesFound.length === 0) {
    console.log("No clues found yet.");
  } else {
    cluesFound.forEach((clue, index) => {
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
