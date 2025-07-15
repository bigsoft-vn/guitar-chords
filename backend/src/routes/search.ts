import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  const query = req.query.q as string;
  res.json([
    {
      type: 'song',
      id: 1,
      title: 'Mưa Phi Trường',
      artist: 'Hoàng Dũng',
      matchPercentage: 95,
      chords: ['Am', 'Dm', 'G', 'C']
    }
  ]);
});

router.get('/popular', (req, res) => {
  res.json({
    popularSongs: [],
    popularChords: []
  });
});

export default router;