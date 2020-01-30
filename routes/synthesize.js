/*
 * C3 Maintenance Solutions Botswana Pty Ltd
 * Author: Justin Seymour
 *
 * Handlers for the synthesize routes
 */

// Dependencies
const RequestError = require('./../errors/request');
const PayloadError = require('./../errors/payload');
const QueryError = require('./../errors/query');
const { get } = require('lodash');
const Synthesize = require('./../models/synthesize');

// Create the module to export
let _ = {};

// Get requests
_.post = async (req,res) => {


   try {

      let key = false;
      let msg = false;

      let synth = new Synthesize();

      key = 'url';
      msg = await synth.setUrl(get(req.body, key));
      if(msg) return res.status(400).json(new PayloadError(key,msg));

      key = 'getHtml';
      html = await synth.getHtml();
      //if(msg) return res.status(400).json(new PayloadError(key,msg));
      console.log("Race condition  \n");
      key = 'parseHtml';
      msg = await synth.parseHtml(html);
      if(msg) return res.status(400).json(new PayloadError(key,msg));

      key = 'synthesizeText';
      msg = await synth.synthesizeTextToSpeech();
      if(msg) return res.status(500).json(new PayloadError(key,msg));


      res.send({message:synth.parseHtml})


   } catch(err) {
      // Return a 500, log the error
      console.log("Error from synthesize route  \n"+err);
      res.status(500).end();
   }


}

module.exports = _;