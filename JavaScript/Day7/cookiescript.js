//setcookie
function setcookie(username , value ,expireyDate){
   // expireyDate = "Thu Nov 24 2022 09:23:58 "
   if(typeof expireyDate == null){
    document.cookie = username+ "=" + value 
   }
   else{
    var myDate = new Date();
    document.cookie = username+ "=" + value + ";" +"expires" + myDate.toGMTString();
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
// function checkCookie
function hasCookie(cookiename) {
    let value = getcookie(cookiename)
    if(value != ""){
        console.log("this cookie is found")
    }
    else {
       console.log("this cookiee isn't found")
    }
}
// function deleteCookie
function deleteCookie(cookiename) {
    let uname= (cookiename+"=");
    for(let i=0 ; i< str1.length ;i++){
       cookiearr[i] = str1[i].trim()
        if(cookiearr[i].indexOf(cookiename)== 0){
            return uname +"; expires=Thu, 01 Jan 2000 00:00:00";
        }
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



