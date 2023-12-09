import prisma from "@/prisma";
import { NextResponse } from "next/server";
export const GET = async () => {
  try {
    const res = await prisma.product.findMany();
    if (res) {
      return NextResponse.json({ data: res, status: 201 });
    }
  } catch (error) {
    throw new Error("unable to get products");
  }
};
