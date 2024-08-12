const { formidable } = require('formidable')
const  cloudinary  = require('cloudinary').v2
const News = require('../models/newsModel')
const Author = require('../models/authModels')
const moment = require('moment')

const addNews = async (req,res)=>{
    const { id, category, name } = req.userInfo
    
   const form = formidable({})
    cloudinary.config({
        cloud_name : process.env.CLOUDINARY_ClOUD_NAME,
        api_key : process.env.CLOUDINARY_API_KEY,
        api_secret : process.env.CLOUDINARY_API_SECRET,
        secure : true

    })
    try {
        const [fields, files] = await form.parse(req)
        const {url} = await cloudinary.uploader.upload(files.image[0].filepath,{folder : 'news-image' })
        const { title, description } = fields
        const news = await News.create({
            writerId: id,
            title: title[0].trim(),
            slug: title[0].trim().split(' ').join('-'),
            category,
            description: description[0],
            date: moment().format('LL'),
            writerName: name,
            image: url
        })
        return res.status(200).json({message : "news add success", news })
    } catch (error) {
        return res.status(200).json({message : "internal server error", error })
    }
}

module.exports = addNews