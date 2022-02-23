const router = require("express").Router();
const {
    loginUser,
    forgotPassword,
    verifyResetToken,
    resetPassword,
    refreshToken,
} = require("../controllers/auth.controller");

router.post("/login", loginUser);

router.post("/forgot-password", forgotPassword);

// token for reset password
router.post("/check-token", verifyResetToken);

router.post("/reset-password", resetPassword);

router.post("/refresh-token", refreshToken);

module.exports = router;
