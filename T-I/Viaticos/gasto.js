export default class Expense {
    constructor(employeeName, employeeCharge, daysOut, housingExpenses, foodExpenses, transportExpenses) {
        this._employeeName = employeeName.toUpperCase();
        this._employeeCharge = employeeCharge.toUpperCase();
        this._daysOut = daysOut;
        this._housingExpenses = housingExpenses; 
        this._foodExpenses = foodExpenses;
        this._transportExpenses = transportExpenses;
    }

    printf() {
        console.log(`${this._employeeName}, ${this._employeeCharge}, ${this._daysOut}, ${this._housingExpenses}, ${this._foodExpenses}, ${this._transportExpenses}`)
    }

    totalExpenses() {
        let totalExpenses = (this._housingExpenses) + (this._foodExpenses) + (this._transportExpenses);
        console.log(`Total expenses are $${totalExpenses}`);
    }

    // Gets 

    get employeeName() {
        return this._employeeName;
    }

    get employeeCharge() {
        return this._employeeCharge;
    }

    get daysOut() {
        return this._daysOut;
    }

    get housingExpenses() {
        return this._housingExpenses;
    }

    get foodExpenses() {
        return this._foodExpenses() 
    }

    get transportExpenses() {
        return this._transportExpenses;
    }

    // Sets 

    set employeeName(employeeName) {
        this._employeeName = employeeName.toUpperCase();
    }

    set employeeCharge(employeeCharge) {
        this._employeeCharge = employeeCharge.toUpperCase();
    }

    set daysOut(daysOut) {
        this._daysOut = daysOut;
    }

    set housingExpenses(housingExpenses) {
        this._housingExpenses = housingExpenses;
    }

    set foodExpenses(foodExpenses) {
        this._foodExpenses = foodExpenses;
    }

    set transportExpenses(transportExpenses) {
        this._transportExpenses = transportExpenses;
    }
}