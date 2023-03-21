//DB_URL
let mongoose = require("mongoose");
let DB_URL = "mongodb://127.0.0.1:27017/DB";
const valid = require("validator")

mongoose.connect(DB_URL,{useNewUrlParser:true})

//Schema
var CustomerSchems = mongoose.Schema({
   name:String,
   age:Number,
   email:{
    type:String,
    validate:{
        validator:(val)=>{return valid.isEmail(val)}
        ,message:"Email Not Valid ...."
    }
   } ,
   address: String

})

module.exports = mongoose.model("cutomers",CustomerSchems)