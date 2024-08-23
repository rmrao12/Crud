import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
const app=express();
dotenv.config()
let port=process.env.PORT

app.use(morgan(":method :url :status :res[content-length] - :response-time ms"))
app.get('/get',(req,res)=>{
  res.send('Api Resonse Got')
  
})
//using data in form of json
app.use(express.json());

//make server
app.listen(port,()=>{
  console.log("Server is started:",port)
})