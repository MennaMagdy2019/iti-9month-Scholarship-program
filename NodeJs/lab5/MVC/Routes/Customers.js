let express = require("express")
let router = express.Router()

const Customers = require("../Controller/Customers")

//Get All Customers
router.get("/",Customers.GetAllCustomers)
//GetCustomerByemail
router.get("/:email",Customers.GetCustomerByemail)
//addCustomer
router.post("/",Customers.addCustomer)
//UpdateCustomer
router.put("/:email",Customers.UpdateCustomer)
//deleteCustomer
router.delete("/:email",Customers.DeleteCustomer)

module.exports = router