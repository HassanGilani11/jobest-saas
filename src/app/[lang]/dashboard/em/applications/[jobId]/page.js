import Navbar from "@/components/Dashbaord/Navbar";
import ApplicationContent from "../ApplicationContent";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { getJobApplications } from "@/actions/getJobApplications";

const page = async ({ params }) => {
	const { jobId } = await params;
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect(`/${lang}`);
	}

	const { job } = await getJobApplications(jobId);
	return (
		<div className="db-main transition">
			<Navbar />

			<ApplicationContent job={job} />
		</div>
	);
};

export default page;
