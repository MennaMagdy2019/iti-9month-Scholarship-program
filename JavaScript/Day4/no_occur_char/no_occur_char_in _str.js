var str = prompt("enter string");
var ch = prompt("enter char :");
var x = confirm("Am I consider differenc between letter cases or not ? ");
console.log(str,ch);
var count=0;

if(x){
    str = str;
    ch = ch;
} 
else{
    str = str.toUpperCase();
    ch = ch.toUpperCase();
}
for(var i=0;i<str.length;i++){
    if (str[i]==ch) ++count;
    
}
document.write(count);