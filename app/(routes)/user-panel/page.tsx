import { UserButton } from "@clerk/nextjs"
import React from 'react'
import { Button } from "./Button"

const page = () => {
  return (
    <div className="px-[5%] pt-4">
      <aside className="flex justify-end">
        <UserButton afterSignOutUrl="/" />
      </aside>
      <div className="text-center pt-4">
        <h2 className="uppercase font-normal text-2xl">Moje konto</h2>
        <p>Możesz tu zarządzać swoimi danymi personalnymi jak również przeglądać swoje zamówienia.</p>
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
  )
}

export default page