
const request = require('supertest');
import app from './src';
import User from './src/models/userModel';

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
    id=response.body.data.id;
    expect(response.statusCode).toBe(201);
    

  });

 })



 describe('test get', function() {
  it('Get users', async () => {
    const response = await request(app)
      .get('/api/user/getUsers');

    expect(response.statusCode).toBe(200);
  });

  it('should handle errors when retrieving users', async () => {
    // Mock an error by causing the controller function to throw an exception
    jest.spyOn(User, 'find').mockImplementation(() => {
      throw new Error('Error retrieving users');
    });

    const response = await request(app)
      .get('/api/user/getUsers');

    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({
      status: 'error',
      message: 'Error retrieving users',
    });
  });
});

describe('test delete', function() {
  it('delete user', async () => {
    const response = await request(app).get(`/api/user/deleteUser/${id}`);
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


