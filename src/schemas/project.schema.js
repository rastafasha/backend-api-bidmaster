import {z} from 'zod';

export const createProjectSchema = z.object({
    name: z.string({
        required_error: 'Name is required',
    }),
    url: z.string({
        required_error: 'url is required',
    }),
    date: z.string().date().optional()
})