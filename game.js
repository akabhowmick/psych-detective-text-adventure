// game.js

import { welcomeArt } from "./ASCIIArt.js";
import { rl, allClues, showStoryAndRules } from "./initialGameState.js";
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
export let investigatedCluesByLocation = new Set();
export const timeLimit = 5 * 60; // 5 minutes in seconds

// Randomize clues each game, so the actual culprit is different every time
function getRandomClues(numClues) {
  const shuffledClues = allClues.sort(() => 0.5 - Math.random());
  return shuffledClues.slice(0, numClues);
}

// Get 15 random clues for this game. => so the culprit is different every time but there are enough clues to get to that decision
export const selectedClues = getRandomClues(15);

// Useful for the investigate location process
function groupCluesByLocation(clues) {
  const cluesByLocation = new Map();
  clues.forEach((clue) => {
    const { location } = clue;
    if (!cluesByLocation.has(location)) {
      cluesByLocation.set(location, new Set());
    }
    cluesByLocation.get(location).add(clue);
  });

  return cluesByLocation;
}

export const cluesGroupedByLocation = groupCluesByLocation(selectedClues);

// Assign actual culprit based on the suspect with the most clues in selectedClues on each game play to have REPLAY VALUE!
function assignCulpritBasedOnClues(selectedClues) {
  const clueCountMap = {};
  selectedClues.forEach((clue) => {
    const suspect = clue.linkedTo;
    clueCountMap[suspect] = (clueCountMap[suspect] || 0) + 1;
  });

  const maxClues = Math.max(...Object.values(clueCountMap));
  const possibleCulprits = Object.keys(clueCountMap).filter(
    (suspect) => clueCountMap[suspect] === maxClues
  );

  // in case of tie choose a random culprit
  const actualCulprit =
    possibleCulprits.length > 1
      ? possibleCulprits[Math.floor(Math.random() * possibleCulprits.length)]
      : possibleCulprits[0];

  return actualCulprit;
}

export const actualCulprit = assignCulpritBasedOnClues(selectedClues);

// ! Helpful in debugging to check that the culprit is determined based on the randomly chosen clues
console.log(`selected clues to determine the culprit: }`);
console.log(selectedClues);
console.log("the culprit is " + actualCulprit);
cluesGroupedByLocation.forEach((cluesSet, location) => {
  console.log(`Location: ${location}`);
  cluesSet.forEach((clue) => console.log(`  - ${clue.description}`));
});

export function startGame() {
  // console.log(welcomeArt);
  // showStoryAndRules();
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
