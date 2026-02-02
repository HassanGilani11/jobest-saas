"use client";

import { useParams, useRouter } from "next/navigation";

const CategoriesContent = ({ categores }) => {
	const { lang } = useParams();
	const router = useRouter();
	return (
		<div className="db-content mb-70">
			<div className="db-content-box bg-white mb-25">
				<div className="d-flex align-items-center justify-content-between mb-25">
					<h4 className="db-content-title fs-20 fw-bold mb-0">
						Categories
					</h4>
					<button
						className="btn btn-primary btn-sm py-3"
						onClick={() =>
							router.push(
								`/${lang}/admin/dashboard/categories/new`
							)
						}
					>
						+ New Category
					</button>
				</div>

				<div className="table-responsive db-table">
					<table className="table text-nowrap align-middle">
						<thead>
							<tr>
								<th scope="col" className="fw-medium text-ash">
									Title
								</th>
								<th scope="col" className="fw-medium text-ash">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{categores.map((cat) => (
								<tr key={cat.id}>
									<td>
										<div className="db-job-card">
											<div className="job-title-wrap d-flex align-items-center">
												<h3 className="mb-0 fs-20 fw-semibold">
													{cat.label}
												</h3>
											</div>
										</div>
									</td>

									<td>
										<div className="db-action-btn ms-auto">
											<button
												type="button"
												className="btn btn-primary py-3"
												onClick={() =>
													router.push(
														`/${lang}/admin/dashboard/categories/edit/${cat.id}`
													)
												}
											>
												Edit
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default CategoriesContent;
