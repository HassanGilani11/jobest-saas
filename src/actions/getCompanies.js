import prisma from "@/libs/prismadb";

export async function getCompanies(params) {
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
				description: {
					contains: query,
				},
			},
			{
				location: {
					contains: query,
				},
			},
		];
	}

	const totalCompanies = await prisma.company.count({
		where,
	});

	const totalPages = Math.ceil(totalCompanies / parsedPageSize);

	const companies = await prisma.company.findMany({
		where,
		skip: skip,
		take: parsedPageSize,
		orderBy: getOrderByClause(),
		include: {
			jobs: {
				select: {
					id: true,
					status: true,
				},
				where: {
					status: "RUNNING",
				},
			},
		},
	});

	// console.log(companies);

	return { companies, totalPages, totalCompanies };
}
