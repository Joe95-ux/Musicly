import mongoose from "mongoose";

const LikedAlbumSchema = new mongoose.Schema({
    name: { type: String, required: true },
    poster: {type: String},
    albumId: {type: String},
    tag: {type: String, default:"Album"},
    userId: {type: String},
    artist: { type: String, required: true },
},
{ timestamps: true }
);

const LikedAlbum = mongoose.model("LikedAlbum", LikedAlbumSchema);

export default LikedAlbum;