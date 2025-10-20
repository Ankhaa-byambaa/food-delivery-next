import { connectDB } from "@/src/lib/connectdb";

export const POST = async (request: Request) => {
  await connectDB();
  const body = await request.json();

  //   return Response.json(message:"successfully ")
};
