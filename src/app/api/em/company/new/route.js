import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { slugify } from "@/utils/slugify";

export async function POST(request) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.json(
			{ message: "Unauthorized user." },
			{ status: 401 }
		);
	}

	try {
		const body = await request.json();

		const {
			name,
			description,
			location,
			revenue,
			phone,
			email,
			company_size,
			founded,
			logo_url,
			website,
			twitter,
			facebook,
			linkedin,
			youtube,
		} = body;

		// Basic validation
		if (!name || !email) {
			return NextResponse.json(
				{ message: "Name and Email are required!" },
				{ status: 400 }
			);
		}

		let slug = slugify(name);
		const slugExist = await prisma.company.findFirst({
			where: {
				slug: slug,
			},
		});

		if (slugExist) {
			slug = `${slug}-${Math.floor(
				Math.random() * (999 - 100 + 1) + 100
			)}`;
		}

		let foundedDate = null;
		if (founded) {
			const date = new Date(founded);
			if (!isNaN(date.getTime())) {
				foundedDate = date.toISOString();
			}
		}

		await prisma.company.create({
			data: {
				name,
				slug,
				description,
				location,
				revenue,
				phone,
				email,
				company_size,
				founded: foundedDate,
				logo_url,
				website_url: website,
				twitter_url: twitter,
				facebook_url: facebook,
				linkedin_url: linkedin,
				youtube_url: youtube,
				userId: currentUser.id,
			},
		});

		return NextResponse.json(
			{
				message: "Thank you! Your organization has been created.",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				message: "An error occurred.",
			},
			{ status: 500 }
		);
	}
}
