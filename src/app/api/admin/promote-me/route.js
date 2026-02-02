import { NextResponse } from "next/server";
import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/libs/prismadb";

export async function GET(request) {
	try {
		const currentUser = await getCurrentUser();
		console.log("Promote Route Check:", { 
			hasUser: !!currentUser, 
			email: currentUser?.email,
			cookies: request.cookies.getAll().map(c => c.name)
		});

		if (!currentUser) {
			return NextResponse.json(
				{ message: "You must be logged in to use this route." },
				{ status: 401 }
			);
		}

		const updatedUser = await prisma.user.update({
			where: { email: currentUser.email },
			data: { role: "ADMIN" },
		});

		return NextResponse.json(
			{
				message: "Success! You are now an Admin.",
				user: { email: updatedUser.email, role: updatedUser.role },
				nextStep: "Go to http://localhost:3000/en/admin/dashboard",
			},
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Error promoting user", error: error.message },
			{ status: 500 }
		);
	}
}
