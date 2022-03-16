require("dotenv").config();
const Sequalize = require("sequelize");

const isProduction = process.env.NODE_ENV === "production";

const Sequelize = require("sequelize");

const database =
    process.env.NODE_ENV === "test"
        ? process.env.PGDATABASE_TEST
        : process.env.PGDATABASE;

const connectionString = isProduction
    ? process.env.DATABASE_URL
    : `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${database}`;

const sequelize = new Sequalize(connectionString, {
    dialect: "postgres",
    dialectOptions: {
        ssl: { require: isProduction, rejectUnauthorized: false },
    },
    logging: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.constantModel = require("./constant.model.js")(sequelize, Sequelize);
db.adminModel = require("./admin.model.js")(sequelize, Sequelize);
db.projectModel = require("./project.model.js")(sequelize, Sequelize);
db.tokenModel = require("./token.model.js")(sequelize, Sequelize);
db.propertyModel = require("./property.model.js")(sequelize, Sequelize);

db.projectModel.hasMany(db.propertyModel, { as: "properties" });
db.propertyModel.belongsTo(db.projectModel, {
    foreignKey: "projectId",
    as: "project",
});

db.sequelize
    .sync({
        alter: true,
        // force: true,
    })
    .then(() => {
        db.adminModel.create({
            email: "andriy.popov.vl@gmail.com",
            locked: true,
        });

        db.adminModel.create({
            email: "christian@visualartstudios.com.au",
            locked: true,
        });

        db.adminModel.create({
            email: "clint@visualartstudios.com.au",
            locked: true,
        });
    })
    .catch((err) => {});

module.exports = db;
