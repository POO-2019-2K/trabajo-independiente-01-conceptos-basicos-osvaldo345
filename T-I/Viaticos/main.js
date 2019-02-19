import Expense from "./gasto.js";

let g1 = new Expense("Martin Lutero", "Department Chief", "4 days", 4800, 2200, 2000);

g1.printf();

g1.totalExpenses();

g1.daysOut = "5 days";

g1.printf();