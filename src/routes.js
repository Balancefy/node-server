const  AuthenticateGitHubController = require('./controllers/AuthenticateGitHubController');

const routes = require('express').Router();

routes.post("/authenticate", new AuthenticateGitHubController().handle);

module.exports = routes;