const router = require("express").Router();
const { createBlog, getAllBlogs, getAllUserBlogs, updateBlog, deleteBlog } = require("../controllers/blogController");
const verifyToken = require("../middleware/authMiddleware");

router.post("/create", verifyToken, createBlog);
router.get("/blogs", getAllBlogs );
router.get("/user/blogs", verifyToken, getAllUserBlogs );
router.put("/update/:id", verifyToken, updateBlog );
router.delete("/delete/:id", verifyToken, deleteBlog );

module.exports = router
