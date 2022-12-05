
    var nameuser = prompt("enter your name:")
    var  mobile_num,email,color,phone_num;
     
    
    var testname= /[a-zA-Z]/;
    var test_phonenum = /^[0-9]{8}$/;
    var test_mobile_num = new RegExp("^(011|012|010)[0-9]{8}$");
    var mailformat = /^[a-zA-z]+@+[a-zA-Z]+\.+[a-zA-Z]{3}$/;  
   
   
    while(!(testname.test(nameuser)) )
    {
        console.log("name invalid");
        nameuser = prompt("enter again your name: ")
    }
    phone_num = prompt("enter your phone number: ");
    while(!(test_phonenum.test(phone_num))){
        console.log("phone_num invalid");
        phone_num = prompt("enter your phone number again: ");
    }

    mobile_num = prompt("enter your mobile number: ");
    while(!(test_mobile_num.test(mobile_num))){
        console.log("mobile_nume invalid");
        mobile_num = prompt("enter again your mobile number: ");
    } 
       
    email = prompt("enter your Email: ");
    while(!(mailformat.test(email))){
    console.log("You have entered an invalid email address!");  
    email = prompt("enter again your Email: ");
   }
   color = prompt("enter your color red or green or yellow ");

   console.log("%c name is "+ nameuser, `color:${color}`);
   console.log(" %c phone_num valid is"+phone_num, `color:${color}`);
   console.log(" %c mobile_nume valid is"+mobile_num, `color:${color}`);
   console.log(" %c email valid is"+email, `color:${color}`);
