import { fetchAndTransformUsers } from '../../src/services/userService';
import axios from 'axios';
import { mocked } from 'jest-mock';

jest.mock('axios');
const mockedAxios = mocked(axios);

test('should fetch and transform users correctly', async () => {
  mockedAxios.get.mockResolvedValue({
    data: [
      {
        id: '1',
        name: 'John',
        email: 'john.doe@gmail.com',
        last_activity: 1622559600,
        role: 'admin',
        status: 'enabled',
      },
    ],
  });

  const users = await fetchAndTransformUsers();
  expect(users).toEqual([
    {
      id: '1',
      name: 'John',
      email: 'jo****oe@gmail.com',
      lastActivity: '6/1/2021, 12:00:00',
      isPaying: true,
      isActive: true,
    },
  ]);
});
