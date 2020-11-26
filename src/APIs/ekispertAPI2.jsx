import axios from "axios";

const ekispertAPI2 = (word1, word2) => {
  const originalUrl = "https://api.ekispert.jp";
  const apiKey = process.env.REACT_APP_EKISPERT_APP_KEY;
  const from = word1;
  const to = word2;
  const url = `${originalUrl}/v1/json/search/course/light?key=${apiKey}&from=${from}&to=${to}`;
  return axios.get(url);
};

export default ekispertAPI2;
