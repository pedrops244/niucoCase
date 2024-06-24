import axios from 'axios';
import { formatUnixEpochToISO } from '../utils/dateUtils';
import { obfuscateEmail } from '../utils/emailUtils';

interface User {
  id: string;
  name: string;
  email: string;
  last_activity: number;
  role: string;
  status: string;
}

interface TransformedUser {
  id: string;
  name: string;
  email: string;
  lastActivity: string;
  isPaying: boolean;
  isActive: boolean;
}

export const fetchAndTransformUsers = async (): Promise<TransformedUser[]> => {
  try {
    const response = await axios.get<User[]>(`${process.env.API_URL}/users`);

    if (!response.data || !Array.isArray(response.data)) {
      throw new Error('Invalid response format from API');
    }

    return response.data.map((user) => ({
      id: user.id,
      name: user.name,
      email: obfuscateEmail(user.email),
      lastActivity: formatUnixEpochToISO(user.last_activity),
      isPaying:
        user.status === 'enabled' &&
        (user.role === 'editor' || user.role === 'admin'),
      isActive: user.status === 'enabled',
    }));
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
