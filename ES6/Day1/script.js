// swap using destructuring

var x=5,y=6;
console.log(`Befor swap x : ${x} && y: ${y}`);
[x,y] = [y,x]
console.log(`After swap x : ${x} && y: ${y}`);


// min && max using rest & spread parameter
var min,max
function getMinMax(...arr){
     min = Math.min(...arr)
     max = Math.max(...arr)
}

getMinMax(1,2,3)
console.log(`The min elem in array is ${min} && The max elem in array is ${max}`);

