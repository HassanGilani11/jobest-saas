import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function POST(request) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.error();
	}
	try {
		const body = await request.json();
		const {
			educationId,
			institution,
			degree,
			start_date,
			end_date,
			description,
		} = body;

		if (institution == "") {
			return NextResponse.json(
				{
					message: "Dnstitution is required!",
				},
				{ status: 404 }
			);
		} else if (degree == "") {
			return NextResponse.json(
				{
					message: "Degree is required!",
				},
				{ status: 404 }
			);
		} else if (start_date == "") {
			return NextResponse.json(
				{
					message: "Start Date is required!",
				},
				{ status: 404 }
			);
		} else if (description == "") {
			return NextResponse.json(
				{
					message: "Description  is required!",
				},
				{ status: 404 }
			);
		}

		let startDate = new Date(start_date);
		let endDate;
		if (end_date) {
			endDate = new Date(end_date);
		}

		if (educationId) {
			await prisma.education.update({
				where: { id: educationId },
				data: {
					institution,
					degree,
					start_date: startDate.toISOString(),
					end_date: endDate ? endDate.toISOString() : null,
					description,
					userId: currentUser.id,
				},
			});

			return NextResponse.json(
				{
					message: "Your educational background has been updated.",
				},
				{ status: 200 }
			);
		}

		await prisma.education.create({
			data: {
				institution,
				degree,
				start_date: startDate.toISOString(),
				end_date: endDate ? endDate.toISOString() : null,
				description,
				userId: currentUser.id,
			},
		});

		return NextResponse.json(
			{
				message:
					"Thank you! Your educational background has been added to your profile.",
			},
			{ status: 200 }
		);
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
