"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Contact from "./Contact";

const Sidebar = ({ candidate }) => {
	const { lang } = useParams();
	return (
		<div className="col-xl-4">
			<div className="sidebar style-two">
				<div className="sidebar-widget style-two bg-aqua round-10">
					<div className="candidate-card style-two p-0 text-center position-relative index-1 mb-30 transition">
						<div className="candidate-img-wrap mb-20">
							<div className="candidate-img rounded-circle position-relative">
								<Image
									src={
										candidate.image
											? candidate.image
											: "/images/candidates/candidate-8.png"
									}
									alt="Candidate"
									className="rounded-circle"
									width="90"
									height="90"
								/>
								<span className="online-status active rounded-circle position-absolute d-inline-block"></span>
							</div>
							<h3 className="fs-20">
								<Link
									href={`/${lang}/candidate/${candidate.id}`}
								>
									{candidate.name}
								</Link>
							</h3>
							<span className="d-block">
								{candidate.designation}
							</span>
						</div>
						<Link
							href={candidate.cv ? candidate.cv : "#"}
							className="btn style-four d-block"
							target="_blank"
						>
							Download CV{" "}
							<Image
								src="/images/icons/files.svg"
								alt="File"
								className="ms-1"
								width="14"
								height="18"
							/>
						</Link>
					</div>
					<div className="single-job-feature-wrap style-two">
						<div className="job-feature-item d-flex flex-wrap align-items-center">
							<div className="feature-icon d-flex flex-column align-items-center justify-content-center round-10 bg-white">
								<Image
									src="/images/icons/calendar-month.svg"
									alt="Icon"
									width="14"
									height="18"
								/>
							</div>
							<div className="feature-info">
								<span className="fs-14">Location</span>
								<h6 className="fs-14 fw-semibold mb-0">
									{candidate.profile
										? candidate.profile.location
										: "N/A"}
								</h6>
							</div>
						</div>
						<div className="job-feature-item d-flex flex-wrap align-items-center">
							<div className="feature-icon d-flex flex-column align-items-center justify-content-center round-10 bg-white">
								<Image
									src="/images/icons/clock-green.svg"
									alt="Icon"
									width="24"
									height="24"
								/>
							</div>
							<div className="feature-info">
								<span className="fs-14">Phone No</span>
								<h6 className="fs-14 fw-semibold mb-0">
									{candidate.profile
										? candidate.profile.phone
										: "N/A"}
								</h6>
							</div>
						</div>
						<div className="job-feature-item d-flex flex-wrap align-items-center">
							<div className="feature-icon d-flex flex-column align-items-center justify-content-center round-10 bg-white">
								<Image
									src="/images/icons/luggage.svg"
									alt="Icon"
									width="24"
									height="24"
								/>
							</div>
							<div className="feature-info">
								<span className="fs-14">Email</span>
								<h6 className="fs-14 fw-semibold mb-0">
									{candidate.email}
								</h6>
							</div>
						</div>

						<div className="job-feature-item d-flex flex-wrap align-items-center">
							<div className="feature-icon d-flex flex-column align-items-center justify-content-center round-10 bg-white">
								<Image
									src="/images/icons/coin.svg"
									alt="Icon"
									width="24"
									height="24"
								/>
							</div>
							<div className="feature-info">
								<span className="fs-14">Salary Range</span>
								<h6 className="fs-14 fw-semibold mb-0">
									{candidate.expected_salary}
								</h6>
							</div>
						</div>
					</div>
				</div>
				<div className="sidebar-widget style-two bg-aqua round-10">
					<div className="post-metaoption d-flex flex-wrap justify-content-between">
						<h6 className="fs-20 mb-0 fw-semibold">
							Social Presence
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
										href="https://www.instagram.com"
										target="_blank"
										className="d-flex flex-column align-items-center justify-content-center rounded-circle transition"
									>
										<i className="ri-instagram-fill"></i>
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

				<Contact />
			</div>
		</div>
	);
};

export default Sidebar;
