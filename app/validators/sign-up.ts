import z from 'zod'

export const schema = z.object({
  userName: z.string(),
  email: z.string(),
  password: z.string()
    .min(6, { message: "hasło powinno zawierać przynajmniej 6 znaków" })
    .regex(new RegExp(".*[A-Z].*"), "hasło musi zawierać przynajmniej 1 dużą literę"),
})
