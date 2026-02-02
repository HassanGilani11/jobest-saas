import { NextResponse } from "next/server";
import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/libs/prismadb";

export async function DELETE(request, { params }) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.error();
	}
	const { portfolioId } = await params;
	if (!portfolioId) {
		throw new Error("Invalid ID");
	}

	await prisma.portfolio.delete({
		where: { id: parseInt(portfolioId) },
	});

	return NextResponse.json(
		{
			message: "Your portfolio has been deleted.",
		},
		{ status: 200 }
	);
}
