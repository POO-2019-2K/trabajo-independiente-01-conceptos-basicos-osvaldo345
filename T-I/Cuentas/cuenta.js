export default class Account {
    constructor(numberOfAccount, owner, bank, monetaryFunds, lastMovementID) {
        this._numberOfAccount = numberOfAccount;
        this._owner = owner.toUpperCase();
        this._bank = bank.toUpperCase();
        this._monetaryFunds = monetaryFunds;
        this._lastMovementID = lastMovementID;
    }

    printf() {
        console.log(`${this._numberOfAccount}, ${this._owner}, ${this._bank}, ${this._monetaryFunds}, ${this._lastMovementID}`);
    }

    // Gets 

    get numberOfAccount() {
        return this._numberOfAccount;
    }

    get owner() {
        return this._owner;
    }

    get bank() {
        return this._bank;
    }

    get monetaryFunds() {
        return this._monetaryFunds;
    }

    get lastMovementID() {
        return this._lastMovementID;
    }

    // Sets 

    set numberOfAccount(numberOfAccount) {
        this._numberOfAccount = numberOfAccount;
    }

    set owner(owner) {
        this._owner = owner.toUpperCase();
    }

    set bank(bank) {
        this._bank = bank.toUpperCase();
    }

    set monetaryFunds(monetaryFunds) {
        this._monetaryFunds = monetaryFunds;
    }

    set lastMovementID(lastMovementID) {
        this._lastMovementID = lastMovementID;
    }
}