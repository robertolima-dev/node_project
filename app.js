require("dotenv").config();
const express           = require('express');
const consign           = require('consign');
const bodyParser        = require('body-parser');
const cors              = require('cors');

let app = express();

app.use(
    bodyParser.urlencoded({
        limit: '10mb',
        extended: true,
        parameterLimit: 10000
    })
)
app.use(bodyParser.json({ limit: '10mb' }))
app.use(cors())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.CORS_WEB);
    res.header("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE, HEAD, PATH");
    res.header("Access-Control-Allow-Headers", process.env.CORS_WEB);
    next();
})

consign()
    .include("routes")
    .into(app);

app.set("port", 4000);
app.listen(4000, () => {
    console.log("server is listening on: " + app.get("port"));
});