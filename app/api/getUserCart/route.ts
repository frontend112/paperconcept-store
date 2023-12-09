import prisma from "@/prisma";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const user: any = req.json();
    const recentOrder = await prisma.order.findFirst({
      where: { userId: user?.id },
    });

    if (recentOrder) {
      const cart = JSON.parse(recentOrder.cart);
      return NextResponse.json({ cart, status: 201 });
    }
  } catch (error) {
    return NextResponse.json({ message: "cannot get orders", status: 201 });
  }
};
