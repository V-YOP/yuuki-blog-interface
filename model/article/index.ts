import { number, z } from "zod"

export const ArticleMeta = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  headImageUrl: z.string().nullable(),
  createdDate: z.date(),
  lastUpdatedDate: z.date(),
  authorId: z.number(),
})

export type ArticleMeta = z.infer<typeof ArticleMeta>

export const Article = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  headImageUrl: z.string().nullable(),
  createdDate: z.date(),
  lastUpdatedDate: z.date(),
  authorId: z.number(),
  content: z.string(),
})
export type Article = z.infer<typeof Article>