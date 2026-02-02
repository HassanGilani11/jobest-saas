"use client";
import Bookmark from "@/components/Bookmark";
import { readableDate } from "@/utils/dateFormat";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const JobList = ({ job, currentUser }) => {
	const [menu, setMenu] = useState(false);
	const { lang } = useParams();

	return (
		<tr>
			<td>
				<div className="db-job-card">
					<div className="job-title-wrap d-flex align-items-center">
						<div className="employer-logo d-flex flex-column align-items-center justify-content-center round-20">
							<Image
								src={job.company.logo_url}
								alt={job.company.name}
								width={90}
								height={90}
							/>
						</div>
						<div className="job-title">
							<Link
								href={`/${lang}/company/${job.company.slug}`}
								className="fs-14 d-block mb-1 text-paraThree"
							>
								{job.company.name}
							</Link>
							<h3 className="fs-20 fw-semibold">
								<Link href={`/${lang}/job/${job.slug}`}>
									{job.title}
								</Link>
							</h3>
						</div>
					</div>
				</div>
			</td>
			<td>{readableDate(job.created_at)}</td>
			<td>{job.applications.length}</td>
			<td> {job.status}</td>
			<td>
				<Bookmark currentUser={currentUser} jobId={job.id} />
			</td>
		</tr>
	);
};

export default JobList;
