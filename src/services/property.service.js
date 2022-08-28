const { ErrorHandler } = require('../helpers/error')
const { projectModel, propertyModel } = require('../models')

const checkProject = async (projectId) => {
    const project = await projectModel.findByPk(projectId)
    if (!project) throw new ErrorHandler(404, 'No project')
}

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const findAllProperties = async (projectId) => {
    return await propertyModel.findAll({
        where: { projectId },
        order: [
            ['id', 'ASC'],
            ['Name', 'DESC'],
        ],
    })
}

class ProjectService {
    getProjectProperties = async (projectId) => {
        try {
            await checkProject(projectId)
            return await findAllProperties(projectId)
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message)
        }
    }

    getProjectPropertiesForUE = async (url) => {
        try {
            if (!url) throw new ErrorHandler(404, 'projectId  not found')
            const project = await projectModel.findOne({
                where: { url },
            })
            if (!project)
                throw new ErrorHandler(
                    404,
                    'project for this projectId not found'
                )
            const properties = await propertyModel.findAll({
                where: { projectId: project.id },
                raw: true,
                attributes: { exclude: ['id', 'projectId'] },
            })

            if (properties) {
                return properties.map((p) => {
                    const newObj = {
                        ...p,
                        Availability: capitalizeFirstLetter(p.Availability),
                        Orientation: {
                            E: !!p.Orientation.E,
                            W: !!p.Orientation.W,
                            N: !!p.Orientation.N,
                            S: !!p.Orientation.S,
                        },
                    }
                    if (url.toLowerCase() === 'Imperial_Square'.toLowerCase()) {
                        delete newObj.Depth
                        delete newObj.Frontage
                    }
                    return newObj
                })
            }
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message)
        }
    }

    createProperty = async (projectId, id) => {
        try {
            await checkProject(projectId)
            let template = null
            if (id) {
                template = await propertyModel.findOne({
                    where: { id, projectId },
                    raw: true,
                })
            }
            template = template || {
                Name: 'Property',
                Surface: 0,
                Price: 0,
                BedroomsCount: 0,
                BathroomsCount: 0,
                Frontage: 0,
                Depth: 0,
                Orientation: { E: true },
                Availability: 'available',
            }
            delete template.id
            const newProperty = await propertyModel.create({
                ...template,
                projectId,
            })
            const newProperties = await findAllProperties(projectId)
            return { newProperties, newProperty }
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message)
        }
    }

    getProperty = async (projectId, id) => {
        try {
            await checkProject(projectId)
            return await propertyModel.findOne({
                where: { id, projectId },
            })
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message)
        }
    }

    updateProperty = async (data, projectId, id) => {
        try {
            await checkProject(projectId)
            await propertyModel.update(data, {
                where: {
                    id,
                    projectId,
                },
            })
            return await findAllProperties(projectId)
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message)
        }
    }

    deleteProperty = async (projectId, ids) => {
        try {
            await checkProject(projectId)
            await propertyModel.destroy({ where: { projectId, id: ids } })
            return await findAllProperties(projectId)
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message)
        }
    }

    updateAvailability = async (data, projectId, id) => {
        try {
            await checkProject(projectId)
            await propertyModel.update(
                { status: data.status },
                {
                    where: {
                        id,
                        projectId,
                    },
                }
            )
            return await findAllProperties(projectId)
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message)
        }
    }
}

module.exports = new ProjectService()
