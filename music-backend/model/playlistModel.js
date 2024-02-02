import mongoose, { Schema } from "mongoose";
import User from "./userModel.js";

const ObjectId = mongoose.Schema.Types.ObjectId

const playlistSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: ObjectId,
        // reference: "user",
        reference: User,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    songs: {
        type: Array,
        default: []
    }
})


const Playlist = mongoose.model('Playlist', playlistSchema);

export default Playlist;