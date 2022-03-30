const { ErrorHandler } = require('../helpers/error')
const { projectModel } = require('../models')
const moment = require('moment')

const clientEmail = process.env.CLIENT_EMAIL
const privateKey = process.env.PRIVATE_KEY
const scopes = ['https://www.googleapis.com/auth/analytics.readonly']

// API's
const { google } = require('googleapis')

const analytics = google.analytics('v3')

const jwt = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes,
})

const checkProject = async (projectId) => {
    const project = await projectModel.findByPk(projectId)
    if (!project) throw new ErrorHandler(404, 'No project')
    return project
}

class GAService {
    getGA = async (projectId, req) => {
        try {
            const { body } = req
            const { metrics, dimensions, start, finish } = body

            const project = checkProject(projectId)
            if (!project.analytic)
                throw new ErrorHandler(404, 'No view id for this project')

            const result = await analytics.data.ga.get({
                auth: jwt,
                ids: `ga:${project.analytic}`, //viewID 156578486
                'start-date': moment(start).format('YYYY-MM-DD'),
                'end-date': moment(finish).format('YYYY-MM-DD'),
                metrics,
                dimensions,
            })

            return result
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message)
        }
    }
}

module.exports = new GAService()
