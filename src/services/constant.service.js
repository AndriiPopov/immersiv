const { ErrorHandler } = require("../helpers/error");
const { constantModel } = require("../models");

class ConstantService {
    updateConstant = async (data) => {
        try {
            await constantModel.destroy({
                where: {},
                truncate: true,
            });

            await constantModel.create(data);
            return await constantModel.findAll();
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };

    getConstant = async () => {
        try {
            return await constantModel.findAll();
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };
}

module.exports = new ConstantService();
