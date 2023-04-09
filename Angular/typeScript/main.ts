class Account {
    //  Acc_no:number;
    //  Balance:number;

     constructor(public  Acc_no=0,public Balance=0){} //syntac sugar
     debitAmount(){
      //  console.log("debitAmount")
     }
     CreditAmount(){}
     getBalance(){}
}

interface IAccount {
    Date_of_opening:number;
    addCustomer();
    removeCustomer();
}

class currentAccount extends Account implements IAccount{
    Date_of_opening:number;
   constructor(Acc_no=0, Balance=0 , public Internetrate=0 ){
    super(Acc_no, Balance)
   }
   addCustomer(){
    console.log("addCustomer")
   }
   removeCustomer(){
    console.log("removeCustomer")
   }
}

class savingAccount extends Account implements IAccount{
    Date_of_opening:number;
    constructor(Acc_no=0, Balance=0 , public MinBalance=0 ){
     super(Acc_no, Balance)
    }
    addCustomer(){
        console.log("addCustomer")
       }
       removeCustomer(){
        console.log("removeCustomer")
       }
 }