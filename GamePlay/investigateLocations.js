import { locations, rl, allClues } from "../initialGameState.js";
import { mainMenu, visitedLocations, cluesFound } from "../game.js";

export function investigateLocation() {
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
      const locationClues = allClues.filter((clue) => clue.location === location);
      const randomClue = locationClues[Math.floor(Math.random() * locationClues.length)];
      cluesFound.push(randomClue);
      console.log(`Clue found: ${randomClue.description}`);
    } else {
      console.log("Invalid choice or location already investigated.");
    }
    mainMenu();
  });
}
