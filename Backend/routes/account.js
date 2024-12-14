const express = require('express');
const accountRouter = express.Router();
const authMiddleware = require("../middlewares/authMiddleware.js");
const {User,Account} = require("../db.js");
const { default: mongoose } = require('mongoose');

accountRouter.get("/balance", authMiddleware,  async function (req,res) {
   const account = await Account.findOne({
    userId : req.userId
   })
   res.json({balance : account.balance}).status(200);
})


accountRouter.post("/transfer", authMiddleware, async function (req,res) {
    // Bad Solution Without Transaction ->

    // const {amount , to} = req.body;
    // const account = await Account.findOne({
    //     userId:req.userId
    // })
    // if(account.balance < amount){
    //    return res.status(400).json({
    //         msg :"Insufficient balance"
    //     })
    // }
    // const toAccount = await Account.findOne({
    //     userId : to
    // })

    // if(!toAccount){
    //     return res.status(400).json({
    //         msg :"Invalid User"
    //     })
    // }

    // await account.updateOne({
    //     userId:req.userId
    // },{
    //     $inc :{
    //         balance : -amount
    //     }
    // })

    // await account.updateOne({
    //     userId:to
    // },{
    //     $inc :{
    //         balance : amount
    //     }
    // })

    // res.status(200).json({
    //     msg : "Transaction successful"
    // })


    // Good Solution With Transactions ->

  const session = await mongoose.startSession();

  session.startTransaction();

  const {amount , to} = req.body;

    const account = await Account.findOne({
        userId:req.userId
    }).session(session)

    if(!account || account.balance < amount){
       await session.abortTransaction();
       return res.status(400).json({
            msg :"Insufficient balance"
        })
    }
    const toAccount = await Account.findOne({
        userId : to
    }).session(session)

    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            msg :"Invalid User"
        })
    }

    await account.updateOne({
        userId:req.userId
    },{
        $inc :{
            balance : -amount
        }
    }).session(session)

    await account.updateOne({
        userId:to
    },{
        $inc :{
            balance : amount
        }
    }).session(session)


    await session.commitTransaction();
    res.status(200).json({
        msg : "Transaction successful"
    })


})

module.exports = accountRouter;