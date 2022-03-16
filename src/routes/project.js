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
const {
    verifyToken,
    verifySuperAdmin,
    verifyProjectAdmin,
} = require("../middleware/verifyRights");

router.route("/url/:url").get(getProjectByUrl);

router
    .route("/:projectId")
    .get(verifyToken, verifyProjectAdmin, getProject)
    .put(verifyToken, verifySuperAdmin, updateProject)
    .delete(verifyToken, verifySuperAdmin, deleteProject);

router
    .route("/")
    .get(verifyToken, verifySuperAdmin, getAllProjects)
    .post(verifyToken, verifySuperAdmin, createProject);

module.exports = router;
