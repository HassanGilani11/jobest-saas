import { getCompanyById } from "@/actions/getCompanyById";
import { getCurrentUser } from "@/actions/getCurrentUser";
import CreateForm from "@/components/Dashbaord/Company/CreateForm";
import Navbar from "@/components/Dashbaord/Navbar";

const page = async ({ params }) => {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect(`/${lang}`);
	}
	const { companyId } = await params;
	const { company } = await getCompanyById(companyId);
	return (
		<div className="db-main transition">
			<Navbar />

			<div className="db-content">
				<div className="db-content-box bg-white ite mb-35 pb-3">
					<h3 className="db-content-title fs-20 fw-bold mb-22">
						Edit the organization
					</h3>
					<CreateForm company={company} />
				</div>
			</div>
		</div>
	);
};

export default page;
