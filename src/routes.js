const  AuthenticateGitHubController = require('./controllers/AuthenticateGitHubController');

const routes = require('express').Router();

routes.post("/authenticate", new AuthenticateGitHubController().handle);
routes.get("/health", (req, res) => {
    res.send("Working Well!")
});

module.exports = routes;