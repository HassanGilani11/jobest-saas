"use client";
import React from "react";
import Image from "next/image";
import Company from "./Company";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { useParams } from "next/navigation";

const DetailsContent = ({ job, currentUser }) => {
	const { lang } = useParams();
	return (
		<div className="row">
			<div className="col-xl-8">
				<div className="job-desc border-0 p-0 shadow-none">
					<Company
						applications={job.applications}
						jobId={job.id}
						currentUser={currentUser}
						cmp={job.company}
						category={job.category}
						slug={job.slug}
					/>
					<h1 className="fs-24">{job.title}</h1>
					<div className="job-author fs-14 d-flex align-items-center">
						<span className="author-img rounded-circle">
							<Image
								src={
									job.user.image
										? job.user.image
										: "/images/blog/author-1.jpg"
								}
								alt="Image"
								className="rounded-circle"
								width={55}
								height={55}
							/>
						</span>
						Posted by{" "}
						<Link
							href={`/${lang}/author/${job.user.id}`}
							className="ms-1 text-title fw-semibold text-decoration-underline"
						>
							{job.user.name}
						</Link>
					</div>
					<ul className="job-metainfo list-unstyle">
						<li className="fs-13 fw-medium bg-gin">
							{job.job_type}
						</li>
						<li className="fs-13 fw-medium bg-mystic">
							{job.position}
						</li>
						<li className="fs-13 fw-medium bg-transparent text-para">
							{job.applications.length} applicants
						</li>
					</ul>

					<div className="single-para">
						<h6>Job description</h6>
						<p>{job.description}</p>
					</div>

					<hr />
					<div className="post-metaoption d-flex flex-wrap justify-content-between mt-35 mb-15">
						<h6 className="fs-16 mb-0 fw-semibold">
							Share the job post
						</h6>
						<div className="post-share d-flex align-items-center justify-content-md-end">
							<ul className="social-profile style-one list-unstyle">
								<li>
									<a
										href="https://www.facebook.com"
										target="_blank"
										className="d-flex flex-column align-items-center justify-content-center rounded-circle transition"
									>
										<i className="ri-facebook-fill"></i>
									</a>
								</li>
								<li>
									<a
										href="https://www.twitter.com"
										target="_blank"
										className="d-flex flex-column align-items-center justify-content-center rounded-circle transition"
									>
										<i className="ri-twitter-x-fill"></i>
									</a>
								</li>
								<li>
									<a
										href="https://www.instagram.com"
										target="_blank"
										className="d-flex flex-column align-items-center justify-content-center rounded-circle transition"
									>
										<i className="ri-instagram-fill"></i>
									</a>
								</li>
								<li>
									<a
										href="https://www.linkedin.com"
										target="_blank"
										className="d-flex flex-column align-items-center justify-content-center rounded-circle transition"
									>
										<i className="ri-linkedin-fill"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<Sidebar job={job} />
		</div>
	);
};

export default DetailsContent;
