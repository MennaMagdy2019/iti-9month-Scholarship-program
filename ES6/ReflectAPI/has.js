var myObj = {
    name:"menna",
    age:22
}
var handler ={
    has(target,prop){
        return target.hasOwnProperty(prop) 
    } 
}

var myProxy = new Proxy(myObj,handler)
console.log( 'name' in myProxy)  //true
console.log( 'salary' in myProxy)  //false