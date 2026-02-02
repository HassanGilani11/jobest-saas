"use client";

import { readableDate } from "@/utils/dateFormat";

const Education = ({ edu }) => {
	return (
		<div className="edu-item">
			<span className="edu-icon bg-one d-flex flex-column align-items-center justify-content-center rounded-circle mb-1">
				{edu.degree[0]}
			</span>
			<div className="edu-info">
				<span className="fs-14 d-block mb-1">{edu.institution}</span>
				<h6>{edu.degree}</h6>
				<p className="mb-0">{edu.description}</p>
				<span className="badge py-2 px-3 mt-3 text-bg-success">
					{readableDate(edu.start_date)} -{" "}
					{edu.end_date ? readableDate(edu.end_date) : "Present"}
				</span>
			</div>
		</div>
	);
};

export default Education;
