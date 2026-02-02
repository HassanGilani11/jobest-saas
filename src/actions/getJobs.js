import prisma from "@/libs/prismadb";

export async function getJobs(params) {
	try {
		const {
			query,
			location,
			category,
			tag,
			sort,
			featured,
			page = 1,
			page_size = 6,
		} = await params;
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

		let categoryIds = [];
		let tags = [];

		if (category) {
			categoryIds = category.split(",").map(Number);
		}
		if (tag) {
			tags = tag.split(",").map(String);
		}

		const skip = (parsedPage - 1) * parsedPageSize;

		const where = {};

		if (query) {
			where.OR = [
				{
					title: {
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
						contains: location || query,
					},
				},
				{
					position: {
						contains: query,
					},
				},
			];
		}

		// Only for homepage featured section
		if (featured) where.featured = featured;

		where.status = "RUNNING";

		if (categoryIds && categoryIds.length > 0) {
			// Filter by category IDs using the 'in' operator
			where.categoryId = {
				in: categoryIds,
			};
		}

		if (tags && tags.length > 0) {
			// Filter by tags using the 'in' operator
			where.tags = {
				some: {
					tag: {
						name: {
							in: tags,
						},
					},
				},
			};
		}

		const totalItems = await prisma.job.count({
			where,
		});

		const totalPages = Math.ceil(totalItems / parsedPageSize);

		const jobs = await prisma.job.findMany({
			where,
			skip: skip,
			take: parsedPageSize,
			orderBy: getOrderByClause(),
			include: {
				company: {
					select: {
						name: true,
						logo_url: true,
						slug: true,
					},
				},
				category: {
					select: {
						label: true,
						slug: true,
					},
				},
				applications: true,
			},
		});

		// console.log(category);

		return { jobs, totalPages, totalItems };
	} catch (error) {
		return [];
	}
}

export async function getCategories() {
	const categories = await prisma.category.findMany({});

	return { categories };
}

export async function getLocations() {
	const locations = await prisma.job.findMany({
		select: {
			location: true,
		},
	});

	return { locations };
}

export async function getTags() {
	const tags = await prisma.tag.findMany({});

	return { tags };
}

export async function getMostPopularCat() {
	const topCategories = await prisma.job.groupBy({
		by: ["categoryId"], // Group by categoryId
		_count: {
			categoryId: true, // Count the number of jobs for each category
		},
		orderBy: {
			_count: {
				categoryId: "desc", // Order by count in descending order
			},
		},
		take: 5, // Limit to top 5
	});

	// Extract category IDs from the groupBy result
	const categoryIds = topCategories.map((category) => category.categoryId);

	// Fetch categories based on the extracted categoryIds
	const popularCategories = await prisma.category.findMany({
		where: {
			id: { in: categoryIds },
		},
		select: {
			id: true,
			label: true,
			slug: true,
		},
	});
	// console.log(categories);

	return { popularCategories };
}
