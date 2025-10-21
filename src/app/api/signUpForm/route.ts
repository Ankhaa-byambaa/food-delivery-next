import { connectDB } from "@/src/lib/connectdb";
import User from "@/src/models/User";

import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  await connectDB();

  const body = await request.json();
  // const (password,email)=body
  // const hashPassword = bcrypt.hashSync(password, 10);
  // console.log("MY PASSWORD", password);
  // console.log("MY HASHPASSWORD", hashPassword);
  // const user =awiat User.create({
  //   email:email,
  //   password:password,
  //   role:"USER"
  // })

  return NextResponse.json({ message: "successfully  " });
};
