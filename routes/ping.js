  
/*
 * Recited App
 * Author: Justin Seymour
 *
 * Handler for the Ping routes
 */

// Dependencies

// Create the module to export
let _ = {};

// Handle GET requests
_.get = async (req, res) => {
   res.json({'ping':'successful'});
};

// Export the module
module.exports = _;