/// grab environment variables
require("dotenv").config();

const mongoose = require("mongoose");
const debug = require('debug')(`${process.env.npm_package_name}:server`);
const { log } = require("mercedlogger");

const MONGODB_URL =
  process.env.MONGODB_URL || "mongodb://localhost:27017/defaultdb";


///////////////////////////////////
// Mongoose Configuration Object to Avoid Warnings
///////////////////////////////////
const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

///////////////////////////////////
// Making the Database Connection
///////////////////////////////////
mongoose.connect(MONGODB_URL, config);

///////////////////////////////////
// Handling Connection Events
///////////////////////////////////
mongoose.connection
  // Event for When Connection Opens
  .on("open", () => log.green("STATUS", "Connected to Mongo"))
  // Event for When Connection Closes
  .on("close", () => log.red("STATUS", "Disconnected from Mongo"))
  // Event for Connection Errors
  .on("error", error => log.red("ERROR", error))

///////////////////////////////////
// Exporting Our Connection
///////////////////////////////////
module.exports = mongoose
  