/*
 * Recited App
 * Author: Justin Seymour
 *
 * HTTP Server
 */

// Dependencies
const express = require('express');
const router = require('./router');
const app = express();
const port = 3000;
const winston = require('winston');
const expressWinston = require('express-winston');

// Create module to export
let _ = {};

_.start = () => {
    
  try {

    app.listen(port);
    console.log("Core API listening on port: "+port);
    return true;

  } catch (err) {

    throw(new Error(err));

  }
};

// Set the logger
app.use(expressWinston.logger({
  'transports': [
    new winston.transports.Console()
  ]
}));

// Parse all requests as JSON
app.use(express.json());

// Set the router
app.use('/',router);

module.exports = _;