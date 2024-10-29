const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Calculates the minimum number of buses required to accommodate families,
 * given that each bus can hold up to 4 people.
 *
 * @param {number[]} families - An array where each element represents the number of members in a family.
 * @returns {number} - The minimum number of buses required.
 */
function calculateMinimumBuses(families) {
  let buses = 0;
  let assigned = new Array(families.length).fill(false);

  for (let i = 0; i < families.length; i++) {
    if (assigned[i]) continue;

    assigned[i] = true;
    let remainingSpace = 4 - families[i];
    buses++;

    if (remainingSpace > 0) {
      for (let j = i + 1; j < families.length; j++) {
        if (!assigned[j] && families[j] <= remainingSpace) {
          assigned[j] = true;
          break;
        }
      }
    }
  }

  return buses;
}

/**
 * Prompts user for input, calculates and displays the minimum number of buses needed.
 */
function promptAndCalculateBuses() {
  rl.question("Input the number of families : ", (n) => {
    n = parseInt(n);

    rl.question(
      "Input the number of members in the family (separated by a space) : ",
      (input) => {
        let families = input.trim().split(" ").map(Number);

        if (families.length !== n) {
          console.log("Input must be equal with count of family");
          rl.close();
          return;
        }

        let result = calculateMinimumBuses(families);
        console.log("Minimum bus required is : " + result);

        rl.close();
      }
    );
  });
}

promptAndCalculateBuses();
