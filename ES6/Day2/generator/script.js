
function *fibonacci1(maxNum){
    const res = [0,1];
    for(let i=2;i<maxNum;i++){
        res[i]=res[i-2] + res[i-1];
    }
    for(let i=0;i<maxNum;i++){
        // console.log(res[i])
        yield res[i]
    }
  
}

var fib = fibonacci1(9)

console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())


/************************************************* */

function *fibonacci2(num){
    const res = [0,1];
     if(num == 1){
        res[2]=1;
        
    }
    else{
        for(let i=2;i<num;i++){
            if(res[i-1]<=num){
                res[i]=res[i-2] + res[i-1];
            }
        }  
    }
     //console.log(res)
    for(let i=0;i<=res.length-1;i++){
      if(res[i]<=num){  yield res[i] } 
    }
}

var fib1 = fibonacci2(9)

console.log(fib1.next())
console.log(fib1.next())
console.log(fib1.next())
console.log(fib1.next())
console.log(fib1.next())
console.log(fib1.next())
console.log(fib1.next())
console.log(fib1.next())
console.log(fib1.next())

