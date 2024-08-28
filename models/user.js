import mongoose from "mongoose";

const userSchema=mongoose.Schema;

const user= new userSchema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,
        minlength:[8,"Atleast 8 Characters Required"],
    },
    role:{type:String,required:true,       
        default:"user"},
},
{
    timestamps:true,
});
const User=mongoose.model("User",user);
export default User;