import prisma from "@/libs/prismadb";
import { getCurrentUser } from "./getCurrentUser";

export async function getMyApplications() {
	const currentUser = await getCurrentUser();
	try {
		const applications = await prisma.application.findMany({
			where: { userId: currentUser.id },
			orderBy: {
				created_at: "desc",
			},

			include: {
				job: {
					include: {
						company: true,
						applications: {
							select: {
								id: true,
							},
						},
					},
				},
			},
		});

		// console.log(applications);

		return { applications };
	} catch (error) {
		return null;
	}
}
