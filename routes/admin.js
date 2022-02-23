const router = require("express").Router();
const {
    createAdmin,
    deleteAdmin,
    getAdmins,
} = require("../controllers/admin.controller");
const verifyToken = require("../middleware/verifyToken");

router.route("/").get(getAdmins).post(verifyToken, createAdmin);
router.route("/:id").delete(verifyToken, deleteAdmin);

module.exports = router;
