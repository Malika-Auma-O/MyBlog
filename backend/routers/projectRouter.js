const router = require("express").Router();
const { createProject, getAllProjects, getAllUserProjects, updateProject, deleteProject } = require("../controllers/projectController");
const verifyToken = require("../middleware/authMiddleware");

router.post("/project", verifyToken, createProject);
router.get("/projects", getAllProjects );
router.get("/user/projects", verifyToken, getAllUserProjects );
router.put("/project/update/:id", verifyToken, updateProject );
router.delete("/project/delete/:id", verifyToken, deleteProject );

module.exports = router