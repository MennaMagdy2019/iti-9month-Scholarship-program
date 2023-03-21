const Ajv = require("ajv")
const ajv = new Ajv();

let ProductsSchema = {
    type:"object",
    properties:{
      name:{type:'string'},
      quantity:{type:'number'},
      desc:{type:'number'},
      price:{type:'number'}
    },
    required:["name","quantity","desc","price"],
    additionalProperties:false

}

module.exports = ajv.compile(ProductsSchema)