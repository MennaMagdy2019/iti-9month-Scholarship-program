var greetmessage = location.href

console.log(greetmessage)

// var txtname= document.getElementById("inp").value;
// console.log(txtname);

var loc = location.href
var loccinex = loc.indexOf("?")+1   //38
var  str = loc.substring(loccinex,loc.length)
var arrstr= str.split("&"); //7

//name
var username = arrstr[0].substring((arrstr[0].indexOf("=")+1),(arrstr[0].length) )    // 'name=Menna'
console.log(username); //menna
//job title
var title = arrstr[3].substring((arrstr[3].indexOf("=")+1),(arrstr[3].length)) 
console.log(title);

//address
var add = arrstr[1].substring((arrstr[1].indexOf("=")+1),(arrstr[1].length)) 
console.log(add);

//mobile
var mobile = arrstr[2].substring((arrstr[2].indexOf("=")+1),(arrstr[2].length)) 
console.log(mobile);

//email
var email = arrstr[4].substring((arrstr[4].indexOf("=")+1),(arrstr[4].length)) 
email = email.replace("%40","@")
console.log(email);

//gender
var gender = arrstr[5].substring((arrstr[5].indexOf("=")+1),(arrstr[5].length)) 
console.log(gender);

var txt ="<h1> your address : "+add+"<br> your gender : "+gender + "<br> email : " + email + "<br> mobile "+mobile+ "</h1>";

confirm("welcom to our page ya "+username + " that is your job title is "+title);

document.getElementById("infouser").innerHTML = txt
console.log(txt);
// function info( ){
    


// return false;

//}


//infouserr.fgColor = "blue";
   // 'name=Menna+&address=Mansoura-Sherbeen&mobile=&jobtitle=std&email='
   // (5) ['name=Menna+', 'address=Mansoura-Sherbeen', 'mobile=', 'jobtitle=std', 'email=']
   // arrstr[0].split("=")
    //(2) ['name', 'Menna+']