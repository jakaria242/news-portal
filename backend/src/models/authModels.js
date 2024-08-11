const mongoose = require("mongoose")
const {Schema} = mongoose

const authSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        select : false,
        trim: true
    },
    role: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: '',
    },
    category: {
        type: String,
        required: true,
    },

  },{ timestamps: true }
)

module.exports = mongoose.model("Author", authSchema)