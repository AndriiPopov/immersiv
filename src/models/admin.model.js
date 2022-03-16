module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define(
        "admin",
        {
            email: {
                field: "email",
                type: DataTypes.STRING,
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
                type: DataTypes.STRING,
            },
            locked: {
                field: "locked",
                type: DataTypes.BOOLEAN,
            },
        },
        {
            timestamps: false,
        }
    );

    return Admin;
};
