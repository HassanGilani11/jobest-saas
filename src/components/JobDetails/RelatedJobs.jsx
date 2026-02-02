"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios";
import { dateInputFormate } from "@/utils/dateFormat";

const RelatedJobs = () => {
	const { lang, slug } = useParams();
	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		const fetchJobs = async () => {
			axios
				.get(`/api/jobs/related-jobs/${slug}`)
				.then((response) => {
					setJobs(response.data);
				})
				.catch((error) => {
					console.log(error.response);
				});
		};

		fetchJobs();
	}, [slug]);
	return (
		<div className="row mt-4">
			<div className="col-xl-8">
				<div className="section-title style-one mb-30">
					<h4>
						Related <strong>Jobs</strong>
					</h4>
				</div>
				{jobs.map((job) => (
					<div
						key={job.id}
						className="job-card style-eight d-flex flex-wrap align-items-center justify-content-between round-10 bg-haze mb-20 transition"
					>
						<div className="job-title-wrap d-flex flex-wrap align-items-center">
							<div className="employer-logo bg-white d-flex flex-column align-items-center justify-content-center round-20">
								<Image
									src={job.company.logo_url}
									alt="Employre Logo"
									width="50"
									height="50"
								/>
							</div>
							<div className="job-title">
								<ul className="job-taglist list-unstyle">
									<li className="d-inline-block">
										<Link
											href={`/${lang}/company/${job.company.slug}`}
											className="fs-14"
										>
											{job.company.name}
										</Link>
									</li>
								</ul>
								<h3 className="fs-20 fw-semibold">
									<Link href={`/${lang}/job/${job.slug}`}>
										{job.title}
									</Link>
								</h3>
							</div>
						</div>
						<div className="job-metainfo-wrap">
							<ul className="job-metainfo list-unstyle mb-2">
								{job.featured && (
									<li className="fs-13 fw-medium bg-violet">
										Featured
									</li>
								)}
								<li className="fs-13 fw-medium bg-gin">
									{job.job_type}
								</li>
								<li className="fs-13 fw-medium bg-mystic">
									{job.position}
								</li>
							</ul>
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
									{job.salary_range}
								</li>
							</ul>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default RelatedJobs;
