const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validateUser = require("../helpers/validateUser");
const { ErrorHandler } = require("../helpers/error");
const mail = require("./mail.service");
const crypto = require("crypto");
const moment = require("moment");
const { logger } = require("../utils/logger");
const {
    adminModel,
    tokenModel,
    sequelize,
    Sequelize,
    projectModel,
} = require("../models");

const { Op } = Sequelize;

class AuthService {
    // async login(email, password) {
    //     try {
    //         if (!validateUser(email, password)) {
    //             throw new ErrorHandler(403, "Invalid login");
    //         }

    //         const user = await adminModel.findByPk(email);

    //         if (!user) {
    //             throw new ErrorHandler(403, "Email or password incorrect.");
    //         }

    //         const { password: dbPassword, email } = user;

    //         if (!dbPassword) {
    //             throw new ErrorHandler(403, "Email or password incorrect.");
    //         }

    //         const isCorrectPassword = await bcrypt.compare(
    //             password,
    //             dbPassword
    //         );

    //         if (!isCorrectPassword) {
    //             throw new ErrorHandler(403, "Email or password incorrect.");
    //         }

    //         const token = await this.signToken({ id: email, super: true });
    //         const refreshToken = await this.signRefreshToken({
    //             id: email,
    //             super: true,
    //         });
    //         return {
    //             token,
    //             refreshToken,
    //         };
    //     } catch (error) {
    //         throw new ErrorHandler(error.statusCode, error.message);
    //     }
    // }

    async login(email, password) {
        try {
            if (!validateUser(email, password)) {
                throw new ErrorHandler(403, "Invalid login");
            }

            let user = await adminModel.findByPk(email);
            let project, dbPassword;

            if (!user) {
                project = await projectModel.findOne({
                    where: { adminEmail: email },
                    raw: true,
                });

                if (project) dbPassword = project.adminPassword;
            } else {
                dbPassword = user.password;
            }

            if (!dbPassword) {
                throw new ErrorHandler(403, "Email or password incorrect.");
            }

            const isCorrectPassword = project
                ? password.toString() === dbPassword.toString()
                : await bcrypt.compare(password, dbPassword);

            if (!isCorrectPassword) {
                throw new ErrorHandler(403, "Email or password incorrect.");
            }

            const token = await this.signToken({
                id: email,
                super: !project,
                projectId: project?.id,
            });
            const refreshToken = await this.signRefreshToken({
                id: email,
                super: !project,
                projectId: project?.id,
            });
            return {
                token,
                refreshToken,
            };
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    }

    async generateRefreshToken(data) {
        const payload = await this.verifyRefreshToken(data);

        const token = await this.signToken(payload);
        const refreshToken = await this.signRefreshToken(payload);

        return {
            token,
            refreshToken,
        };
    }

    async forgotPassword(email) {
        const user = await adminModel.findByPk(email);
        console.log(await adminModel.findAll());

        if (user) {
            try {
                await tokenModel.update({ used: true }, { where: { email } });

                //Create a random reset token
                var fpSalt = crypto.randomBytes(64).toString("base64");

                //token expires after one hour
                var expireDate = moment().add(1, "h").format();

                await tokenModel.create({
                    email,
                    expiration: expireDate,
                    token: fpSalt,
                });

                await mail.forgotPasswordMail(fpSalt, email);
            } catch (error) {
                throw new ErrorHandler(error.statusCode, error.message);
            }
        } else {
            throw new ErrorHandler(400, "Email not found");
        }
    }

    async verifyResetToken(token, email) {
        const curDate = moment().format();

        try {
            await tokenModel.destroy({
                where: { expiration: { [Op.lte]: curDate } },
            });
            const tokenFound = await tokenModel.findOne({
                where: {
                    token,
                    email,
                    expiration: { [Op.gte]: curDate },
                },
            });

            return tokenFound;
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    }

    async resetPassword(password, token, email) {
        const curDate = moment().format();
        const isValidPassword =
            typeof password === "string" && password.trim().length >= 6;

        if (!isValidPassword) {
            throw new ErrorHandler(
                400,
                "Password length must be at least 6 characters"
            );
        }

        try {
            const tokenFound = await tokenModel.findOne({
                where: {
                    token,
                    email,
                    expiration: { [Op.gte]: curDate },
                },
            });

            if (!tokenFound)
                throw new ErrorHandler(
                    400,
                    "Token not found. Please try the reset password process again."
                );

            await tokenModel.update({ used: true }, { where: { email } });

            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);

            await adminModel.update(
                { password: hashedPassword },
                { where: { email } }
            );

            await mail.resetPasswordMail(email);
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    }

    async signToken(data) {
        try {
            return jwt.sign(data, process.env.SECRET, { expiresIn: "1w" });
        } catch (error) {
            logger.error(error);
            throw new ErrorHandler(500, "An error occurred");
        }
    }

    async signRefreshToken(data) {
        try {
            return jwt.sign(data, process.env.REFRESH_SECRET, {
                expiresIn: "1w",
            });
        } catch (error) {
            logger.error(error);
            throw new ErrorHandler(500, error.message);
        }
    }

    async verifyRefreshToken(token) {
        try {
            const payload = jwt.verify(token, process.env.REFRESH_SECRET);
            return {
                id: payload.id,
                projectId: payload.projectId,
                super: payload.super,
            };
        } catch (error) {
            logger.error(error);
            throw new ErrorHandler(500, error.message);
        }
    }
}

module.exports = new AuthService();
