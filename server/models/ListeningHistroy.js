import mongoose from "mongoose";

const ListeningHistorySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    track: { type: mongoose.Schema.Types.ObjectId, ref: 'Track', required: true },
}, 
{ timestamps: true }
);

const ListeningHistory = mongoose.model("ListeningHistory", ListeningHistorySchema);
export default ListeningHistory;