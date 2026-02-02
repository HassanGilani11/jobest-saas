"use client";
import React from "react";
import Image from "next/image";
import { readableDate } from "@/utils/dateFormat";
import Tags from "./Tags";

const Sidebar = ({ job }) => {
	return (
		<div className="col-xxl-3 offset-xxl-1 col-xl-4">
			<div className="sidebar style-two">
				<div className="sidebar-widget style-two bg-aqua round-10">
					<h3 className="sidebar-widget-title fs-18 fw-semibold mb-25">
						Jobs Overview
					</h3>
					<div className="single-job-feature-wrap style-two bg-aqua round-4">
						<div className="job-feature-item d-flex flex-wrap align-items-center">
							<div className="feature-icon bg-white d-flex flex-column align-items-center justify-content-center round-10">
								<Image
									src="/images/icons/calendar-month.svg"
									alt="Icon"
									width="24"
									height="24"
								/>
							</div>
							<div className="feature-info">
								<span className="fs-14 text-ash">
									Date Posted
								</span>
								<h6 className="fs-14 text_dark fw-semibold mb-0">
									{readableDate(job.created_at)}
								</h6>
							</div>
						</div>
						<div className="job-feature-item d-flex flex-wrap align-items-center">
							<div className="feature-icon bg-white d-flex flex-column align-items-center justify-content-center round-10">
								<Image
									src="/images/icons/clock-green.svg"
									alt="Icon"
									width="24"
									height="24"
								/>
							</div>
							<div className="feature-info">
								<span className="fs-14 text-ash">
									Office Days
								</span>
								<h6 className="fs-14 text_dark fw-semibold mb-0">
									{job.office_days}
								</h6>
							</div>
						</div>
						<div className="job-feature-item d-flex flex-wrap align-items-center">
							<div className="feature-icon bg-white d-flex flex-column align-items-center justify-content-center round-10">
								<Image
									src="/images/icons/star-green.svg"
									alt="Icon"
									width="24"
									height="24"
								/>
							</div>
							<div className="feature-info">
								<span className="fs-14 text-ash">
									Experience
								</span>
								<h6 className="fs-14 text_dark fw-semibold mb-0">
									{job.experience}
								</h6>
							</div>
						</div>
						<div className="job-feature-item d-flex flex-wrap align-items-center">
							<div className="feature-icon bg-white d-flex flex-column align-items-center justify-content-center round-10">
								<Image
									src="/images/icons/map-green.svg"
									alt="Icon"
									width="24"
									height="24"
								/>
							</div>
							<div className="feature-info">
								<span className="fs-14 text-ash">Location</span>
								<h6 className="fs-14 text_dark fw-semibold mb-0">
									{job.location}
								</h6>
							</div>
						</div>
						<div className="job-feature-item d-flex flex-wrap align-items-center">
							<div className="feature-icon bg-white d-flex flex-column align-items-center justify-content-center round-10">
								<Image
									src="/images/icons/luggage.svg"
									alt="Icon"
									width="24"
									height="24"
								/>
							</div>
							<div className="feature-info">
								<span className="fs-14 text-ash">Holidays</span>
								<h6 className="fs-14 text_dark fw-semibold mb-0">
									{job.holidays}
								</h6>
							</div>
						</div>

						<div className="job-feature-item d-flex flex-wrap align-items-center">
							<div className="feature-icon bg-white d-flex flex-column align-items-center justify-content-center round-10">
								<Image
									src="/images/icons/coin.svg"
									alt="Icon"
									width="24"
									height="24"
								/>
							</div>
							<div className="feature-info">
								<span className="fs-14 text-ash">
									Salary Range
								</span>
								<h6 className="fs-14 text_dark fw-semibold mb-0">
									{job.salary_range}
								</h6>
							</div>
						</div>
						<div className="job-feature-item d-flex flex-wrap align-items-center">
							<div className="feature-icon bg-white d-flex flex-column align-items-center justify-content-center round-10">
								<Image
									src="/images/icons/user-star.svg"
									alt="Icon"
									width="24"
									height="24"
								/>
							</div>
							<div className="feature-info">
								<span className="fs-14 text-ash">Position</span>
								<h6 className="fs-14 text_dark fw-semibold mb-0">
									{job.position}
								</h6>
							</div>
						</div>
						<div className="job-feature-item d-flex flex-wrap align-items-center">
							<div className="feature-icon bg-white d-flex flex-column align-items-center justify-content-center round-10">
								<Image
									src="/images/icons/chart-arrows-vertical.svg"
									alt="Icon"
									width="24"
									height="24"
								/>
							</div>
							<div className="feature-info">
								<span className="fs-14 text-ash">
									Office time
								</span>
								<h6 className="fs-14 text_dark fw-semibold mb-0">
									{job.office_start_time} -{" "}
									{job.office_end_time}
								</h6>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="sidebar-widget style-two bg-aqua round-10">
					<h3 className="sidebar-widget-title fs-20 font-semibold">
						Job Location
					</h3>
					<div className="comp-map">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd"></iframe>
					</div>
				</div> */}
				<Tags tags={job.tags} />
			</div>
		</div>
	);
};

export default Sidebar;
