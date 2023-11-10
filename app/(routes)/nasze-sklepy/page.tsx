import Image from "next/image"
const shops = [
  { name: "varso", address: "chmielna 73" },
  { name: "koneser", address: "plac konesera 10A" },
  { name: "krakow", address: "pawia 34" },
  { name: "gdansk", address: "rajska 10" },
  { name: "poznan", address: "pl wolności 8" },
  { name: "wroclaw", address: "krupnicza 6/8" },
  { name: "katowice", address: "krzywa 12" },
]
const page = () => {
  return (
    <>
      <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
        <Image
          fill
          alt="background shop"
          src="https://paperconcept.pl/themes/paper_theme/assets/img/pc_custom_pages/varso/paperconcept_varso_02.jpg"
        />
        <h2 className="uppercase font-light text-white text-5xl absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">odwiedź nas</h2>
      </div>
      <section className="p-5 lg:p-[10%]">
        <h3 className="uppercase font-mono">PaperConcept to także sklepy stacjonarne!</h3>
        <ul className="grid grid-cols-2">
          {shops.map(({ name, address }) => (<li style={{ width: "30%", height: "auto", position: "relative" }} key={name}>
            <Image
              src={`https://paperconcept.pl/modules/pc_custom_pages/views/img/stores/paperconcept_${name}_front.jpg`}
              fill
              alt="shop"
            />
          </li>))}
        </ul>
      </section>
    </>
  )
}

export default page