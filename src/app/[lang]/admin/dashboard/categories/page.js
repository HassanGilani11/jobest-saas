import Navbar from "@/components/Admin/Navbar";
import CategoriesContent from "./CategoriesContent";
import { getCategories } from "@/actions/admin/getCategories";

const page = async () => {
	const { categores } = await getCategories();
	return (
		<div className="db-main transition">
			<Navbar />
			<CategoriesContent categores={categores} />
		</div>
	);
};

export default page;
