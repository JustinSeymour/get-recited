/*
 * C3 Maintenance Solutions Botswana Pty Ltd
 * Author: Justin Seymour
 *
 * Test suite for the Ping route
 */


// Dependencies
const supertest = require('supertest');
const config = require('./config');

// Instantiate the super test agent
const request = supertest.agent(config.url);

// Ping route
describe('/ping', () => {

   test('POST /ping should return a 405', async () => {
      const response = await request.post('/ping');
      expect(response.status).toEqual(405);
      expect(response.body).toHaveProperty('error');
   });

   test('GET /ping should return a 200', async () => {
      const response = await request.get('/ping');
      expect(response.status).toEqual(200);
      expect(response.body).toHaveProperty('ping');
      expect(response.body.ping).toEqual('successful');
   });

   test('PUT /ping should return a 405', async () => {
      const response = await request.put('/ping');
      expect(response.status).toEqual(405);
      expect(response.body).toHaveProperty('error');
   });

   test('DELETE /ping should return a 405', async () => {
      const response = await request.del('/ping');
      expect(response.status).toEqual(405);
      expect(response.body).toHaveProperty('error');
   });

});