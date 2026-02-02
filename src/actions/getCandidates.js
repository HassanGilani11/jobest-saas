import prisma from "@/libs/prismadb";

export async function getCandidates(params) {
	const { query, sort, page = 1, page_size = 10 } = await params;

	const getOrderByClause = () => {
		switch (sort) {
			case "desc":
				return { created_at: "desc" };
			case "asc":
				return { created_at: "asc" };
			default:
				return { created_at: "desc" }; // Default sorting option
		}
	};

	const parsedPage = parseInt(page, 10);
	const parsedPageSize = parseInt(page_size, 10);

	const skip = (parsedPage - 1) * parsedPageSize;

	const where = {};

	if (query) {
		where.OR = [
			{
				name: {
					contains: query,
				},
			},
			{
				designation: {
					contains: query,
				},
			},
			{
				description: {
					contains: query,
				},
			},
		];
	}

	where.NOT = [
		{
			role: "ADMIN",
		},
	];

	const totalCandidates = await prisma.user.count({
		where,
	});

	const totalPages = Math.ceil(totalCandidates / parsedPageSize);

	const candidates = await prisma.user.findMany({
		where,
		skip: skip,
		take: parsedPageSize,
		orderBy: getOrderByClause(),
		include: {
			profile: true,
		},
	});

	// console.log(candidates);

	return { candidates, totalPages, totalCandidates };
}
