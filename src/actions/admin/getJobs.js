import prisma from "@/libs/prismadb";

export async function getJobs() {
	const jobs = await prisma.job.findMany({
		orderBy: { created_at: "desc" },
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
	});

	return { jobs };
}
