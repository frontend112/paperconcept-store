import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  try {
    const { email, password, userName } = await req.json();

    const res1 = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (res1) {
      return NextResponse.json({
        message: "Zarejestrowano już taki adres email",
        status: 501,
      });
    }
    const res2 = await prisma.user.findFirst({
      where: {
        userName,
      },
    });
    if (res2) {
      return NextResponse.json({
        message: "Podana nazwa użytkownika już istnieje",
        status: 502,
      });
    }
    await prisma.user.create({
      data: {
        email,
        password: await bcrypt.hash(password, 10),
        userName,
      },
    });
    return NextResponse.json({
      message: `email ${email} został pomyślnie zarejestrowany w bazie danych`,
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      message: "unable send user to mongodb",
      status: 503,
    });
  }
};
