import z from 'zod'

export const schema = z.object({
  userName: z.string(),
  email: z.string(),
  password: z.string().min(6, { message: 'za krótkie hasło' }),
  confirmPassword: z.string().min(6),
})
