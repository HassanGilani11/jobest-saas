import { getCurrentUser } from "@/actions/getCurrentUser";
import CreateForm from "@/components/Dashbaord/Company/CreateForm";
import Navbar from "@/components/Dashbaord/Navbar";

const page = async () => {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect(`/${lang}`);
	}
	return (
		<div className="db-main transition">
			<Navbar />
			<div className="db-content">
				<div className="db-content-box bg-white mb-35 pb-3">
					<h3 className="db-content-title fs-20 fw-bold mb-22">
						Create a new organization
					</h3>
					<CreateForm />
				</div>
			</div>
		</div>
	);
};

export default page;
