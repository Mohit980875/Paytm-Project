
const JWT_SECRET = require("../config");
const jwt = require("jsonwebtoken");


function authMiddleware(req,res,next) {
    const authtoken = req.headers.authorization;
    
    
    
    if(!authtoken || !authtoken.startsWith("Bearer")){
        return res.status(403).json({msg:"Invalid token"});
    }
    const token = authtoken.split(" ")[1];

   

    try {
        const decoded = jwt.verify(token,JWT_SECRET);
        console.log(decoded);
        
       
        req.userId = decoded.userId;
        next()

    } catch (error) {
        res.status(403).json({})
    }
    
}

module.exports = authMiddleware;