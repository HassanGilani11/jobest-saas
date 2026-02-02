import prisma from "@/libs/prismadb";

export async function getEducations(userId) {
	try {
		const educations = await prisma.education.findMany({
			where: { userId: userId },
			orderBy: {
				start_date: "asc",
			},
		});

		return { educations };
	} catch (error) {
		return null;
	}
}

export async function getExperiences(userId) {
	try {
		const experiences = await prisma.experience.findMany({
			where: { userId: userId },
			orderBy: {
				start_date: "asc",
			},
		});

		return { experiences };
	} catch (error) {
		return null;
	}
}

export async function getPortfolios(userId) {
	try {
		const portfolios = await prisma.portfolio.findMany({
			where: { userId: userId },
			orderBy: {
				id: "desc",
			},
		});

		return { portfolios };
	} catch (error) {
		return null;
	}
}
