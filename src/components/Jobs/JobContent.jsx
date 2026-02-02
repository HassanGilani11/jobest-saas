"use client";
import React from "react";
import JobFilter from "./JobFilter";
import JobFilterResult from "./JobFilterResult";
import JobList from "./JobList";
import Pagination from "./Pagination";

const JobContent = ({
	jobs,
	tags,
	currentUser,
	totalPages,
	searchParams,
	totalItems,
}) => {
	// console.log(tags);
	return (
		<div className="container ptb-100">
			<div className="row">
				<JobFilter tags={tags} />
				<div className="col-xl-8 order-xl-2 order-1">
					<JobFilterResult
						totalItems={totalItems}
						searchParams={searchParams}
					/>

					<div className="row justify-content-center">
						<JobList jobs={jobs} currentUser={currentUser} />
					</div>
					<Pagination
						totalPages={totalPages}
						searchParams={searchParams}
					/>
				</div>
			</div>
		</div>
	);
};

export default JobContent;
