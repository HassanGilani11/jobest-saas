"use client";
import Bookmark from "@/components/Bookmark";
import HasApplied from "@/components/JobDetails/HasApplied";
import { dateInputFormate, readableDate } from "@/utils/dateFormat";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const JobList = ({ job, currentUser }) => {
	const { lang } = useParams();
	return (
		<div className="job-card-wrap">
			<div className="job-card style-one d-flex flex-wrap align-items-center justify-content-between round-10 bg-haze mb-20 transition">
				<div className="job-title-wrap d-flex flex-wrap align-items-center">
					<div className="employer-logo bg-white d-flex flex-column align-items-center justify-content-center round-20">
						<Image
							src={job.job.company.logo_url}
							alt="Employre Logo"
							width={50}
							height={50}
						/>
					</div>
					<div className="job-title">
						<ul className="job-taglist list-unstyle">
							<li className="d-inline-block">
								<Link
									href={`/${lang}/jobs/category/${job.job.category.slug}`}
									className="fs-14"
								>
									{job.job.category.label}
								</Link>
							</li>
						</ul>
						<h3 className="fw-semibold">
							<Link href={`/${lang}/job/${job.job.slug}`}>
								{job.job.title}
							</Link>
						</h3>
					</div>
				</div>
				<div className="job-metainfo-wrap">
					<ul className="job-metainfo list-unstyle">
						{job.job.featured && (
							<li className="fs-13 fw-medium bg-violet">
								Featured
							</li>
						)}
						<li className="fs-13 fw-medium bg-gin" title="Type">
							{job.job.job_type}
						</li>
						<li
							className="fs-13 fw-medium bg-mystic"
							title="Office time"
						>
							{job.job.office_start_time} -{" "}
							{job.job.office_end_time}
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
							{job.job.location}
						</li>
						<li className="fs-14">
							<Image
								src="/images/icons/calendar.svg"
								alt="Calendar Icon"
								width="20"
								height="20"
							/>
							{dateInputFormate(job.job.created_at)}
						</li>
						<li className="fs-14">
							<Image
								src="/images/icons/cash.svg"
								alt="Money Icon"
								width="20"
								height="20"
							/>
							<span className="fw-semibold">
								{job.job.salary_range}
							</span>
						</li>
					</ul>
				</div>
				<div className="job-action d-flex flex-wrap align-items-center justify-content-lg-end justify-content-start">
					{currentUser ? (
						<HasApplied
							jobId={job.job.id}
							userId={currentUser.id}
							applications={job.job.applications}
							slug={job.job.slug}
						/>
					) : (
						<Link
							href={`/${lang}/job/${job.slug}/apply`}
							className="btn style-two"
						>
							Apply Now
						</Link>
					)}

					<Bookmark jobId={job.job.id} currentUser={currentUser} />
				</div>
			</div>
		</div>
	);
};

export default JobList;
