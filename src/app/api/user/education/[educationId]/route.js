import { NextResponse } from "next/server";
import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/libs/prismadb";

export async function DELETE(request, { params }) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.error();
	}
	const { educationId } = await params;
	if (!educationId) {
		throw new Error("Invalid ID");
	}

	await prisma.education.delete({
		where: { id: parseInt(educationId) },
	});

	return NextResponse.json(
		{
			message: "Your educational background has been deleted.",
		},
		{ status: 200 }
	);
}
