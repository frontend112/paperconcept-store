import Link from "next/link";
import { getCategories as categories } from "@/app/getData/getCategories";

export const Categories = () => (
  <ul className="flex justify-between text-inherit">
    {categories.map(({ category, id, slug }) => (
      <li key={id}>
        <Link href={`/category/${slug}`}>{category}</Link>
      </li>
    ))}
  </ul>
);
