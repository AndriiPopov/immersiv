const sequelize = require("../database/sequelize");
const Sequalize = require("sequelize");

module.exports = sequelize.define(
    "constant",
    {
        email: {
            field: "email",
            type: Sequalize.STRING,
            primaryKey: true,
        },
        phone: {
            field: "phone",
            type: Sequalize.STRING,
        },
        call: {
            field: "call",
            type: Sequalize.STRING,
        },
    },
    {
        timestamps: false,
    }
);
