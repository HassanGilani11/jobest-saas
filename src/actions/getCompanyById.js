import prisma from "@/libs/prismadb";

export async function getCompanyById(companyId) {
	try {
		const company = await prisma.company.findUnique({
			where: { id: parseInt(companyId) },
		});

		return { company };
	} catch (error) {
		return null;
	}
}

export async function getCompanyBySlug(slug) {
	try {
		const company = await prisma.company.findUnique({
			where: { slug: slug },
			include: {
				_count: {
					select: {
						jobs: {
							where: {
								status: "RUNNING", // Only count jobs with status 'APPROVED'
							},
						},
					},
				},
				jobs: {
					include: {
						company: {
							select: {
								name: true,
								logo_url: true,
								slug: true,
							},
						},
					},
				},
			},
		});

		return { company };
	} catch (error) {
		return null;
	}
}
