const AuthenticateGitHubService = require("../services/AuthenticateGitHubService")

class AuthenticateGitHubController {
    async handle(req, res) {
        const { code } = req.body

        const service = new AuthenticateGitHubService()

        try {
            const result = await service.execute(code)

            return res.json(result);
        } catch (err) {
            console.log(err)
            return res.json({error: err.message})
        }
    }
}

module.exports = AuthenticateGitHubController 