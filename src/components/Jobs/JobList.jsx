"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Bookmark from "../Bookmark";
import HasApplied from "../JobDetails/HasApplied";
import { dateInputFormate } from "@/utils/dateFormat";

const JobList = ({ jobs, currentUser }) => {
	const { lang } = useParams();
	return (
		<>
			{jobs.map((job) => (
				<div key={job.id} className="col-md-6">
					<div className="job-card style-five d-flex flex-wrap align-items-center justify-content-between round-10 mb-30 transition">
						<div className="job-img-wrap position-relative index-1 round-4 overflow-hidden">
							<Image
								src={job.image}
								alt="Job Image"
								className="round-4 transition"
								width={570}
								height={335}
							/>
							<div className="employer-logo-wrap position-absolute d-flex flex-wrap align-items-center">
								<div className="employer-logo bg-white d-flex flex-column align-items-center justify-content-center rounded-circle">
									<Image
										src={job.company.logo_url}
										alt="Employre Logo"
										width="50"
										height="50"
									/>
								</div>
								<span className="text-white fs-14 fw-medium">
									{job.company.name}
								</span>
								<Link
									href={`/${lang}/company/${job.company.slug}`}
									className="position-absolute top-0 start-0 w-100 h-100"
								></Link>
							</div>
						</div>
						<div className="job-info">
							<ul className="job-metainfo list-unstyle">
								<li className="fs-13 fw-medium bg-gin">
									{job.job_type}
								</li>
								<li className="fs-13 fw-medium bg-mystic">
									{job.office_start_time} -{" "}
									{job.office_end_time}
								</li>
							</ul>
							<h3 className="fs-18 fw-medium">
								<Link href={`/${lang}/job/${job.slug}`}>
									{job.title}
								</Link>
							</h3>
							<ul className="job-desc-meta list-unstyle">
								<li className="fs-14">
									<Image
										src="/images/icons/map.svg"
										alt="Map Icon"
										width="20"
										height="20"
									/>
									{job.location}
								</li>
								<li className="fs-14">
									<Image
										src="/images/icons/calendar.svg"
										alt="Calendar Icon"
										width="20"
										height="20"
									/>
									{dateInputFormate(job.created_at)}
								</li>
								<li className="fs-14">
									<Image
										src="/images/icons/cash.svg"
										alt="Money Icon"
										width="20"
										height="20"
									/>
									<span className="fw-semibold">
										{job.salary_range}
									</span>
								</li>
							</ul>
							<div className="job-action d-flex flex-wrap align-items-center justify-content-between">
								{currentUser ? (
									<HasApplied
										jobId={job.id}
										userId={currentUser.id}
										applications={job.applications}
										slug={job.slug}
									/>
								) : (
									<Link
										href={`/${lang}/job/${job.slug}/apply`}
										className="btn style-two"
									>
										Apply Now
									</Link>
								)}

								<Bookmark
									jobId={job.id}
									currentUser={currentUser}
								/>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default JobList;
