import prisma from "@/libs/prismadb";

export async function getCandidateById(userId) {
	try {
		const candidate = await prisma.user.findUnique({
			where: { id: parseInt(userId) },
			include: {
				profile: true,
				portfolios: true,
				experiences: true,
				educations: true,
			},
		});

		// console.log(candidate);

		return { candidate };
	} catch (error) {
		return null;
	}
}
