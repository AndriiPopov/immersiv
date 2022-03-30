const gaService = require('../services/ga.service')

const getGA = async (req, res) => {
    const { projectId } = req.params

    const data = await gaService.getGA(projectId, req)
    res.json(data)
}

const getAccessToken = async (req, res) => {
    gaService.getAccessToken(res)
}

module.exports = {
    getGA,
    getAccessToken,
}
