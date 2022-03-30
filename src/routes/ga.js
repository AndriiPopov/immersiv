const router = require('express').Router()
const { getGA, getAccessToken } = require('../controllers/ga.controller')

const {
    verifyToken,
    verifyProjectAdmin,
} = require('../middleware/verifyRights')

router.route('/:projectId').post(verifyToken, verifyProjectAdmin, getGA)
router
    .route('/access-token')
    .get(verifyToken, verifyProjectAdmin, getAccessToken)

module.exports = router
