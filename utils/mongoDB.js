'use strict';


const Mongoose = require("mongoose");
const constants = require(rootDir + "/utils/constants");


let env = process.env.ENV;
let environ;
switch (env) {
    case 'local':
        environ = "LOCAL_";
        break;
    case "dev":
        environ = "DEV_";
        break;
    case "prod":
        environ = "PROD_";
        break;
}

// terminate the server if env is not set properly
if (!environ) {
    console.log("env not set");
    process.exit();
}



let setting = {
    url: process.env[environ + "MONGO_DB_URL"]
};

let parserMongo={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

console.log("setting host:MONGO ", setting.url);
Mongoose.connect(setting.url,parserMongo);

const db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with mongodb database succeeded");
});
db.agency = require(rootDir + "/model/agency");
db.client = require(rootDir + '/model/client');


module.exports = db;
