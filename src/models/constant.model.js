module.exports = (sequelize, DataTypes) => {
    const Constant = sequelize.define(
        "constant",
        {
            email: {
                field: "email",
                type: DataTypes.STRING,
                primaryKey: true,
            },
            phone: {
                field: "phone",
                type: DataTypes.STRING,
            },
            call: {
                field: "call",
                type: DataTypes.STRING,
            },
        },
        {
            timestamps: false,
        }
    );
    return Constant;
};
