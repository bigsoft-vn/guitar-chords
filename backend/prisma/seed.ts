import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Create chords
  const chords = await Promise.all([
    prisma.chord.upsert({
      where: { name: 'C' },
      update: {},
      create: {
        name: 'C',
        positions: JSON.stringify([0, 1, 0, 2, 3, 0]),
        fingers: JSON.stringify([0, 1, 0, 2, 3, 0]),
        description: 'Hợp âm C Major là một trong những hợp âm cơ bản nhất trong guitar.',
        difficulty: 'EASY',
        tips: JSON.stringify([
          'Đặt ngón tay 1 ở phím 1 dây B',
          'Ngón tay 2 ở phím 2 dây D',
          'Ngón tay 3 ở phím 3 dây A',
          'Các dây E cao, G và E thấp để rỗng'
        ])
      }
    }),
    prisma.chord.upsert({
      where: { name: 'AM' },
      update: {},
      create: {
        name: 'AM',
        positions: JSON.stringify([0, 1, 2, 2, 0, 0]),
        fingers: JSON.stringify([0, 1, 2, 3, 0, 0]),
        description: 'Hợp âm Am (La thứ) là hợp âm minor cơ bản và dễ học.',
        difficulty: 'EASY',
        tips: JSON.stringify([
          'Ngón tay 1 ở phím 1 dây B',
          'Ngón tay 2 ở phím 2 dây D',
          'Ngón tay 3 ở phím 2 dây G',
          'Các dây E để rỗng, dây A để rỗng'
        ])
      }
    }),
    prisma.chord.upsert({
      where: { name: 'F' },
      update: {},
      create: {
        name: 'F',
        positions: JSON.stringify([1, 1, 2, 3, 3, 1]),
        fingers: JSON.stringify([1, 1, 2, 3, 4, 1]),
        description: 'Hợp âm F Major sử dụng kỹ thuật barré, khó hơn các hợp âm cơ bản.',
        difficulty: 'HARD',
        tips: JSON.stringify([
          'Sử dụng ngón tay 1 để bấm barré tất cả dây ở phím 1',
          'Ngón tay 2 ở phím 2 dây G',
          'Ngón tay 3 ở phím 3 dây A',
          'Ngón tay 4 ở phím 3 dây D',
          'Cần luyện tập nhiều để có đủ lực bấm barré'
        ])
      }
    }),
    prisma.chord.upsert({
      where: { name: 'G' },
      update: {},
      create: {
        name: 'G',
        positions: JSON.stringify([3, 0, 0, 0, 2, 3]),
        fingers: JSON.stringify([3, 0, 0, 0, 2, 4]),
        description: 'Hợp âm G Major là hợp âm mở với âm thanh tươi sáng.',
        difficulty: 'MEDIUM',
        tips: JSON.stringify([
          'Ngón tay 2 ở phím 2 dây A',
          'Ngón tay 3 ở phím 3 dây E thấp',
          'Ngón tay 4 ở phím 3 dây E cao',
          'Các dây còn lại để rỗng'
        ])
      }
    }),
    prisma.chord.upsert({
      where: { name: 'DM' },
      update: {},
      create: {
        name: 'DM',
        positions: JSON.stringify([-1, 0, 0, 2, 3, 1]),
        fingers: JSON.stringify([0, 0, 0, 2, 3, 1]),
        description: 'Hợp âm Dm (Rê thứ) có âm sắc buồn đặc trưng.',
        difficulty: 'EASY',
        tips: JSON.stringify([
          'Ngón tay 1 ở phím 1 dây E cao',
          'Ngón tay 2 ở phím 2 dây G',
          'Ngón tay 3 ở phím 3 dây B',
          'Dây E thấp không gảy (X)',
          'Dây D để rỗng'
        ])
      }
    }),
    prisma.chord.upsert({
      where: { name: 'EM' },
      update: {},
      create: {
        name: 'EM',
        positions: JSON.stringify([0, 2, 2, 0, 0, 0]),
        fingers: JSON.stringify([0, 2, 3, 0, 0, 0]),
        description: 'Hợp âm Em là một trong những hợp âm dễ nhất để học.',
        difficulty: 'EASY',
        tips: JSON.stringify([
          'Ngón tay 2 ở phím 2 dây A',
          'Ngón tay 3 ở phím 2 dây D',
          'Tất cả các dây khác để rỗng',
          'Hợp âm rất đơn giản, chỉ cần 2 ngón tay'
        ])
      }
    })
  ]);

  console.log('✅ Chords created');

  // Create artists
  const artists = await Promise.all([
    prisma.artist.upsert({
      where: { name: 'Hoàng Dũng' },
      update: {},
      create: {
        name: 'Hoàng Dũng',
        bio: 'Singer-songwriter nổi tiếng với những ca khúc ballad sâu lắng'
      }
    }),
    prisma.artist.upsert({
      where: { name: 'Sơn Tùng M-TP' },
      update: {},
      create: {
        name: 'Sơn Tùng M-TP',
        bio: 'Ca sĩ, rapper và nhạc sĩ người Việt Nam'
      }
    }),
    prisma.artist.upsert({
      where: { name: 'JustaTee' },
      update: {},
      create: {
        name: 'JustaTee',
        bio: 'Rapper và producer nổi tiếng trong làng nhạc Việt'
      }
    }),
    prisma.artist.upsert({
      where: { name: 'Hồ Ngọc Hà' },
      update: {},
      create: {
        name: 'Hồ Ngọc Hà',
        bio: 'Ca sĩ pop nổi tiếng Việt Nam'
      }
    })
  ]);

  console.log('✅ Artists created');

  // Create songs
  const songs = [
    {
      title: 'Mưa Phi Trường',
      artist: artists.find(a => a.name === 'Hoàng Dũng')!,
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
      key: 'Am',
      chordProgression: 'vi-iv-I-V',
      chords: [
        { chordName: 'AM', position: 15, line: 0 },
        { chordName: 'DM', position: 8, line: 1 },
        { chordName: 'G', position: 12, line: 2 },
        { chordName: 'C', position: 6, line: 3 },
        { chordName: 'AM', position: 10, line: 5 },
        { chordName: 'F', position: 8, line: 6 },
        { chordName: 'G', position: 12, line: 7 },
        { chordName: 'C', position: 15, line: 8 }
      ]
    },
    {
      title: 'Nơi Này Có Anh',
      artist: artists.find(a => a.name === 'Sơn Tùng M-TP')!,
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
      key: 'C',
      chordProgression: 'I-vi-IV-V',
      chords: [
        { chordName: 'C', position: 12, line: 0 },
        { chordName: 'AM', position: 8, line: 1 },
        { chordName: 'F', position: 10, line: 2 },
        { chordName: 'G', position: 15, line: 3 },
        { chordName: 'C', position: 8, line: 5 },
        { chordName: 'AM', position: 12, line: 6 },
        { chordName: 'F', position: 6, line: 7 },
        { chordName: 'G', position: 10, line: 8 }
      ]
    },
    {
      title: 'Đã Lỡ Yêu Em Nhiều',
      artist: artists.find(a => a.name === 'JustaTee')!,
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
      key: 'Em',
      chordProgression: 'vi-IV-I-V',
      chords: [
        { chordName: 'EM', position: 10, line: 0 },
        { chordName: 'AM', position: 8, line: 1 },
        { chordName: 'DM', position: 12, line: 2 },
        { chordName: 'G', position: 15, line: 3 },
        { chordName: 'EM', position: 6, line: 5 },
        { chordName: 'AM', position: 10, line: 6 },
        { chordName: 'DM', position: 8, line: 7 },
        { chordName: 'G', position: 12, line: 8 }
      ]
    }
  ];

  for (const songData of songs) {
    const song = await prisma.song.create({
      data: {
        title: songData.title,
        artistId: songData.artist.id,
        lyrics: songData.lyrics,
        tempo: songData.tempo,
        genre: songData.genre,
        difficulty: songData.difficulty as any,
        key: songData.key,
        chordProgression: songData.chordProgression,
        playCount: Math.floor(Math.random() * 100) + 10
      }
    });

    // Add chord relationships
    for (const chordData of songData.chords) {
      const chord = chords.find(c => c.name === chordData.chordName);
      if (chord) {
        await prisma.songChord.create({
          data: {
            songId: song.id,
            chordId: chord.id,
            position: chordData.position,
            line: chordData.line
          }
        });
      }
    }
  }

  console.log('✅ Songs created with chord relationships');
  console.log('🎸 Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });