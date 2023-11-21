import { connectMongodb } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { email } = await req.json();
    await connectMongodb();
    const { _id } = await User.findOne({ email })
    return NextResponse.json({ _id })
  } catch (err) {
    console.log(err)
  }
}
