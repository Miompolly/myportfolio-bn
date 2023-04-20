
const request = require('supertest');
import app from './src';


describe('test get', function(){
  it('Get user', async()=> {
    const response = await request(app)
      .get('/api/user/getUsers');

    expect(response.statusCode).toBe(200);
  });
});
