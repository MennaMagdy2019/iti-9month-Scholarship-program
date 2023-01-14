//setcookie
function setcookie(username , value ,expireyDate){
if(arguments.length == 3 || arguments.length == 2 ){
   if(typeof expireyDate == null){
    document.cookie = username+ "=" + value 
   }
   else{
    var myDate = new Date();
    document.cookie = username+ "=" + value + ";" +"expires" + myDate.toGMTString();
   }
 }
 else{
    throw "plz enter correct data";
    
 }
}

//setcookie("username","nada");

console.log(document.cookie)
var str,str1;
var cookiearr=[];

//function getcookie()
function getAllCookie(){
    str = document.cookie;
    str1 = str.substring(str.indexOf(";")+1 , str.length)
    str1=str1.split(";");
return str1;
}

//function getcookie()
function getcookie(cookiename){ 
    if(arguments.length == 1){
        getAllCookie();
        let uname= (cookiename+"=");
        for(let i=0 ; i< str1.length ;i++){
            cookiearr[i] = str1[i].trim()
            if(cookiearr[i].indexOf(cookiename)== 0){
            // console.log(cookiearr[i])
                return cookiearr[i].substring(uname.length,cookiearr[i].length);
            }
        }
    }
   else{
    throw "please enter only cookieename"
   
   }
}
// function checkCookie
function hasCookie(cookiename) {
   // console.log(arguments.length)
        if(arguments.length == 1){
            let value = getcookie(cookiename)
            if(value != ""){
                console.log("this cookie is found")
            }
            else {
               console.log("this cookiee isn't found")
            }
        }
        else{
        // throw "enter only cookie name"
        }
}
// function deleteCookie
function deleteCookie(cookiename) {
    if(arguments.length == 1){
        let uname= (cookiename+"=");
        for(let i=0 ; i< str1.length ;i++){
        cookiearr[i] = str1[i].trim()
            if(cookiearr[i].indexOf(cookiename)== 0){
                return uname +"; expires=Thu, 01 Jan 2000 00:00:00";
            }
        }
        }
    else{
        throw "please enter only cookuename"
    }
    
}
// function deleteAllCookie
 function deleteallCookie() {
for(let i=0 ; i< cookiearr.length ;i++){
    
   var cookiedelname = (cookiearr[i].substring(0 , cookiearr[i].indexOf("=")))
    str1[i]= cookiedelname +"= ; expires=Thu, 01 Jan 2000 00:00:00";
  // console.log(cookiearr[i])  
}
 }



