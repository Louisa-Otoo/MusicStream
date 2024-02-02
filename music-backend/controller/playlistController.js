import express from 'express';
import Playlist from '../model/playlistModel.js';


// create playlist - add songs to a playlist
const createPlaylist = async (req, res) => {
    const { name, user, description, songs } = req.body;

    try {
        const newPlaylist = new Playlist ({ name, user, description, songs })

        await newPlaylist.save()
    
        res.status(200).send({message: 'Playlist created successfully'})

    } catch (error) {
        console.log(error)
    }
}


// get all the playlists
const fetchPlaylists = async (req, res) => {
    try {
        const playSongs = await Playlist.find()

        res.status(200).send(playSongs)

    } catch (error) {
        console.log(error)
    }
}


// edit playlist by id 



// delete a playlist
const deletePlaylist = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedPlaylist = await Playlist.deleteOne({$where: { id }})

        res.status(200).send({message: 'Playlist deleted successfully'})

    } catch (error) {
        console.log(error)
    }
}


// deleting all playlists
const deletePlaylists = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedPlaylists = await Playlist.deleteMany({$where: { id }})

        res.status(200).send({message: 'All your playlists have been deleted'})
    } catch (error) {
        console.log(error)
    }
}



export default {
    createPlaylist,
    fetchPlaylists,
    deletePlaylist,
    deletePlaylists
}