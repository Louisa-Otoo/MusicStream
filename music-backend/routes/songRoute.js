import express from 'express';
import songController from '../controller/songController.js';

const router = express.Router();


router.post('/api/song', songController.createSong)

router.get('/api/songs', songController.allSongs)

// router.get('/api/song/:id', songController.singleSong)

// router.delete('/api/song/:id', songController.deleteSong)

// router.delete('/api/songs/:id', songController.deleteSongs)


export default router