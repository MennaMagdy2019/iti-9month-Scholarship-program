var myObj = {
    name:"",
    address:"",
    age: ""
}
var handler = {
    set(target,prop,value){
        if(target.hasOwnProperty(prop)){
            if(prop == "name"){
               if(value.length == 7){
                target[prop]=value
               }
               else
                 throw 'out of range Length string name'
                
            }
            if(prop == "address"){
                if(typeof(value) === 'string')
                   target[prop]=value
                else
                   throw 'Invalid value not string'
            }
            if(prop == "age"){
                if(value >= 25 && value <=60)
                   target[prop]=value
                else
                   throw 'Out of range age'
            }
        }
        else{
            throw 'nin existing property'
        }
    },
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
// myProxy.name ="mennaa "
// myProxy.address ="cariro"
// myProxy.age ="30"
// console.log(myProxy)

//myProxy.name ="mennaa"
//myProxy.address =12
//myProxy.age ="20"
// console.log(myProxy)
