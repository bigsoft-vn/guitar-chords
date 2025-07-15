# Guitar Chords Backend API

RESTful API backend for the Guitar Chords application built with Node.js, Express, TypeScript, and Prisma ORM.

## Features

- **Song Management**: CRUD operations for songs with chord progressions
- **Chord Library**: Complete chord database with finger positions and difficulty levels
- **Artist Management**: Artist profiles and song catalogs
- **Smart Search**: AI-powered search with chord progression matching
- **Database**: SQLite database with Prisma ORM for easy development

## API Endpoints

### Songs
- `GET /api/songs` - Get all songs (with pagination and filters)
- `GET /api/songs/recent` - Get most played songs
- `GET /api/songs/:id` - Get song by ID (increments play count)
- `POST /api/songs` - Create new song

### Chords
- `GET /api/chords` - Get all chords
- `GET /api/chords/:name` - Get chord by name (e.g., /api/chords/C)
- `GET /api/chords/:name/songs` - Get songs that use a specific chord
- `POST /api/chords` - Create new chord

### Artists
- `GET /api/artists` - Get all artists (with pagination)
- `GET /api/artists/:id` - Get artist by ID with songs
- `POST /api/artists` - Create new artist

### Search
- `GET /api/search?q=query&type=song|chord|artist` - Search across all content
- `GET /api/search/popular` - Get popular songs and chords

### Health
- `GET /health` - Health check endpoint

## Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Set up database
npm run db:push

# Seed database with sample data
npm run db:seed

# Start development server
npm run dev
```

The server will start on http://localhost:3001

### Environment Variables

Create a `.env` file in the backend directory:

```env
DATABASE_URL="file:./dev.db"
PORT=3001
FRONTEND_URL="http://localhost:3000"
```

## Database Schema

### Core Models

- **Song**: Song information with lyrics, tempo, key, difficulty
- **Artist**: Artist profiles and metadata  
- **Chord**: Chord definitions with finger positions and tips
- **SongChord**: Many-to-many relationship between songs and chords
- **User**: User accounts and preferences (future enhancement)
- **UserSong**: User interaction tracking (play count, favorites, etc.)

### Key Features

- **Chord Progressions**: Songs store chord positions within lyrics
- **Difficulty Levels**: Both songs and chords have difficulty ratings
- **Play Tracking**: Automatic play count incrementation
- **Flexible Search**: Full-text search across songs, artists, and chord progressions

## Example API Calls

### Get Recent Songs
```bash
curl http://localhost:3001/api/songs/recent
```

### Search for Songs with Chord Progression
```bash
curl "http://localhost:3001/api/search?q=Am Dm G C"
```

### Get Chord Information
```bash
curl http://localhost:3001/api/chords/C
```

### Search Songs by Artist
```bash
curl "http://localhost:3001/api/search?q=Hoàng Dũng&type=song"
```

## Development Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema changes to database
- `npm run db:seed` - Seed database with sample data

## Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **Prisma** - Database ORM
- **SQLite** - Database (easily replaceable)
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing

## Production Deployment

For production deployment:

1. Set `NODE_ENV=production`
2. Use PostgreSQL or MySQL instead of SQLite
3. Configure proper environment variables
4. Use process manager like PM2
5. Set up SSL/HTTPS
6. Configure reverse proxy (nginx)

## API Response Examples

### Song Response
```json
{
  "id": 1,
  "title": "Mưa Phi Trường",
  "artist": {
    "id": 1,
    "name": "Hoàng Dũng"
  },
  "lyrics": "Verse 1:\nEm có thấy mưa kia đang rơi...",
  "tempo": 80,
  "genre": "Ballad",
  "difficulty": "BEGINNER",
  "key": "Am",
  "chords": [
    {
      "id": 1,
      "name": "AM",
      "positions": [0, 1, 2, 2, 0, 0],
      "fingers": [0, 1, 2, 3, 0, 0],
      "difficulty": "EASY",
      "position": 15,
      "line": 0
    }
  ]
}
```

### Search Response
```json
[
  {
    "type": "song",
    "id": 1,
    "title": "Mưa Phi Trường",
    "artist": "Hoàng Dũng",
    "matchPercentage": 95,
    "chords": ["AM", "DM", "G", "C"]
  }
]
```