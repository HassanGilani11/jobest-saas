import { getCurrentUser } from "@/actions/getCurrentUser";
import RegisterBody from "@/components/Auth/RegisterBody";
import BreadCrumb from "@/components/Shared/BreadCrumb";
import { redirect } from "next/navigation";

const page = async ({ params }) => {
	const { lang } = await params;
	const currentUser = await getCurrentUser();
	if (currentUser) {
		redirect(`/${lang}/`);
	}
	return (
		<>
			<BreadCrumb title="Welcome to Jobest" pageTitle="Register" />
			<RegisterBody />
		</>
	);
};

export default page;
