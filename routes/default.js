/*
 * Recited App
 * Author: Justin Seymour
 *
 * Handler for the default routes, usable on the router in place of actual routes
 */

// Dependencies
const RequestError = require('./../errors/request');

// Create the module to export
let _ = {};

// Method not allowed
_._405 = async (req, res) => {
   let code = 405;
   return res.status(code).json(new RequestError(code));
};

// Not found
_._404 = async (req, res) => {
   let code = 404;
   return res.status(code).json(new RequestError(code));
};

// Export the module
module.exports = _;