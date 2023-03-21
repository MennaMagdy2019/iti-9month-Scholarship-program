const express = require("express");
const app = express()

const bodyparser = require("body-parser")
const path = require("path")
const logging = require("./MiddelWares/Logging")

//Routes
const Products =require("./Routes/Products")
const Customers =require("./Routes/Customers")
//MiddleWares

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(logging)

app.use("/api/products",Products)
app.use("/api/customers",Customers)

app.listen(7010 , () => {console.log("http://localhost:7010")})