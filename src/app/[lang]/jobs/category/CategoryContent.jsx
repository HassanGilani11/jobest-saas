"use client";

import JobList from "./JobList";

const CategoryContent = ({ jobs, currentUser }) => {
	return (
		<div className="container ptb-100">
			<div className="row">
				{jobs.map((job) => (
					<JobList key={job.id} job={job} currentUser={currentUser} />
				))}
			</div>
		</div>
	);
};

export default CategoryContent;
