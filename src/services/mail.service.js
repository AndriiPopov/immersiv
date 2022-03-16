require("dotenv").config();
const nodemailer = require("nodemailer");

const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY || "key-yourkeyhere",
});

const sendmail = (data) => {
    mg.messages
        .create(process.env.MAILGUN_DOMAIN, {
            ...data,
            from: `info@${process.env.MAILGUN_DOMAIN}`,
        })
        .then((msg) => console.log(msg)) // logs response data
        .catch((err) => console.log(err)); // logs any error
};
// process.env.NODE_ENV === "production"
// ?
// : require("sendmail")({
//       logger: {
//           debug: console.log,
//           info: console.info,
//           warn: console.warn,
//           error: console.error,
//       },
//   });

const { logger } = require("../utils/logger");
const { ErrorHandler } = require("../helpers/error");
const html = require("../helpers/signup");

const url =
    process.env.NODE_ENV === "production"
        ? "https://tour.immersiv.com.au"
        : "http://localhost:3000";

const signupMail = (to, name) => {
    try {
        sendmail({
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

      </a>
      <br/>
      ${url}/reset-password?token=${encodeURIComponent(token)}&email=${email}
      </p>
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
