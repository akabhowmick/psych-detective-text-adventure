// Create readline interface for user input
import * as readline from "readline";
export const rl = readline.createInterface({
  // eslint-disable-next-line no-undef
  input: process.stdin,
  // eslint-disable-next-line no-undef
  output: process.stdout,
});

// there are 6 initial suspects
export const suspects = [
  { name: "Mr. Green", alibi: "At a restaurant" },
  { name: "Ms. Scarlet", alibi: "In the library" },
  { name: "Prof. Plum", alibi: "Home alone" },
  { name: "Mrs. White", alibi: "Visiting a friend" },
  { name: "Col. Mustard", alibi: "At the park" },
  { name: "Dr. Black", alibi: "Shopping" },
];

export const locations = ["Library", "Restaurant", "Park", "Home", "Mall"];

// clues generated through AI
export const allClues = [
  // Library Clues
  {
    id: 1,
    location: "Library",
    description: "A suspicious note with a time and place written on it.",
    linkedTo: "Ms. Scarlet",
  },
  {
    id: 2,
    location: "Library",
    description: "A book missing from the shelf, last checked out by Prof. Plum.",
    linkedTo: "Prof. Plum",
  },
  {
    id: 3,
    location: "Library",
    description: "A torn page with a hidden message, possibly from Mr. Green.",
    linkedTo: "Mr. Green",
  },
  {
    id: 4,
    location: "Library",
    description: "A library card belonging to Mrs. White found on the floor.",
    linkedTo: "Mrs. White",
  },
  {
    id: 5,
    location: "Library",
    description: "A digital tablet containing a suspicious email from Dr. Black.",
    linkedTo: "Dr. Black",
  },
  {
    id: 6,
    location: "Library",
    description: "An old diary with entries about secret meetings involving Col. Mustard.",
    linkedTo: "Col. Mustard",
  },

  // Restaurant Clues
  {
    id: 7,
    location: "Restaurant",
    description: "A half-eaten meal with a unique spice, favored by Mr. Green.",
    linkedTo: "Mr. Green",
  },
  {
    id: 8,
    location: "Restaurant",
    description: "A receipt for a large order placed at 3 AM, connected to Dr. Black.",
    linkedTo: "Dr. Black",
  },
  {
    id: 9,
    location: "Restaurant",
    description: "A wine glass with fingerprints matching Ms. Scarlet.",
    linkedTo: "Ms. Scarlet",
  },
  {
    id: 10,
    location: "Restaurant",
    description: "A hidden camera footage showing Prof. Plum arguing with the waiter.",
    linkedTo: "Prof. Plum",
  },
  {
    id: 11,
    location: "Restaurant",
    description:
      "A napkin with a note indicating a secret rendezvous between Mrs. White and Col. Mustard.",
    linkedTo: "Mrs. White",
  },
  {
    id: 12,
    location: "Restaurant",
    description: "An abandoned briefcase containing documents related to Mr. Green’s finances.",
    linkedTo: "Mr. Green",
  },

  // Park Clues
  {
    id: 13,
    location: "Park",
    description: "A footprint in the mud that matches Col. Mustard's shoes.",
    linkedTo: "Col. Mustard",
  },
  {
    id: 14,
    location: "Park",
    description: "A broken umbrella with Mrs. White's initials found under a bench.",
    linkedTo: "Mrs. White",
  },
  {
    id: 15,
    location: "Park",
    description: "A torn piece of clothing snagged on a bush, belonging to Ms. Scarlet.",
    linkedTo: "Ms. Scarlet",
  },
  {
    id: 16,
    location: "Park",
    description: "A cell phone with text messages between Mr. Green and a mysterious contact.",
    linkedTo: "Mr. Green",
  },
  {
    id: 17,
    location: "Park",
    description: "A note indicating a meeting point left near the fountain, related to Dr. Black.",
    linkedTo: "Dr. Black",
  },
  {
    id: 18,
    location: "Park",
    description: "A hidden stash of cash found in a tree trunk linked to Prof. Plum.",
    linkedTo: "Prof. Plum",
  },

  // Home Clues
  {
    id: 19,
    location: "Home",
    description: "A broken window that has been repaired recently, likely done by Prof. Plum.",
    linkedTo: "Prof. Plum",
  },
  {
    id: 20,
    location: "Home",
    description: "A hidden camera that caught Dr. Black entering the house at night.",
    linkedTo: "Dr. Black",
  },
  {
    id: 21,
    location: "Home",
    description: "A strange smell of cologne found in the hallway, linked to Mr. Green.",
    linkedTo: "Mr. Green",
  },
  {
    id: 22,
    location: "Home",
    description: "An unmarked package addressed to Mrs. White found in the living room.",
    linkedTo: "Mrs. White",
  },
  {
    id: 23,
    location: "Home",
    description: "A scrapbook containing photos of Ms. Scarlet with suspicious people.",
    linkedTo: "Ms. Scarlet",
  },
  {
    id: 24,
    location: "Home",
    description: "A set of keys with a tag that matches a vehicle owned by Col. Mustard.",
    linkedTo: "Col. Mustard",
  },

  // Mall Clues
  {
    id: 25,
    location: "Mall",
    description:
      "A torn piece of fabric found near the dressing rooms, resembling Mrs. White's coat.",
    linkedTo: "Mrs. White",
  },
  {
    id: 26,
    location: "Mall",
    description: "A suspicious item purchased at the mall, registered to Mr. Green.",
    linkedTo: "Mr. Green",
  },
  {
    id: 27,
    location: "Mall",
    description: "A business card from Dr. Black found in the trash, showing a suspicious meeting.",
    linkedTo: "Dr. Black",
  },
  {
    id: 28,
    location: "Mall",
    description: "A shopping bag with receipts linking Ms. Scarlet to a recent purchase.",
    linkedTo: "Ms. Scarlet",
  },
  {
    id: 29,
    location: "Mall",
    description: "An abandoned cellphone with a video of Col. Mustard arguing with a stranger.",
    linkedTo: "Col. Mustard",
  },
  {
    id: 30,
    location: "Mall",
    description: "A brochure for a suspicious event that Mr. Green is involved with.",
    linkedTo: "Mr. Green",
  },
];

