import prisma from "@/libs/prismadb";

export async function getAdminDashboardStats() {
	try {
		const [jobCount, companyCount, candidateCount, jobs, candidates] =
			await Promise.all([
				prisma.job.count(),
				prisma.company.count(),
				prisma.user.count({
					where: {
						role: {
							not: "ADMIN",
						},
					},
				}),
				// Get the first 5 jobs (adjust sorting if needed)
				prisma.job.findMany({
					take: 5, // limit to 5 jobs
					orderBy: {
						id: "desc", // order by id, can adjust this to other fields
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
				}),
				// Get the first 5 users (adjust sorting if needed)
				prisma.user.findMany({
					take: 5, // limit to 5 users
					orderBy: {
						id: "desc", // order by id, can adjust this to other fields
					},
					where: {
						role: {
							not: "ADMIN", // exclude users with role 'ADMIN'
						},
					},
				}),
			]);

		return {
			jobCount,
			companies: companyCount,
			candidateCount,
			jobs,
			candidates,
		};
	} catch (error) {
		return null;
	}
}
