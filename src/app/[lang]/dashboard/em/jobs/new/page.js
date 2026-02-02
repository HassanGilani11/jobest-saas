import { getCurrentUser } from "@/actions/getCurrentUser";
import JobForm from "@/components/Dashbaord/EM/New/JobForm";
import FullPageAlert from "@/components/Dashbaord/FullPageAlert";
import Navbar from "@/components/Dashbaord/Navbar";

const page = async () => {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect(`/${lang}`);
	}
	const { companies } = currentUser;
	return (
		<div className="db-main transition">
			{companies.length === 0 && (
				<FullPageAlert message="You need to create an organization before you can proceed with job posting." />
			)}

			<Navbar />
			<div className="db-content">
				<div className="db-content-box bg-white mb-35 pb-3">
					<h3 className="db-content-title fs-20 fw-bold mb-22">
						New Job
					</h3>
					<JobForm />
				</div>
			</div>
		</div>
	);
};

export default page;
