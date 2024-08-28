import express from 'express';
import { postProductData,getProductData,updateById ,deleteProductByCat,getProductById,deleteProductByName,deleteProductById} from '../controller/product.js';

const routeProduct=express.Router();

routeProduct.post('/postProduct',postProductData)  //post for create data
routeProduct.get("/products", getProductData);   //get Data
routeProduct.get("/productsId/:id", getProductById);   //get Data By Id
routeProduct.delete("/productDel/:category", deleteProductByCat);   //delete by category
routeProduct.delete("/productDelId/:id", deleteProductById);   //delete by category
routeProduct.delete("/productDel", deleteProductByName)
routeProduct.put("/productUpdate/:id", updateById)

export default routeProduct;