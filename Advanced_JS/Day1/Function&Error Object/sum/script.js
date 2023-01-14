function sum(a,b){
    var sum=0;
    if(arguments.length==2){
        sum=a+b;
        return sum;
       
    }
    else {
        throw "please enter 2 numbers only";
    }
}
//sum(3,4);
console.log(sum(3,4))
console.log(sum(4))
console.log(sum(3,4,5))