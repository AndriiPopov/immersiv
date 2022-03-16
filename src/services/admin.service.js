const { ErrorHandler } = require("../helpers/error");
const { adminModel, sequelize, Sequelize } = require("../models");
const AuthService = require("./auth.service");
const { Op } = Sequelize;

class AdminService {
    addAdmin = async (data) => {
        try {
            await adminModel.create(data);
            await AuthService.forgotPassword(data.email);
            return await adminModel.findAll();
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };

    removeAdmin = async (id) => {
        try {
            await adminModel.destroy({
                where: { email: id, locked: { [Op.not]: true } },
            });
            return await adminModel.findAll();
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };
    getAdmins = async () => {
        try {
            return await adminModel.findAll();
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };
}

module.exports = new AdminService();
