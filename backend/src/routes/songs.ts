import { Router, Request, Response } from 'express';

const router = Router();

router.get('/recent', (req: Request, res: Response) => {
  res.json([
    { id: 1, title: 'Mưa Phi Trường', artist: { name: 'Hoàng Dũng' }, chords: ['Am', 'Dm', 'G', 'C'] },
    { id: 2, title: 'Nơi Này Có Anh', artist: { name: 'Sơn Tùng M-TP' }, chords: ['C', 'Am', 'F', 'G'] }
  ]);
});

router.get('/:id', (req: Request, res: Response) => {
  const song = {
    id: parseInt(req.params.id),
    title: 'Mưa Phi Trường',
    artist: { id: 1, name: 'Hoàng Dũng' },
    lyrics: `Verse 1:
Em có thấy mưa kia đang rơi
Trên sân bay xa xôi
Có thấy em trong cơn mưa ấy
Đang đứng đợi ai

Chorus:
Mưa rơi trên sân bay
Em đứng đó một mình
Nhìn máy bay cất cánh
Bay về phía thiên đường`,
    tempo: 80,
    chords: [
      { id: 1, name: 'Am', positions: [0, 1, 2, 2, 0, 0], fingers: [0, 1, 2, 3, 0, 0], position: 15, line: 0 },
      { id: 2, name: 'Dm', positions: [-1, 0, 0, 2, 3, 1], fingers: [0, 0, 0, 2, 3, 1], position: 8, line: 1 }
    ]
  };
  res.json(song);
});

export default router;