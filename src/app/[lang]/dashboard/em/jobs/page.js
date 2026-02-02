import { getCurrentUser } from "@/actions/getCurrentUser";
import { getMyJobs } from "@/actions/getMyjobs";
import JobList from "@/components/Dashbaord/EM/Jobs/JobList";
import Navbar from "@/components/Dashbaord/Navbar";

const page = async () => {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect(`/${lang}`);
	}

	const { my_jobs } = await getMyJobs();
	return (
		<div className="db-main transition">
			<Navbar />

			<div className="db-content mb-70">
				<div className="db-content-box bg-white mb-25">
					<h3 className="db-content-title fs-20 fw-bold mb-22">
						My Jobs
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
										Job Created
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
								{my_jobs.map((job) => (
									<JobList key={job.id} job={job} />
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
