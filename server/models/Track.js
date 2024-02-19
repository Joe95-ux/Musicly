import mongoose from "mongoose";

const TrackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String, required: true },
    audioLink: { type: String, required: true },
},
{ timestamps: true }
);

const Track = mongoose.model("Track", TrackSchema);
export default Track;