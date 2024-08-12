const mongoose = require("mongoose")
const {Schema} = mongoose

const newsSchema = new Schema({
    writerId: {
        type: Schema.Types.ObjectId,
        ref: "Author"
    },
    writerName: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: '',
    },
    date: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'pending',
    },
    count: {
        type: Number,
        default: 0 ,
    },

  },{ timestamps: true }
)

module.exports = mongoose.model("News", newsSchema)