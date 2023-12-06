"use client";

import { schema } from "@/app/validators/sign-up";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const SignUp = () => {
  const router = useRouter();
  const session = useSession();

  if (session?.data?.user) {
    router.push("/user-panel");
  }
  const { toast } = useToast();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
    },
  });
  const { handleSubmit } = form;

  const onSubmit = async (input: z.infer<typeof schema>) => {
    try {
      const { email, password, fullName } = input;
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          fullName,
        }),
      });
      const { message, status } = await res.json();
      toast({
        description: message,
        variant: status === 201 ? "default" : "destructive",
      });
      if (status === 201) {
        router.push("/sign-in");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-11/12 m-auto">
      <h2 className="text-3xl py-8 text-center">Zarejestruj się</h2>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adres email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@gmail.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Imię i nazwisko</FormLabel>
                <FormControl>
                  <Input placeholder="Imię i nazwisko" {...field} />
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
          <Button type="submit">Zarejestruj się</Button>
        </form>
      </Form>
      <h2 className="pt-4">
        Posiadasz już konto ?
        <Link href="/sign-in" className="underline text-blue-800 pl-2">
          zaloguj się
        </Link>
      </h2>
    </div>
  );
};

export default SignUp;
