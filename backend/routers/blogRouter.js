const router = require("express").Router();
const { createBlog, getAllBlogs, updateBlog, deleteBlog } = require("../controllers/blogController");

router.post("/create", createBlog);
router.get("/", getAllBlogs );
router.put("/", updateBlog );
router.delete("/", deleteBlog );

module.exports = router
