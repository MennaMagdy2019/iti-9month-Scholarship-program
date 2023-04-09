class Account {
    Acc_no;
    Balance;
    //  Acc_no:number;
    //  Balance:number;
    constructor(Acc_no = 0, Balance = 0) {
        this.Acc_no = Acc_no;
        this.Balance = Balance;
    } //syntac sugar
    debitAmount() {
        //  console.log("debitAmount")
    }
    CreditAmount() { }
    getBalance() { }
}
class currentAccount extends Account {
    Internetrate;
    Date_of_opening;
    constructor(Acc_no = 0, Balance = 0, Internetrate = 0) {
        super(Acc_no, Balance);
        this.Internetrate = Internetrate;
    }
    addCustomer() {
        console.log("addCustomer");
    }
    removeCustomer() {
        console.log("removeCustomer");
    }
}
class savingAccount extends Account {
    MinBalance;
    Date_of_opening;
    constructor(Acc_no = 0, Balance = 0, MinBalance = 0) {
        super(Acc_no, Balance);
        this.MinBalance = MinBalance;
    }
    addCustomer() {
        console.log("addCustomer");
    }
    removeCustomer() {
        console.log("removeCustomer");
    }
}
