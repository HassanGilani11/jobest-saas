"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { dateInputFormate } from "@/utils/dateFormat";
import HasApplied from "../JobDetails/HasApplied";
import Bookmark from "../Bookmark";
import axios from "axios";

const FeaturedJobs = ({ popularCategories, jobs, currentUser }) => {
	const [featuresJob, setFeaturedJobs] = useState(jobs || []);
	const [isActive, setIsActive] = useState(true);
	const { lang } = useParams();

	const fetchCatJobs = async (catSlug) => {
		await axios
			.get(`/api/jobs/homepage/${catSlug}`)
			.then((response) => {
				const { jobs } = response.data;
				console.log(isActive);
				setFeaturedJobs(jobs);
				setIsActive(false);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	return (
		<div className="featured-job-wrap style-one pt-100 position-relative index-1">
			<Image
				src="/images/section-shape-3.png"
				alt="Shape"
				className="section-shape-one position-absolute moveHorizontal sm-none"
				width={53}
				height={52}
			/>
			<Image
				src="/images/section-shape-4.png"
				alt="Shape"
				className="section-shape-two position-absolute bounce sm-none"
				width={38}
				height={45}
			/>
			<div className="container">
				<div className="section-title style-one text-center mb-25">
					<h2
						className="mb-0 title-anim wow animate__animated animate__fadeInUp"
						data-wow-duration="1.4s"
						data-wow-delay="0.1s"
					>
						<strong>Featured</strong> Jobs
					</h2>
				</div>
				<ul
					className="nav nav-tabs job-tablist d-flex justify-content-center mb-30 wow animate__animated animate__fadeInUp"
					data-wow-duration="1.4s"
					data-wow-delay="0.2s"
					role="tablist"
				>
					<li className="nav-item">
						<button
							className={`nav-link ${isActive ? "active" : ""}`}
							type="button"
							role="tab"
							onClick={() => setFeaturedJobs(jobs)}
						>
							All
						</button>
					</li>
					{popularCategories.map((cat) => (
						<li key={cat.id} className="nav-item">
							<button
								className="nav-link"
								type="button"
								onClick={() => fetchCatJobs(cat.slug)}
							>
								{cat.label}
							</button>
						</li>
					))}
				</ul>
				<div
					className="tab-content product-tab-content mb-75 wow animate__animated animate__fadeInUp"
					data-wow-duration="1.4s"
					data-wow-delay="0.2s"
				>
					<div className="tab-pane fade active show" role="tabpanel">
						<div className="job-card-wrap">
							{featuresJob.length > 0
								? featuresJob.map((job) => (
										<div
											key={job.id}
											className="job-card style-one d-flex flex-wrap align-items-center justify-content-between round-10 bg-white mb-20 transition"
										>
											<div className="job-title-wrap d-flex flex-wrap align-items-center">
												<div className="employer-logo d-flex flex-column align-items-center justify-content-center round-20">
													<Image
														src={
															job.company.logo_url
														}
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
																{
																	job.company
																		.name
																}
															</Link>
														</li>
													</ul>
													<h3 className="fw-semibold">
														<Link
															href={`/${lang}/job/${job.slug}`}
														>
															{job.title}
														</Link>
													</h3>
												</div>
											</div>
											<div className="job-metainfo-wrap">
												<ul className="job-metainfo list-unstyle">
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
													<li className="fs-13 fw-medium bg-roman">
														{
															job.applications
																.length
														}{" "}
														applicants
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
														{dateInputFormate(
															job.created_at
														)}
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
											<div className="job-action d-flex flex-wrap align-items-center justify-content-lg-end justify-content-start">
												{currentUser ? (
													<HasApplied
														jobId={job.id}
														userId={currentUser.id}
														applications={
															job.applications
														}
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
								  ))
								: "Empty"}
						</div>
					</div>
				</div>
				<div className="text-center">
					{currentUser ? (
						<div className="section-link fs-15 bg-white d-inline-block text-center mx-auto">
							Do you want to find more jobs?{" "}
							<Link
								href={`/${lang}/jobs`}
								className="link style-one fw-bold"
							>
								Find Now{" "}
								<Image
									src="/images/icons/right-arrow-small.svg"
									alt="Arrow"
									width="14"
									height="12"
								/>
							</Link>
						</div>
					) : (
						<div className="section-link fs-15 bg-white d-inline-block text-center mx-auto">
							Do you want to post a job like this?{" "}
							<Link
								href={`/${lang}/register`}
								className="link style-one fw-bold"
							>
								Join Now{" "}
								<Image
									src="/images/icons/right-arrow-small.svg"
									alt="Arrow"
									width="14"
									height="12"
								/>
							</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default FeaturedJobs;
