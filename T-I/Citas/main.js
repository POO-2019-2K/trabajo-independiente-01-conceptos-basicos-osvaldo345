import Appointment from "./cita.js";
 
let appointmentDate = new Date("03/29/2019");
let a1 = new Appointment("Pedro Picapiedra", "35", appointmentDate, "6:00", "3465B3465");

a1.printf();

a1.date = "03/30/2019";

console.log(a1.hour);

a1.printf();