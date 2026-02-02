"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Bookmark from "../Bookmark";
import HasApplied from "./HasApplied";

const Company = ({ cmp, category, jobId, currentUser, applications, slug }) => {
	const { lang } = useParams();
	return (
		<div className="single-job-header d-flex align-items-center justify-content-between">
			<div className="employer-name d-flex align-items-center">
				<div className="employer-logo d-flex flex-column align-items-center justify-content-center round-10">
					<Image
						src={cmp.logo_url}
						alt="Company Logo"
						width="49"
						height="50"
					/>
				</div>
				<span className="fs-14">
					by{" "}
					<Link
						href={`/${lang}/company/${cmp.slug}`}
						className="text-decoration-underline fw-semibold text-title"
					>
						{cmp.name}
					</Link>{" "}
					in{" "}
					<Link
						href={`/${lang}/jobs/category/${category.slug}`}
						className="fw-semibold text-title"
					>
						{category.label}
					</Link>
				</span>
			</div>
			<div className="single-job-action d-flex align-items-center">
				{currentUser ? (
					<HasApplied
						applications={applications}
						jobId={jobId}
						userId={currentUser.id}
						slug={slug}
					/>
				) : (
					<Link
						href={`/${lang}/job/${slug}/apply`}
						className="btn style-two"
					>
						Apply Now
					</Link>
				)}

				<div className="db-action-btn ms-3">
					<Bookmark jobId={jobId} currentUser={currentUser} />
				</div>
			</div>
		</div>
	);
};

export default Company;
