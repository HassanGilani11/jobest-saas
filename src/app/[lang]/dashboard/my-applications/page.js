import { getCurrentUser } from "@/actions/getCurrentUser";
import { getMyApplications } from "@/actions/getMyApplications";
import Navbar from "@/components/Dashbaord/Navbar";
import ApplicationList from "./ApplicationList";

const page = async ({ params }) => {
	const { lang } = await params;
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect(`/${lang}`);
	}

	const { applications } = await getMyApplications();
	return (
		<>
			<div className="db-main transition">
				<Navbar />

				<div className="db-content mb-70">
					<div className="db-content-box bg-white mb-25">
						<h3 className="db-content-title fs-20 fw-bold mb-22">
							My Applied Jobs
						</h3>
						<div className="table-responsive db-table">
							<table className="table text-nowrap align-middle">
								<thead>
									<tr>
										<th
											scope="col"
											className="fw-medium text-ash"
										>
											Title
										</th>
										<th
											scope="col"
											className="fw-medium text-ash"
										>
											Job Posted
										</th>
										<th
											scope="col"
											className="fw-medium text-ash"
										>
											Applicants
										</th>
										<th
											scope="col"
											className="fw-medium text-ash"
										>
											Status
										</th>
										<th
											scope="col"
											className="fw-medium text-ash"
										>
											Action
										</th>
									</tr>
								</thead>

								<tbody>
									{applications.length > 0 &&
										applications.map((application) => (
											<ApplicationList
												key={application.id}
												application={application}
											/>
										))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
