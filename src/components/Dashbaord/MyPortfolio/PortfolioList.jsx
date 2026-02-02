"use client";
import React from "react";
import Image from "next/image";

const PortfolioList = ({ prt, handleEdit, onDelete }) => {
	const { project_name, project_image, project_url, description } = prt;
	return (
		<div className="candidate-card style-two mb-30 p-4 transition">
			<div className="mb-4 position-relative">
				<div
					className="d-flex align-items-center gap-1 position-absolute"
					style={{ right: "5px", top: "5px" }}
				>
					<div>
						<button
							className="btn btn-success btn-sm p-0 rounded"
							style={{
								width: "25px",
								height: "25px",
							}}
							onClick={() => handleEdit(prt)}
						>
							<i className="ri-pencil-line"></i>
						</button>
					</div>
					<div>
						<button
							className="btn btn-danger btn-sm p-0 rounded"
							style={{
								width: "25px",
								height: "25px",
							}}
							onClick={onDelete}
						>
							<i className="ri-delete-bin-line"></i>
						</button>
					</div>
				</div>
				<Image
					src={project_image}
					alt="Candidate"
					width={570}
					height={658}
				/>
			</div>
			<div>
				<h5 className="mb-3">{project_name}</h5>
				<p>{description}</p>
			</div>
			<a
				href={project_url}
				className="btn style-seven d-block"
				target="_blank"
			>
				View Link
			</a>
		</div>
	);
};

export default PortfolioList;
