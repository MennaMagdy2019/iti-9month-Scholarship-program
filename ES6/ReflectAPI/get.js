var myObj = {
    name:"menna",
    age:22
}
var handler ={
    get(target,prop){
        if(target.hasOwnProperty(prop)){
            return target[prop]
        }
        else{
            throw 'invalid Property'
        }
    } 
}

var myProxy = new Proxy(myObj,handler)

console.log(myProxy.age)