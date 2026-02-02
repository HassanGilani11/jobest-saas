import { NextResponse } from "next/server";
import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/libs/prismadb";

export async function POST(request, { params }) {
	try {
		const currentUser = await getCurrentUser();
		if (!currentUser) {
			return NextResponse.json(
				{
					message: "Unauthorized user.",
				},
				{ status: 401 }
			);
		}

		const { applicationId } = await params;

		if (!applicationId) {
			throw new Error("Invalid ID");
		}

		const body = await request.json();

		const { value } = body;

		if (value === "Pending") {
			await prisma.application.update({
				where: { id: parseInt(applicationId) },
				data: {
					status: value,
				},
			});
			return NextResponse.json(
				{
					message: "Status pending",
				},
				{ status: 200 }
			);
		} else if (value === "Accepted") {
			await prisma.application.update({
				where: { id: parseInt(applicationId) },
				data: {
					status: value,
				},
			});
			return NextResponse.json(
				{
					message: "Status Accepted",
				},
				{ status: 200 }
			);
		} else if (value === "Rejected") {
			await prisma.application.delete({
				where: { id: parseInt(applicationId) },
			});
			return NextResponse.json(
				{
					message: "Status Rejected",
				},
				{ status: 200 }
			);
		}
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
