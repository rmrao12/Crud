import newProduct from "../models/product";

const postProductData=async(req,res)=>{
    try{
    const {name,price,description,image,category}=req.body;
    const product=new newProduct({name,price,description,image,category});
    const saveProduct=await product.save();
    res.status(201).json(saveProduct);}
    catch(err){
        res.status(500).json({message:err.message});
    }
}