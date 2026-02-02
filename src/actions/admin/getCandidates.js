import prisma from "@/libs/prismadb";

export async function getCandidates(params) {
	const { page = 1, page_size = 10 } = await params;
	const parsedPage = parseInt(page, 10);
	const parsedPageSize = parseInt(page_size, 10);

	const totalCandidates = await prisma.user.count({
		where: {
			role: {
				not: "ADMIN", // exclude users with role 'ADMIN'
			},
		},
	});

	const skip = (parsedPage - 1) * parsedPageSize;

	const totalPages = Math.ceil(totalCandidates / parsedPageSize);

	const candidates = await prisma.user.findMany({
		skip: skip,
		take: parsedPageSize,
		orderBy: {
			id: "desc", // order by id, can adjust this to other fields
		},
		where: {
			role: {
				not: "ADMIN", // exclude users with role 'ADMIN'
			},
		},
		include: {
			profile: true,
		},
	});

	return { candidates, totalPages, totalCandidates };
}
