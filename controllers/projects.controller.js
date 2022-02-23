const projectService = require("../services/project.service");

const getAllProjects = async (req, res) => {
    const projects = await projectService.getAllProjects();
    res.json(projects);
};

const createProject = async (req, res) => {
    const newProject = await projectService.addProject(req.body);
    res.status(200).json(newProject);
};

const getProject = async (req, res) => {
    const project = await projectService.getProject(req.params);
    res.status(200).json(project);
};

const updateProject = async (req, res) => {
    const { id } = req.params;

    const updatedProject = await projectService.updateProject({
        updateData: req.body,
        id,
    });
    res.status(200).json(updatedProject);
};

const deleteProject = async (req, res) => {
    const { id } = req.params;

    const deletedProject = await projectService.removeProject(id);
    res.status(200).json(deletedProject);
};

// TODO create a service for reviews

module.exports = {
    getProject,
    createProject,
    updateProject,
    deleteProject,
    getAllProjects,
};