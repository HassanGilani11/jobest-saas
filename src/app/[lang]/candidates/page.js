import { getCandidates } from "@/actions/getCandidates";
import CandidateContent from "@/components/Candidates/CandidateContent";
import BreadCrumb from "@/components/Shared/BreadCrumb";

const page = async ({ searchParams }) => {
	const { candidates, totalPages, totalCandidates } = await getCandidates(
		searchParams
	);
	return (
		<>
			<BreadCrumb title="Find Job Seekers" pageTitle="Candidates" />
			<CandidateContent
				candidates={candidates}
				totalPages={totalPages}
				totalCandidates={totalCandidates}
				searchParams={searchParams}
			/>
		</>
	);
};

export default page;
