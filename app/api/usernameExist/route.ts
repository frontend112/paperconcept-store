import { connectMongodb } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { userName } = await req.json();
    await connectMongodb();
    const { _id } = await User.findOne({ userName })
    return NextResponse.json({ _id })
  } catch (err) {
    console.log(err)
  }
}
