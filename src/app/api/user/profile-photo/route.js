import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function POST(request) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.error();
	}
	const body = await request.json();
	const { image } = body;

	await prisma.user.update({
		where: { id: currentUser.id },
		data: { image },
	});

	return NextResponse.json(
		{
			message: "Profile photo uploaded successfully.",
		},
		{ status: 200 }
	);
}
