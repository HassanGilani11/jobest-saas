"use client";

import axios from "axios";
import JobList from "./JobList";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const JobsContent = ({ jobs }) => {
	const router = useRouter();
	const { lang } = useParams();
	const handleDelete = async (jobId) => {
		const isConfirmed = window.confirm(
			"Are you sure you want to delete this job?"
		);
		if (isConfirmed) {
			axios
				.delete(`/api/jobs/${jobId}`)
				.then((response) => {
					toast.success(response.data.message);
					router.refresh();
				})
				.catch((error) => {
					console.log(error.response);
				});
		} else {
			toast.error("Job deletion canceled by the user.");
		}
	};
	const handleFeatured = async (jobId) => {
		axios
			.put(`/api/jobs/${jobId}`)
			.then((response) => {
				toast.success(response.data.message);
				router.refresh();
			})
			.catch((error) => {
				console.log(error.response);
			});
	};
	return (
		<div className="col-xl-6">
			<div className="db-content-box bg-white mb-25">
				<h3 className="db-content-title fs-20 fw-bold mb-22">
					<Link href={`/${lang}/admin/dashboard/jobs`}>
						Posted Jobs{" "}
					</Link>
				</h3>
				<div className="db-job-wrapper position-relative">
					{jobs.map((job) => (
						<JobList
							key={job.id}
							job={job}
							onDelete={() => handleDelete(job.id)}
							onFeatured={() => handleFeatured(job.id)}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default JobsContent;
