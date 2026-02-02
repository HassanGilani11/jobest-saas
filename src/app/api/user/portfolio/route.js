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
			projectId,
			project_name,
			project_url,
			project_image,
			description,
		} = body;

		if (project_name == "") {
			return NextResponse.json(
				{
					message: "project_name is required!",
				},
				{ status: 404 }
			);
		} else if (project_url == "") {
			return NextResponse.json(
				{
					message: "project_url is required!",
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

		if (projectId) {
			await prisma.portfolio.update({
				where: { id: projectId },
				data: {
					project_name,
					project_url,
					project_image,
					description,
					userId: currentUser.id,
				},
			});

			return NextResponse.json(
				{
					message: "Your portfolio has been updated.",
				},
				{ status: 200 }
			);
		}

		await prisma.portfolio.create({
			data: {
				project_name,
				project_url,
				project_image,
				description,
				userId: currentUser.id,
			},
		});

		return NextResponse.json(
			{
				message:
					"Thank you! Your portfolio has been added to your profile.",
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
