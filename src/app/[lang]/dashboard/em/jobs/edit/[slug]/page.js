import { getCurrentUser } from "@/actions/getCurrentUser";
import { getJobBySlug } from "@/actions/getJobBySlug";
import FullPageAlert from "@/components/Dashbaord/FullPageAlert";
import Navbar from "@/components/Dashbaord/Navbar";
import EditForm from "../EditForm";

const page = async ({ params }) => {
	const { slug } = await params;
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect(`/${lang}`);
	}

	const { job } = await getJobBySlug(slug);
	// console.log(job);
	return (
		<div className="db-main transition">
			<Navbar />
			<div className="db-content">
				<div className="db-content-box bg-white mb-35 pb-3">
					<h3 className="db-content-title fs-20 fw-bold mb-22">
						Edit Job
					</h3>
					<EditForm job={job} />
				</div>
			</div>
		</div>
	);
};

export default page;
