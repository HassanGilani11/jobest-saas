"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CandidList = ({ cand }) => {
	const [menu, setMenu] = useState(false);
	const { lang } = useParams();
	return (
		<div key={cand.id} className="col-lg-6 mb-4">
			<div className="db-candidate-wrapper">
				<div className="db-candidate-card d-flex align-items-center round-10">
					<div className="db-candidate-img rounded-circle">
						<Image
							src={
								cand.image
									? cand.image
									: "/images/candidates/candidate-thumb-1.png"
							}
							alt="Candidate"
							className="rounded-circle"
							width={90}
							height={90}
						/>
					</div>
					<div className="db-candidate-desc">
						<h3 className="fs-16 fw-semibold">{cand.name}</h3>
						<span className="fs-14">{cand.designation}</span>
					</div>
					<div className="db-action-btn ms-auto position-relative">
						<button
							className="dropdown-toggle d-flex align-items-center position-relative bg-transparent border-0 transition"
							type="button"
							onClick={() => setMenu(!menu)}
						>
							<Image
								src="/images/icons/dots.svg"
								alt="Dot Icon"
								className="action-btn"
								width={18}
								height={4}
							/>
						</button>
						<div
							className={`dropdown-menu top-1 end-0 border-0 ${
								menu ? "show" : ""
							}`}
						>
							<ul className="list-unstyle">
								<li>
									<Link
										href={`/${lang}/candidate/${cand.id}`}
									>
										View Candidate
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CandidList;
