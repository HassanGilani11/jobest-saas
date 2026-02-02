"use client";
import { readableDate } from "@/utils/dateFormat";
import React from "react";

const ExperienceList = ({ ex, handleEdit, onDelete }) => {
	const { company, postion, start_date, end_date, description } = ex;
	return (
		<div className="card mb-3">
			<div className="card-body">
				<h5 className="card-title">{postion}</h5>
				<h6 className="card-subtitle mb-2 text-muted">{company}</h6>
				<p className="card-text">
					<strong>Start Date:</strong> {readableDate(start_date)}
					<br />
					<strong>End Date:</strong>{" "}
					{end_date ? readableDate(end_date) : "Present."}
					<br />
					<strong>Description:</strong> {description}
				</p>
				<button
					className="btn btn-primary btn-sm me-2"
					onClick={() => handleEdit(ex)}
				>
					Edit
				</button>
				<button className="btn btn-danger btn-sm" onClick={onDelete}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default ExperienceList;
