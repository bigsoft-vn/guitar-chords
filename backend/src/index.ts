import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import { PrismaClient } from '@prisma/client';

import songRoutes from './routes/songs';
import chordRoutes from './routes/chords';
import artistRoutes from './routes/artists';
import searchRoutes from './routes/search';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const isDevelopment = process.env.NODE_ENV !== 'production';

export const prisma = new PrismaClient();

app.use(helmet({
  contentSecurityPolicy: false // Allow inline scripts for React
}));

if (isDevelopment) {
  app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
  }));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api/songs', songRoutes);
app.use('/api/chords', chordRoutes);
app.use('/api/artists', artistRoutes);
app.use('/api/search', searchRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Serve static files from React build
const buildPath = path.join(__dirname, '../../web/build');
app.use(express.static(buildPath));

// Catch all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
  // Don't serve index.html for API routes
  if (req.path.startsWith('/api') || req.path === '/health') {
    return res.status(404).json({ error: 'Not found' });
  }
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

async function startServer() {
  try {
    await prisma.$connect();
    console.log('Connected to database');
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`Health check: http://localhost:${PORT}/health`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

startServer();