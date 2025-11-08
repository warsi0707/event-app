const jwt = require('jsonwebtoken');
const { USER_JWT_SECRET } = require('../config/Config');

const AuthChecker =(req,res,next)=>{
    const token = req.headers.token;
    try{
        if(!token){
            return res.status(404).json({
                error: "Login required"
            })
        }
        const decoded = jwt.verify(token, USER_JWT_SECRET)
        if(decoded){
            req.user = decoded.user
            next()
        }
        
    }catch(error){
        return res.status(404).json({
            error: "Login required"
        })
    }
}

module.exports = AuthChecker