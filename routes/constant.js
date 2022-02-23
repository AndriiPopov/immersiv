const router = require("express").Router();
const {
    updateConstant,
    getConstant,
} = require("../controllers/constant.controller");
const verifyToken = require("../middleware/verifyToken");

router.route("/").get(getConstant).put(verifyToken, updateConstant);

module.exports = router;
