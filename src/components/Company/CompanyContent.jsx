"use client";
import React from "react";
import Image from "next/image";
import SidebarInfo from "./SidebarInfo";
import CompanyOpenJobs from "./CompanyOpenJobs";

const CompanyContent = ({ company }) => {
	return (
		<div className="container ptb-100">
			<div className="row">
				<div className="col-xl-8">
					<div className="employer-desc">
						<div className="single-employer-header d-flex flex-wrap align-items-center justify-content-between">
							<div className="employer-title d-flex align-items-center">
								<Image
									src="/images/employer/employer-logo.png"
									alt="Employer Logo"
									width={64}
									height={64}
								/>
								<div>
									<h2 className="mb-0 ms-3">
										{company.name}
									</h2>
									<span className="featured fs-14 ms-3">
										{company._count.jobs} Open Roles
									</span>
								</div>
							</div>
						</div>
						<div className="single-para">
							<h6>Overview</h6>
							<p>{company.description}</p>
						</div>

						<div className="single-para">
							<h6>Intro video</h6>
							<div className="video-wrap position-relative index-1 round-4 my-4">
								<Image
									src="/images/employer/video-bg.jpg"
									alt="Video Background"
									width="1160"
									height="530"
								/>
								<a
									className="play-now ripple d-flex flex-column justify-content-center align-items-center rounded-circle transition"
									href="https://www.youtube.com/watch?v=u31qwQUeGuM"
									target="_blank"
								>
									<Image
										src="/images/icons/play.svg"
										alt="Play Icon"
										className="transition"
										width="20"
										height="22"
									/>
								</a>
							</div>
						</div>
					</div>

					<CompanyOpenJobs jobs={company.jobs} />
				</div>

				<SidebarInfo company={company} />
			</div>
		</div>
	);
};

export default CompanyContent;
