"use client";
import React from "react";
import Image from "next/image";
import Contact from "./Contact";
import { readableDate } from "@/utils/dateFormat";

const SidebarInfo = ({ company }) => {
	return (
		<div className="col-xl-4">
			<div className="sidebar style-two">
				<div className="sidebar-widget style-two bg-aqua round-10">
					<h3 className="sidebar-widget-title fs-20 fw-semibold mb-25">
						Employer Information
					</h3>
					<div className="single-job-feature-wrap style-two">
						<div className="job-feature-item d-flex flex-wrap align-items-center">
							<div className="feature-icon d-flex flex-column align-items-center justify-content-center round-10 bg-white">
								<Image
									src="/images/icons/calendar-month.svg"
									alt="Icon"
									width="24"
									height="24"
								/>
							</div>
							<div className="feature-info">
								<span className="fs-14">Founded Date</span>
								<h6 className="fs-14 fw-semibold mb-0">
									{readableDate(company.founded)}
								</h6>
							</div>
						</div>
						<div className="job-feature-item d-flex flex-wrap align-items-center">
							<div className="feature-icon d-flex flex-column align-items-center justify-content-center round-10 bg-white">
								<Image
									src="/images/icons/calendar-month.svg"
									alt="Icon"
									width="24"
									height="24"
								/>
							</div>
							<div className="feature-info">
								<span className="fs-14">Location</span>
								<h6 className="fs-14 fw-semibold mb-0">
									{company.location}
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
								<span className="fs-14">Revenue</span>
								<h6 className="fs-14 fw-semibold mb-0">
									{company.revenue}
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
									{company.phone}
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
									{company.email}
								</h6>
							</div>
						</div>
						<div className="job-feature-item d-flex flex-wrap align-items-center">
							<div className="feature-icon d-flex flex-column align-items-center justify-content-center round-10 bg-white">
								<Image
									src="/images/icons/user-star.svg"
									alt="Icon"
									width="24"
									height="24"
								/>
							</div>
							<div className="feature-info">
								<span className="fs-14">Company Size</span>
								<h6 className="fs-14 fw-semibold mb-0">
									{company.company_size}
								</h6>
							</div>
						</div>
					</div>
				</div>
				<div className="sidebar-widget style-two bg-aqua round-10">
					<div className="post-metaoption d-flex flex-wrap justify-content-between">
						<h6 className="fs-20 mb-0 fw-semibold">Links</h6>
						<div className="post-share d-flex align-items-center justify-content-md-end">
							<ul className="social-profile style-one list-unstyle">
								<li>
									<a
										href={company.website_url}
										target="_blank"
										className="d-flex flex-column align-items-center justify-content-center rounded-circle transition"
									>
										<i className="ri-global-line"></i>
									</a>
								</li>
								<li>
									<a
										href={company.facebook_url}
										target="_blank"
										className="d-flex flex-column align-items-center justify-content-center rounded-circle transition"
									>
										<i className="ri-facebook-fill"></i>
									</a>
								</li>
								<li>
									<a
										href={company.youtube_url}
										target="_blank"
										className="d-flex flex-column align-items-center justify-content-center rounded-circle transition"
									>
										<i className="ri-youtube-fill"></i>
									</a>
								</li>
								<li>
									<a
										href={company.twitter_url}
										target="_blank"
										className="d-flex flex-column align-items-center justify-content-center rounded-circle transition"
									>
										<i className="ri-twitter-x-fill"></i>
									</a>
								</li>
								<li>
									<a
										href={company.linkedin_url}
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

export default SidebarInfo;
