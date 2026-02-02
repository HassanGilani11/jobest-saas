import { NextResponse } from "next/server";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { slugify } from "@/utils/slugify";
import prisma from "@/libs/prismadb";

export async function POST(request) {
	try {
		const currentUser = await getCurrentUser();
		if (!currentUser) {
			return NextResponse.json(
				{ message: "Unauthorized user." },
				{ status: 401 }
			);
		}

		const body = await request.json();

		const {
			company,
			category,
			title,
			image,
			description,
			job_type,
			location,
			salary_range,
			position,
			experience,
			office_days,
			holidays,
			office_start_time,
			office_end_time,
			tags,
		} = body;

		// Basic validation
		if (!title || !description || !company?.id || !category?.id) {
			return NextResponse.json(
				{ message: "Title, Description, Company, and Category are required!" },
				{ status: 400 }
			);
		}

		// Create array from tags string CSV
		const tagsArray = tags
			? tags
					.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)
					.map((item) =>
						item
							.trim()
							.replace(/(^"|"$)/g, "")
							.toLowerCase()
							.replace(/\s+/g, "-")
					)
			: [];

		let slug = slugify(title);
		const slugExist = await prisma.job.findFirst({
			where: { slug: slug },
		});

		if (slugExist) {
			slug = `${slug}-${Math.floor(Math.random() * (999 - 100 + 1) + 100)}`;
		}

		const createTags = await Promise.all(
			tagsArray.map(async (tagName) => {
				const existingTag = await prisma.tag.findFirst({
					where: { name: tagName },
				});

				if (existingTag) {
					return { tagId: existingTag.id };
				} else {
					const newTag = await prisma.tag.create({
						data: { name: tagName },
					});
					return { tagId: newTag.id };
				}
			})
		);

		await prisma.job.create({
			data: {
				companyId: parseInt(company.id),
				categoryId: parseInt(category.id),
				userId: currentUser.id,
				title,
				slug,
				image,
				description,
				job_type: job_type.value || job_type, // Handle object or string
				location,
				salary_range,
				position,
				experience,
				office_days,
				holidays,
				office_start_time,
				office_end_time,
				status: "RUNNING",
				tags: {
					create: createTags,
				},
			},
		});

		return NextResponse.json(
			{ message: "Job submitted you will get reply soon." },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{ message: "An error occurred." },
			{ status: 500 }
		);
	}
}

export async function PUT(request) {
	try {
		const currentUser = await getCurrentUser();
		if (!currentUser) {
			return NextResponse.json(
				{ message: "Unauthorized user." },
				{ status: 401 }
			);
		}

		const body = await request.json();

		const {
			jobId,
			category,
			title,
			image,
			description,
			job_type,
			location,
			salary_range,
			position,
			experience,
			office_days,
			holidays,
			office_start_time,
			office_end_time,
			tags,
		} = body;

		if (!jobId) {
			return NextResponse.json(
				{ message: "Job ID is required!" },
				{ status: 400 }
			);
		}

		// Security Check: Ensure user owns the job
		const existingJob = await prisma.job.findUnique({
			where: { id: parseInt(jobId) },
		});

		if (!existingJob) {
			return NextResponse.json({ message: "Job not found" }, { status: 404 });
		}

		if (existingJob.userId !== currentUser.id) {
			return NextResponse.json(
				{ message: "You are not authorized to edit this job." },
				{ status: 403 }
			);
		}

		const tagsArray = tags
			? tags
					.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)
					.map((item) =>
						item
							.trim()
							.replace(/(^"|"$)/g, "")
							.toLowerCase()
							.replace(/\s+/g, "-")
					)
			: [];

		let slug = slugify(title);
		if (slug !== existingJob.slug) {
			const slugExist = await prisma.job.findFirst({
				where: { slug: slug, NOT: { id: parseInt(jobId) } },
			});

			if (slugExist) {
				slug = `${slug}-${Math.floor(Math.random() * (999 - 100 + 1) + 100)}`;
			}
		} else {
			slug = existingJob.slug; // Keep existing slug if title didn't change enough to cause conflict
		}

		const createTags = await Promise.all(
			tagsArray.map(async (tagName) => {
				const existingTag = await prisma.tag.findFirst({
					where: { name: tagName },
				});

				if (existingTag) {
					return { tagId: existingTag.id };
				} else {
					const newTag = await prisma.tag.create({
						data: { name: tagName },
					});
					return { tagId: newTag.id };
				}
			})
		);

		// Optimize: Use transaction or single update with 'set' interaction for tags if possible, 
		// but since we need to create new tags dynamically, the current 'create' relation in update is okay, 
		// BUT we first need to clear existing tags. 
		// Prisma 'set' might be better but this model uses explicit M-N table possibly? 
		// Schema says: `tags JobTags[]`. 
		// The `createTags` array is `{ tagId: number }`.
		// `JobTags` model has `jobId` and `tagId`.
		// So `tags: { create: [...] }` creates `JobTags` entries.
		// To replace, we should `deleteMany` `JobTags` for this job first.

		await prisma.jobTags.deleteMany({
			where: { jobId: parseInt(jobId) },
		});

		await prisma.job.update({
			where: { id: parseInt(jobId) },
			data: {
				companyId: existingJob.companyId, // Preserve company (or allow update if needed, but not in body)
				categoryId: parseInt(category.id),
				title,
				slug,
				image,
				description,
				job_type: job_type.value || job_type,
				location,
				salary_range,
				position,
				experience,
				office_days,
				holidays,
				office_start_time,
				office_end_time,
				tags: {
					create: createTags,
				},
			},
		});

		return NextResponse.json(
			{ message: "Job has been updated." },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{ message: "An error occurred." },
			{ status: 500 }
		);
	}
}
