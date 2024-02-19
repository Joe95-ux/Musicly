import mongoose from "mongoose";

const PlaylistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tracks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Track' }],
},
{ timestamps: true }
);

const Playlist = mongoose.model("Playlist", PlaylistSchema);
export default Playlist;