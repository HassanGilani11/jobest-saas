import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function POST(request) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.json(
			{ message: "Unauthorized user." },
			{ status: 401 }
		);
	}

	try {
		const body = await request.json();
		const {
			name,
			designation,
			description,
			cv,
			expected_salary,
			video_intro,
			location,
			phone,
			website,
			twitter,
			facebook,
			linkedin,
			youtube,
		} = body;

		await prisma.user.update({
			where: { id: currentUser.id },
			data: {
				name,
				designation,
				description,
				cv,
				expected_salary: expected_salary ? parseInt(expected_salary) : null,
				video_intro,
			},
		});

		await prisma.profile.upsert({
			where: { userId: currentUser.id },
			update: {
				location,
				phone,
				website,
				twitter,
				facebook,
				linkedin,
				youtube,
			},
			create: {
				userId: currentUser.id,
				location,
				phone,
				website,
				twitter,
				facebook,
				linkedin,
				youtube,
			},
		});

		return NextResponse.json(
			{
				message: "Thank you! Your profile has been updated.",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				message: "An error occurred.",
			},
			{ status: 500 }
		);
	}
}
