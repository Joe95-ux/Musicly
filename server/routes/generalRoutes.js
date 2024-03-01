import express from "express";
import { getNewReleases, getAlbumTracks } from "../controllers/general.js";
const router = express.Router();

router.get("/new-albums/:id", getAlbumTracks);
router.get("/new-albums", getNewReleases );


export default router;