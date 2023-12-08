import { NextResponse } from "next/server";
import prisma from "@/prisma";
export const POST = async (req: Request) => {
  try {
    // const {
    //   body: { productCart, userId },
    // } = await req.json();

    // console.log(productCart);
    await prisma.order.create({
      data: {
        name: "aaa",
        price: 55.05,
        slug: "asf",
        src: "asfa",
        quantity: 555,
      },
    });

    return NextResponse.json({
      message: "updated",
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      message: "error during adding to db",
      status: 500,
    });
  } finally {
    prisma.$disconnect();
  }
};
