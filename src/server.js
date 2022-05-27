require('dotenv').config({
    path: process.env.NODE_ENV == "test" ? ".env.test" : ".env"
});
let express = require("express");
let http = require("http");
let cors = require('cors');

let router = require('./routes');

const server = express();

server.use(cors());

const serverHttp = http.createServer(server);

server.use(express.json());

server.use(router);

const PORT = process.env.PORT || 8081

serverHttp.listen(PORT, () => console.log(`Sever is running on port ${PORT}`));