import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userId: {type: String},
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    playlists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Playlist' }],
    favoriteFolder: { type: mongoose.Schema.Types.ObjectId, ref: 'FavoriteFolder' },
},
{ timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;