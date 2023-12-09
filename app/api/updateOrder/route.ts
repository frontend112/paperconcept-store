import { NextResponse } from "next/server";
import prisma from "@/prisma";
export const POST = async (req: Request) => {
  try {
    const {
      data: { productCart },
    } = await req.json();

    console.log(productCart);

    // console.log(productCart);
    await prisma.order.create({
      data: {
        ...productCart[0],
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
