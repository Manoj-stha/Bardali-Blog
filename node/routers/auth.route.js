import express from "express";
import { Login } from "../controllers/auth.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";


const router = express.Router();

router.post('/login',Login);

//verifying token
router.get('/checkToken',verifyToken,(req,res)=>{
    res.send("you are authorized")
});

router.get('/checkUser/:id',verifyUser,(req,res)=>{
    res.send("you are user and can update and delete")
});

router.get('/checkAdmin/:id',verifyAdmin,(req,res)=>{
    res.send("you are admin and can update and delete")
});

export default router;