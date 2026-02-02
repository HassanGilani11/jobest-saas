import { getCurrentUser } from "@/actions/getCurrentUser";
import LoginBody from "@/components/Auth/LoginBody";
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
			<BreadCrumb title="Welcome back!" pageTitle="Login" />
			<LoginBody />
		</>
	);
};

export default page;
