var myObj = {
    name:"menna",
    age:22
}
var handler ={
    set(target,prop,value){
        if(target.hasOwnProperty(prop)){
            if((value >0 && value <100) || isNaN(value)){
                target[prop]=value
            }
            else{
                throw 'error invalid range'
            }
        }
        else{
            throw 'non existing property'
        }
    },
    get(target,prop){
        if(target.hasOwnProperty(prop)){
            return target[prop]
        }
        else{ throw 'invalid Property' }
    }
}
var myProxy = new Proxy(myObj,handler)
myProxy.name = "MennaMagdy"
console.log(myProxy.name)