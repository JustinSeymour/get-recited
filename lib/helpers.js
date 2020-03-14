

/* 
 * Recited App
 * Author: Justin Seymour
 * 
 * General purpose utilities
 */

let _ = {};

// Get an object from JSON without throwing
_.getObjectFromJson = (str) => {
   try{
       let obj = JSON.parse(str);
       return obj;
   } catch (err) {
       return false;
   }
};

module.exports = _;