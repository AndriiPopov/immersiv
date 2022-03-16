const router = require("express").Router();
const {
    getAllProjects,
    createProject,
    getProject,
    updateProject,
    deleteProject,
    getProjectByUrl,
} = require("../controllers/project.controller");
const { loginUser } = require("../controllers/auth.controller");
const { verifyToken, verifySuperAdmin } = require("../middleware/verifyRights");

router
    .route("/")
    .get(verifyToken, verifySuperAdmin, getAllProjects)
    .post(verifyToken, verifySuperAdmin, createProject);

router
    .route("/:id")
    .get(getProject)
    .put(verifyToken, verifySuperAdmin, updateProject)
    .delete(verifyToken, verifySuperAdmin, deleteProject);

router.route("/url/:id").get(getProjectByUrl);

module.exports = router;
