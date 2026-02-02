import { getCompanyBySlug } from "@/actions/getCompanyById";
import CompanyContent from "@/components/Company/CompanyContent";
import BreadCrumb from "@/components/Shared/BreadCrumb";

const page = async ({ params }) => {
	const { slug } = await params;
	const { company } = await getCompanyBySlug(slug);
	return (
		<>
			<BreadCrumb title={company.name} pageTitle="Company" />
			<CompanyContent company={company} />
		</>
	);
};

export default page;
