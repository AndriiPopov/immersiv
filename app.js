const express = require('express')
const path = require('path')
const db = require('./src/models')

require('express-async-errors')
const cors = require('cors')
// const morgan = require("morgan");
const cookieParser = require('cookie-parser')
const routes = require('./src/routes')
const helmet = require('helmet')
const compression = require('compression')
const unknownEndpoint = require('./src/middleware/unKnownEndpoint')
const { handleError } = require('./src/helpers/error')
const enforce = require('express-sslify')

const isProduction = process.env.NODE_ENV === 'production'

const app = express()

if (isProduction) app.use(enforce.HTTPS())
app.set('trust proxy', 1)
app.use(
    cors({
        credentials: true,
        ...(isProduction ? {} : { origin: 'http://localhost:3000' }),
    })
)
app.use(express.json())
// app.use(morgan("dev"));
app.use(compression())
// app.use(helmet());
app.use(cookieParser())

app.use('/api', routes)
// app.use('/gallery', express.static(path.join(__dirname, 'buildGallery')))
app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.use(unknownEndpoint)
app.use(handleError)

module.exports = app
