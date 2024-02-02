import Song from "../model/songModel.js";


// creating a song 
const createSong = async (req, res) => {
    const { artist, title, duration } = req.body;

    try {
        const newSong = new Song ({ artist, title, duration })
        
        await newSong.save();
        
        res.status(200).json(newSong)
    
    } catch (error) {
        console.log(error)
    }
}


// fetch all songs
const allSongs = async (req, res) => {
    try {
        const songs = await Song.find()

        res.status(200).send(songs)

    } catch (error) {
        console.log(error)
    }
}

// fetch a single song
const singleSong = async (req, res) => {
    const { id } = req.params;

    try {
        const oneSong = await Song.findById({$where: { id }})

        res.status(200).send(oneSong)

    } catch (error) {
        console.log(error)
    }
}


// delete a song 
const deleteSong = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedSong = await Song.deleteOne({$where: { id }})

        res.status(200).send(deletedSong)

    } catch (error) {
        console.log(error)
    }
}


// delete all songs 
const deleteSongs = async ( req, res) => {
    const { id } = req.params;

    try {
        const deletedSongs = await Song.deleteMany({$where: { id }})

        res.status(200).send(deletedSongs)

    } catch (error) {
        console.log(error)
    }
}


export default {
    createSong,
    allSongs,
    singleSong,
    deleteSong,
    deleteSongs
}