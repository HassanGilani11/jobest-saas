import { getCandidates } from "@/actions/admin/getCandidates";
import Navbar from "@/components/Admin/Navbar";
import CandidateContent from "./CandidateContent";

const page = async ({ searchParams }) => {
	const { candidates, totalPages, totalCandidates } = await getCandidates(
		searchParams
	);

	return (
		<div className="db-main transition">
			<Navbar />
			{/* <div className="row"> */}
			<CandidateContent
				candidates={candidates}
				totalCandidates={totalCandidates}
				searchParams={searchParams}
				totalPages={totalPages}
			/>
			{/* </div> */}
		</div>
	);
};

export default page;
