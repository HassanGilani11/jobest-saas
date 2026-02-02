import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export async function GET(request, { params }) {
	const { slug } = await params;
	if (!slug) {
		throw new Error("Invalid ID");
	}

	// Get the tags of the current job
	const currentJob = await prisma.job.findUnique({
		where: { slug: slug },
		include: { tags: true }, // Include associated tags
	});

	if (!currentJob) {
		throw new Error("Job not found");
	}

	// Extract tag IDs of the current job
	const tagIds = currentJob.tags.map((tag) => tag.tagId);

	// Find related jobs based on the same tags, excluding the current job
	const relatedJobs = await prisma.job.findMany({
		where: {
			slug: { not: slug }, // Exclude the current job
			tags: {
				some: {
					tagId: { in: tagIds }, // Match jobs with the same tags
				},
			},
		},
		include: {
			company: {
				select: {
					name: true,
					logo_url: true,
					slug: true,
				},
			},
		},
		take: 5, // You can limit the number of related jobs returned
	});

	return NextResponse.json(relatedJobs);
}
