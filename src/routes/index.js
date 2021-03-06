const router = require('express').Router()

const project = require('./project')

const auth = require('./auth')
const admin = require('./admin')
const constant = require('./constant')
const property = require('./property')
const ga = require('./ga')
const utils = require('./utils')

router.use('/constant', constant)
router.use('/projects', project)
router.use('/auth', auth)
router.use('/admins', admin)
router.use('/properties', property)
router.use('/ga', ga)
router.use('/utils', utils)

// router.use("/docs", swaggerUi.serve, swaggerUi.setup(docs));

module.exports = router
