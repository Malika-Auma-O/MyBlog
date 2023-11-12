const Blog = require("../models/blogModel")
const { blogImageParser } = require("../middleware/uploadMiddleware");

const uploadBlogImage = blogImageParser.single("image");

const createBlog = async (req, res) => {
  try {
    
    const userId = req.user.userId;
    // handle image upload
    uploadBlogImage(req, res, async(err) => {
      if(err) {
        return res.status(500).send({ msg: "Failed to upload blog image", error: err });
      }

        // if a new image is uploaded save the Cloudinary image URL to the blog
      if(req.file) {
        req.body.image = req.file.path;
        req.body.imagePublicId = req.file.filename;
      }

      // create a new blog
      let blog = {
        userId: userId,
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        category: req.body.category,
        image: req.body.image,
        imagePublicId : req.body.imagePublicId,
      }
      
      const newBlog = await Blog.create(blog);
      res.status(201).send({ msg: "Blog created successfully", newBlog });
    })
  } catch (error) {
    console.log("error creation", error);
    res.status(500).send({ msg: "Unable to create blog", error });
  }
}

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.send(blogs);
  } catch (error) {
    res.status(500).send({ error: "Unable to retrieve blogs" });
  }
}

const getAllUserBlogs = async (req, res) => {
  try {
    // Find all blogs based on their user ID
    const userBlogs = await Blog.find({ userId: req.user.userId })
    res.send(userBlogs)
  } catch (error) {
    res.status(401).send({ msg:"Unauthorized access", error})
  }
}

const updateBlog = async (req, res) => {
  try {
    // Set the user ID from the authentication token
    const userId = req.user.userId;

    // Check if the blog exists
    const blogId = req.params.id;
    const existingBlog = await Blog.findById(blogId);

    if (!existingBlog) {
      return res.status(404).send({ msg: "Blog not found" });
    }

    // Check if the user is the owner of the blog
    if (existingBlog.userId !== userId) {
      return res.status(403).send({ msg: "You are not authorized to update this Blog" });
    }

    uploadBlogImage(req, res, async(err) => {
      if (err) {
        return res.status(500).send({ msg: "Failed to upload blog image", error: err });
      }

      // Update the blog details with the new data
      existingBlog.title= req.body.title,
      existingBlog.author= req.body.author,
      existingBlog.content= req.body.content,
      existingBlog.category= req.body.category,
      existingBlog.image= req.body.image

      // if a new image is uploaded, save the Cloudinary image URL and public ID to the blog
      if (req.file) {
        existingBlog.image = req.file.path;
        existingBlog.imagePublicId = req.file.filename;
      }

      // Save the updated blog to the database
      await existingBlog.save();

      res.send({ msg: "Blog updated successfully", updatedBlog: existingBlog });

    })
    
  } catch (error) {
    console.log("error updating", error);
    res.status(500).send({ msg: "Unable to update blog", error });
  }
}

const deleteBlog = async (req, res) => {
  try {

    const blog = await Blog.findById(req.params.id);
    if (blog.userId !== req.user.userId) {
      return res.status(403).send({ msg: "Unauthorized to delete this blog" });
    }else {
      await Blog.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "Blog deleted successfully" });
    }

  } catch (error) {
    res.status(500).send({ error: "Unable to delete blog" });
  }
}

module.exports = {
    createBlog,
    getAllBlogs,
    getAllUserBlogs,
    updateBlog,
    deleteBlog 
  };