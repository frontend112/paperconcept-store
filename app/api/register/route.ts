import { connectMongodb } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export async function POST(req: any) {
  try {
    const { email, userName, password } = await req.json();

    await connectMongodb();
    await User.create({
      userName,
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
