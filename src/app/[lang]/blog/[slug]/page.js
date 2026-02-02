import BreadCrumb from "@/components/Shared/BreadCrumb";
import DetailsContent from "../DetailsContent";

const page = () => {
	return (
		<>
			<BreadCrumb title="Blog Details" pageTitle="BLOG DETAILS" />
			
			<DetailsContent />
		</>
	);
};

export default page;
