import { getJobs } from "@/actions/admin/getJobs";
import Navbar from "@/components/Admin/Navbar";
import JobsContent from "../JobsContent";

const page = async () => {
	const { jobs } = await getJobs();
	return (
		<div className="db-main transition">
			<Navbar />
			<div className="row justify-content-center">
				<JobsContent jobs={jobs} />
			</div>
		</div>
	);
};

export default page;
