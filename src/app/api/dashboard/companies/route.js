import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function GET(request) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.json(
			{ message: "Unauthorized user." },
			{ status: 401 }
		);
	}
	try {
		const companies = await prisma.company.findMany({
			where: { userId: currentUser.id },
		});
		// console.log(companies);

		return NextResponse.json(companies);
	} catch (error) {
		return NextResponse.json(
			{
				message: "An error occurred.",
			},
			{ status: 500 }
		);
	}
}
