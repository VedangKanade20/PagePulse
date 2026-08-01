import { httpClient } from "../clients/http.client.js";

export const auditService = async (url: string) => {
  const start = Date.now();
  const response = await httpClient.get(url);
  const end = Date.now();
  
  return {
    url,
    status: response.status,
    responseTime: end - start,
    headers: response.headers,
    contentLength: response.headers["content-length"] ?? null,
    message: "Audit service working",
  };

  // throw new Error("Testing Global Error Handler");
};
