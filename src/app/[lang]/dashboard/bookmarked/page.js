import { getCurrentUser } from "@/actions/getCurrentUser";
import { getMyBookmarked } from "@/actions/getMyBookmarked";
import Navbar from "@/components/Dashbaord/Navbar";
import JobList from "./JobList";

const page = async () => {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect(`/${lang}`);
	}

	const { favs } = await getMyBookmarked();

	return (
		<div className="db-main transition">
			<Navbar />

			<div className="db-content mb-70">
				<div className="db-content-box bg-white mb-25">
					<h3 className="db-content-title fs-20 fw-bold mb-22">
						My Bookmarked
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
								{favs.map((fav) => (
									<JobList
										key={fav.id}
										job={fav.job}
										currentUser={currentUser}
									/>
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
