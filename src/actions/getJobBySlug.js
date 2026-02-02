import prisma from "@/libs/prismadb";

export async function getJobBySlug(jobSlug) {
	try {
		const job = await prisma.job.findUnique({
			where: { slug: jobSlug },
			include: {
				company: true,
				tags: {
					include: { tag: true },
				},
				category: true,
				user: true,
				applications: {
					select: {
						id: true,
						jobId: true,
						userId: true,
					},
				},
			},
		});

		return { job };
	} catch (error) {
		return null;
	}
}
