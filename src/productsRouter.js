//import the modules require
const productsController = require("./productsController");
const express = require('express')
const router = express.Router()

//This method will get all the Product form the product.json
router.get("/", (req, res) => {
  try {
    //calling the controller getProducts
    //if error return the response as 400
    //if result return the response as 200 with status OK and  data as result
    productsController.getProducts((err, results) => {
      if (err) {
        console.log("error happened in router ", err);
        return res.status(400).send(err);
      }
      return res.status(200).send({ STATUS: "OK", data: results });
    });
    //Handle the exception return response as 400 with status as some error msg
  } catch (err) {
    return res.status(500).send("Try after sometime");
  }
});

//This method will get the product with given productId form the product.json
router.get("/:productId", (req, res) => {
  try {
    //get the productid from the req.params
    const productId = req.params.productId;

    //calling the controller getProductById method
    //if error return the response as 400
    //if result return the response as 200 with status as OK and  data as result
    productsController.getProductById(parseInt(productId), (err, results) => {
      if (err) {
        console.log("error happened in router ", err);
        return res.status(400).send(err);
      }
      console.log("worked in router ", results);
      return res.status(200).send({ STATUS: "OK", data: results });
    });
  } catch (err) {
    //Handle the exception return response as 400 with status as some error msg
    return res.status(500).send("Try after sometime");
  }
});

//This method will save/post a new product in the product.json
router.post("/", (req, res) => {
  try {
    //get all the productdetails from the req.body
    const productDetails = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
    };
    //calling the controller saveProductDetails method
    //if error return the response as 400
    //if result return the response as 201 with status as OK and  data as result
    productsController.saveProductDetails(productDetails, (err, results) => {
      if (err) {
        console.log("error happened in router ", err);
        return res.status(400).send(err);
      }
      console.log("worked in router ", results);
      return res.status(201).send({ STATUS: "OK", data: results });
    });
  } catch (err) {
    //Handle the exception return response as 400 with status as some error msg
    return res.status(500).send("Try after sometime");
  }
});

//This method will delete product with specific productid from the product.json
router.delete("/:productId", (req, res) => {
  try {
    //get the productid from the req.params
    const productId = req.params.productId;

    //calling the controller deleteProductById method
    //if error return the response as 400
    //if result return the response as 200 with status as OK and  data as result
    productsController.deleteProductById(parseInt(productId), (err, results) => {
      if (err) {
        console.log("error happened in router ", err);
        return res.status(400).send(err);
      }
      console.log("worked in router ", results);
      return res.status(200).send({ STATUS: "OK", data: results });
    });
  } catch (err) {
    //Handle the exception return response as 400 with status as some error msg
    return res.status(500).send("Try after sometime");
  }
});

module.exports = router;
