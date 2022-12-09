#include <iostream>
#include <string>
#include <conio.h>

using namespace std;

/* miniproject - ATM
 -> check Balance
 -> Cash withdraw
 -> User details
 -> update Mobile no
*/

//class atm
class atm
{
private:
    long int account_no;
    string name;
    int pin;
    double balance;
    string mobile_no;

public:
    //setDate function
    void setData(long int acc_no,string nam,int pn, double bal,string mobil_no)
    {
        account_no = acc_no;
        name= nam;
        pin = pn;
        balance = bal;
        mobile_no = mobil_no;
    }
    // get account_no
    long int getAccountNo()
    {
        return account_no;
    }
     // get name
    string getName()
    {
        return name;
    }
     // get pin
     int getPin()
    {
        return pin;
    }
    // get balance
     double getbalance()
    {
        return balance;
    }
    //get mobileNO
    string getmobileNo()
    {
        return mobile_no;
    }
   //set updating funcion is updating the user mobile no
    void setMobile(string mobile_prev, string mob_new)
    {
        if(mobile_prev == mob_new)
        {
            cout<<"Successfully Updated Mobile no.";
           _getch();
        }
        else
        {
            cout<<"Incorrect !!! Old Mobile no";
            _getch();
        }

    }
    //cashwithdraw func
    void cashwithDraw(int amount_a)
    {
        if(amount_a > 0 && amount_a<balance)
        {
            balance -=amount_a;
            cout<<"please Collect Your Cash";
            cout<<"Available Balance : "<<balance;
            _getch();

        }
        else {
            cout<<"Invalid Input or Insufficient Balance";
             _getch();
        }
    }
};
int main()
{

    int choice=0,enterPin;
    long int enterAccountNo;

    system("cls");
    //created user (object)
    atm user1;
    //set user details
    user1.setData(123456,"Tim",45000,90,"9999965238");

    do{
        system("cls");
        cout<< "************Welcom to ATM*********"<<endl;
        cout<<endl<<"Enter Your Account NO";
        cin>> enterAccountNo;

        cout<<endl<<"Enter PIN";
        cin>>enterPin;

        //check wether enter values matches with user details
        if((enterAccountNo == user1.getAccountNo()) && (enterPin == user1.getPin()))
        {
            int amount =0;
            string oldMobileNo,newMobileNo;

            system("cls");
            //user interface
            cout << endl<<"********Welcom to ATM*********"<<endl;
            cout<<endl <<"Select Options";
            cout<<endl <<"1. Check Balance";
            cout<<endl <<"2. Cash withdraw";
            cout<<endl <<"3. show user Details";
            cout<<endl <<"4. update Mobile no.";
            cout<<endl <<"5. Exit"<<endl;

           cin>>choice;

           switch(choice) //switch condition
           {
           case 1:
               //calling getBalance func
            cout<<"your Bank Balanc is : "<<user1.getbalance()<<endl;
            -getch();
            break;

            case 2:
                 cout<<"Enter the amount : "<<user1.getbalance()<<endl;
                 cin>>amount;
                 //calling cashwithDraw func
                 user1.cashwithDraw(amount);
            _getch();
            break;

            case 3:
                  cout<<"*** User Details are :- "<<endl;
                  cout<<"-> Account no"<<user1.getAccountNo()<<endl;
                  cout<<"-> Name      "<<user1.getName()<<endl;
                  cout<<"-> Balance   "<<user1.getbalance()<<endl;
                  cout<<"-> Mobile No"<<user1.getmobileNo()<<endl;

            _getch();
            break;

            case 4:

                  cout<<"Enter Old Mobile No.";
                  cin>>oldMobileNo;

                  cout<<"Enter New Mobile No.";
                  cin>>newMobileNo;

                  user1.setMobile(oldMobileNo,newMobileNo);
            break;

            case 5:
                exit(0);
            default:  //handle invalid user inputs
                cout<<"Enter Valid Data !!!";

           }
        }
        else{
            cout<<endl<<"User Details are Invalid !!!";
            _getch();
        }
    }while(1);


    return 0;
}
