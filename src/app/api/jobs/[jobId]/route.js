import { NextResponse } from "next/server";
import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/libs/prismadb";

export async function PUT(request, { params }) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.error();
	}
	const { jobId } = await params;
	if (!jobId) {
		throw new Error("Invalid ID");
	}

	const job = await prisma.job.findUnique({
		where: { id: parseInt(jobId) },
	});

	await prisma.job.update({
		where: { id: parseInt(jobId) },
		data: {
			featured: job.featured ? false : true,
		},
	});

	if (job.featured) {
		return NextResponse.json(
			{
				message: "Removed from featured successfully.",
			},
			{ status: 200 }
		);
	} else {
		return NextResponse.json(
			{
				message: "Job featured successfully.",
			},
			{ status: 200 }
		);
	}
}

export async function DELETE(request, { params }) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.error();
	}
	const { jobId } = await params;
	if (!jobId) {
		throw new Error("Invalid ID");
	}

	await prisma.job.delete({
		where: { id: parseInt(jobId) },
	});

	return NextResponse.json(
		{
			message: "Job deleted successfully.",
		},
		{ status: 200 }
	);
}
