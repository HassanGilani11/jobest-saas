import BreadCrumb from "@/components/Shared/BreadCrumb";
import BlogContent from "./BlogContent";

const page = () => {
	return (
		<>
			<BreadCrumb title="Blog" pageTitle="BLOG" />
			<BlogContent />
		</>
	);
};

export default page;
