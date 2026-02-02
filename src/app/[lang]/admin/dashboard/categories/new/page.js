import Navbar from "@/components/Admin/Navbar";
import CategoryForm from "../CategoryForm";

const page = async () => {
	return (
		<div className="db-main transition">
			<Navbar />
			
			<CategoryForm />
		</div>
	);
};

export default page;
