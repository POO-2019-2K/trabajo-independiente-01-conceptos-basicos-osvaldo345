export default class Employee {
    constructor(name, department, charge, age, yearOfHiring, seniorship) {
        this._name = name.toUpperCase();
        this._department = department.toUpperCase();
        this._charge = charge.toUpperCase();
        this._age = age;
        this._yearOfHiring = yearOfHiring;
        this._seniorship = 0;
    }

    printf() {
        console.log(`${this._name}, ${this._department}, ${this._charge}, ${this._age}, ${this._yearOfHiring}`);
    }

    getSeniorship() {
        let seniorship = 2019 - (this._yearOfHiring);
        console.log(`Seniorship: ${seniorship} years`);
    }

    // Gets

    get name() {
        return this._name;
    }

    get department() {
        return this._department;
    }

    get charge() {
        return this._charge;
    }

    get age() {
        return this._age;
    }

    get yearOfHiring() {
        return this._yearOfHiring;
    }

    // Sets

    set name(name) {
        this._name = name.toUpperCase;
    }

    set department(department) {
        this._department = department.toUpperCase();
    }

    set charge(charge) {
        this._charge = charge.toUpperCase();
    }
    
    set age(age) {
        this._age = age;
    }

    set yearOfHiring(yearOfHiring) {
        this._yearOfHiring = yearOfHiring;
    }
}