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

const options = {
    useNewUrlParser: true,
    // reconnectTries: Number.MAX_VALUE,
    // reconnectInterval: 500,
    poolSize: 10,
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    useUnifiedTopology: true
};


let setting = {
    host: process.env[environ + "MONGO_DB_HOST"],
    database: process.env[environ + "MONGO_DB_NAME"],
    // username: process.env[environ + "MONGO_DB_USER"],
    // password: process.env[environ + "MONGO_DB_PASSWORD"],
    dialect: process.env[environ + "MONGO_DB_TYPE"],
    port: process.env[environ + "MONGO_DB_PORT"],
    url: process.env[environ + "MONGO_DB_URL"]
};


console.log("setting host:MONGO ", setting.url, setting.dialect);
Mongoose.connect(setting.url, options);

const db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with mongodb database succeeded. selltm");
});


// db[constants.ORDER_COLLECTION] = require(rootDir + "/models/noSequlize/orderNoSql");


module.exports = db;
