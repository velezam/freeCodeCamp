function checkCashRegister(price, cash, cid) {
  const CURRENCY = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1.0,
    FIVE: 5.0,
    TEN: 10.0,
    TWENTY: 20.0,
    "ONE HUNDRED": 100.0,
  };

  let total = 0;
  let changeDue = (cash - price) * 100; //change due in cents for accuracy

  // Calculate the total amount of cash in the cash drawer
  for (let i = 0; i < cid.length; i++) {
    total += cid[i][1];
  }

  // Check if there is not enough cash in the drawer to provide the correct change, or if the drawer is empty
  if (total * 100 < changeDue) {
    // Return an object indicating that there is not enough cash in the drawer
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (total * 100 === changeDue) {
    // Return an object indicating that the drawer is closed and no change is needed
    return { status: "CLOSED", change: cid };
  } else {
    // Create an array to hold the change to be returned
    let changeArray = [];

    // Loop through each currency unit in the cash drawer, starting with the largest
    for (let currencyPair of cid.reverse()) {
      let denomination = currencyPair[0]; // Get the name of the currency unit
      let moneyLeft = currencyPair[1] * 100; // Get the amount of money left for that currency unit, in cents
      let tempCount = 0; // Initialize a variable to hold the amount of change to be given out of that currency unit

      // While there is still change to be given out of that currency unit, and we have enough money left in that drawer for the change
      while (changeDue >= CURRENCY[denomination] * 100 && moneyLeft > 0) {
        tempCount += CURRENCY[denomination] * 100; // Increase the amount of change to be given out of that currency unit, in cents
        moneyLeft -= CURRENCY[denomination] * 100; // Decrease the amount of money left in that drawer for that currency unit, in cents
        changeDue -= CURRENCY[denomination] * 100; // Decrease the amount of change left to be given, in cents
      }

      // If we took change from that currency unit, add it to the changeArray
      if (tempCount > 0) {
        changeArray.push([denomination, tempCount / 100]); // Convert the amount of change back to dollars and add it to the changeArray
      }
    }

    // Check if there is still change due after giving out all the change
    if (changeDue > 0) {
      // Return an object indicating that there is not enough cash in the drawer to provide the correct change
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
      // Return an object indicating the status is open and the change to be given
      return { status: "OPEN", change: changeArray };
    }
  }
}

// Test case 1: Exact change in drawer
let result1 = checkCashRegister(5.0, 5.0, [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1.0],
  ["FIVE", 5.0],
  ["TEN", 10.0],
  ["TWENTY", 20.0],
  ["ONE HUNDRED", 100.0],
]);
console.log(result1); // { status: "CLOSED", change: [...] }

// Test case 2: Not enough change in drawer
let result2 = checkCashRegister(5.0, 10.0, [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1.0],
  ["FIVE", 1.0],
  ["TEN", 10.0],
  ["TWENTY", 20.0],
  ["ONE HUNDRED", 100.0],
]);
console.log(result2); // { status: "INSUFFICIENT_FUNDS", change: [] }

// Test case 3: Change can be given out of some denominations but not others
let result3 = checkCashRegister(9.0, 20.0, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90.0],
  ["FIVE", 55.0],
  ["TEN", 20.0],
  ["TWENTY", 60.0],
  ["ONE HUNDRED", 100.0],
]);
console.log(result3); // { status: "OPEN", change: [...] }

// Test case 4: Not enough change in drawer for a specific denomination
let result4 = checkCashRegister(4.0, 20.0, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
console.log(result4); // { status: "INSUFFICIENT_FUNDS", change: [] }
