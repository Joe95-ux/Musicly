import mongoose from "mongoose";

const AlbumSchema = new mongoose.Schema({
    name: { type: String, required: true },
    artist: { type: String, required: true },
    tracks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Track' }],
},
{ timestamps: true }
);

const Album = mongoose.model("Album", AlbumSchema);

export default Album;