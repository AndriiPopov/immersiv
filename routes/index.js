const router = require("express").Router();

const project = require("./project");

const auth = require("./auth");
const admin = require("./admin");
const constant = require("./constant");

const sequelize = require("../database/sequelize");
require("../models/admin.model");
require("../models/constant.model");
require("../models/project.model");
require("../models/token.model");

sequelize.sync({ alter: true });

router.use("/constant", constant);
router.use("/projects", project);
router.use("/auth", auth);
router.use("/admins", admin);

// router.use("/docs", swaggerUi.serve, swaggerUi.setup(docs));

module.exports = router;
