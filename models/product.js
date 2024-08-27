import mongoose from "mongoose";

const productSchema=mongoose.Schema;

const products=productSchema(
{
   id:{type:Number},
   name:{type:String,required:true},
   price:{type:Number,required:true},
   description:{type:String,required:true},
   image:{type:String,required:true},
   category:{type:String,required:true},

},
{
    timestamps:true,
})

const newProduct=mongoose.model("ProductDetails",products);
export default newProduct;
