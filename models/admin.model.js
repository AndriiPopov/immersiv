const sequelize = require("../database/sequelize");
const Sequalize = require("sequelize");

module.exports = sequelize.define(
    "admin",
    {
        email: {
            field: "email",
            type: Sequalize.STRING,
            primaryKey: true,
            validate: {
                isEmail: true,
                notEmpty: true,
            },
            len: [1, 500],
            trim: true,
        },
        password: {
            field: "password",
            type: Sequalize.STRING,
        },
        locked: {
            field: "locked",
            type: Sequalize.BOOLEAN,
        },
    },
    {
        timestamps: false,
    }
);
