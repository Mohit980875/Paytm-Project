
const {Router} = require('express');
const userRouter = require('./user.js');
const accountRouter = require('./account.js')

const apiRouter = Router();

apiRouter.use("/user",userRouter)
apiRouter.use("/account",accountRouter)

apiRouter.get("/",function (req,res) {
    res.send("hello world");
})

module.exports = apiRouter;
  
