const { ErrorHandler } = require('../helpers/error')
const { projectModel } = require('../models')

const checkProject = async (projectId) => {
    const project = await projectModel.findByPk(projectId)
    if (!project) throw new ErrorHandler(404, 'No project')
    return project
}

const { BetaAnalyticsDataClient } = require('@google-analytics/data')

const analyticsDataClient = new BetaAnalyticsDataClient()

class GAService {
    getGA = async (projectId, req) => {
        try {
            const { body } = req
            const project = await checkProject(projectId)

            const [response] = await analyticsDataClient.runReport({
                // property: `properties/${project.analytic}`,
                property: `properties/300857616`,
                ...body,
            })
            return response
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message)
        }
    }
}

module.exports = new GAService()
