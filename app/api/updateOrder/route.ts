import { NextResponse } from "next/server";
import prisma from "@/prisma";
import { Prisma } from "@prisma/client";
export const POST = async (req: Request) => {
  try {
    const {
      data: { userId, cart },
    } = await req.json();

    const prevOrders = await prisma.order.findFirst({
      where: {
        userId,
      },
    });

    const res = await prisma.order.upsert({
      where: { userId, id: prevOrders?.id },
      update: { cart },
      create: { userId, cart },
    });

    return NextResponse.json({
      message: "added new order",
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
