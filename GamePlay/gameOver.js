import { rl } from "../initialGameState.js";
import { playerName, actualCulprit } from "../game.js";
import { stopTimer } from "./timer.js";

export function gameOver(outcome) {
  stopTimer();
  console.log(
    ` ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⡀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣤⠀⠀⠀⢀⣴⣿⡶⠀⣾⣿⣿⡿⠟⠛⠁
      ⠀⠀⠀⠀⠀⠀⣀⣀⣄⣀⠀⠀⠀⠀⣶⣶⣦⠀⠀⠀⠀⣼⣿⣿⡇⠀⣠⣿⣿⣿⠇⣸⣿⣿⣧⣤⠀⠀⠀
      ⠀⠀⢀⣴⣾⣿⡿⠿⠿⠿⠇⠀⠀⣸⣿⣿⣿⡆⠀⠀⢰⣿⣿⣿⣷⣼⣿⣿⣿⡿⢀⣿⣿⡿⠟⠛⠁⠀⠀
      ⠀⣴⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⢠⣿⣿⣹⣿⣿⣿⣿⣿⣿⡏⢻⣿⣿⢿⣿⣿⠃⣼⣿⣯⣤⣴⣶⣿⡤⠀
      ⣼⣿⠏⠀⣀⣠⣤⣶⣾⣷⠄⣰⣿⣿⡿⠿⠻⣿⣯⣸⣿⡿⠀⠀⠀⠁⣾⣿⡏⢠⣿⣿⠿⠛⠋⠉⠀⠀⠀
      ⣿⣿⠲⢿⣿⣿⣿⣿⡿⠋⢰⣿⣿⠋⠀⠀⠀⢻⣿⣿⣿⠇⠀⠀⠀⠀⠙⠛⠀⠀⠉⠁⠀⠀⠀⠀⠀⠀⠀
      ⠹⢿⣷⣶⣿⣿⠿⠋⠀⠀⠈⠙⠃⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠈⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⣴⣶⣦⣤⡀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⣠⡇⢰⣶⣶⣾⡿⠷⣿⣿⣿⡟⠛⣉⣿⣿⣿⠆
      ⠀⠀⠀⠀⠀⠀⢀⣤⣶⣿⣿⡎⣿⣿⣦⠀⠀⠀⢀⣤⣾⠟⢀⣿⣿⡟⣁⠀⠀⣸⣿⣿⣤⣾⣿⡿⠛⠁⠀
      ⠀⠀⠀⠀⣠⣾⣿⡿⠛⠉⢿⣦⠘⣿⣿⡆⠀⢠⣾⣿⠋⠀⣼⣿⣿⣿⠿⠷⢠⣿⣿⣿⠿⢻⣿⣧⠀⠀⠀
      ⠀⠀⠀⣴⣿⣿⠋⠀⠀⠀⢸⣿⣇⢹⣿⣷⣰⣿⣿⠃⠀⢠⣿⣿⢃⣀⣤⣤⣾⣿⡟⠀⠀⠀⢻⣿⣆⠀⠀
      ⠀⠀⠀⣿⣿⡇⠀⠀⢀⣴⣿⣿⡟⠀⣿⣿⣿⣿⠃⠀⠀⣾⣿⣿⡿⠿⠛⢛⣿⡟⠀⠀⠀⠀⠀⠻⠿⠀⠀
      ⠀⠀⠀⠹⣿⣿⣶⣾⣿⣿⣿⠟⠁⠀⠸⢿⣿⠇⠀⠀⠀⠛⠛⠁⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠈⠙⠛⠛⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`
  );
  switch (outcome) {
    case "win":
      console.log(`
        ██╗    ██╗██╗███╗   ██╗███╗   ██╗███████╗██████╗ 
        ██║    ██║██║████╗  ██║████╗  ██║██╔════╝██╔══██╗
        ██║ █╗ ██║██║██╔██╗ ██║██╔██╗ ██║█████╗  ██████╔╝
        ██║███╗██║██║██║╚██╗██║██║╚██╗██║██╔══╝  ██╔══██╗
        ╚███╔███╔╝██║██║ ╚████║██║ ╚████║███████╗██║  ██║
        ╚══╝╚══╝ ╚═╝╚═╝  ╚═══╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝`);
      console.log("\nCongratulations, Detective! You correctly identified the culprit!");
      console.log(
        "Justice has been served, thanks to your keen observation and deduction skills. However, how did you solve it?"
      );
      psychicRant();
      break;

    case "lose":
      console.log(`
        ██╗      ██████╗ ███████╗████████╗
        ██║     ██╔═══██╗██╔════╝╚══██╔══╝
        ██║     ██║   ██║███████╗   ██║   
        ██║     ██║   ██║╚════██║   ██║   
        ███████╗╚██████╔╝███████║   ██║   
        ╚══════╝ ╚═════╝ ╚══════╝   ╚═╝   `);
      console.log("\nOh no! The culprit has escaped.");
      console.log("Better luck next time, Detective ${playerName}!");
      break;

    case "timeout":
      console.log("\nTime's up! The culprit slipped away while you were investigating.");
      console.log("Remember, every second counts in the world of crime-solving!");
      break;

    case "quit":
      console.log(`Goodbye, Detective ${playerName}!`);
      console.log("\nGame terminated by the player.");
      break;

    default:
      console.log(`Game ended!`);
  }
  rl.close();
}

// The main character in Psych (Shawn Spencer) always goes on tirades when he is correct!
export function psychicRant(selectedClues) {
  console.log(
    "\n🎩 *The detective takes a deep breath, eyes half-closed, channeling his 'psychic' insight...* 🎩\n"
  );
  console.log(
    `"I can see it all clearly now... It started when I found the clue at the ${selectedClues[0].location}. That ${selectedClues[0].description} was the first hint...`
  );

  selectedClues.slice(1).forEach((clue) => {
    console.log(
      `Then, at the ${clue.location}, the ${clue.description} confirmed my suspicions. It all pointed towards one person...`
    );
  });

  console.log(
    `And there you have it, folks! All these signs led me right to you, ${actualCulprit.name}! My work here is done!"`
  );

  console.log("\n*The detective grins confidently, basking in his 'psychic' glory.* 🕵️‍♂️✨\n");
}
