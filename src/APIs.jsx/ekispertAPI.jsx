import axios from "axios";

const ekispertAPI = () => {
  const originalUrl = "https://api.ekispert.jp";
  const key = "";
  const from = "";
  const to = "";
  const url = `${originalUrl}/v1/json/search/course/light?key=${key}&from=${from}&to=${to}`;
  return axios.get(url);
};

export default ekispertAPI;
