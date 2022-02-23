require("dotenv").config();
const Sequalize = require("sequelize");

const isProduction = process.env.NODE_ENV === "production";

const database =
    process.env.NODE_ENV === "test"
        ? process.env.PGDATABASE_TEST
        : process.env.PGDATABASE;

const connectionString = isProduction
    ? process.env.DATABASE_URL
    : `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${database}`;

module.exports = new Sequalize(connectionString, {
    dialect: "postgres",
    dialectOptions: {
        ssl: { require: isProduction, rejectUnauthorized: false },
    },
});
