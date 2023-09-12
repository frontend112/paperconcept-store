import data from "@/databases/categories.json"
import Header from "./components/Header/page";
export default function Home() {
  console.log(data[2]);

  return (
    <main>
      <Header />
    </main>
  )
}
