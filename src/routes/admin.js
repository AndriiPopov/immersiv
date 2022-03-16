const router = require("express").Router();
const {
    createAdmin,
    deleteAdmin,
    getAdmins,
} = require("../controllers/admin.controller");
const { verifyToken, verifySuperAdmin } = require("../middleware/verifyRights");

router
    .route("/")
    .get(getAdmins)
    .post(verifyToken, verifySuperAdmin, createAdmin);
router.route("/:id").delete(verifyToken, verifySuperAdmin, deleteAdmin);

module.exports = router;
