export default class Reservation {
    constructor(name, hour, numberOfAttendants, restaurantArea, telephone) {
        this._name = name.toUpperCase();
        this._hour = hour;
        this._numberOfAttendants = numberOfAttendants;
        this._restauranArea = restaurantArea.toUpperCase();
        this._telephone = telephone;
    }

    printf() {
        console.log(`${this._name}, ${this._hour}, ${this._numberOfAttendants}, ${this._restauranArea}, ${this._telephone}`)
    }

    // Gets
    
    get name() {
        return this._name;
    }

    get hour() {
        return this._hour;
    }

    get numberOfAttendants() {
        return this._numberOfAttendants;
    }

    get restaurantArea() {
        return this._restauranArea;
    }

    get telephone() {
        return this._telephone;
    }

    // Sets

    set name(name) {
        this._name = name.toUpperCase();
    }

    set hour(hour) {
        this._hour = hour;
    }

    set numberOfAttendants(numberOfAttendants) {
        this._numberOfAttendants = numberOfAttendants;
    }

    set restaurantArea(restaurantArea) {
        this._restauranArea = restaurantArea.toUpperCase();
    }

    set telephone(telephone) {
        this._telephone = telephone;
    }
}