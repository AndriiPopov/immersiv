const constantService = require("../services/constant.service");

const updateConstant = async (req, res) => {
    const updatedData = await constantService.updateConstant(req.body);
    res.status(200).json(updatedData?.[0] || {});
};

const getConstant = async (req, res) => {
    const updatedData = await constantService.getConstant();
    res.status(200).json(updatedData?.[0] || {});
};

// TODO create a service for reviews

module.exports = {
    updateConstant,
    getConstant,
};
