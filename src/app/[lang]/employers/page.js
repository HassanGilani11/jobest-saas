import { getCompanies } from "@/actions/getCompanies";
import EmployerContent from "@/components/Employers/EmployerContent";
import BreadCrumb from "@/components/Shared/BreadCrumb";

export default async function Employers({ searchParams }) {
	const { companies, totalPages, totalCompanies } = await getCompanies(
		searchParams
	);
	return (
		<>
			<BreadCrumb title="Find Your Dream Company" pageTitle="EMPLOYERS" />
			<EmployerContent
				companies={companies}
				searchParams={searchParams}
				totalPages={totalPages}
				totalCompanies={totalCompanies}
			/>
		</>
	);
}
