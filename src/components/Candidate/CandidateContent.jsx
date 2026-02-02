"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Education from "./Education";
import Experience from "./Experience";

const CandidateContent = ({ candidate }) => {
	const { description, educations, experiences, portfolios } = candidate;
	return (
		<div className="container ptb-100">
			<div className="row">
				<div className="col-xl-8">
					<div className="employer-desc">
						<div className="single-para">
							<h5>About Candidate</h5>
							<p>{description}</p>
						</div>

						<div className="single-para">
							<h5>Education</h5>
							<div className="edu-item-wrap">
								{educations.length > 0 ? (
									educations.map((edu) => {
										return (
											<Education key={edu.id} edu={edu} />
										);
									})
								) : (
									<div className="edu-item">
										<span className="edu-icon bg-one d-flex flex-column align-items-center justify-content-center rounded-circle mb-1">
											N/A
										</span>
									</div>
								)}
							</div>
						</div>
						<div className="single-para">
							<h5>Work & Experience</h5>
							<div className="edu-item-wrap">
								{experiences.length > 0 ? (
									experiences.map((exp) => (
										<Experience key={exp.id} exp={exp} />
									))
								) : (
									<div className="edu-item ">
										<span className="edu-icon bg-one d-flex flex-column align-items-center justify-content-center rounded-circle mb-1">
											N/A
										</span>
									</div>
								)}
							</div>
						</div>
						<div className="single-para">
							<h5>Portfolio</h5>
							<div className="row">
								{portfolios.map((portfolio) => (
									<div
										key={portfolio.id}
										className="col-md-6"
									>
										<div className="single-img round-4">
											<Image
												src={portfolio.project_image}
												alt="Portfolio Image"
												className="round-4"
												width={570}
												height={658}
											/>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				<Sidebar candidate={candidate} />
			</div>
		</div>
	);
};

export default CandidateContent;
