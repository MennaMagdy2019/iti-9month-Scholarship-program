var num
var i=0;
var sum=0;

// var n =parseInt(prompt("enter n values"));
do{
    num=parseInt(prompt("enter num value"));
    sum +=num;
   // console.log("ok");
   // i++;
}while((typeof(num)=='number') && (sum < 100)  && num !=0);
document.write("total sum :"+sum);
