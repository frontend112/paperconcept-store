"use client";
import { Button } from "./Button";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Page = () => {
  const session = useSession();

  return (
    <div className="px-[5%] pt-4">
      <div className="text-right">
        <button onClick={() => signOut()}>wyloguj się</button>
        <div>{session?.data?.user?.email}</div>
      </div>
      <div>
        <div className="text-center pt-4">
          <h2 className="uppercase font-normal text-2xl">Moje konto</h2>
          <p>
            Możesz tu zarządzać swoimi danymi personalnymi jak również
            przeglądać swoje zamówienia.
          </p>
          <div className="container max-w-5xl">
            <section className="flex justify-center gap-4">
              <Button>Dodaj pierwszy adres</Button>
              <Button>Dane osobowe</Button>
            </section>
            <section className="flex justify-center gap-4">
              <Button>Historia i szczegóły zamówień</Button>
              <Button>Zarządzaj swoimi danymi osobowymi</Button>
            </section>
            <section className="flex justify-center gap-4">
              <Button>Moje powiadomienia</Button>
              <Button>Karta podarunkowa</Button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
