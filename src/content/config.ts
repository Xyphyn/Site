import { z, defineCollection } from 'astro:content'
// 2. Define your collection(s)
const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string().transform((str) => new Date(str)),
        author: z.string(),
        image: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
})
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    blog: blogCollection,
}
