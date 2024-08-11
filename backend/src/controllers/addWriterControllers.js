const Author = require('../models/authModels')
const bcrypt = require('bcrypt')

const emailregex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const addWriter = async (req,res)=>{
    const { name, email, password, category} = req.body

    if (!name) {
        return res.status(404).json({message: 'please enter your name'})
    }
    if (!password) {
        return res.status(404).json({message: 'please enter your password'})
    }
    if (!category) {
        return res.status(404).json({message: 'please choose a category'})
    }
    if (!email) {
        return res.status(404).json({message: 'please enter your email'})
    }
    if (email && !email.match(emailregex)) {
        return res.status(404).json({message: 'invalid email'})
    }
    
     try {
        let existingWriter = await Author.findOne({email: email.trim()}).select('-password')
        if (existingWriter) {
            return res.status(404).json({message: 'User alredy exist'})
        }else{
            const newWriter = await Author.create({
               name: name.trim(),
               email: email.trim(),
               password: await bcrypt.hash(password.trim(), 10),
               category: category.trim(),
               role: 'writer'
            })
            return res.status(200).json({message: 'writer add successful', writer : newWriter})
        }
     } catch (error) {
        return res.status(500).json({message: 'internal server error'})
     }
}

module.exports = addWriter