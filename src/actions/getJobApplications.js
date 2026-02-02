import prisma from "@/libs/prismadb";
import { getCurrentUser } from "./getCurrentUser";

export async function getJobApplications(jobId) {
	const currentUser = await getCurrentUser();
	try {
		const job = await prisma.job.findUnique({
			where: { id: parseInt(jobId) },

			include: {
				applications: {
					include: {
						user: {
							include: {
								profile: true,
							},
						},
					},
				},
			},
		});

		// console.log(job);

		return { job };
	} catch (error) {
		return null;
	}
}
