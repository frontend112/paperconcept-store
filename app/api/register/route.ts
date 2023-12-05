import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  try {
    const { email, password, fullName } = await req.json();

    const res1 = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (res1) {
      return NextResponse.json({
        message: "Zarejestrowano już taki adres email",
        status: 208,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        email,
        hashedPassword,
        fullName,
      },
    });

    return NextResponse.json({
      message: `email ${email} został pomyślnie zarejestrowany w bazie danych`,
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      message: "unable send user to mongodb",
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
};
