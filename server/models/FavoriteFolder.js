import mongoose from "mongoose";

const FavoriteFolderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    favoriteTracks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Track' }],
    favoriteAlbums: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Album' }],
},
{timestamp: true}
);

const FavoriteFolder = mongoose.model("FavoriteFolder", FavoriteFolderSchema);
export default FavoriteFolder;