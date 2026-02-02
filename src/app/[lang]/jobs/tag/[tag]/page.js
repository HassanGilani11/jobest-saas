import BreadCrumb from "@/components/Shared/BreadCrumb";
import TagContent from "../TagContent";
import { getJobsByCategory } from "@/actions/getJobsByCategory";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { getJobsByTag } from "@/actions/getJobsByTag";

export default async function Jobs({ params }) {
	const { tag } = await params;
	const currentUser = await getCurrentUser();
	const { tag: job_tag } = await getJobsByTag(tag);

	// console.log(job_tag.jobs);

	return (
		<>
			<BreadCrumb
				title={job_tag ? job_tag.name : "Not Found"}
				pageTitle="Jobs by tag"
			/>

			{job_tag && (
				<TagContent jobs={job_tag.jobs} currentUser={currentUser} />
			)}
		</>
	);
}
