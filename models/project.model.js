const sequelize = require("../database/sequelize");
const Sequalize = require("sequelize");

module.exports = sequelize.define(
    "project",
    {
        url: {
            field: "url",
            type: Sequalize.STRING,
            primaryKey: true,
            unique: true,
            allowNull: false,
            len: [1, 500],
            trim: true,
            validate: {
                notEmpty: true,
            },
        },
        projectId: {
            field: "projectId",
            type: Sequalize.STRING,
        },
        modelId: {
            field: "modelId",
            type: Sequalize.STRING,
        },
        logo: {
            field: "logo",
            type: Sequalize.STRING,
        },
        name: {
            field: "name",
            type: Sequalize.STRING,
        },
        published: {
            field: "published",
            type: Sequalize.BOOLEAN,
        },
        featured: {
            field: "featured",
            type: Sequalize.BOOLEAN,
        },
    },
    {
        timestamps: false,
    }
);
