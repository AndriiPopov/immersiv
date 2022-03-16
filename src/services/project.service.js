const { ErrorHandler } = require("../helpers/error");
const { projectModel } = require("../models");

class ProjectService {
    getAllProjects = async () => {
        try {
            return await projectModel.findAll();
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };

    getProjectByUrl = async (data) => {
        try {
            const { id } = data;

            const project = await projectModel.findOne({
                where: { url: id },
                attributes: { exclude: ["adminEmail", "adminPassword"] },
            });
            if (!project) {
                throw new ErrorHandler(404, "project not found");
            }

            return project;
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };

    addProject = async (data) => {
        try {
            await projectModel.create(data);
            return await projectModel.findAll();
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };

    getProject = async (data) => {
        try {
            const { id } = data;
            let project;
            if (id === "__featured__")
                project = await projectModel.findOne({
                    where: { featured: true },
                    attributes: { exclude: ["adminEmail", "adminPassword"] },
                });
            else
                project = await projectModel.findByPk(id, {
                    attributes: { exclude: ["adminEmail", "adminPassword"] },
                });
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
                await projectModel.update({ featured: false }, { where: {} });
            }
            await projectModel.update(data.updateData, {
                where: {
                    id: data.id,
                },
            });
            return await projectModel.findAll();
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };

    removeProject = async (id) => {
        try {
            await projectModel.destroy({ where: { id } });
            return await projectModel.findAll();
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };
}

module.exports = new ProjectService();
