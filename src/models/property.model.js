module.exports = (sequelize, DataTypes) => {
    const Property = sequelize.define(
        "property",
        {
            name: {
                field: "name",
                type: DataTypes.STRING,
                allowNull: false,
                len: [1, 500],
                trim: true,
                validate: {
                    notEmpty: true,
                },
            },
            propertyId: {
                field: "propertyId",
                type: DataTypes.STRING,
            },
            status: {
                field: "status",
                type: DataTypes.ENUM("available", "sold", "reserved"),
            },
        },
        {
            timestamps: false,
        }
    );
    return Property;
};
