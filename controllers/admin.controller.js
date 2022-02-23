const adminService = require("../services/admin.service");

const createAdmin = async (req, res) => {
    const admins = await adminService.addAdmin(req.body);
    res.status(200).json(admins);
};

const deleteAdmin = async (req, res) => {
    const { id } = req.params;
    const admins = await adminService.removeAdmin(id);
    res.status(200).json(admins);
};

const getAdmins = async (req, res) => {
    const admins = await adminService.getAdmins();
    res.status(200).json(admins);
};

module.exports = {
    createAdmin,
    deleteAdmin,
    getAdmins,
};
