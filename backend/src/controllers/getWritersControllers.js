const Author = require('../models/authModels')

const getWriters = async (req,res)=>{
   try { 
      const writers = await Author.find({ role:'writer' }).sort({ createdAt: -1 })
      return res.status(200).json({writers})
   } catch (error) {
      return res.status(500).json({message: 'internal server error'})
   }
   
}

module.exports = getWriters