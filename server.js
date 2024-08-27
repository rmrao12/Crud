import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan'
import connectDb from './config/db.js';
import bodyParser from 'body-parser';

const app = express();
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
    app.get('/', (req, res) => {
    res.send('Hello, World!');
  })

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));
dotenv.config()

let port = process.env.PORT;

app.use(express.json());

connectDb();

app.listen(port, ()=>{
    console.log("Server is started on Port:", port)
})