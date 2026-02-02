"use client";
import React from "react";
import CandidateSidebar from "./CandidateSidebar";
import CandidateFilter from "./CandidateFilter";
import CandidateList from "./CandidateList";
import Pagination from "../Jobs/Pagination";

const CandidateContent = ({
	candidates,
	totalPages,
	totalCandidates,
	searchParams,
}) => {
	return (
		<div className="container ptb-100">
			<div className="row">
				<CandidateSidebar />

				<div className="col-xl-8 order-xl-2 order-1">
					<CandidateFilter
						totalCandidates={totalCandidates}
						searchParams={searchParams}
					/>
					<div className="row justify-content-center">
						{candidates.map((candid) => (
							<CandidateList key={candid.id} candid={candid} />
						))}
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

export default CandidateContent;
