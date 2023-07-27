//import fs module
const fs = require("fs");

//The getProducts function take done as callback
//It will read the product.json file

const getProducts = function (done) {
  //parse the filecontent and save it in another varible say productdata
  //return the callback with first parameter as undefined and second parameter as productdata
  fs.readFile("src/products.json", (err, productdata) => {
    if (err) {
      return done("Encountered error while getting products!");
    }
    let product = JSON.parse(productdata);
    return done(undefined, product);
  });
};

//The function getProductById will take two parameters first the id and second the callback
//It will read the product.json file
const getProductById = function (id, done) {
  //write all the logical steps
  //return the callback with first parameter as undefined and second parameter as productDetails
  fs.readFile("src/products.json", (err, data) => {
    if (err) {
      return done("Encountered error while getting products!");
    }
    let productData = JSON.parse(data);
    const product = productData.find((i) => i.id === id);
    if (product === undefined) {
      return done("No product found for the requested id");
    }
    return done(undefined, product);
  });
};

//The saveProductDetails method will take productDetails and done as callback
//It will read the product.json file
const saveProductDetails = function (ProductDetails, done) {
  //write all the logical steps
  //parse the filecontent and save it in another varible say productdata
  //push the productDetails in the productData
  //Write the productData into the file
  //return the callback with undefined and ProductDetails
  fs.readFile("src/products.json", (err, productdata) => {
    if (err) {
      return done("Encountered error while getting products!");
    }
    let product = JSON.parse(productdata);
    product = [...product, productdata];
    fs.writeFile(
      "src/products.json",
      JSON.stringify(product),
      (err, update) => {
        if (err) {
          return done("Encountered error while saving the product");
        }
        return done(undefined, ProductDetails);
      }
    );
  });
};

//The method deleteProductById will take productId and done as parameters
//It will read the product.json file

const deleteProductById = function (productId, done) {
  //Write all the logical steps
  //return the callback with first parameter as undefined and second parameter as productDetails
  fs.readFile("src/products.json", (err, productdata) => {
    if (err) {
      return done("Encountered error while getting products!");
    }
    let product = JSON.parse(productdata);
    const productToDelete = product.find((item) => item.id === productId);

    if (!productToDelete) {
      return done("Product not found");
    }

    const data = product.filter((item) => item.id !== productId);
    return done(undefined, product);
  });
};

module.exports = {
  getProducts,
  getProductById,
  saveProductDetails,
  deleteProductById,
};
