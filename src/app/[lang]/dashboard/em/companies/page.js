import { getCurrentUser } from "@/actions/getCurrentUser";
import CompanyContent from "./CompanyContent";
import { getMyCompanies } from "@/actions/getMyCompanies";
import Navbar from "@/components/Dashbaord/Navbar";

const page = async () => {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect(`/${lang}`);
	}
	const { companies } = await getMyCompanies();
	return (
		<div className="db-main transition">
			<Navbar />
			<CompanyContent companies={companies} />
		</div>
	);
};

export default page;
