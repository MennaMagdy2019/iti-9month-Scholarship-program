//DB_URL
let mongoose = require("mongoose");
let DB_URL = "mongodb://127.0.0.1:27017/DB";

mongoose.connect(DB_URL,{useNewUrlParser:true})

//Schema
var ProductsSchema = mongoose.Schema({
    name : String , 
    quantity:Number ,
    desc:Number,
    price:Number
})

var mongoModule = mongoose.model("products",ProductsSchema)
module.exports = mongoose.model("products",ProductsSchema)