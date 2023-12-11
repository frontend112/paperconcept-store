import { NextResponse } from "next/server";
import prisma from "@/prisma";
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

    if (!prevOrders) {
      const currentOrder = await prisma.order.create({
        data: {
          cart,
          userId,
        },
      });
      if (currentOrder) {
        return NextResponse.json({
          message: "added new order",
          status: 201,
        });
      }
    }

    const currentOrder = await prisma.order.upsert({
      where: { userId, id: prevOrders?.id },
      update: { cart },
      create: { userId, cart, id: userId },
    });

    if (!currentOrder) {
      return NextResponse.json({
        message: "cannot add new order",
        status: 500,
      });
    }

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
