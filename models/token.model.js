const sequelize = require("../database/sequelize");
const Sequalize = require("sequelize");

module.exports = sequelize.define(
    "token",
    {
        email: {
            field: "email",
            type: Sequalize.STRING,
        },
        expiration: {
            field: "expiration",
            type: Sequalize.DATE,
        },
        token: {
            field: "token",
            type: Sequalize.STRING,
        },
        used: {
            field: "used",
            type: Sequalize.BOOLEAN,
        },
    },
    {
        timestamps: false,
    }
);
