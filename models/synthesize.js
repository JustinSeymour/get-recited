/*
 * C3 Maintenance Solutions Botswana Pty Ltd
 * Author: Justin Seymour
 *
 * Models for the _
 */

// Dependencies
const { cloneDeep } = require('lodash');
const rp = require('request-promise');
const request = require('request');
const striptags = require('striptags');
const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');
const serviceAccountPath = `./service-accounts/${process.env.SERVICE_ACCOUNT_FILE_NAME}`;
const client = new textToSpeech.TextToSpeechClient({
   projectId: 'get-recited', 
   keyFilename: './service-accounts/get-recited-d5941729db58.json'
});
const sanitizeHtml = require('sanitize-html');

// Create the module to export
let _ = class {

   constructor() {

      // Set the defaults
      this._id = '1234';
      this.url = false;
      this.text = false;
      this.html = false;
      this.parsedHtml = false;
      
   }

   async setUrl(url) {

      this.url = url;

   }

   async getHtml() {

         let msg;

         if(!this.url) {
            return msg = ["No url set on object"];
         }

  
         return new Promise((resolve, reject) => {
            request(this.url, function(err, response, body) {
               this.html = body
               resolve(body)
             })
         })

   }

   async parseHtml(html) {

      let msg;

      if(!html) {
         return msg = ["No html set on object"];
      };

      const parsedHtml = sanitizeHtml(html, {
         allowedTags: [ 'p', 'h1', 'h2', 'h3', 'h5' ],
         allowedAttributes: {
           'a': [ 'href' ]
         }
       });

       const strippedHtml = striptags(parsedHtml);

       var stripWhiteSpace = strippedHtml.replace(/(\r\n|\n|\r)/gm,"").replace(/\s+/g, " ").replace(/^\s|\s$/g, "");;

       stripWhiteSpace = stripWhiteSpace.substring(0,2499);

      if(stripWhiteSpace.length > 2500) {
         return msg = ["File limit exceeded"]
      }

      if(stripWhiteSpace) {
         this.parsedHtml = stripWhiteSpace;
      } else {
         msg = ["Failed to parse HTML"];
      }

      return msg;

   }

   async synthesizeTextToSpeech() {

      console.log("Synthesizing speech from text...  \n");

      let msg;

      if(!this.parsedHtml) {
         return msg = ['There is no text set to synthesize']
      }

      const request = {
         input: {
            text: this.parsedHtml
         },
         voice: {
            languageCode: 'en-US',
            smmlGender: 'NEUTRAL'
         },
         audioConfig: {
            audioEncoding: 'MP3'
         },
      };

      const [response] = await client.synthesizeSpeech(request);


      const writeFile = util.promisify(fs.writeFile);
      await writeFile('output.mp3', response.audioContent, 'binary');
      console.log("Audio content written to file: output.mp3  \n");

      return msg;

   }

}

module.exports = _;