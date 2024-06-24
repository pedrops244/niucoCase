import { Request, Response } from 'express';
import { fetchAndTransformUsers } from '../services/userService';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await fetchAndTransformUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
