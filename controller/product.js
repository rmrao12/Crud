import newProduct from "../models/product.js";

export const postProductData=async(req,res)=>{
    try{
    const {name,price,description,image,category}=req.body;
    const product=new newProduct({name,price,description,image,category});
    const saveProduct=await product.save(); //save all data
    return res.status(201).json({
        message:"Product Added successfully",
        success:true,
        data:saveProduct,
    });
}
    catch(err){
        res.status(500).json({message:err.message});
    }
}

export const getProductData = async (req, res) => {
    try {
        const products = await newProduct.find(); // Fetch all products
        return res.status(200).json({
            message: "Products retrieved successfully",
            success: true,
            data: products,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getProductById = async (req, res) => {
    try {
        const productId=req.params.id;
        const product = await newProduct.findById(productId);
        if (!product) {
            return res.status(404).json({
                message: "Product not found",
                success: false,
            });
        }
        return res.status(200).json({
            message: "Product retrieved successfully",
            success: true,
            data: product,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteProductByCat = async (req, res) => {
    try {
     
        const { category } = req.params;
        const deletedProducts = await newProduct.deleteMany({ category });

        if (deletedProducts.deletedCount === 0) {
            return res.status(404).json({
                message: "No products found in the specified category",
                success: false,
            });
        }

        return res.status(200).json({
            message: `${deletedProducts.deletedCount} product(s) deleted successfully`,
            success: true,
            data: deletedProducts,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteProductById = async (req, res) => {
    try {
        const productId=req.params.id;
        const deletedProduct = await newProduct.findByIdAndDelete(productId);
        
        if (!deletedProduct) {
            return res.status(404).json({
                message: "Product not found",
                success: false,
            });
        }

        return res.status(200).json({
            message: "Product deleted successfully",
            success: true,
            data: deletedProduct,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteProductByName = async (req, res) => {
    try {
        const { name } = req.body;  // Assuming the name is passed in the request body
        const deletedProduct = await newProduct.findOneAndDelete({ name });

        if (!deletedProduct) {
            return res.status(404).json({
                message: "Product not found",
                success: false,
            });
        }

        return res.status(200).json({
            message: "Product deleted successfully",
            success: true,
            data: deletedProduct,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateById= async (req,res) => 
{   
    try
    {
        const {name,price,description}=req.body;
        const productId=req.params.id;
        const isDataUpdated = await newProduct.findByIdAndUpdate(
            productId, 
            { name, price, description }, // Fields to update
            { new: true } 
        );
        if(!isDataUpdated){
            return res.status(404).json({
                message:"Item Not Found",
                success:false
        })
       
    }
    return res.status(200).json({
        message: "Product Updated successfully",
        success: true,
        data: isDataUpdated
    });
    }
    catch (err) 
    {
        res.status(500).json({ message: err.message });
    }

}