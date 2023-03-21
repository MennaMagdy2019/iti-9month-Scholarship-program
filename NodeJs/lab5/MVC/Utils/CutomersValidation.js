const Ajv = require("ajv");
const ajv = new Ajv();

let CustomersSchema = {
    type:"object",
    properties:{
        name:{type:'string'},
        age:{type : 'number'},
        email : {type:'string'},
        address : {type:'string'}
    },
    required:["name", "age" , "email" , "address"],
    additionalProperties:false
}

module.exports = ajv.compile(CustomersSchema)