const router = require('express').Router()
const {
    getProjectProperties,
    createProperty,
    getProperty,
    updateProperty,
    deleteProperty,
    updateAvailability,
    getProjectPropertiesForUE,
} = require('../controllers/property.controller')

const {
    verifyToken,
    verifySuperAdmin,
    verifyProjectAdmin,
} = require('../middleware/verifyRights')

router.route('/properties-ue/:ueProjectId').get(getProjectPropertiesForUE)
router
    .route('/:projectId')
    .get(getProjectProperties)
    .post(verifyToken, verifySuperAdmin, createProperty)

router
    .route('/:projectId/:id')
    .get(getProperty)
    .put(verifyToken, verifySuperAdmin, updateProperty)
    .delete(verifyToken, verifySuperAdmin, deleteProperty)

router
    .route('/:projectId/status/:id')
    .put(verifyToken, verifyProjectAdmin, updateAvailability)

module.exports = router
