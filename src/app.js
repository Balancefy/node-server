require('dotenv').config({
    path: process.env.NODE_ENV == "test" ? ".env.test" : ".env"
});
let express = require("express");
let http = require("http");
let cors = require('cors');

let router = require('./routes');

const app = express();

app.use(cors());

const serverHttp = http.createServer(app);

app.use(express.json());

app.use(router);

const PORT = process.env.PORT || 8081

serverHttp.listen(PORT, () => console.log(`is running on port ${PORT}`));