import mongoose from "mongoose";

const PlaylistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    tag:{type: String, default:"Playlist"},
    userId: { type: String },
    tracks: [],
},
{ timestamps: true }
);

const Playlist = mongoose.model("Playlist", PlaylistSchema);
export default Playlist;