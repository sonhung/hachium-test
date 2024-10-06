import taskData from '@/mock-data/tasks';

export default function getTasks(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ data: taskData });
  } else {
    res.status(404);
  }
}
