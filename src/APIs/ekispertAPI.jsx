import axios from "axios";

const ekispertAPI = (code) => {
  const originalUrl = "https://api.ekispert.jp";
  const apiKey = process.env.REACT_APP_EKISPERT_APP_KEY;
  const stationCode = code;
  const url = `${originalUrl}/v1/json/station?key=${apiKey}&code=${stationCode}`;
  return axios.get(url);
};

export default ekispertAPI;
