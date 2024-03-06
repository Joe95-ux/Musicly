import {getToken} from "../utils/getToken.js";

export const getNewReleases = async (req, res) => {
  try {
    const token = await getToken();
    const data = await fetch(
      "https://api.spotify.com/v1/browse/new-releases",
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );

    const categories = await data.json();
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
  }
};

export const getAlbumTracks = async (req, res)=>{
  try {
    const {id}= req.params;
    const token = await getToken();
    const data = await fetch(
      `https://api.spotify.com/v1/albums/${id}/tracks`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );
    const categoryTracks = await data.json();
    res.status(200).json(categoryTracks);
    
  } catch (error) {
    console.log(error)
  }
}

export const getAudioBooks = async (req, res) => {
  try {
    const token = await getToken();
    const data = await fetch(
      "https://api.spotify.com/v1/audiobooks",
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );
    
    const categories = await data.json();
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
  }
};

export const search = async (req, res) =>{
  try {
    const token = await getToken();
    const data = await fetch(
      "https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=album",
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );
    
    const result = await data.json();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}