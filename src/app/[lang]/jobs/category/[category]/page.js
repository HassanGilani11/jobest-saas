import BreadCrumb from "@/components/Shared/BreadCrumb";
import CategoryContent from "../CategoryContent";
import { getJobsByCategory } from "@/actions/getJobsByCategory";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { getJobsByTag } from "@/actions/getJobsByTag";

export default async function Jobs({ params }) {
	const { category } = await params;
	const currentUser = await getCurrentUser();
	const { category: job_category } = await getJobsByCategory(category);
	await getJobsByTag(category);
	return (
		<>
			<BreadCrumb
				title={job_category ? job_category.label : "Not Found"}
				pageTitle="Jobs by category"
			/>

			{job_category && (
				<CategoryContent
					jobs={job_category.jobs}
					currentUser={currentUser}
				/>
			)}
		</>
	);
}
