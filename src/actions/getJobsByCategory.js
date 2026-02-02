import prisma from "@/libs/prismadb";

export async function getJobsByCategory(catSlug) {
	try {
		const category = await prisma.category.findUnique({
			where: { slug: catSlug },
			include: {
				jobs: {
					where: {
						status: "RUNNING",
					},
					include: {
						company: true,
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
				},
			},
		});

		// console.log(category);

		return { category };
	} catch (error) {
		return [];
	}
}
