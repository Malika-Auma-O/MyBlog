const Blog = require("../models/blogModel")

const createBlog = async (req, res) => {
  try {
    let newBlog = await Blog.create(req.body);
    res.status(201).json(newBlog);
    // res.send({ msg: "Blog created successfully", newBlog });
  } catch (error) {
    res.status(500).send({ error: "Unable to create blog" });
    // res.send({ error: "Unable to create blog" });
  }
}

const getAllBlogs = async (req, res) => {
  try {
    let blogs = await Blog.find();
    res.send(blogs);
  } catch (error) {
    res.send({ error: "Unable to retrieve blogs" });
  }
}

const updateBlog = async (req, res) => {
  try {
    
  } catch (error) {
    res.send({ error: "Unable to update blogs" });
  }
}
const deleteBlog = async (req, res) => {
  try {
    
  } catch (error) {
    res.send({ error: "Unable to delete blog" });
  }
}

module.exports = {
  createBlog,
   getAllBlogs,
    updateBlog,
    deleteBlog 
  };