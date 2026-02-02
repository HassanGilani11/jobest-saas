import { getCurrentUser } from "@/actions/getCurrentUser";
import { getJobBySlug } from "@/actions/getJobBySlug";
import DetailsContent from "@/components/JobDetails/DetailsContent";
import RelatedJobs from "@/components/JobDetails/RelatedJobs";
import BreadCrumb from "@/components/Shared/BreadCrumb";

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const { job } = await getJobBySlug(slug);
	return {
		title: `Jobest | ${job.title}`,
		description: job.description,
		openGraph: {
			images: [job.image],
		},
	};
}

export default async function JobDetails({ params }) {
	const { slug } = await params;
	const currentUser = await getCurrentUser();
	const { job } = await getJobBySlug(slug);
	return (
		<>
			<BreadCrumb title={job.title} pageTitle="Job Details" />

			<div className="container ptb-100">
				<DetailsContent job={job} currentUser={currentUser} />

				<RelatedJobs />
			</div>
		</>
	);
}
