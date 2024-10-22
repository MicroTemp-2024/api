import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongogb";
import User from "../../../../models/user";

export async function POST(req) {
    try {

        await connectMongoDB();
        const { email } = await req.json();
        const user = await User.findOne({ email }).select("_id");

        console.log(user);

        if (user) {
            return NextResponse.json({ user });
        }

    } catch (error) {

        console.log(error);

        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}