// Show the rules and story
export function showStoryAndRules() {
  console.log(`
    ╔══════════════════════════════════════════════════════════════════╗
    ║                         PSYCH MURDER MYSTERY                     ║
    ╠══════════════════════════════════════════════════════════════════╣
    ║ A murder has occurred in a grand mansion, and the suspects have  ║
    ║ gathered in the main hall. As a detective you have been called   ║
    ║ in to solve the case before the culprit escapes into the night.  ║
    ║                                                                  ║
    ║                                                                  ║
    ║ Your mission is to:                                              ║
    ║ 1. Investigate various locations for clues.                      ║ 
    ║ 2. Question each of the suspects to piece together their alibis. ║
    ║ 3. Analyze clues and make deductions to narrow down the killer.  ║
    ║                                                                  ║
    ║ But be careful! You only have 5 minutes to solve the mystery.    ║
    ║ After the time runs out, the suspect will flee, and the case     ║
    ║ will go cold.                                                    ║
    ║                                                                  ║
    ║ Rules:                                                           ║
    ║ - Each location you investigate may contain clues linked to      ║
    ║   different suspects.                                            ║
    ║ - You can question suspects about their whereabouts, but they    ║
    ║   may not always be truthful.                                    ║
    ║ - Review your clues carefully. Each clue could point towards or  ║
    ║   eliminate a suspect.                                           ║
    ║ - When you feel confident, you can make an accusation. But       ║
    ║   beware, a wrong accusation will end the case.                  ║
    ║                                                                  ║
    ║ Good luck, Detective. The clock is ticking!                      ║
    ╚══════════════════════════════════════════════════════════════════╝
  `);
}
