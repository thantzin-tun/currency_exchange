import axios from "axios";

const baseURL: string = process.env.REACT_APP_DOMAIN_URL ?? "";

const domainUrl = axios.create({
  baseURL,
});

domainUrl.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["access_key"] = process.env.REACT_APP_ACCESS_KEY;
  return config;
});

domainUrl.interceptors.response.use((response) => {
  console.log(response);
  return response;
});

export default domainUrl;
