import Image from "next/image";
const shops = [
  { name: "varso", city: "warszawa", address: "chmielna 73" },
  { name: "koneser", city: "warszawa", address: "plac konesera 10A" },
  { name: "krakow", city: "kraków", address: "pawia 34" },
  { name: "gdansk", city: "gdańsk", address: "rajska 10" },
  { name: "poznan", city: "poznań", address: "pl wolności 8" },
  { name: "wroclaw", city: "wrocław", address: "krupnicza 6/8" },
  { name: "katowice", city: "katowice", address: "krzywa 12" },
];
const page = () => {
  return (
    <>
      <div style={{ width: "100svw", height: "100svh", position: "relative" }}>
        <Image
          fill
          alt="background shop"
          src="https://paperconcept.pl/themes/paper_theme/assets/img/pc_custom_pages/varso/paperconcept_varso_02.jpg"
          objectFit="cover"
        />
        <h2 className="uppercase font-light text-white text-5xl absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
          odwiedź nas
        </h2>
      </div>
      <section className="p-[10%]">
        <h3 className="uppercase font-mono pb-4">
          PaperConcept to także sklepy stacjonarne!
        </h3>
        <ul className="flex items-center flex-col lg:grid lg:grid-cols-2">
          {shops.map(({ name, address, city }) => (
            <li
              className="w-[80vw] h-[80vw] lg:w-[30vw] lg:h-[calc(40vw/2)] lg:pt-12"
              key={name}
            >
              <div
                style={{ width: "100%", height: "80%", position: "relative" }}
              >
                <Image
                  src={`https://paperconcept.pl/modules/pc_custom_pages/views/img/stores/paperconcept_${name}_front.jpg`}
                  fill
                  alt="shop"
                  objectFit="cover"
                />
              </div>
              <address>
                <h5 className="uppercase pt-4">{address}</h5>
                <h4 className="font-semibold capitalize py-1">{city}</h4>
              </address>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default page;
