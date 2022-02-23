const { ErrorHandler } = require("../helpers/error");
const ProjectModel = require("../models/project.model");

class ProjectService {
    getAllProjects = async () => {
        try {
            return await ProjectModel.findAll();
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };

    addProject = async (data) => {
        try {
            await ProjectModel.create(data);
            return await ProjectModel.findAll();
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };

    getProject = async (data) => {
        try {
            const { id } = data;
            let project;
            if (id === "__featured__")
                project = await ProjectModel.findOne({
                    where: { featured: true },
                });
            else project = id && (await ProjectModel.findByPk(id));
            if (!project) {
                throw new ErrorHandler(404, "project not found");
            }
            return project;
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };

    updateProject = async (data) => {
        try {
            if (data.updateData.featured) {
                await ProjectModel.update({ featured: false }, { where: {} });
            }
            await ProjectModel.update(data.updateData, {
                where: {
                    url: data.id,
                },
            });
            return await ProjectModel.findAll();
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };

    removeProject = async (id) => {
        try {
            await ProjectModel.destroy({ where: { url: id } });
            return await ProjectModel.findAll();
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };
}

module.exports = new ProjectService();
