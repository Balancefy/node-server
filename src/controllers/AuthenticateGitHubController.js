const AuthenticateGitHubService = require("../services/AuthenticateGitHubService")

class AuthenticateGitHubController {
    async handle(req, res) {
        const { code, page } = req.body

        console.log(req.body)

        const service = new AuthenticateGitHubService()

        try {
            const result = await service.execute(code, page)

            return res.json(result);
        } catch (err) {
            console.log(err)
            return res.json({error: err.message})
        }
    }
}

module.exports = AuthenticateGitHubController 