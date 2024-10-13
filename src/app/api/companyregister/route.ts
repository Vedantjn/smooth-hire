import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("smoothhire");

    const payload = await request.json();

    if (!payload || !payload.name || !payload.email || !payload.password) {
      return NextResponse.json({
        error: "Invalid payload. Name, email, and password are required.",
        status: 400,
      });
    }

    const { name, email, password } = payload;

    const existingCompany = await db.collection("companies").findOne({ name, email });
    if (existingCompany) {
      return NextResponse.json({
        error: "A company with this name and email already exists.",
        status: 409, 
      });
    }

    const salt = 10;
    const hashedpassword = await bcrypt.hash(password, salt);
    
    const company = {
      name,
      email,
      password: hashedpassword,
      createdAt: new Date(),
    };

    await db.collection("companies").insertOne(company);

    return NextResponse.json({
      message: "Company successfully registered",
      company,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      error: "Internal Server Error",
      status: 500,
    });
  }
}
