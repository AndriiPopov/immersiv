const router = require("express").Router();
const {
    getProjectProperties,
    createProperty,
    getProperty,
    updateProperty,
    deleteProperty,
    updateAvailability,
} = require("../controllers/property.controller");

const {
    verifyToken,
    verifySuperAdmin,
    verifyProjectAdmin,
} = require("../middleware/verifyRights");

router
    .route("/:projectId")
    .get(getProjectProperties)
    .post(verifyToken, verifySuperAdmin, createProperty);

router
    .route("/:projectId/:id")
    .get(getProperty)
    .put(verifyToken, verifySuperAdmin, updateProperty)
    .delete(verifyToken, verifySuperAdmin, deleteProperty);

router
    .route("/:projectId/status/:id")
    .put(verifyToken, verifyProjectAdmin, updateAvailability);

module.exports = router;
