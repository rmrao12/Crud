import express from 'express';
import { postData } from '../controller/user.js';

const route=express.Router();

route.post('/post',postData)  //post for create data
export default route;