"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import ApplicantsDropDown from "./ApplicantsDropDown";

const ApplicationContent = ({ job }) => {
	const { lang } = useParams();
	const { applications } = job;
	return (
		<div className="db-content mb-70">
			<div className="db-content-box bg-white mb-25">
				<h3 className="db-content-title fs-20 fw-bold mb-25">
					Job: {job.title}
				</h3>
				<div className="db-candidate-wrapper style-two">
					{applications.map((application) => (
						<div
							key={application.id}
							className="candidate-card style-two text-center position-relative index-1 mb-30 transition"
						>
							<span className="featured fs-13">
								{application.status}
							</span>
							<div className="candidate-img-wrap">
								<div className="candidate-img rounded-circle position-relative">
									<Image
										src={
											application.user.image
												? application.user.image
												: "/images/avatar.png"
										}
										alt="Candidate"
										className="rounded-circle"
										width={90}
										height={90}
									/>
								</div>
								<h3 className="fs-20">
									<Link
										href={`/${lang}/candidate/${application.user.id}`}
									>
										{application.user.name}
									</Link>
								</h3>
								<span className="d-block">
									{application.user.designation}
								</span>
								<ApplicantsDropDown
									value={application.status}
									applicationId={application.id}
								/>
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
											{application.user.profile
												? application.user.profile
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
											Ex: Salary
										</span>
										<p className="text_dark fs-14 fw-semibold mb-0">
											{application.expected_salary}
										</p>
									</div>
								</div>
							</div>
							<div className="text-start px-4">
								<p>{application.cover_letter}</p>
							</div>
							<Link
								href={`/${lang}/candidate/${application.user.id}`}
								className="btn style-seven d-block"
							>
								View Profile
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ApplicationContent;
