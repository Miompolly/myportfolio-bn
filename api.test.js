
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

  it('should return an error for missing required fields', async () => {
    const response = await request(app)
      .post('/api/user/createUser')
      .send({
        fname: 'Joel',
        lname: 'Minani',
        // Missing email and password fields
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.status).toBe('error');

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

describe('test delete', function() {
  it('delete user', async () => {
    const response = await request(app).get(`/api/user/deleteUser/${id}`);
    expect(response.statusCode).toBe(200);
  });
});



describe('Login test', function(){
  it('Login user', async()=> {
    const response = await request(app)
      .post('/api/user/loginUser/').send({
        email: 'jojo@gmail.com',
        password: 'test123'
  
  
      });

    expect(response.statusCode).toBe(200);
  });
});



describe('loginUser', () => {
  it('should return an error for missing credentials', async () => {
    const response = await request(app)
      .post('/api/user/loginUser')
      .send({
        email: '',
        password: ''
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.status).toBe('error');
    expect(response.body.message).toBe('Please provide an email and password');
  });
});


