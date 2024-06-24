import request from 'supertest';
import express from 'express';
import { getUsers } from '../../src/controllers/userController';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.get('/users', getUsers);

test('GET /users should return transformed users', async () => {
  const response = await request(app).get('/users');
  expect(response.status).toBe(200);
  expect(response.body).toBeInstanceOf(Array);
});
