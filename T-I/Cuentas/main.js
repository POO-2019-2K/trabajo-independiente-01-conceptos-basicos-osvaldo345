import Account from "./cuenta.js";

let a1 = new Account("1054-1456-5673", "Jorge Rincon", "Bancomer", "$20,000", "C1093D2457");

a1.printf();

a1.bank = "Banamex";

console.log(a1.lastMovementID);

a1.printf();