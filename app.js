const express = require("express");
const path = require("path");

require("express-async-errors");
const cors = require("cors");
// const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const helmet = require("helmet");
const compression = require("compression");
const unknownEndpoint = require("./middleware/unKnownEndpoint");
const { handleError } = require("./helpers/error");
const Sequalize = require("sequelize");
const secure = require("ssl-express-www");

const app = express();

app.use(secure);
app.set("trust proxy", 1);
app.use(
    cors({
        credentials: true,
        ...(process.env.NODE_ENV === "production"
            ? {}
            : { origin: "http://localhost:3000" }),
    })
);
app.use(express.json());
// app.use(morgan("dev"));
app.use(compression());
// app.use(helmet());
app.use(cookieParser());

app.use("/api", routes);
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use(unknownEndpoint);
app.use(handleError);

module.exports = app;
