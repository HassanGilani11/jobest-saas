import { NextResponse } from "next/server";
import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/libs/prismadb";

export async function PUT(request, { params }) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.error();
	}
	const { catId } = await params;
	if (!catId) {
		throw new Error("Invalid ID");
	}

	const body = await request.json();

	const { label } = body;

	await prisma.category.update({
		where: { id: parseInt(catId) },
		data: {
			label,
			value: label,
		},
	});

	return NextResponse.json(
		{
			message: "Category updated.",
		},
		{ status: 200 }
	);
}

// export async function DELETE(request, { params }) {
// 	const currentUser = await getCurrentUser();
// 	if (!currentUser) {
// 		return NextResponse.error();
// 	}
// 	const { companyId } = params;
// 	if (!companyId) {
// 		throw new Error("Invalid ID");
// 	}

// 	await prisma.company.delete({
// 		where: { id: parseInt(companyId) },
// 	});

// 	return NextResponse.json(
// 		{
// 			message: "Your company and associated jobs have been deleted.",
// 		},
// 		{ status: 200 }
// 	);
// }
