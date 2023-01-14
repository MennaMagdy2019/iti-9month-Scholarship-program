var str = prompt("enter string want to check plindrom");
var len = str.length-1;

var x = confirm("Am I consider differenc between letter cases or not ? ");

(x) ? str= str : str = str.toUpperCase();
var flag =1;
for(var i=0;i<str.length/2 ; i++){
    if(str[i]!==str[len-i]) flag= 0;
}

  (flag) ?alert("string is plindrom") :alert("string is not plindrom");
/*

for(var i=0;i<str.length/2 ; i++,len--){
  if(str[i]===str[len]) flag=1
}
(flag) ? document.write("string is plindrom : ", str) : document.write("string is not plindrom : ", str)
*/