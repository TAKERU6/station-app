import axios from "axios";

const ekispertAPI = (word) => {
  const originalUrl = "https://api.ekispert.jp";
  const apiKey = process.env.REACT_APP_EKISPERT_APP_KEY;
  const stationName = word;
  const url = `${originalUrl}/v1/json/station?key=${apiKey}&name=${stationName}`;
  return axios.get(url);
};

export default ekispertAPI;
