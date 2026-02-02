import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import { slugify } from "@/utils/slugify";

export async function POST(request) {
	try {
		const body = await request.json();
		const { label } = body;
		if (!label) {
			return NextResponse.json(
				{
					message: "Category required.",
				},
				{ status: 422 }
			);
		}

		const catExist = await prisma.category.findUnique({
			where: {
				label: label,
			},
		});

		if (catExist) {
			return NextResponse.json(
				{
					message: "Category already exist.",
				},
				{ status: 422 }
			);
		}

		let slug = slugify(label);

		const slugExist = await prisma.category.findUnique({
			where: {
				slug: slug,
			},
		});

		if (slugExist) {
			slug = `${slug}-${Math.floor(
				Math.random() * (999 - 100 + 1) + 100
			)}`;
		}

		await prisma.category.create({
			data: {
				label,
				value: label,
				slug,
			},
		});

		return NextResponse.json(
			{
				message: "Successfully added the category.",
			},
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{
				message: "An error occurred.",
			},
			{ status: 500 }
		);
	}
}

export async function GET(request) {
	try {
		const categories = await prisma.category.findMany();

		return NextResponse.json(categories);
	} catch (error) {
		return NextResponse.json(
			{
				message: "An error occurred.",
			},
			{ status: 500 }
		);
	}
}
