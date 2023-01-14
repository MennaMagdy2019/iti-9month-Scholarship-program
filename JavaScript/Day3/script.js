var text = prompt("enter name:");
var i=0;
document.write(text + "<hr>");
for(i=1;i<=6;i++){
    document.write("<h"+i+">"+text+ i+ "</h"+i+">");
}
