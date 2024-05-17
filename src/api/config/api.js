import axios from "axios";

const api = axios.create({
  baseURL: "https://hfpqlhmagenujb2afyhoeqoz3i0nzmln.lambda-url.eu-central-1.on.aws/",
});

export default api;
