let CValid = require("../Utils/CutomersValidation");
let CModel = require("../Models/Customers");

//Get All Customers
let GetAllCustomers = async (req,res) =>{
    var customers = await CModel.find().select({_id:0,__v:0})
    res.json(customers)
}

//GetCustomerByemail
let GetCustomerByemail = async (req,res) =>{
    var Cemail = req.params.email;
    var foundEmail = await CModel.findOne({email:Cemail})
    console.log(foundEmail)
    if(foundEmail){ res.json(foundEmail)}
    else{res.status(404).send("this email Not Found")}
    
}

//addCustomer
let addCustomer =async (req,res) =>{
    var foundEmail = await CModel.findOne({email:req.body.email})
    console.log(foundEmail)
    if(!!foundEmail){
        res.send("this email Already Exist")
    }
    else{
        if(CValid(req.body)){
            let c1 = new CModel(req.body)
            await c1.save()
            res.json(c1)
        }
        else{res.status(404).send("check your data Types")}
    }
}

//UpdateCustomer
let UpdateCustomer = async (req,res) =>{
    var updateCustomer = req.body;
    var newCustomer = await CModel.findOneAndUpdate(req.params.email,updateCustomer)
    
    if(newCustomer){
        res.json(newCustomer)
    }
    else{
        res.status(404).send("Customer not Found")
    }
}

//DeleteCustomer
let DeleteCustomer = async (req,res) =>{
    var delCustomer = await CModel.findOneAndDelete(req.params.email)
    if(delCustomer){
        res.send("Customer deleted Successfully")
    }
    else{
        res.status(404).send("Customer not found")
    }
}

module.exports = {GetAllCustomers , GetCustomerByemail , addCustomer , UpdateCustomer , DeleteCustomer}