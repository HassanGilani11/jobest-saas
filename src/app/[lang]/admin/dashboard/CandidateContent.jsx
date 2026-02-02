"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import CandidList from "./CandidList";

const CandidateContent = ({ candidates }) => {
	const { lang } = useParams();
	return (
		<div className="col-xl-6">
			<div className="db-content-box bg-white mb-25">
				<h3 className="db-content-title fs-20 fw-bold mb-22">
					<Link href={`/${lang}/admin/dashboard/candidates`}>
						Candidates
					</Link>
				</h3>
				<div className="row">
					{candidates.map((cand) => (
						<CandidList key={cand.id} cand={cand} />
					))}
				</div>
			</div>
		</div>
	);
};

export default CandidateContent;
