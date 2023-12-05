import { NextResponse } from "next/server";
import { AddedProduct } from "@/app/types/types";
const stripe = require("stripe")(process.env.SECRET_KEY);

const getActiveProducts = async () => {
  const availableProducts = await stripe.products.list();

  return availableProducts.data.filter(
    (product: any) => product.active === true
  );
};

export const POST = async (req: Request) => {
  try {
    let activeProducts = await getActiveProducts();
    const { products } = await req.json();

    for (const product of products) {
      const stripeProduct = activeProducts?.find(
        (activeProduct: any) => activeProduct?.name === product.name
      );

      if (stripeProduct === undefined) {
        await stripe.products.create({
          name: product.name,
          default_price_data: {
            unit_amount: product.price * 100,
            currency: "pln",
          },
        });
      }
    }

    const stripeProducts = [];
    activeProducts = await getActiveProducts();
    for (const product of products) {
      const stripeProduct = activeProducts?.find(
        (prod: AddedProduct) =>
          prod.name.toLocaleLowerCase() === product.name.toLocaleLowerCase()
      );
      if (stripeProduct) {
        stripeProducts.push({
          price: stripeProduct?.default_price,
          quantity: product?.quantity,
        });
      }
    }

    const session = await stripe.checkout.sessions.create({
      line_items: stripeProducts,
      mode: "payment",
      success_url: `https://paperconcept-store.vercel.app/success`,
      cancel_url: `https://paperconcept-store.vercel.app/cancel`,
    });
    return NextResponse.json({ session: session.url });
  } catch (error) {
    return NextResponse.json(
      { message: "error on adding products to stripe" },
      { status: 401 }
    );
  }
};
