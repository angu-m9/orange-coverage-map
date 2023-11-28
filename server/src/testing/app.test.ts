import request from 'supertest';
import { app, server } from '../config/server'; 
import { expect, test, describe, afterAll } from '@jest/globals';

describe('App Tests', () => {


  test('GET', async () => {
    const response = await request(app).get('/companies').send().set('Host', 'localhost:5001');

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('json');
  });


  test('GET', async () => {
    const response = await request(app).get('/data-list').send().set('Host', 'localhost:5001');

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('json');
  });

  
  // test('POST REGISTER', () => { 

  //   const newUser = {
  //     user_name: "usuario",
  //     user_lastname: "lorem ipsum",
  //     company_id: 1,
  //     postal_code: "28028",
  //     user_check: true,
  //   }

  //  })


  afterAll(() => {
    if (server) {
      server.close();
    }
  });
});


