import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongogb";
import User from "../../../../models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();

        {/* + code */}
        const hashedPassword = await bcrypt.hash(password, 10);

        await connectMongoDB();
        await User.create({
            name,
            email,
            password: hashedPassword,
        });

        return NextResponse.json({ message: "User registered successfully" }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}