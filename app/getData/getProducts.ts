import productsJson from "@/app/databases/products.json";
export const getProducts = productsJson[2].data || [];
