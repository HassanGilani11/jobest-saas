import { NextResponse } from "next/server";
import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/libs/prismadb";

export async function DELETE(request, { params }) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.error();
	}
	const { experienceId } = await params;
	if (!experienceId) {
		throw new Error("Invalid ID");
	}

	await prisma.experience.delete({
		where: { id: parseInt(experienceId) },
	});

	return NextResponse.json(
		{
			message: "Your experience background has been deleted.",
		},
		{ status: 200 }
	);
}
