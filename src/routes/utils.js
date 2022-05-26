const router = require('express').Router()
const { signS3 } = require('../controllers/utils.controller')

const { verifyToken, verifySuperAdmin } = require('../middleware/verifyRights')

router.route('/sign-s3').get(verifyToken, verifySuperAdmin, signS3)

module.exports = router
