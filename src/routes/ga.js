const router = require('express').Router()
const { getGA } = require('../controllers/ga.controller')

const {
    verifyToken,
    verifyProjectAdmin,
} = require('../middleware/verifyRights')

router.route('/:projectId').post(verifyToken, verifyProjectAdmin, getGA)

module.exports = router
