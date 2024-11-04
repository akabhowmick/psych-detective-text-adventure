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

export const locations = ["Library", "Restaurant", "Park", "Home", "Mall", "Friend's House"];

// clues generated through AI
export const allClues = [
  // Library Clues
  {
    location: "Library",
    description: "A suspicious note with a time and place written on it.",
    linkedTo: "Ms. Scarlet",
  },
  {
    location: "Library",
    description: "A book missing from the shelf, last checked out by Prof. Plum.",
    linkedTo: "Prof. Plum",
  },
  {
    location: "Library",
    description: "A torn page with a hidden message, possibly from Mr. Green.",
    linkedTo: "Mr. Green",
  },
  {
    location: "Library",
    description: "A library card belonging to Mrs. White found on the floor.",
    linkedTo: "Mrs. White",
  },
  {
    location: "Library",
    description: "A digital tablet containing a suspicious email from Dr. Black.",
    linkedTo: "Dr. Black",
  },
  {
    location: "Library",
    description: "An old diary with entries about secret meetings involving Col. Mustard.",
    linkedTo: "Col. Mustard",
  },

  // Restaurant Clues
  {
    location: "Restaurant",
    description: "A half-eaten meal with a unique spice, favored by Mr. Green.",
    linkedTo: "Mr. Green",
  },
  {
    location: "Restaurant",
    description: "A receipt for a large order placed at 3 AM, connected to Dr. Black.",
    linkedTo: "Dr. Black",
  },
  {
    location: "Restaurant",
    description: "A wine glass with fingerprints matching Ms. Scarlet.",
    linkedTo: "Ms. Scarlet",
  },
  {
    location: "Restaurant",
    description: "A hidden camera footage showing Prof. Plum arguing with the waiter.",
    linkedTo: "Prof. Plum",
  },
  {
    location: "Restaurant",
    description:
      "A napkin with a note indicating a secret rendezvous between Mrs. White and Col. Mustard.",
    linkedTo: "Mrs. White",
  },
  {
    location: "Restaurant",
    description: "An abandoned briefcase containing documents related to Mr. Green’s finances.",
    linkedTo: "Mr. Green",
  },

  // Park Clues
  {
    location: "Park",
    description: "A footprint in the mud that matches Col. Mustard's shoes.",
    linkedTo: "Col. Mustard",
  },
  {
    location: "Park",
    description: "A broken umbrella with Mrs. White's initials found under a bench.",
    linkedTo: "Mrs. White",
  },
  {
    location: "Park",
    description: "A torn piece of clothing snagged on a bush, belonging to Ms. Scarlet.",
    linkedTo: "Ms. Scarlet",
  },
  {
    location: "Park",
    description: "A cell phone with text messages between Mr. Green and a mysterious contact.",
    linkedTo: "Mr. Green",
  },
  {
    location: "Park",
    description: "A note indicating a meeting point left near the fountain, related to Dr. Black.",
    linkedTo: "Dr. Black",
  },
  {
    location: "Park",
    description: "A hidden stash of cash found in a tree trunk linked to Prof. Plum.",
    linkedTo: "Prof. Plum",
  },

  // Home Clues
  {
    location: "Home",
    description: "A broken window that has been repaired recently, likely done by Prof. Plum.",
    linkedTo: "Prof. Plum",
  },
  {
    location: "Home",
    description: "A hidden camera that caught Dr. Black entering the house at night.",
    linkedTo: "Dr. Black",
  },
  {
    location: "Home",
    description: "A strange smell of cologne found in the hallway, linked to Mr. Green.",
    linkedTo: "Mr. Green",
  },
  {
    location: "Home",
    description: "An unmarked package addressed to Mrs. White found in the living room.",
    linkedTo: "Mrs. White",
  },
  {
    location: "Home",
    description: "A scrapbook containing photos of Ms. Scarlet with suspicious people.",
    linkedTo: "Ms. Scarlet",
  },
  {
    location: "Home",
    description: "A set of keys with a tag that matches a vehicle owned by Col. Mustard.",
    linkedTo: "Col. Mustard",
  },

  // Mall Clues
  {
    location: "Mall",
    description:
      "A torn piece of fabric found near the dressing rooms, resembling Mrs. White's coat.",
    linkedTo: "Mrs. White",
  },
  {
    location: "Mall",
    description: "A suspicious item purchased at the mall, registered to Mr. Green.",
    linkedTo: "Mr. Green",
  },
  {
    location: "Mall",
    description: "A business card from Dr. Black found in the trash, showing a suspicious meeting.",
    linkedTo: "Dr. Black",
  },
  {
    location: "Mall",
    description: "A shopping bag with receipts linking Ms. Scarlet to a recent purchase.",
    linkedTo: "Ms. Scarlet",
  },
  {
    location: "Mall",
    description: "An abandoned cellphone with a video of Col. Mustard arguing with a stranger.",
    linkedTo: "Col. Mustard",
  },
  {
    location: "Mall",
    description: "A brochure for a suspicious event that Mr. Green is involved with.",
    linkedTo: "Mr. Green",
  },

  // Friend's House Clues
  {
    location: "Friend’s House",
    description:
      "An empty wine bottle with a label that matches what was found at the restaurant, tied to Col. Mustard.",
    linkedTo: "Col. Mustard",
  },
  {
    location: "Friend’s House",
    description: "A text message screenshot from Ms. Scarlet arranging to meet at the park.",
    linkedTo: "Ms. Scarlet",
  },
  {
    location: "Friend’s House",
    description: "A keychain with Dr. Black's name found near the entrance.",
    linkedTo: "Dr. Black",
  },
  {
    location: "Friend’s House",
    description: "A diary with entries about secret meetings involving Prof. Plum.",
    linkedTo: "Prof. Plum",
  },
  {
    location: "Friend’s House",
    description: "A broken clock that stopped at the time of the crime, linked to Mr. Green.",
    linkedTo: "Mr. Green",
  },
  {
    location: "Friend’s House",
    description: "A photograph showing Mrs. White and Col. Mustard together at a party.",
    linkedTo: "Mrs. White",
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
