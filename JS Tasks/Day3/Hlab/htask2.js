var x;
var sum=0;
do
{
    x=parseInt(prompt("Enter number:"));
    sum+=x;
}
while(x!=0 && sum<=100 &&typeof(x)!=Number)
document.write("the sum is:"+sum);