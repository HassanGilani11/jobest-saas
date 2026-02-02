import prisma from "@/libs/prismadb";

export async function getCategories() {
	const categores = await prisma.category.findMany({
		orderBy: {
			id: "desc", // order by id, can adjust this to other fields
		},
	});

	return { categores };
}
export async function getCategoryById(catId) {
	const category = await prisma.category.findUnique({
		where: { id: parseInt(catId) },
	});

	return { category };
}
