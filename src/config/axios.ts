import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_MAIL_API_URL,
});

axiosClient.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default axiosClient;
