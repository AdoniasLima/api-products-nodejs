const mongoose = require("mongoose");

require("dotenv").config({path: "./variables.env"});

//Connection to the database
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
//ES6
mongoose.Promise = global.Promise;
mongoose.connection.on("error", (error) => {
    console.error("Erro: " + error.message);
});

//Loading all models
require("./models/Product");

const app = require("./app");

app.set("port", process.env.PORT || 7777);

const server = app.listen(app.get("port"), function(){
    console.log("Server running on the port: " + server.address().port);
});