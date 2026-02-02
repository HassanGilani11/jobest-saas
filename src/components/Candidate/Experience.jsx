import { readableDate } from "@/utils/dateFormat";
import React from "react";

const Experience = ({ exp }) => {
	return (
		<div className="edu-item">
			<span className="edu-icon bg-one d-flex flex-column align-items-center justify-content-center rounded-circle">
				{exp.position[0]}
			</span>
			<div className="edu-info">
				<span className="fs-14 d-block text-purple mb-1">
					{exp.company}
				</span>
				<h6>{exp.position}</h6>
				<p className="mb-0">{exp.description}</p>
				<span className="badge py-2 px-3 mt-3 text-bg-success">
					{readableDate(exp.start_date)} -{" "}
					{exp.end_date ? readableDate(exp.end_date) : "Present"}
				</span>
			</div>
		</div>
	);
};

export default Experience;
