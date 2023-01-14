/*b1*/
function fn1(){
    var arr = Array.from(arguments);
    return arr.reverse();
}
console.log(fn1(1,5,6,9));

function fn2(){
    var arr = Array.from(arguments);
    return fn2().bind(fn1);
}

console.log(fn1(10,50,60,90));

/*b2*/
function sum(a,b){
    var sum=0;
    if(arguments.length==2){
        sum=a+b;
        console.log(sum);
        return sum;
       
    }
    else {
        throw "please enter 2 numbers only";
    }
}
//sum(3,4);
// console.log(sum(3,4))
// console.log(sum(4))
// console.log(sum(3,4,5))

/*b3*/
function add(){
    var sum=0.
    if(arguments.length==0){
        console.log("error please enter number only")
    }
    else{
       // console.log(arguments.length)
      for(var i=0;i< arguments.length;i++){
       
         //console.log(typeof(arguments[i]))
        if((typeof(arguments[i])) === 'number' ){
            sum +=arguments[i];
             
        }
        else{
            console.log("error please enter numbers only")
            return;
        }
      }
      console.log(sum);
       return sum;
        
    }
    }
    // add()
    // add(2,4);
    // add("2",2)