/*
 * Recited App
 * Author: Justin Seymour
 *
 * Main application router for incoming requests to core API
 */

// Dependencies
const express = require('express');

// Routing files
const def = require('../routes/default');
const ping = require('../routes/ping');
const synthesize = require('../routes/synthesize');

// Create the module to export
let _ = express.Router();

// Synthesize 
_.post('/synthesize', synthesize.post);


// Ping routes
_.get('/ping',ping.get);
_.all('/ping',def._405);

// 404 Handler
_.all('*',def._404);


// Export the module 
module.exports = _;