import { redisClient } from "../config/redis.js";

export const cacheService = {
  async get(key: string) {
    return await redisClient.get(key);
  },

  async set(key: string, value: any, ttl: number) {
    await redisClient.set(
      key,

      JSON.stringify(value),

      {
        EX: ttl,
      },
    );
  },
  async del(key: string) {
    await redisClient.del(key);
  },
};
