module.exports = (sequelize, DataTypes) => {
    const Property = sequelize.define(
        'property',
        {
            Name: {
                field: 'Name',
                type: DataTypes.STRING,
                allowNull: false,
                len: [1, 500],
                trim: true,
                validate: {
                    notEmpty: true,
                },
            },
            Surface: {
                field: 'Surface',
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            Price: {
                field: 'Price',
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            BedroomsCount: {
                field: 'BedroomsCount',
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            BathroomsCount: {
                field: 'BathroomsCount',
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            Frontage: {
                field: 'Frontage',
                type: DataTypes.FLOAT,
            },
            Depth: {
                field: 'Depth',
                type: DataTypes.FLOAT,
            },
            Orientation: {
                field: 'Orientation',
                type: DataTypes.JSONB,
            },
            Availability: {
                field: 'Availability',
                type: DataTypes.ENUM('available', 'sold', 'reserved'),
            },
            Url: {
                field: 'Url',
                type: DataTypes.TEXT,
            },
            FacadeName: {
                field: 'FacadeName',
                type: DataTypes.TEXT,
            },
        },
        {
            timestamps: false,
        }
    )
    return Property
}
