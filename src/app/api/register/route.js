import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";

export async function POST(request) {
	try {
		const body = await request.json();
		const { name, email, designation, password } = body;

		if (!name || !email || !password) {
			return NextResponse.json(
				{ message: "Name, Email, and Password are required!" },
				{ status: 400 }
			);
		}

		const existingUser = await prisma.user.findUnique({
			where: { email: email },
		});

		if (existingUser) {
			return NextResponse.json(
				{ message: "Email already exists!" },
				{ status: 409 }
			);
		}

		const hashedPassword = await bcrypt.hash(password, 12);

		const user = await prisma.user.create({
			data: {
				name,
				email,
				designation,
				hashedPassword,
			},
		});

		return NextResponse.json(user);
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{
				message: "An error occurred.",
			},
			{ status: 500 }
		);
	}
}
