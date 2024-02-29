import { getToken } from "../utils";

export const getCategories = async (req, res) => {
  try {
    const token = await getToken().access_token;
    const data = await fetch(
      "https://api.spotify.com/v1/browse/categories",
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );
    const categories = await data.json();
    res.status("200").json(categories);
  } catch (error) {
    console.log(error);
  }
};
