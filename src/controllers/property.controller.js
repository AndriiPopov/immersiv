const propertyService = require("../services/property.service");

const getProjectProperties = async (req, res) => {
    const { projectId } = req.params;

    const properties = await propertyService.getProjectProperties(projectId);
    res.json(properties);
};

const getProjectPropertiesForUE = async (req, res) => {
    const properties = await propertyService.getProjectPropertiesForUE(req);
    res.json(properties);
};

const createProperty = async (req, res) => {
    const { projectId } = req.params;

    const newProperty = await propertyService.createProperty(
        projectId,
        req.body
    );
    res.status(200).json(newProperty);
};

const getProperty = async (req, res) => {
    const { projectId, id } = req.params;
    const property = await propertyService.getProperty(projectId, id);
    res.status(200).json(property);
};

const updateProperty = async (req, res) => {
    const { projectId, id } = req.params;

    const updatedProperty = await propertyService.updateProperty(
        req.body,
        projectId,
        id
    );
    res.status(200).json(updatedProperty);
};

const deleteProperty = async (req, res) => {
    const { projectId, id } = req.params;

    const deletedProperty = await propertyService.deleteProperty(projectId, id);
    res.status(200).json(deletedProperty);
};

const updateAvailability = async (req, res) => {
    const { projectId, id } = req.params;

    const updatedProperty = await propertyService.updateAvailability(
        req.body,
        projectId,
        id
    );
    res.status(200).json(updatedProperty);
};

// TODO create a service for reviews

module.exports = {
    getProperty,
    createProperty,
    updateProperty,
    deleteProperty,
    getProjectProperties,
    updateAvailability,
    getProjectPropertiesForUE,
};
