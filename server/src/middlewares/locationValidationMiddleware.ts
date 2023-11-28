import { z } from 'zod';

export const locationDataSchema = z.object({
    user_uuid: z.string().refine((uuid) => uuid.length === 36, {
        message: 'El user_uuid debe tener exactamente 36 caracteres.',
    }),
    network: z.string().refine((network) => ['Orange', 'Jazztel', 'Simyo'].includes(network), {
        message: 'La red debe ser Orange, Jazztel o Simyo.',
    }),
    latitude: z.number(),
    longitude: z.number(),
    rtt: z.number(),
    downlink: z.number(),
});

const result = locationDataSchema.parse({
    user_uuid: '546bd3cc-b1e5-4ec3-a243-223e5de57d90',
    network: 'Orange',
    latitude: 34,
    longitude: 43,
    rtt: 5,
    downlink: 2
})

console.log(result)