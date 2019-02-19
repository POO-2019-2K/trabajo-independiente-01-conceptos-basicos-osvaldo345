import Reservation from "./reservacion.js";

let r1 = new Reservation("Juan Perez", "7:30", "5", "Rooftop", "312-115-2342");

r1.printf();

console.log(r1.hour);

r1.restaurantArea = "First Floor";

console.log(r1.restaurantArea);

r1.printf();

