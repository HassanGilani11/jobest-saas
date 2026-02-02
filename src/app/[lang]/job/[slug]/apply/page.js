import { getCurrentUser } from "@/actions/getCurrentUser";
import { getJobBySlug } from "@/actions/getJobBySlug";

import BreadCrumb from "@/components/Shared/BreadCrumb";
import ApplicationForm from "./ApplicationForm";
import { redirect } from "next/navigation";

export default async function JobDetails({ params }) {
	const { slug, lang } = await params;
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect(`/${lang}/login`);
	}
	const { job } = await getJobBySlug(slug);
	// console.log(job);
	return (
		<>
			<BreadCrumb title={job.title} pageTitle="Apply" />

			<div className="container ptb-100">
				<ApplicationForm {...job} />
			</div>
		</>
	);
}
