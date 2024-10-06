import { v4 as uuidv4 } from 'uuid';

export default function getTasks(req, res) {
  if (req.method === 'POST') {
    res.status(200).json({ ...req.body, id: uuidv4() });
  } else {
    res.status(404);
  }
}
