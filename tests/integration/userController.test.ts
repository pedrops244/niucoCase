import request from 'supertest';
import express, { Express } from 'express';
import { fetchAndTransformUsers } from '../../src/services/userService';

const app: Express = express();

jest.mock('../../src/services/userService', () => ({
  fetchAndTransformUsers: jest.fn(async () => [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      lastActivity: '6/1/2021, 13:00:00',
      isPaying: true,
      isActive: true,
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      lastActivity: '4/4/2022, 15:00:00',
      isPaying: false,
      isActive: true,
    },
  ]),
}));

app.get('/users', async (req, res) => {
  try {
    const users = await fetchAndTransformUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

test('GET /users should return transformed users', async () => {
  const response = await request(app).get('/users');
  expect(response.status).toBe(200);
  expect(response.body).toEqual([
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      lastActivity: '6/1/2021, 13:00:00',
      isPaying: true,
      isActive: true,
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      lastActivity: '4/4/2022, 15:00:00',
      isPaying: false,
      isActive: true,
    },
  ]);
});
