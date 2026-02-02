"use client";

import Pagination from "@/components/Candidates/Pagination";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const CandidateContent = ({
	candidates,
	totalCandidates,
	searchParams,
	totalPages,
}) => {
	const { lang } = useParams();
	return (
		<div className="db-content mb-70">
			<div className="db-content-box bg-white mb-25">
				<h3 className="db-content-title fs-20 fw-bold mb-25">
					Candidates
				</h3>

				<div className="row">
					{candidates.map((candid) => (
						<div key={candid.id} className="col-md-4">
							<div
								key={candid.id}
								className="db-candidate-wrapper style-two"
							>
								<div
									className="candidate-card style-two text-center position-relative index-1 mb-30 transition"
									style={{ width: "100%" }}
								>
									<div className="candidate-img-wrap">
										<div className="candidate-img rounded-circle position-relative">
											<Image
												src={
													candid.image
														? candid.image
														: "/images/avatar.png"
												}
												alt="Candidate"
												className="rounded-circle"
												width={100}
												height={100}
											/>
										</div>
										<h3 className="fs-20">
											<Link
												href={`/${lang}/candidate/${candid.id}`}
											>
												{candid.name}
											</Link>
										</h3>
										<span className="d-block">
											{candid.designation}
										</span>
									</div>
									<div className="candidate-metainfo-wrap d-flex justify-content-between">
										<div className="candidate-metainfo d-flex align-items-center">
											<div className="meta-icon d-flex flex-column align-items-center justify-content-center round-10 bg-white">
												<Image
													src="/images/icons/map-green.svg"
													alt="Map Icon"
													width="24"
													height="24"
												/>
											</div>
											<div className="meta-info">
												<span className="d-block fs-14">
													Location
												</span>
												<p className="text_dark fs-14 fw-semibold mb-0">
													{candid.profile
														? candid.profile
																.location
														: "N/A"}
												</p>
											</div>
										</div>
										<div className="candidate-metainfo d-flex align-items-center justify-content-end">
											<div className="meta-icon d-flex flex-column align-items-center justify-content-center round-10 bg-white">
												<Image
													src="/images/icons/coin.svg"
													alt="Map Icon"
													width="24"
													height="24"
												/>
											</div>
											<div className="meta-info">
												<span className="d-block fs-14">
													Salary
												</span>
												<p className="text_dark fs-14 fw-semibold mb-0">
													{candid.expected_salary}
												</p>
											</div>
										</div>
									</div>
									<Link
										href={`/${lang}/candidate/${candid.id}`}
										className="btn style-seven d-block"
									>
										View Profile
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>

				<Pagination
					totalPages={totalPages}
					searchParams={searchParams}
				/>
			</div>
		</div>
	);
};

export default CandidateContent;
