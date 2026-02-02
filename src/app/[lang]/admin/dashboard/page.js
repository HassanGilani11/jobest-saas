import { getAdminDashboardStats } from "@/actions/admin/getAdminDashboardStats";
import Navbar from "@/components/Admin/Navbar";
import Stats from "@/components/Admin/Stats";
import JobsContent from "./JobsContent";
import CandidateContent from "./CandidateContent";

const page = async () => {
	const { jobCount, candidateCount, jobs, companies, candidates } =
		await getAdminDashboardStats();
	return (
		<div className="db-main transition">
			<Navbar />
			<Stats
				jobs={jobCount}
				companies={companies}
				candidates={candidateCount}
			/>

			<div className="row">
				<CandidateContent candidates={candidates} />
				<JobsContent jobs={jobs} />
			</div>
		</div>
	);
};

export default page;
