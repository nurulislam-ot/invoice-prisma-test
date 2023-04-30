import { infer, z } from 'zod'

const user = z.object({
  username: z.string(),
})
