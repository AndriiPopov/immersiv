const router = require("express").Router();

const project = require("./project");

const auth = require("./auth");
const admin = require("./admin");
const constant = require("./constant");

const sequelize = require("../database/sequelize");
const adminModel = require("../models/admin.model");
require("../models/constant.model");
require("../models/project.model");
require("../models/token.model");

sequelize
    .sync({ alter: true })
    .then(() => {
        adminModel.findOrCreate({
            where: { email: "andriy.popov.vl@gmail.com" },
            defaults: { email: "andriy.popov.vl@gmail.com", locked: true },
        });

        adminModel.findOrCreate({
            where: { email: "christian@visualartstudios.com.au" },
            defaults: {
                email: "christian@visualartstudios.com.au",
                locked: true,
            },
        });

        adminModel.findOrCreate({
            where: { email: "clint@visualartstudios.com.au" },
            defaults: { email: "clint@visualartstudios.com.au", locked: true },
        });
    })
    .catch((err) => {});

router.use("/constant", constant);
router.use("/projects", project);
router.use("/auth", auth);
router.use("/admins", admin);

// router.use("/docs", swaggerUi.serve, swaggerUi.setup(docs));

module.exports = router;
