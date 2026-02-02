import Navbar from "@/components/Admin/Navbar";
import CategoryForm from "../../CategoryForm";
import { getCategoryById } from "@/actions/admin/getCategories";

const page = async ({ params }) => {
	const { catId } = await params;
	const { category } = await getCategoryById(catId);
	return (
		<div className="db-main transition">
			<Navbar />
			<CategoryForm category={category} />
		</div>
	);
};

export default page;
