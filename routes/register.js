import express from 'express';

import { loginUser, registerUser } from '../controller/auth.js';

const routeReg=express.Router();


routeReg.post('/register/user',registerUser);
routeReg.post('/login/user',loginUser);
export default routeReg;