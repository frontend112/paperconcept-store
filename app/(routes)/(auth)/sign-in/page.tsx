'use client'

import { schema } from "@/app/validators/sign-in"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "@/components/ui/use-toast"
import Link from "next/link"
import { useSession } from "next-auth/react"

const SignIn = () => {
  const recentUser = useSession()?.data?.user || {};
  const router = useRouter();
  if (recentUser.email) {
    router.push('/user-panel');
  }

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    }
  })
  const { handleSubmit } = form;

  const onSubmit = async (input: z.infer<typeof schema>) => {
    const { email, password } = input

    try {
      const res = await signIn("credentials", {
        email: email.toLocaleLowerCase(),
        password,
        redirect: false,
      })
      if (res?.error) {
        toast({ description: 'niepoprawne dane', variant: "destructive" })
        return;
      }
      toast({ description: 'Dane poprawne, zostałeś zalogowany' })
      router.push('/user-panel')
    } catch (error) {
      console.log('error during login')
    }
  }
  return (
    <div className="w-11/12 m-auto">
      <h2 className="text-3xl py-8 text-center">Zaloguj się</h2>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@gmail.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hasło</FormLabel>
                <FormControl>
                  <Input placeholder="hasło" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" >Zaloguj się</Button>
        </form>
      </Form>
      <h2 className="pt-4">
        Nie masz konta ?
        <Link href="/sign-up" className="underline text-blue-800 pl-2">Zarejestruj się</Link>
      </h2>
    </div>
  )
}

export default SignIn