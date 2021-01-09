import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-31759.cloudfunctions.net/api", //The API (cloud function) URL
  //"http://localhost:5001/challenge-31759/us-central1/api",
});

export default instance;
