module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define(
        'project',
        {
            url: {
                field: 'url',
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
                len: [1, 500],
                trim: true,
                validate: {
                    notEmpty: true,
                },
            },
            projectId: {
                field: 'projectId',
                type: DataTypes.STRING,
            },
            modelId: {
                field: 'modelId',
                type: DataTypes.STRING,
            },
            logo: {
                field: 'logo',
                type: DataTypes.STRING,
            },
            name: {
                field: 'name',
                type: DataTypes.STRING,
            },
            published: {
                field: 'published',
                type: DataTypes.BOOLEAN,
            },
            mobileNativeEvents: {
                field: 'mobileNativeEvents',
                type: DataTypes.BOOLEAN,
            },
            desktopNativeEvents: {
                field: 'desktopNativeEvents',
                type: DataTypes.BOOLEAN,
            },
            featured: {
                field: 'featured',
                type: DataTypes.BOOLEAN,
            },
            adminEmail: {
                field: 'email',
                type: DataTypes.STRING,
                validate: {
                    isEmail: true,
                    notEmpty: true,
                },
                len: [1, 500],
                trim: true,
            },
            adminPassword: {
                field: 'password',
                type: DataTypes.STRING,
            },
            analytic: {
                field: 'analytic',
                type: DataTypes.STRING,
            },
            media: {
                field: 'media',
                type: DataTypes.TEXT,
                get: function () {
                    return JSON.parse(this.getDataValue('media'))
                },
                set: function (val) {
                    return this.setDataValue('media', JSON.stringify(val))
                },
                defaultValue: '[]',
            },
        },
        {
            timestamps: false,
        }
    )
    return Project
}
