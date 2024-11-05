import { locations, rl } from "../initialGameState.js";
import {
  mainMenu,
  visitedLocations,
  cluesFound,
  investigatedCluesByLocation,
  cluesGroupedByLocation,
} from "../game.js";

export function investigateLocation() {
  console.log("\nChoose a location to investigate:");
  // Filter locations to only show those with associated clues in cluesGroupedByLocation
  locations.forEach((location, index) => {
    console.log("\t outside for loop: " + location); 
    console.log("\t cond1 " + cluesGroupedByLocation.has(location)); 
    console.log("\t cond2 " + !visitedLocations.has(location)); 
    if (cluesGroupedByLocation.has(location) && !visitedLocations.has(location)) {
      console.log(`${index + 1}. ${location}`);
    }
  });

  rl.question("Enter the location number: ", (choice) => {
    const locationIndex = parseInt(choice) - 1;
    const location = locations[locationIndex];

    // Validate if the chosen location has clues
    if (cluesGroupedByLocation.has(location)) {
      findCluesAtLocation(location);
    } else {
      console.log("Invalid choice. Please select a location with available clues.");
      investigateLocation(); // Prompt the user to try again
    }
  });
}

// Filter clues that have not yet been investigated at this location
export function findCluesAtLocation(location) {
  if (
    investigatedCluesByLocation[location] &&
    investigatedCluesByLocation[location].length === cluesGroupedByLocation.get(location).size
  ) {
    console.log(`You have already fully investigated the ${location}.`);
    return mainMenu();
  }
  console.log(`\nYou arrive at the ${location}. Here are the clues you can investigate:`);
  const availableClues = Array.from(cluesGroupedByLocation.get(location)).filter(
    (clue) => !(investigatedCluesByLocation[location] || []).includes(clue.id)
  );
  availableClues.forEach((clue, index) => {
    console.log(`${index + 1}. ${clue.description}`);
  });

  rl.question("Choose a clue to investigate by number: ", (choice) => {
    const clueIndex = parseInt(choice) - 1;
    if (clueIndex >= 0 && clueIndex < availableClues.length) {
      const selectedClue = availableClues[clueIndex];
      console.log(`\nInvestigating clue: ${selectedClue.description}`);
      console.log(`This clue is linked to ${selectedClue.linkedTo}.\n`);
      investigatedCluesByLocation[location] = (investigatedCluesByLocation[location] || []).concat(
        selectedClue.id
      );
      cluesFound.push(selectedClue);
      if (
        investigatedCluesByLocation[location].length === cluesGroupedByLocation.get(location).size
      ) {
        console.log(`You have fully investigated the ${location}.`);
        visitedLocations.add(location);
      }
    } else {
      console.log("Invalid choice, please try again.");
    }
    mainMenu();
  });
}
