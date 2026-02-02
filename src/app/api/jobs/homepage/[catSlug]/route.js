import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export async function GET(request, { params }) {
	try {
		// console.log(params);
		const { catSlug } = await params;
		if (!catSlug) {
			throw new Error("Invalid ID");
		}

		const category = await prisma.category.findUnique({
			where: { slug: catSlug },
			include: {
				jobs: {
					where: {
						status: "RUNNING",
					},
					include: {
						company: {
							select: {
								name: true,
								logo_url: true,
								slug: true,
							},
						},
						category: {
							select: {
								label: true,
								slug: true,
							},
						},
						applications: true,
					},
				},
			},
		});

		return NextResponse.json(
			{
				jobs: category.jobs,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error:", error);
	}
}
