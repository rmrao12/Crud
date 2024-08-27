import User from "../models/user";

const postData=async(req,res)=>{
    try{
        const {name,email,password,role}=req.body;
        if(!name||!email||!password||!role){
            return res.status(400).json({message:"Please fill all fields"});
        }
        const isEmailExisted=await User.findOne({email});
            if(isEmailExisted){
                return res.status(400).json({message:"Email is already existed"});
            }
        
        const newUser=new User({name,email,password,role}); //verify from model
        const savedUser=await newUser.save();  //after verify save data
        res.status(201).json(savedUser); //show data in json form also got data

    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}