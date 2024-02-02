import express from 'express';
import playlistController from '../controller/playlistController.js';


const router = express.Router()


router.post('/api/playlist', playlistController.createPlaylist)

router.get('/api/playlists', playlistController.fetchPlaylists)


export default router