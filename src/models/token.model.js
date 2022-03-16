module.exports = (sequelize, DataTypes) => {
    const Token = sequelize.define(
        "token",
        {
            email: {
                field: "email",
                type: DataTypes.STRING,
            },
            expiration: {
                field: "expiration",
                type: DataTypes.DATE,
            },
            token: {
                field: "token",
                type: DataTypes.STRING,
            },
            used: {
                field: "used",
                type: DataTypes.BOOLEAN,
            },
        },
        {
            timestamps: false,
        }
    );
    return Token;
};
