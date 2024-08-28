import User from "../models/user.js";
import bcrypt from "bcryptjs"
import jsonWebToken from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const registerUser=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        if(!name||!email||!password){
            return res.status(400).json({message:"Please fill all fields"});
        }

        //to check if email already exist
        const isEmailExisted=await User.findOne({email});
            if(isEmailExisted){
                return res.status(400).json({message:"Email is already existed"});
            }
            //for hashing password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        //create new user
        const newUser=new User({name,email,password:hashedPassword}); //verify from model
        const savedUser=await newUser.save();  //after verify save data
        return res.status(201).json({
            message:"User created successfully",
            success:true,
            data:savedUser,
        }); //show data in json form also got data

    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

export const loginUser = async (req, res) => {

try {
const { email, password } = req.body;
if (!email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
}

const user = await User.findOne({ email });
if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
}

const isMatch = await bcrypt.compare (password, user.password);
 if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
}

//genrate token
const token=jsonWebToken.sign(
    { id: user._id,name:user.name },                // Payload data (user ID)
    process.env.JWT_SECRET,          // Secret key from environment variables
    { expiresIn: "1h" }              // Token expiration time
);
res.status(200).json({
    message: "User logged in successfully",
success: true,
data: user,
token:token,
});

} 
catch (error) {
    res.status(400).json({ message: error.message });
}
}
