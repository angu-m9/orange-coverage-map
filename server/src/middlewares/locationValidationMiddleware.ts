import { z } from 'zod';

export const locationDataSchema = z.object({
    user_uuid: z.string(),
    network: z.string().min(3),
    latitude: z.number(),
    longitude: z.number(),
    rtt: z.number(),
    downlink: z.number(),
});
