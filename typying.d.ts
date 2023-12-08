import "next-auth";
interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
declare module "next-auth" {
  interface User {
    email: string;
    fullName: string;
  }
}
interface Order {
  name: string;
  price: float;
  slug: string;
  src: string;
  quantity: number;
}
