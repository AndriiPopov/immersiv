require("dotenv").config();
const sendmail = require("sendmail")({
    logger: {
        debug: console.log,
        info: console.info,
        warn: console.warn,
        error: console.error,
    },
});

const { logger } = require("../utils/logger");
const { ErrorHandler } = require("../helpers/error");
const html = require("../helpers/signup");

const url =
    process.env.NODE_ENV === "production"
        ? "https://immersiv.herokuapp.com"
        : "http://localhost:3000";

const signupMail = async (to, name) => {
    try {
        await sendmail({
            from: "immersiv@gmail.com",
            to,
            subject: "Welcome to IMMERSIV",
            html: html(name),
        });
    } catch (error) {
        logger.error(error);
    }
};

const forgotPasswordMail = async (token, email) => {
    try {
        const res = await sendmail(
            {
                to: email,
                from: "immersiv@gmail.com",
                subject: "Forgot Password",
                html: `<p>To reset your password, please click the link below.
      <a href="${url}/reset-password?token=${encodeURIComponent(
                    token
                )}&email=${email}"><br/>
      Reset Password
      </a></p>
      <p><b>Note that this link will expire in the next one(1) hour.</b></p>`,
            },
            function (err, reply) {
                console.log(err && err.stack);
                console.dir(reply);
            }
        );
        return res;
    } catch (error) {
        logger.error(error);
        throw new ErrorHandler(500, error.message);
    }
};

const resetPasswordMail = async (email) => {
    try {
        const message = {
            from: "immersiv@gmail.com",
            to: email,
            subject: "Password Reset Successful",
            html: "<p>Your password has been changed successfully.</p>",
        };

        await sendmail(message);
    } catch (error) {
        logger.error(error);
        throw new ErrorHandler(500, error.message);
    }
};

module.exports = {
    signupMail,
    resetPasswordMail,
    forgotPasswordMail,
};
