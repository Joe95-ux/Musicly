import express from "express";
import { getNewReleases, getAlbumTracks, getAudioBooks } from "../controllers/general.js";
const router = express.Router();

router.get("/new-albums/:id", getAlbumTracks);
router.get("/new-albums", getNewReleases );
router.get("/audiobooks", getAudioBooks);


export default router;