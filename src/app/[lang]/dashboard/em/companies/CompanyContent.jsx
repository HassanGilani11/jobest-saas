"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const CompanyContent = ({ companies }) => {
	const [menu, setMenu] = useState(false);
	const router = useRouter();
	const { lang } = useParams();

	const handleDelete = async (orgId) => {
		axios
			.delete(`/api/em/company/${orgId}`)
			.then((response) => {
				toast.success(response.data.message);
				router.refresh();
			})
			.catch((error) => {
				toast.error(error.response.data.message);
			});
	};
	return (
		<div className="db-content mb-70">
			<div className="db-content-box bg-white mb-25">
				<div className="d-flex align-items-center justify-content-between mb-25">
					<h4 className="db-content-title fs-20 fw-bold mb-0">
						My Organizations
					</h4>
					<button
						className="btn btn-primary btn-sm py-3"
						onClick={() =>
							router.push(`/${lang}/dashboard/em/company/new`)
						}
					>
						+ New Organization
					</button>
				</div>
				<div className="table-responsive db-table">
					<table className="table text-nowrap align-middle">
						<thead>
							<tr>
								<th scope="col" className="fw-medium text-ash">
									Organization
								</th>
								<th scope="col" className="fw-medium text-ash">
									Jobs
								</th>
								<th scope="col" className="fw-medium text-ash">
									Expired
								</th>
								<th scope="col" className="fw-medium text-ash">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{companies.length > 0 ? (
								companies.map((cmp) => (
									<tr key={cmp.id}>
										<td>
											<div className="db-job-card">
												<div className="job-title-wrap d-flex align-items-center">
													<div className="employer-logo d-flex flex-column align-items-center justify-content-center round-20">
														<Image
															src={cmp.logo_url}
															alt="Employre Logo"
															width={50}
															height={50}
														/>
													</div>
													<div className="job-title">
														<h3 className="fs-20 fw-semibold">
															<Link
																href={`/${lang}/company/${cmp.slug}`}
															>
																{cmp.name}
															</Link>
														</h3>
													</div>
												</div>
											</div>
										</td>
										<td>{cmp.jobs.length}</td>
										<td>120</td>
										<td>
											<div className="db-action-btn ms-auto">
												<button
													className={`dropdown-toggle d-flex align-items-center position-relative bg-transparent border-0 transition ${
														menu && "show"
													}`}
													type="button"
													onClick={() =>
														setMenu(!menu)
													}
												>
													<Image
														src="/images/icons/dots.svg"
														alt="Dot Icon"
														className="action-btn"
														width="18"
														height="4"
													/>
												</button>

												<div
													className={`dropdown-menu top-1 border-0 ${
														menu && "show"
													}`}
												>
													<ul className="list-unstyle">
														<li>
															<Link
																href={`/${lang}/company/${cmp.slug}`}
															>
																View
															</Link>
														</li>
														<li>
															<Link
																href={`/${lang}/dashboard/em/company/edit/${cmp.id}`}
															>
																Edit
															</Link>
														</li>

														<li>
															<button
																className="bg-transparent border-0 p-0"
																onClick={() =>
																	handleDelete(
																		cmp.id
																	)
																}
															>
																Delete
															</button>
														</li>
													</ul>
												</div>
											</div>
										</td>
									</tr>
								))
							) : (
								<tr>
									<td className="text-center" colSpan={4}>
										Empty!
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default CompanyContent;
