import prisma from "@/libs/prismadb";
import { getCurrentUser } from "./getCurrentUser";

export async function getMyCompanies() {
	const currentUser = await getCurrentUser();
	try {
		const companies = await prisma.company.findMany({
			where: { userId: currentUser.id },
			orderBy: {
				created_at: "desc",
			},
			include: {
				jobs: {
					select: {
						id: true,
					},
				},
			},
		});

		return { companies };
	} catch (error) {
		return null;
	}
}
