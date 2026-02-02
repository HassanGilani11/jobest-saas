import { NextResponse } from "next/server";
import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/libs/prismadb";

export async function PUT(request, { params }) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.error();
	}
	const { companyId } = await params;
	if (!companyId) {
		throw new Error("Invalid ID");
	}

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

	let foundedDate;
	if (founded) {
		foundedDate = new Date(founded);
	}

	const company = await prisma.company.update({
		where: { id: parseInt(companyId) },
		data: {
			name,
			description,
			location,
			revenue,
			phone,
			email,
			company_size,
			founded: foundedDate.toISOString(),
			logo_url,
			website_url: website,
			twitter_url: twitter,
			facebook_url: facebook,
			linkedin_url: linkedin,
			youtube_url: youtube,
		},
	});

	return NextResponse.json(
		{
			message: "Your company updated.",
		},
		{ status: 200 }
	);
}

export async function DELETE(request, { params }) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.error();
	}
	const { companyId } = await params;
	if (!companyId) {
		throw new Error("Invalid ID");
	}

	await prisma.company.delete({
		where: { id: parseInt(companyId) },
	});

	return NextResponse.json(
		{
			message: "Your company and associated jobs have been deleted.",
		},
		{ status: 200 }
	);
}
