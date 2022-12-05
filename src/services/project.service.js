const { ErrorHandler } = require('../helpers/error')
const { projectModel } = require('../models')
const propertyService = require('./property.service')

class ProjectService {
    getAllProjects = async () => {
        try {
            return await projectModel.findAll()
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message)
        }
    }

    getProjectByUrl = async (data) => {
        try {
            const { url } = data

            const project = await projectModel.findOne({
                where: url === '__featured__' ? { featured: true } : { url },
                attributes: { exclude: ['adminEmail', 'adminPassword'] },
            })

            if (!project) {
                throw new ErrorHandler(404, 'project not found')
            }
            const properties =
                (await propertyService.findAllProperties(project.id)) || []

            return { project, properties }
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message)
        }
    }

    addProject = async (data) => {
        try {
            await projectModel.create(data)
            return await projectModel.findAll()
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message)
        }
    }

    getProject = async (data) => {
        try {
            const { projectId } = data

            const project = await projectModel.findByPk(projectId)
            if (!project) {
                throw new ErrorHandler(404, 'project not found')
            }

            return project
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message)
        }
    }

    updateProject = async (data) => {
        try {
            if (data.updateData.featured) {
                await projectModel.update({ featured: false }, { where: {} })
            }
            await projectModel.update(data.updateData, {
                where: {
                    id: data.id,
                },
            })
            return await projectModel.findAll()
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message)
        }
    }

    removeProject = async (id) => {
        try {
            await projectModel.destroy({ where: { id } })
            return await projectModel.findAll()
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message)
        }
    }

    addMedia = async (id, data) => {
        try {
            const project = await projectModel.findOne({ where: { id } })
            if (project) {
                await projectModel.update(
                    { media: [...project.media, { ...data, id: +new Date() }] },
                    { where: { id } }
                )

                return await projectModel.findByPk(id)
            }
            throw new ErrorHandler(400, 'project not found')
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message)
        }
    }

    deleteMedia = async (id, mediaId) => {
        try {
            const project = await projectModel.findOne({ where: { id } })
            if (project) {
                await projectModel.update(
                    {
                        media: project.media.filter(
                            (i) => i.id.toString() !== mediaId.toString()
                        ),
                    },
                    { where: { id } }
                )
                return await projectModel.findByPk(id)
            } else throw new ErrorHandler(400, 'project not found')
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message)
        }
    }

    moveMedia = async (id, mediaId, sDown) => {
        try {
            const down = sDown === 'true'
            const project = await projectModel.findOne({ where: { id } })
            if (project) {
                const index = project.media.findIndex(
                    (i) => i.id.toString() === mediaId.toString()
                )
                if (index > -1) {
                    if (
                        (index === 0 && !down) ||
                        (index >= project.media.length - 1 && down)
                    ) {
                        throw new ErrorHandler(400, 'it is the last position')
                    } else {
                        let newMedia = [...project.media]
                        newMedia[index] = newMedia.splice(
                            index + (down ? 1 : -1),
                            1,
                            newMedia[index]
                        )[0]
                        await projectModel.update(
                            { media: newMedia },
                            { where: { id } }
                        )
                        return await projectModel.findByPk(id)
                    }
                } else throw new ErrorHandler(400, 'media not found')
            } else throw new ErrorHandler(400, 'project not found')
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message)
        }
    }
}

module.exports = new ProjectService()
