const router = require("express").Router();
const {
    getAllProjects,
    createProject,
    getProject,
    updateProject,
    deleteProject,
} = require("../controllers/projects.controller");
const verifyToken = require("../middleware/verifyToken");

router
    .route("/")
    .get(verifyToken, getAllProjects)
    .post(verifyToken, createProject);

router
    .route("/:id")
    .get(getProject)
    .put(verifyToken, updateProject)
    .delete(verifyToken, deleteProject);

module.exports = router;
