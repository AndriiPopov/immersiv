const { ErrorHandler } = require("../helpers/error");
const { projectModel, propertyModel } = require("../models");

const checkProject = async (projectId) => {
    const project = await projectModel.findByPk(projectId);
    if (!project) throw new ErrorHandler(404, "No project");
};

class ProjectService {
    getProjectProperties = async (projectId) => {
        try {
            await checkProject(projectId);
            return await propertyModel.findAll({ where: { projectId } });
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };

    createProperty = async (projectId, data) => {
        try {
            await checkProject(projectId);
            await propertyModel.create({ ...data, projectId });
            return await propertyModel.findAll({ where: { projectId } });
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };

    getProperty = async (projectId, id) => {
        try {
            await checkProject(projectId);
            return await propertyModel.findOne({
                where: { id, projectId },
            });
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };

    updateProperty = async (data, projectId, id) => {
        try {
            await checkProject(projectId);
            await propertyModel.update(data, {
                where: {
                    id,
                    projectId,
                },
            });
            return await propertyModel.findAll({
                where: { projectId },
            });
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };

    deleteProperty = async (projectId, id) => {
        try {
            await checkProject(projectId);
            await propertyModel.destroy({ where: { projectId, id } });
            return await propertyModel.findAll({
                where: { projectId },
            });
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };

    updateAvailability = async (data, projectId, id) => {
        try {
            await checkProject(projectId);
            await propertyModel.update(
                { status: data.status },
                {
                    where: {
                        id,
                        projectId,
                    },
                }
            );
            return await propertyModel.findAll({
                where: { projectId },
            });
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };
}

module.exports = new ProjectService();
