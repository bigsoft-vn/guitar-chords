import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Simple API routes without external route files
app.get('/api/songs/recent', (req, res) => {
  const songs = [
    {
      id: 1,
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
Bay về phía thiên đường

Verse 2:
Có biết rằng người đã xa rồi
Không bao giờ trở về
Nhưng em vẫn đứng đây
Chờ đợi một phép màu`,
      tempo: 80,
      genre: 'Ballad',
      difficulty: 'BEGINNER',
      chordProgression: 'vi-iv-I-V',
      key: 'Am',
      playCount: 45,
      chords: [
        { id: 1, name: 'Am', positions: [0, 1, 2, 2, 0, 0], fingers: [0, 1, 2, 3, 0, 0], difficulty: 'EASY', position: 15, line: 0 },
        { id: 2, name: 'Dm', positions: [-1, 0, 0, 2, 3, 1], fingers: [0, 0, 0, 2, 3, 1], difficulty: 'EASY', position: 8, line: 1 },
        { id: 3, name: 'G', positions: [3, 0, 0, 0, 2, 3], fingers: [3, 0, 0, 0, 2, 4], difficulty: 'MEDIUM', position: 12, line: 2 },
        { id: 4, name: 'C', positions: [0, 1, 0, 2, 3, 0], fingers: [0, 1, 0, 2, 3, 0], difficulty: 'EASY', position: 6, line: 3 }
      ]
    },
    {
      id: 2,
      title: 'Nơi Này Có Anh',
      artist: { id: 2, name: 'Sơn Tùng M-TP' },
      lyrics: `Verse 1:
Nơi này có anh đây này
Có anh luôn yêu em đây này
Dù em có đi khắp nơi
Anh vẫn ở đây chờ mãi

Chorus:
Nơi này có anh
Nơi anh thuộc về em
Dù bao nhiêu cơn mưa
Anh vẫn mãi bên em

Verse 2:
Hãy về đây với anh
Nơi trái tim an yên
Để anh ôm em thật chặt
Trong vòng tay của yêu thương`,
      tempo: 120,
      genre: 'Pop',
      difficulty: 'BEGINNER',
      chordProgression: 'I-vi-IV-V',
      key: 'C',
      playCount: 38,
      chords: [
        { id: 4, name: 'C', positions: [0, 1, 0, 2, 3, 0], fingers: [0, 1, 0, 2, 3, 0], difficulty: 'EASY', position: 12, line: 0 },
        { id: 1, name: 'Am', positions: [0, 1, 2, 2, 0, 0], fingers: [0, 1, 2, 3, 0, 0], difficulty: 'EASY', position: 8, line: 1 },
        { id: 5, name: 'F', positions: [1, 1, 2, 3, 3, 1], fingers: [1, 1, 2, 3, 4, 1], difficulty: 'HARD', position: 10, line: 2 },
        { id: 3, name: 'G', positions: [3, 0, 0, 0, 2, 3], fingers: [3, 0, 0, 0, 2, 4], difficulty: 'MEDIUM', position: 15, line: 3 }
      ]
    },
    {
      id: 3,
      title: 'Đã Lỡ Yêu Em Nhiều',
      artist: { id: 3, name: 'JustaTee' },
      lyrics: `Verse 1:
Đã lỡ yêu em nhiều
Giờ làm sao quên được
Những kỷ niệm xưa
Vẫn còn trong tim tôi

Chorus:
Đã lỡ yêu em nhiều
Giờ chỉ biết nhớ thương
Dù biết em đã xa
Tình yêu vẫn mãi đây

Verse 2:
Những ngày tháng qua
Anh đã sống như thế
Với tình yêu dành cho em
Mãi mãi không phai`,
      tempo: 95,
      genre: 'R&B',
      difficulty: 'INTERMEDIATE',
      chordProgression: 'vi-IV-I-V',
      key: 'Em',
      playCount: 29,
      chords: [
        { id: 6, name: 'Em', positions: [0, 2, 2, 0, 0, 0], fingers: [0, 2, 3, 0, 0, 0], difficulty: 'EASY', position: 10, line: 0 },
        { id: 1, name: 'Am', positions: [0, 1, 2, 2, 0, 0], fingers: [0, 1, 2, 3, 0, 0], difficulty: 'EASY', position: 8, line: 1 },
        { id: 2, name: 'Dm', positions: [-1, 0, 0, 2, 3, 1], fingers: [0, 0, 0, 2, 3, 1], difficulty: 'EASY', position: 12, line: 2 },
        { id: 3, name: 'G', positions: [3, 0, 0, 0, 2, 3], fingers: [3, 0, 0, 0, 2, 4], difficulty: 'MEDIUM', position: 15, line: 3 }
      ]
    }
  ];
  
  res.json(songs);
});

app.get('/api/songs/:id', (req, res) => {
  const songId = parseInt(req.params.id);
  const songs = [
    {
      id: 1,
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
Bay về phía thiên đường

Verse 2:
Có biết rằng người đã xa rồi
Không bao giờ trở về
Nhưng em vẫn đứng đây
Chờ đợi một phép màu`,
      tempo: 80,
      genre: 'Ballad',
      difficulty: 'BEGINNER',
      chordProgression: 'vi-iv-I-V',
      key: 'Am',
      playCount: 45,
      chords: [
        { id: 1, name: 'Am', positions: [0, 1, 2, 2, 0, 0], fingers: [0, 1, 2, 3, 0, 0], difficulty: 'EASY', position: 15, line: 0 },
        { id: 2, name: 'Dm', positions: [-1, 0, 0, 2, 3, 1], fingers: [0, 0, 0, 2, 3, 1], difficulty: 'EASY', position: 8, line: 1 },
        { id: 3, name: 'G', positions: [3, 0, 0, 0, 2, 3], fingers: [3, 0, 0, 0, 2, 4], difficulty: 'MEDIUM', position: 12, line: 2 },
        { id: 4, name: 'C', positions: [0, 1, 0, 2, 3, 0], fingers: [0, 1, 0, 2, 3, 0], difficulty: 'EASY', position: 6, line: 3 }
      ]
    },
    {
      id: 2,
      title: 'Nơi Này Có Anh',
      artist: { id: 2, name: 'Sơn Tùng M-TP' },
      lyrics: `Verse 1:
Nơi này có anh đây này
Có anh luôn yêu em đây này
Dù em có đi khắp nơi
Anh vẫn ở đây chờ mãi

Chorus:
Nơi này có anh
Nơi anh thuộc về em
Dù bao nhiêu cơn mưa
Anh vẫn mãi bên em`,
      tempo: 120,
      genre: 'Pop',
      difficulty: 'BEGINNER',
      key: 'C',
      playCount: 38,
      chords: [
        { id: 4, name: 'C', positions: [0, 1, 0, 2, 3, 0], fingers: [0, 1, 0, 2, 3, 0], difficulty: 'EASY', position: 12, line: 0 },
        { id: 1, name: 'Am', positions: [0, 1, 2, 2, 0, 0], fingers: [0, 1, 2, 3, 0, 0], difficulty: 'EASY', position: 8, line: 1 },
        { id: 5, name: 'F', positions: [1, 1, 2, 3, 3, 1], fingers: [1, 1, 2, 3, 4, 1], difficulty: 'HARD', position: 10, line: 2 },
        { id: 3, name: 'G', positions: [3, 0, 0, 0, 2, 3], fingers: [3, 0, 0, 0, 2, 4], difficulty: 'MEDIUM', position: 15, line: 3 }
      ]
    },
    {
      id: 3,
      title: 'Đã Lỡ Yêu Em Nhiều',
      artist: { id: 3, name: 'JustaTee' },
      lyrics: `Verse 1:
Đã lỡ yêu em nhiều
Giờ làm sao quên được
Những kỷ niệm xưa
Vẫn còn trong tim tôi

Chorus:
Đã lỡ yêu em nhiều
Giờ chỉ biết nhớ thương
Dù biết em đã xa
Tình yêu vẫn mãi đây`,
      tempo: 95,
      genre: 'R&B',
      difficulty: 'INTERMEDIATE',
      key: 'Em',
      playCount: 29,
      chords: [
        { id: 6, name: 'Em', positions: [0, 2, 2, 0, 0, 0], fingers: [0, 2, 3, 0, 0, 0], difficulty: 'EASY', position: 10, line: 0 },
        { id: 1, name: 'Am', positions: [0, 1, 2, 2, 0, 0], fingers: [0, 1, 2, 3, 0, 0], difficulty: 'EASY', position: 8, line: 1 },
        { id: 2, name: 'Dm', positions: [-1, 0, 0, 2, 3, 1], fingers: [0, 0, 0, 2, 3, 1], difficulty: 'EASY', position: 12, line: 2 },
        { id: 3, name: 'G', positions: [3, 0, 0, 0, 2, 3], fingers: [3, 0, 0, 0, 2, 4], difficulty: 'MEDIUM', position: 15, line: 3 }
      ]
    }
  ];
  
  const song = songs.find(s => s.id === songId) || songs[0];
  res.json(song);
});

app.get('/api/chords', (req, res) => {
  res.json([
    { id: 1, name: 'C', positions: [0, 1, 0, 2, 3, 0], fingers: [0, 1, 0, 2, 3, 0], difficulty: 'EASY' },
    { id: 2, name: 'AM', positions: [0, 1, 2, 2, 0, 0], fingers: [0, 1, 2, 3, 0, 0], difficulty: 'EASY' }
  ]);
});

app.get('/api/chords/:name', (req, res) => {
  const chord = {
    id: 1,
    name: req.params.name.toUpperCase(),
    positions: [0, 1, 0, 2, 3, 0],
    fingers: [0, 1, 0, 2, 3, 0],
    difficulty: 'EASY',
    tips: ['Basic chord']
  };
  res.json(chord);
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Serve static files from React build
const buildPath = path.join(__dirname, '../../web/build');
app.use(express.static(buildPath));

// Catch all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
  if (req.path.startsWith('/api') || req.path === '/health') {
    return res.status(404).json({ error: 'Not found' });
  }
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📱 Frontend: http://localhost:${PORT}`);
  console.log(`🔧 API: http://localhost:${PORT}/api`);
  console.log(`❤️  Health: http://localhost:${PORT}/health`);
});