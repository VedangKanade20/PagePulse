// import { load } from "cheerio/slim";
// import { httpClient } from "../clients/http.client.js";

// export const auditService = async (url: string) => {
//   const start = Date.now();
//   const response = await httpClient.get(url);
//   console.log(response);
//   const end = Date.now();
//   const $ = load(response.data);
//   return {
//     url,
//     finalUrl: response.request?.res?.responseUrl ?? url,
//     status: response.status,
//     responseTime: end - start,
//     title: $("title").text() || null,
//     isHttps: url.startsWith("https://"),
//     contentType: response.headers["content-type"] ?? null,
//     contentLength: response.headers["content-length"] ?? null,
//     // headers: response.headers,
//     server: response.headers.server ?? null,
//     checkedAt: new Date().toISOString(),
//     message: "Audit service working",
//   };

//   // throw new Error("Testing Global Error Handler");
// };

import { load } from "cheerio/slim";
import { httpClient } from "../clients/http.client.js";
import { cacheService } from "./cache.service.js";

export const auditService = async (url: string) => {
  const cacheKey = `audit:${url}`;

  // STEP 1
  // Check cache FIRST

  // const cachedAudit = await cacheService.get(cacheKey);

  // if (cachedAudit) {
  //   return {
  //     ...JSON.parse(cachedAudit),

  //     cached: true,
  //   };
  // }

  // STEP 2
  // Cache miss -> hit website

  const start = Date.now();

  const response = await httpClient.get(url);

  const end = Date.now();

  const $ = load(response.data);

  const audit = {
    url,

    finalUrl: response.request?.res?.responseUrl ?? url,

    status: response.status,

    responseTime: end - start,

    title: $("title").text() || null,

    isHttps: url.startsWith("https://"),

    contentType: response.headers["content-type"] ?? null,

    contentLength: response.headers["content-length"] ?? null,

    server: response.headers.server ?? null,

    checkedAt: new Date().toISOString(),
  };

  // STEP 3
  // Save into Redis

  const cacheTtl = Number(process.env.CACHE_TTL);
  const ttlSeconds =
    Number.isInteger(cacheTtl) && cacheTtl > 0 ? cacheTtl : 3600;

  await cacheService.set(
    cacheKey,

    audit,

    ttlSeconds,
  );

  // STEP 4

  return {
    ...audit,

    cached: false,
  };
};
