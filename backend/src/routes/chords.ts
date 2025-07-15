import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json([
    { id: 1, name: 'C', positions: [0, 1, 0, 2, 3, 0], fingers: [0, 1, 0, 2, 3, 0], difficulty: 'EASY', tips: ['Hợp âm cơ bản'] },
    { id: 2, name: 'AM', positions: [0, 1, 2, 2, 0, 0], fingers: [0, 1, 2, 3, 0, 0], difficulty: 'EASY', tips: ['Hợp âm dễ học'] }
  ]);
});

router.get('/:name', (req: Request, res: Response) => {
  const chordName = req.params.name.toUpperCase();
  const chord = {
    id: 1,
    name: chordName,
    positions: [0, 1, 0, 2, 3, 0],
    fingers: [0, 1, 0, 2, 3, 0],
    difficulty: 'EASY',
    tips: [`Hướng dẫn hợp âm ${chordName}`]
  };
  res.json(chord);
});

export default router;