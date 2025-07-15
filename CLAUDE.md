# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Initial Setup
```bash
# Install all dependencies (run from root)
npm run install:all

# Setup database (required before first run)
npm run db:setup
```

### Development Modes
```bash
# Recommended: Unified server (serves both API and frontend on port 3001)
npm run dev:unified

# Alternative: Run frontend (port 3000) and backend (port 3001) separately
npm run dev

# Run only the API server
cd backend && npm run dev:api-only
```

### Build and Testing
```bash
# Build both frontend and backend
npm run build

# Run frontend tests
npm test

# TypeScript type checking
cd web && npx tsc --noEmit
cd backend && npx tsc --noEmit
```

### Database Operations
```bash
# Push schema changes to database
cd backend && npm run db:push

# Seed database with sample data
cd backend && npm run db:seed

# Generate Prisma client
cd backend && npm run db:generate
```

## Architecture Overview

This is a full-stack monorepo Vietnamese guitar chords learning application using:

### Tech Stack
- **Frontend**: React 19 with TypeScript, Material-UI, React Router
- **Backend**: Express.js with TypeScript, Prisma ORM, SQLite
- **Structure**: npm workspaces with Git submodules

### Key Architecture Patterns

1. **API Design**: RESTful endpoints at `/api/*`
   - `/api/artists` - Artist management
   - `/api/songs` - Song operations
   - `/api/chords` - Chord definitions
   - `/api/search` - AI-powered search

2. **Database Schema** (Prisma):
   - **Artist**: Vietnamese artists with metadata
   - **Song**: Lyrics with embedded chord annotations `[chord]`
   - **Chord**: Finger positions, difficulty levels, variants
   - **User**: Authentication and favorites tracking

3. **Frontend Components**:
   - **MainWindow**: Landing page with featured content
   - **SearchWindow**: Voice/text search with AI integration
   - **MusicPlayer**: Real-time chord display with auto-scroll
   - **ChordTutorial**: Interactive chord learning interface

4. **Service Layer** (`web/src/services/`):
   - Centralized API communication
   - Error handling and retry logic
   - Type-safe interfaces matching backend models

### Development Notes

- The frontend uses a proxy configuration to route API calls to `http://localhost:3001`
- The unified server (`simple-server.ts`) serves the built React app and API from a single port
- Chord annotations in lyrics use the format `[C]Lyrics here [G]more lyrics`
- TypeScript strict mode is enabled - ensure all types are properly defined
- The application is optimized for mobile-first Vietnamese users