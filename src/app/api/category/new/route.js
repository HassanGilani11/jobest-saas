import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { slugify } from "@/utils/slugify";

export async function POST(request) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.error();
	}

	try {
		const body = await request.json();

		const { label } = body;

		let slug = slugify(label);
		const slugExist = await prisma.category.findFirst({
			where: {
				slug: slug,
			},
		});

		if (slugExist) {
			slug = `${slug}-${Math.floor(
				Math.random() * (999 - 100 + 1) + 100
			)}`;
		}

		Object.keys(body).forEach((value) => {
			if (!body[value]) {
				NextResponse.json(
					{
						message: "One or more fileds are empty!",
					},
					{ status: 404 }
				);
			}
		});

		await prisma.category.create({
			data: {
				label,
				value: label,
				slug,
			},
		});

		return NextResponse.json(
			{
				message: "Thank you! Category has been created.",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{
				message: "An error occurred.",
			},
			{ status: 500 }
		);
	}
}
