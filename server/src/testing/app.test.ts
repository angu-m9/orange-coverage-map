import request from 'supertest';
import { app } from '../config/server';


describe('App Tests', () => {
  test('GET', async () => {
    const response = await request(app).get('/').send();
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('json')
  });
});

