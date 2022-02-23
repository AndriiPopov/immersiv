const constantService = require("../services/constant.service");

const updateConstant = async (req, res) => {
    const updatedData = await constantService.updateConstant(req.body);
    res.status(200).json(updatedData);
};

const getConstant = async (req, res) => {
    const data = await constantService.getConstant();
    res.status(200).json(data);
};

// TODO create a service for reviews

module.exports = {
    updateConstant,
    getConstant,
};
