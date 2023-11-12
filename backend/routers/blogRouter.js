const router = require("express").Router();
const { createBlog, getAllBlogs, getAllUserBlogs, updateBlog, deleteBlog } = require("../controllers/blogController");
const verifyToken = require("../middleware/authMiddleware");

router.post("/blog", verifyToken, createBlog);
router.get("/blogs", getAllBlogs );
router.get("/user/blogs", verifyToken, getAllUserBlogs );
router.put("/blog/update/:id", verifyToken, updateBlog );
router.delete("/blog/delete/:id", verifyToken, deleteBlog );

module.exports = router
