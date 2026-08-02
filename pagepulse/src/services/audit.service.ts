import { load } from "cheerio/slim";
import { httpClient } from "../clients/http.client.js";

export const auditService = async (url: string) => {
  const start = Date.now();
  const response = await httpClient.get(url);
  console.log(response);
  const end = Date.now();
  const $ = load(response.data);
  return {
    url,
    finalUrl: response.request?.res?.responseUrl ?? url,
    status: response.status,
    responseTime: end - start,
    title: $("title").text() || null,
    isHttps: url.startsWith("https://"),
    contentType: response.headers["content-type"] ?? null,
    contentLength: response.headers["content-length"] ?? null,
    // headers: response.headers,
    server: response.headers.server ?? null,
    checkedAt: new Date().toISOString(),
    message: "Audit service working",
  };

  // throw new Error("Testing Global Error Handler");
};
