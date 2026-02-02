import { getCandidateById } from "@/actions/getCandidateById";
import CandidateContent from "@/components/Candidate/CandidateContent";
import BreadCrumb from "@/components/Shared/BreadCrumb";

const page = async ({ params }) => {
	const { id } = await params;
	const { candidate } = await getCandidateById(id);
	return (
		<>
			<BreadCrumb title={candidate.name} pageTitle="CANDIDATE DETAILS" />
			<CandidateContent candidate={candidate} />
		</>
	);
};

export default page;
