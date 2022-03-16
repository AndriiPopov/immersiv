const router = require("express").Router();
const {
    updateConstant,
    getConstant,
} = require("../controllers/constant.controller");
const { verifyToken, verifySuperAdmin } = require("../middleware/verifyRights");

router
    .route("/")
    .get(getConstant)
    .put(verifyToken, verifySuperAdmin, updateConstant);

module.exports = router;
