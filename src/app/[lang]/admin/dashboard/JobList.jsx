"use client";
import { dateInputFormate } from "@/utils/dateFormat";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const JobList = ({ job, onDelete, onFeatured }) => {
	const { lang } = useParams();
	const [menu, setMenu] = useState(false);
	return (
		<div className="job-card style-four d-flex flex-wrap align-items-center round-10 position-relative transition">
			<div className="job-title-wrap d-flex flex-wrap align-items-center">
				<div className="employer-logo d-flex flex-column align-items-center justify-content-center bg-white rounded-circle">
					<Image
						alt="Employre Logo"
						src={job.company.logo_url}
						width="50"
						height="50"
					/>
				</div>
				<div className="job-title">
					<Link
						href={`/${lang}/company/${job.company.slug}`}
						className="fs-14 text-para"
					>
						{job.company.name}
					</Link>
					<h3 className="fw-semibold">
						<Link href={`/${lang}/job/${job.slug}`}>
							{job.title}
						</Link>
					</h3>
				</div>
			</div>
			<div className="job-metainfo-wrap transition">
				<ul className="job-desc-meta list-unstyle">
					<li className="fs-14">
						<Image
							src="/images/icons/calendar.svg"
							alt="Calendar Icon"
							width="20"
							height="20"
						/>
						{dateInputFormate(job.created_at)}
					</li>
				</ul>
				<ul className="job-brief list-unstyle">
					<li className="fs-14 fw-semibold text-title">
						{job.location}
					</li>
				</ul>
			</div>
			<div className="db-action-btn ms-auto">
				<button
					className="dropdown-toggle d-flex align-items-center position-relative bg-transparent border-0 transition"
					type="button"
					onClick={() => setMenu(!menu)}
				>
					<Image
						src="/images/icons/dots.svg"
						alt="Dot Icon"
						className="action-btn"
						width="18"
						height="4"
					/>
				</button>
				<div
					className={`dropdown-menu top-1 end-0 border-0 ${
						menu ? "show" : ""
					}`}
				>
					<ul className="list-unstyle">
						<li>
							<Link href={`/${lang}/job/${job.slug}`}>
								View Job
							</Link>
						</li>
						<li>
							<button
								onClick={() => {
									onFeatured(job.id);
									setMenu(!menu);
								}}
								className="bg-transparent border-0 p-0"
							>
								{job.featured
									? "Remove Featured"
									: "Set Featured"}
							</button>
						</li>
						<li>
							<button
								onClick={onDelete}
								className="bg-transparent border-0 p-0"
							>
								Delete
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default JobList;
