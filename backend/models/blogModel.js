const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema( {
    title: {type:String, required:true},
    author: { type: String, required: false },
    content: { type: mongoose.Schema.Types.Mixed, required: true },
    category: { type: String, required: false },
    image: { type: String, required: false },
    imagePublicId: { type: String, required: false },
    userId: {type: String},
}, {timestamps: true});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;