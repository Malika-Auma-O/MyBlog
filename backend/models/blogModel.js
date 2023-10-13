const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema( {
    title: {type:String, required:true},
    author: { type: String, required: false },
    content: { type: String, required: true },
    category: { type: String, required: false },
    image: { type: String, required: false },
    imagePublicId: { type: String, required: false },
}, {timestamps: true});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;