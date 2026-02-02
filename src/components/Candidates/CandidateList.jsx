"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const CandidateList = ({ candid }) => {
	const { lang } = useParams();
	return (
		<div className="col-md-6">
			<div className="candidate-card style-two text-center position-relative index-1 mb-30 transition">
				<div className="candidate-img-wrap">
					<div className="candidate-img rounded-circle position-relative">
						<Image
							src={
								candid.image
									? candid.image
									: "/images/avatar.png"
							}
							alt="Candidate"
							className="rounded-circle"
							width={90}
							height={90}
						/>
						<span className="online-status active rounded-circle position-absolute d-inline-block"></span>
					</div>
					<h3 className="fs-20">
						<Link href={`/${lang}/candidate/${candid.id}`}>
							{candid.name}
						</Link>
					</h3>
					<span className="d-block">{candid.designation}</span>
				</div>
				<div className="candidate-metainfo-wrap d-flex justify-content-between">
					<div className="candidate-metainfo d-flex align-items-center">
						<div className="meta-icon d-flex flex-column align-items-center justify-content-center round-10 bg-white">
							<Image
								src="/images/icons/map-green.svg"
								alt="Map Icon"
								width="24"
								height="24"
							/>
						</div>
						<div className="meta-info">
							<span className="d-block fs-14">Location</span>
							<p className="text_dark fs-14 fw-semibold mb-0">
								{candid.profile
									? candid.profile.location
									: "N/A"}
							</p>
						</div>
					</div>
					<div className="candidate-metainfo d-flex align-items-center justify-content-end">
						<div className="meta-icon d-flex flex-column align-items-center justify-content-center round-10 bg-white">
							<Image
								src="/images/icons/coin.svg"
								alt="Map Icon"
								width="24"
								height="24"
							/>
						</div>
						<div className="meta-info">
							<span className="d-block fs-14">Salary</span>
							<p className="text_dark fs-14 fw-semibold mb-0">
								{candid.expected_salary
									? candid.expected_salary
									: "N/A"}
							</p>
						</div>
					</div>
				</div>
				<Link
					href={`/${lang}/candidate/${candid.id}`}
					className="btn style-seven d-block"
				>
					View Profile
				</Link>
			</div>
		</div>
	);
};

export default CandidateList;
