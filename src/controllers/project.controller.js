const projectService = require('../services/project.service')

const getAllProjects = async (req, res) => {
    const projects = await projectService.getAllProjects()
    res.json(projects)
}

const createProject = async (req, res) => {
    const newProject = await projectService.addProject(req.body)
    res.status(200).json(newProject)
}

const getProject = async (req, res) => {
    const project = await projectService.getProject(req.params)
    res.status(200).json(project)
}

const getProjectByUrl = async (req, res) => {
    const project = await projectService.getProjectByUrl(req.params)
    res.status(200).json(project)
}

const updateProject = async (req, res) => {
    const { projectId } = req.params

    const updatedProject = await projectService.updateProject({
        updateData: req.body,
        id: projectId,
    })
    res.status(200).json(updatedProject)
}

const deleteProject = async (req, res) => {
    const { projectId } = req.params

    const deletedProject = await projectService.removeProject(projectId)
    res.status(200).json(deletedProject)
}

const addMedia = async (req, res) => {
    const { projectId } = req.params
    const projects = await projectService.addMedia(projectId, req.body)
    res.status(200).json(projects)
}

const deleteMedia = async (req, res) => {
    const { projectId, mediaId } = req.params
    const projects = await projectService.deleteMedia(projectId, mediaId)
    res.status(200).json(projects)
}

const moveMedia = async (req, res) => {
    const { projectId, mediaId } = req.params
    const projects = await projectService.moveMedia(
        projectId,
        mediaId,
        req.query.down
    )
    res.status(200).json(projects)
}

module.exports = {
    getProject,
    createProject,
    updateProject,
    deleteProject,
    getAllProjects,
    getProjectByUrl,
    addMedia,
    deleteMedia,
    moveMedia,
}
