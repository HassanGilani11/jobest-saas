"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const HasApplied = ({ jobId, userId, applications, slug }) => {
	const { lang } = useParams();
	// Function to check if the job has already been applied for by the user
	const hasApplied = () => {
		// Check if there's an application with the same jobId and userId
		return applications.some(
			(application) =>
				application.userId === userId && application.jobId === jobId
		);
	};

	return (
		<>
			{hasApplied() ? (
				<button className="btn style-four" disabled>
					Applied
				</button>
			) : (
				<Link
					href={`/${lang}/job/${slug}/apply`}
					className="btn style-four"
				>
					Apply Now
				</Link>
			)}
		</>
	);
};

export default HasApplied;
