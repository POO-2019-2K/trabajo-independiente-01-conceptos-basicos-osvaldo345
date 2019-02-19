import Employee from "./empleado.js";

let e1 = new Employee("German Torres", "Administration", "Boss", "35", 2006);

e1.printf();

console.log(e1.charge);

e1.charge = "Department Boss";

e1.printf();

e1.getSeniorship();