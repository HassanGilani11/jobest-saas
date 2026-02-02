import { getCurrentUser } from "@/actions/getCurrentUser";
import Content from "@/components/About/Content";
import BreadCrumb from "@/components/Shared/BreadCrumb";

const page = async () => {
	const currentUser = await getCurrentUser();
	return (
		<>
			<BreadCrumb title="About Us" pageTitle="About Us" />
			<Content currentUser={currentUser} />
		</>
	);
};

export default page;
