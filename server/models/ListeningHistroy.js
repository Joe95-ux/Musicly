import mongoose from "mongoose";

const ListeningHistorySchema = new mongoose.Schema({
    userId: { type: string },
    trackId: { type: String},
}, 
{ timestamps: true }
);

const ListeningHistory = mongoose.model("ListeningHistory", ListeningHistorySchema);
export default ListeningHistory;