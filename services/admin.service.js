const { Op } = require("sequelize");
const { ErrorHandler } = require("../helpers/error");
const AdminModel = require("../models/admin.model");
const AuthService = require("./auth.service");

class AdminService {
    addAdmin = async (data) => {
        try {
            await AdminModel.create(data);
            await AuthService.forgotPassword(data.email);
            return await AdminModel.findAll();
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };

    removeAdmin = async (id) => {
        try {
            await AdminModel.destroy({
                where: { email: id, locked: { [Op.not]: true } },
            });
            return await AdminModel.findAll();
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };
    getAdmins = async () => {
        try {
            return await AdminModel.findAll();
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };
}

module.exports = new AdminService();
