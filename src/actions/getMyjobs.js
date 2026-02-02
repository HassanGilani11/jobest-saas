import prisma from "@/libs/prismadb";
import { getCurrentUser } from "./getCurrentUser";

export async function getMyJobs() {
	const currentUser = await getCurrentUser();
	try {
		const my_jobs = await prisma.job.findMany({
			where: { userId: currentUser.id },
			orderBy: {
				created_at: "desc",
			},
			include: {
				company: {
					select: {
						name: true,
						logo_url: true,
						slug: true,
					},
				},
				applications: {
					select: {
						id: true,
					},
				},
			},
		});

		return { my_jobs };
	} catch (error) {
		return null;
	}
}
