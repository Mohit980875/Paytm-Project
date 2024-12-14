const express = require('express');
const userRouter = express.Router();
const zod = require('zod');
const jwt = require('jsonwebtoken')
const {User,Account} = require("../db.js");
const JWT_SECRET = require("../config.js");
const authMiddleware = require('../middlewares/authMiddleware.js');


const signupBody = zod.object({
    username : zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
    password:zod.string() 
    
})


userRouter.post("/signup", async function (req,res) {
    const {success} = signupBody.safeParse(req.body);

    if(!success){
        res.json({msg :"Email already taken / Incorrect inputs"}).status(411);
    }

    const existingUser = await User.findOne({
        username : req.body.username
    })

    if(existingUser){
        res.json({msg :"Email already taken / Incorrect inputs"}).status(411);
    }

    const user = await User.createOne({
        username : req.body.username,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        password : req.body. password
     })

     const userId = user._id;

     // Creating new Account
     await Account.createOne({
        userId : userId,
        balance :1 + Math.random()*10000
     })


     const token = jwt.sign({userId},JWT_SECRET);

     res.json({
        msg:"User created successfully",
        token :token
     })

})

const signinBody = zod.object({
    username : zod.string().email(),
    password : zod.string()
})

userRouter.post("/signin", async function (req,res) {

    const {success} =signinBody.safeParse(req.body);
    if(!success){
        res.json({msg:"Error while logging in"}).status(411);
    }

    const existingUser = await User.findOne({
        username : req.body.username,
        password: req.body.password
    })

    if(existingUser){
        const userId = existingUser._id;
        const token = jwt.sign({userId},JWT_SECRET);
        res.json({token}).status(200);
    }else{
        res.json({msg:"Error while logging in"}).status(411);
    }

    
})

const updateBody = zod.object({
    password : zod.string().optional(),
    lastName  : zod.string().optional(),
    firstName : zod.string().optional()
})

userRouter.put("/",authMiddleware, async function (req,res) {
    
    const {success}= updateBody.safeParse(req.body);

    if(!success){
        res.status(411).json({
            msg : "Error while updating information"
        })
    }

    await User.updateOne({
        _id : req.userId
    },req.body)
    
    res.status(200).json({
        msg : "Updated Succesfully"
    })  

})



userRouter.get("/bulk", async function (req,res) {
        
    const filter = req.query.filter || "";

    const users = await User.find({
        $or :[{
                firstName : {
                    "$regex" : filter
                }
            },{
                lastName :{
                    "$regex" : filter
                }
        }]
    })

    res.json({
      user:  users.map(user=>({
        username : user.username,
        firstName : user.firstName,
        lastName : user.lastName,
        userId : user._id
      }))
    })
           
        
 })

    

module.exports = userRouter;