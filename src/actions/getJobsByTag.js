import prisma from "@/libs/prismadb";

export async function getJobsByTag(catSlug) {
	try {
		const tag = await prisma.tag.findUnique({
			where: { name: catSlug },
			include: {
				jobs: {
					where: {
						job: {
							status: "RUNNING",
						},
					},
					include: {
						job: {
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
				},
			},
		});

		// console.log(tag);

		return { tag };
	} catch (error) {
		return [];
	}
}
