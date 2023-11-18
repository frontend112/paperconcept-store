import { connectMongodb } from "@/lib/mongodb";
import User from "@/models/user"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    console.log(req)
    const { password, email } = await req.json();
    connectMongodb();

    const getDbaccount = await User.findOne({ email })
    if (!getDbaccount) {
      return null
    }

    const passwordMatch = await bcrypt.compare(password, getDbaccount.password)
    if (!passwordMatch) {
      return null;
    }

    return NextResponse.json({ message: 'it is fine' }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: `incorrect credentials ${error}` }, { status: 501 })
  }
}
