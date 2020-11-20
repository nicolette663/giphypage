import axios from "axios"
import dotenv from "dotenv"
dotenv.config();
const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;
const button = document.querySelector("button");
const giphyInput = document.querySelector("input");
button.addEventListener('click', async () => {
  let giphy = giphyInput.value;
  try {
    let response = await axios.get(
      `${BASE_URL}/v1/gifs/search?api_key=${API_KEY}&q=${giphy}&limit=25`
    );
    console.log(response)
  } catch (e) {
    console.log(e);
  }
})