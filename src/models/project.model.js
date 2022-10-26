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
            clientLogo: {
                field: 'clientLogo',
                type: DataTypes.TEXT,
            },
            projectLogo: {
                field: 'projectLogo',
                type: DataTypes.TEXT,
            },
            projectName: {
                field: 'projectName',
                type: DataTypes.TEXT,
            },
            description: {
                field: 'description',
                type: DataTypes.TEXT,
            },
            projectDetailsOn: {
                field: 'projectDetailsOn',
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            projectDetailsDuraton: {
                field: 'projectDetailsDuration',
                type: DataTypes.SMALLINT,
                defaultValue: 10,
            },
            projectLogoMaxWidth: {
                field: 'projectLogoMaxWidth',
                type: DataTypes.SMALLINT,
                defaultValue: 200,
            },
            projectLogoMaxHeight: {
                field: 'projectLogoMaxHeight',
                type: DataTypes.SMALLINT,
                defaultValue: 200,
            },
            clientLogoMaxWidth: {
                field: 'clientLogoMaxWidth',
                type: DataTypes.SMALLINT,
                defaultValue: 200,
            },
            clientLogoMaxHeight: {
                field: 'clientLogoMaxHeight',
                type: DataTypes.SMALLINT,
                defaultValue: 200,
            },
            backgroundOn: {
                field: 'backgroundOn',
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            backgroundTypeVideo: {
                field: 'backgroundTypeVideo',
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            backgroundImage: {
                field: 'backgroundImage',
                type: DataTypes.TEXT,
            },
            backgroundVideo: {
                field: 'backgroundVideo',
                type: DataTypes.TEXT,
            },
            arcwareAddress: {
                field: 'arcwareAddress',
                type: DataTypes.TEXT,
            },
            arcwarePackageId: {
                field: 'arcwarePackageId',
                type: DataTypes.TEXT,
            },
            isArcware: {
                field: 'isArcware',
                type: DataTypes.BOOLEAN,
            },
            newUI: {
                field: 'newUI',
                type: DataTypes.BOOLEAN,
            },
            uiData: {
                field: 'uiData',
                type: DataTypes.TEXT,
                get() {
                    const value = this.getDataValue('uiData')
                    let res = {}
                    try {
                        res = JSON.parse(value)
                    } catch (er) {}

                    return res
                },
                set(value) {
                    this.setDataValue('uiData', JSON.stringify(value))
                },
            },
        },
        {
            timestamps: false,
        }
    )
    return Project
}
