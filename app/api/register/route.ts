import { connectMongodb } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export const POST = async (req: Request) => {
  try {
    const { email, password } = await req.json();

    await connectMongodb();
    await User.create({
      email,
      password: await bcrypt.hash(password, 10)
    });

    return NextResponse.json(
      { message: "User succesfully registered" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "unable to make post request" },
      { status: 501 }
    );
  }
}
