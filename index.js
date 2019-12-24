
/*
 * C3 Maintenance Solutions Botswana Pty Ltd
 * Author: Justin Seymour
 *
 * Primary application
 */

// Dependencies
const secrets = require('./lib/secrets');
const server = require('./lib/server');

// Create module to export
let _ = {};

// Start the application
_.run = async () => {
    try {
        let secretData = await secrets.load();
        //console.log("secret data -> " + JSON.stringify(secretData));

        await server.start();

        return true;
    } catch (err) {
        console.log(err);
    }
};

// Start itself (run)
_.run();

// Export the module (Mainly for testing use).
module.exports = _;