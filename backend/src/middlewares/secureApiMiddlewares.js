const jwt = require('jsonwebtoken')

const secuareApi = async (req,res, next)=>{
    const {authorization} = req.headers
    //  console.log(authorization);
     
    if (authorization) {
        const token = authorization.split('Bearer ')[1]
        if (token) {
            try {
              const userInfo = await jwt.verify(token,process.env.SECRET_TOKEN)  
              req.userInfo = userInfo
               next()
            } catch (error) {
                return res.status(404).json({message: 'Unauthorized'})
            }
        }else{
            return res.status(404).json({message: 'Unauthorized'})
        }
    }else{
        return res.status(404).json({message: 'Unauthorized'})
    }

    
}

module.exports = secuareApi