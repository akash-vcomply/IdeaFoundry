// Example API route handler for idea submission
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Save idea to DB (stub)
    res.status(201).json({ message: 'Idea submitted!' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
