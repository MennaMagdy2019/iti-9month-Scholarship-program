let PValid = require("../Utils/ProductsValidation")
let PModel = require("../Models/Products");

//Get All Products
let GetAllProducts = async (req,res) => {
    var products = await PModel.find().select({_id:0 , __v:0})
   // console.log(products)
    res.json(products)
}
//Get Product By name
let GetProductByName = async(req,res) => {
    var Pname = req.params.name;
    var foundProduct = await PModel.findOne({name:Pname})
    
    if(foundProduct){res.json(foundProduct)}
    else {res.status(404).send("Product not found")}    
}
//Add prouct
let addProduct = async (req,res) =>{
    //ceck if product found or not
   var foundProduct = await PModel.findOne({name:req.body.name})
   console.log(foundProduct)
   //res.json(foundProduct)
   if(!!foundProduct) {
    res.send("Product Already Exist")
   }
 //check validation on Product Props
   else{
    if(PValid(req.body)){
        let p1 = new PModel(req.body)
        console.log(p1)
        await p1.save()
        res.json(p1)
    }
    else{res.status(404).send("check your data Types")}
   }
}

//Update Product
let UpdateProduct = async(req,res) => {
    var updateProduct = req.body;
    //var checkProduct = await PModel.findOne({name:req.params.name})
    var newProd = await PModel.findOneAndUpdate(req.params.name,updateProduct)
    if(newProd){  
     res.json(newProd)
    }
    else {res.status(404).send("Product not found")} 
}
//Delete Product
let DeleteProduct = async (req,res) => {
    var delProd = await PModel.findOneAndDelete(req.params.name)
    if(delProd){  
        res.send("Product deleted successfully")
    }
    else {res.status(404).send("Product not found")} 
}

module.exports = {GetAllProducts,GetProductByName ,addProduct , UpdateProduct , DeleteProduct }