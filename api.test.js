
const request = require('supertest');
import app from './src';

let id;
 describe('create user',function(){
  it('should create user',async ()=>{
    const response= await request(app)
    .post('/api/user/createUser').send({
      fname: "joel",
      lname: "Minani",
      email: 'jojo@gmail.com',
      password: 'test123'


    });
    id=response.body.data._id;
   
    expect(response.statusCode).toBe(201);

  });

 })



describe('test get', function(){
  it('Get users', async()=> {
    const response = await request(app)
      .get('/api/user/getUsers');

    expect(response.statusCode).toBe(200);
  });
});


describe('test get', function(){
  it('Get user', async()=> {
    const response = await request(app)
      .get(`/api/user/getUser/${id}`);

    expect(response.statusCode).toBe(200);
  });
});
