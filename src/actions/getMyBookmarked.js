import prisma from "@/libs/prismadb";
import { getCurrentUser } from "./getCurrentUser";

export async function getMyBookmarked() {
	const currentUser = await getCurrentUser();
	try {
		const favs = await prisma.favourite.findMany({
			where: { userId: currentUser.id },
			orderBy: {
				created_at: "desc",
			},
			include: {
				job: {
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
				},
			},
		});

		return { favs };
	} catch (error) {
		return null;
	}
}
