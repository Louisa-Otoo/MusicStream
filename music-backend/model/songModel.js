import mongoose, { Schema } from 'mongoose';

const songSchema = new Schema({
    artist: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
})


const Song = mongoose.model('Song', songSchema);

export default Song;