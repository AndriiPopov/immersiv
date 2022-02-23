const { ErrorHandler } = require("../helpers/error");
const ConstantModel = require("../models/constant.model");

class ConstantService {
    updateConstant = async (data) => {
        try {
            await ConstantModel.destroy({
                where: {},
                truncate: true,
            });

            await ConstantModel.create(data);
            return await ConstantModel.findAll();
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };

    getConstant = async () => {
        try {
            return await ConstantModel.findAll();
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };
}

module.exports = new ConstantService();
