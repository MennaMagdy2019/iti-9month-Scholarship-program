let express = require("express")
let router = express.Router();

const Products = require("../Controller/Products")


//get ALL Products
router.get("/",Products.GetAllProducts)
//get  Product
router.get("/:name",Products.GetProductByName)
 //Add New Product 
router.post("/",Products.addProduct)
  //Update Product 
router.put("/:name",Products.UpdateProduct)
 //Delete Product 
 router.delete("/:name",Products.DeleteProduct)
module.exports = router