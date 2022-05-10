require('dotenv').config({
    path: process.env.NODE_ENV == "test" ? ".env.test" : ".env"
});
let express = require("express");
let http = require("http");
let cors = require('cors')

let router = require('./routes');

const app = express();

app.use(cors());

const serverHttp = http.createServer(app);

app.use(express.json());

app.use(router);

module.exports = serverHttp;