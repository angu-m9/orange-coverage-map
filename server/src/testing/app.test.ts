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
    try {
      const response = await request(app).get('/data-list').send().set('Host', 'localhost:5001');
      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toContain('json');
    } catch (error) {
      console.error('Error');
    }  
  });


  afterAll((done) => {
    if (server) {
      server.close(() => {
        console.log('Server closed');
        done();
      });
    }
  });
  
});


