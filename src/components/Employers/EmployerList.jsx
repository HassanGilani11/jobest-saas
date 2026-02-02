"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const EmployerList = ({ company }) => {
	const { lang } = useParams();
	return (
		<div className="employer-card style-two bg-haze d-flex flex-wrap align-items-center justify-content-between round-10 mb-20 transition">
			<div className="employer-title-wrap d-flex flex-wrap align-items-center">
				<div className="employer-logo bg-white d-flex flex-column align-items-center justify-content-center round-20">
					<Image
						src={company.logo_url}
						alt="Employre Logo"
						width="50"
						height="50"
					/>
				</div>
				<div className="employer-title">
					<span className="fs-14 d-block">
						{company.company_size} Team Members
					</span>
					<h3 className="fs-20 fw-semibold">
						<Link href={`/${lang}/company/${company.slug}`}>
							{company.name}
						</Link>
					</h3>
					<span className="employer-location d-block fs-14">
						<Image
							src={"/images/icons/map-blue.svg"}
							alt="Map Icon"
							width="16"
							height="18"
						/>
						{company.location}
					</span>
				</div>
			</div>
			<div className="employer-action d-flex flex-wrap align-items-center justify-content-md-end justify-content-between">
				<Link
					href={`/${lang}/company/${company.slug}`}
					className="open-jobs-link fs-14 fw-medium"
				>
					{company.jobs.length} Open Jobs
				</Link>
				<button className="add-to-bookmark bg-white border-0 d-flex flex-column justify-content-center align-items-center rounded-circle transition">
					<Image
						src="/images/icons/bookmark.svg"
						alt="Bookmark Icon"
						className="transition"
						width="12"
						height="18"
					/>
				</button>
			</div>
		</div>
	);
};

export default EmployerList;
