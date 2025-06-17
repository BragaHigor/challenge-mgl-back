type CacheEntry = { timestamp: number; data: any };
const cache = new Map<string, CacheEntry>();
const TTL = 60 * 1000;

export function getCache(key: string) {
   const entry = cache.get(key);
   if (!entry) return null;
   if (Date.now() - entry.timestamp > TTL) {
      cache.delete(key);
      return null;
   }
   return entry.data;
}

export function setCache(key: string, data: any) {
   cache.set(key, { timestamp: Date.now(), data });
}
