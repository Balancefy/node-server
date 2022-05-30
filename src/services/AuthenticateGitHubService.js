const { default: axios } = require("axios");

class AuthenticateGitHubService {
    async execute(code) {

        const acessTokenResponse = await axios.post("https://github.com/login/oauth/access_token", null,  {
            params: {
                client_id: process.env.CLIENT_ID_GITHUB,
                client_secret: process.env.CLIENT_SECRET_GITHUB,
                redirect_uri: "https://balancefy-saving.vercel.app/cadastro",
                code: code,
            },
            headers: {
                "Accept": "application/json"
            }
        })
    
        const response = await axios.get("https://api.github.com/user", {
            headers: {
                authorization: `Bearer ${acessTokenResponse.data.access_token}`
            }
        })

        return response.data;
    }
}

module.exports = AuthenticateGitHubService