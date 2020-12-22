const express = require("express");
const cors = require('cors');
const router = require("./routes/index");
const errosHandler = require("./handlers/errosHandler");

const app = express();

//Enable all cors requests
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use("/", router);

app.use(errosHandler.notFound);

module.exports = app;