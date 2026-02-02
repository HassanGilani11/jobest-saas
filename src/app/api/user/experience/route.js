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
			experienceId,
			company,
			position,
			start_date,
			end_date,
			description,
		} = body;

		if (company == "") {
			return NextResponse.json(
				{
					message: "Company is required!",
				},
				{ status: 404 }
			);
		} else if (position == "") {
			return NextResponse.json(
				{
					message: "Position is required!",
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

		if (experienceId) {
			await prisma.experience.update({
				where: { id: experienceId },
				data: {
					company,
					position,
					start_date: startDate.toISOString(),
					end_date: endDate ? endDate.toISOString() : null,
					description,
					userId: currentUser.id,
				},
			});

			return NextResponse.json(
				{
					message: "Your experience background has been updated.",
				},
				{ status: 200 }
			);
		}

		await prisma.experience.create({
			data: {
				company,
				position,
				start_date: startDate.toISOString(),
				end_date: endDate ? endDate.toISOString() : null,
				description,
				userId: currentUser.id,
			},
		});

		return NextResponse.json(
			{
				message:
					"Thank you! Your experience background has been added to your profile.",
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
