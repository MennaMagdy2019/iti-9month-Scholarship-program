var myobj ={
    name:"menna",
    age:"10",

    [Symbol.iterator]: function(){
        var myObjKeys = Object.keys(myobj)
        var cnt=0
        var len = myObjKeys.length
       return{
        "next" :function (){
            if(cnt<len){
              //return {value:myobj[myObjKeys[cnt++]] ,done:"false"}
               return {value:{key:myObjKeys[cnt] , value:myobj[myObjKeys[cnt++]]} ,done:"false"}

            }
            else{
                return {value:undefined ,done:"true"}
            }
        }
       }
       
    }
}

var iter = myobj[Symbol.iterator]()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())