/*
 * C3 Maintenance Solutions Botswana Pty Ltd
 * Author: Justin Seymour
 *
 * Base for the error classes
 */

// Dependencies

// Create the class to export 
let _ = class {

  // Create the error object
  constructor(type = null) {
     this.error = {
        'type': type,
        'timestamp': Date.now()
     };
     
  }

};

//Export the module
module.exports = _;