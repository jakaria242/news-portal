const Author = require('../models/authModels')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const  loginUser = async (req,res)=>{
   const { email, password} = req.body

   if (!email) {
      return res.status(404).json({message: 'please enter your email'})
   }
   if (!password) {
      return res.status(404).json({message: 'please enter your password'})
   }
 
   let existingUser = await Author.findOne({email: email}).select('+password')

   if (existingUser == null) {
    return res.status(400).json({message : "We can not find any account in this email" })
   }

    const match = await bcrypt.compare(password, existingUser.password)

    if (match) {
         const user = {
            _id: existingUser.id,
            name: existingUser.name,
            category: existingUser.category,
            role: existingUser.role,
         }
         const token = await jwt.sign(user,process.env.SECRET_TOKEN, {
            expiresIn : process.env.TOKEN_EXPAIR
         })
         return res.status(200).json({message : "login successfull", token})
    } else {
        return res.status(400).json({message : "password invalid" })
    }

   
   
}

module.exports = loginUser