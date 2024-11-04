// game.js

import { welcomeArt } from "./ASCIIArt.js";
import { rl, suspects, allClues, showStoryAndRules } from "./initialGameState.js";
import { makeAccusation } from "./GamePlay/makeAccusation.js";
import { investigateLocation } from "./GamePlay/investigateLocations.js";
import { reviewClues } from "./GamePlay/reviewClues.js";
import { questionSuspect } from "./GamePlay/questionSuspect.js";
import { gameOver } from "./GamePlay/gameOver.js";
import { startTimer } from "./GamePlay/timer.js";

export let playerName;

// game variables => these will be updated throughout the course of the game
export let cluesFound = [];
export let visitedLocations = new Set();
export const timeLimit = 5 * 60; // 5 minutes in seconds

// Function to assign a random culprit on each game play to have REPLAY VALUE!
function assignRandomCulprit() {
  const randomIndex = Math.floor(Math.random() * suspects.length);
  return suspects[randomIndex];
}
export const actualCulprit = assignRandomCulprit();
console.log(actualCulprit);

// Randomize clues each game, so the actual culprit is different every time
function getRandomClues(numClues) {
  const shuffledClues = allClues.sort(() => 0.5 - Math.random());
  return shuffledClues.slice(0, numClues);
}

// Get 15 random clues for this game. => so the culprit is different every time but there are enough clues to get to that decision
const selectedClues = getRandomClues(15);
console.log(selectedClues);

export function startGame() {
  console.log(welcomeArt);
  showStoryAndRules();
  rl.question("What is your name, detective? ", (name) => {
    playerName = name;
    console.log(
      `Alright, Detective ${playerName}, let's get to work! You only have 5 minutes to solve this murder mystery!!`
    );
    startTimer(timeLimit);
    mainMenu();
  });
}

export function mainMenu() {
  rl.question("Click any button to view the main menu ", () => {
    console.log("\nWhat would you like to do?");
    console.log("1. Investigate a location");
    console.log("2. Question a suspect");
    console.log("3. Review the clues found so far");
    console.log("4. Make an accusation");
    console.log("5. Exit the game");
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
        case "5":
          gameOver("quit");
          break;
        default:
          console.log("Invalid choice, try again.");
          mainMenu();
      }
    });
  });
}
