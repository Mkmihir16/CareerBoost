import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/Usermodel";
import { NextResponse } from "next/server";

// Export POST method handler explicitly
export async function POST(req) {
  const { userClerkId, email } = await req.json(); // Use req.json() to parse the request body

  try {
    await dbConnect();
    let users = await User.findOne({ userClerkId:userClerkId });

    if (users) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    } else {
      await User.create({ userClerkId: userClerkId,
        email
       });
      return NextResponse.json({ userClerkId, email }, { status: 200 });
    }
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
