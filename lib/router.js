/*
 * C3 Maintenance Solutions Botswana Pty Ltd
 * Author: Justin Seymour
 *
 * Main application router for incoming requests to core API
 */

// Dependencies
const express = require('express');

// Routing files
const def = require('../routes/default');
const ping = require('../routes/ping');

// Create the module to export
let _ = express.Router();


// Ping routes
_.get('/ping',ping.get);
_.all('/ping',def._405);

// 404 Handler
_.all('*',def._404);


// Export the module 
module.exports = _;