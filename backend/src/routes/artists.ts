import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    artists: [
      { id: 1, name: 'Hoàng Dũng', songCount: 5 },
      { id: 2, name: 'Sơn Tùng M-TP', songCount: 3 }
    ],
    pagination: { page: 1, limit: 20, total: 2, pages: 1 }
  });
});

router.get('/:id', (req, res) => {
  res.json({
    id: parseInt(req.params.id),
    name: 'Hoàng Dũng',
    songs: []
  });
});

export default router;