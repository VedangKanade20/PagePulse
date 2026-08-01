import axios from "axios";

export const httpClient = axios.create({
  timeout: Number(process.env.REQUEST_TIMEOUT) || 5000,
  maxRedirects: 5,
  validateStatus: () => true,
});
