const constantService = require("../services/constant.service");

const updateConstant = async (req, res) => {
    const updatedData = await constantService.updateConstant(req.body);
    if (updatedData.length) res.status(200).json(updatedData[0]);
    else res.status(500).send();
};

const getConstant = async (req, res) => {
    const data = await constantService.getConstant();
    if (data.length) res.status(200).json(data[0]);
    else res.status(500).send();
};

// TODO create a service for reviews

module.exports = {
    updateConstant,
    getConstant,
};
