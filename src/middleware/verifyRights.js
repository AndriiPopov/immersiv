const jwt = require("jsonwebtoken");
const { ErrorHandler } = require("../helpers/error");
const { projectModel } = require("../models");

const verifyToken = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
        throw new ErrorHandler(401, "Token missing");
    }

    try {
        const verified = jwt.verify(token, process.env.SECRET);
        req.user = verified;
        next();
    } catch (error) {
        throw new ErrorHandler(401, error.message || "Invalid Token");
    }
};

const verifySuperAdmin = (req, res, next) => {
    try {
        const user = req.user;
        if (!user || !user.super) throw new ErrorHandler(403, "No user");
        next();
    } catch (error) {
        throw new ErrorHandler(401, error.message || "Invalid Token");
    }
};

const verifyProjectAdmin = async (req, res, next) => {
    try {
        const user = req.user;
        const { projectId } = req.params;
        if (!user) throw new ErrorHandler(403, "No user");
        if (user.super) return next();

        if (
            !projectId ||
            !user.projectId ||
            user.projectId.toString() !== projectId.toString()
        )
            throw new ErrorHandler(403, "No user");
        next();
    } catch (error) {
        throw new ErrorHandler(403, error.message || "Invalid Token");
    }
};

module.exports = { verifyToken, verifySuperAdmin, verifyProjectAdmin };
