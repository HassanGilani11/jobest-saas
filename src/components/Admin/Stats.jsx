"use client";
import Image from "next/image";

const Stats = ({ jobs, companies, candidates }) => {
	return (
		<div className="row justify-content-center">
			<div className="col-xl-3 col-md-6">
				<div className="db-counter-card bg-white d-flex flex-wrap align-items-center justify-content-between mb-25">
					<div className="db-counter-icon d-flex flex-column align-items-center justify-content-center rounded-circle">
						<Image
							src="/images/icons/users.svg"
							width="32"
							height="32"
							alt="Users"
						/>
					</div>
					<div className="db-counter-text">
						<span>Total Candidates</span>
						<h3>{candidates}</h3>
					</div>
				</div>
			</div>
			<div className="col-xl-3 col-md-6">
				<div className="db-counter-card bg-white d-flex flex-wrap align-items-center justify-content-between mb-25">
					<div className="db-counter-icon d-flex flex-column align-items-center justify-content-center rounded-circle">
						<Image
							src="/images/icons/briefcase.svg"
							width="32"
							height="32"
							alt="Users"
						/>
					</div>
					<div className="db-counter-text">
						<span>Total Jobs</span>
						<h3>{jobs}+</h3>
					</div>
				</div>
			</div>
			<div className="col-xl-3 col-md-6">
				<div className="db-counter-card bg-white d-flex flex-wrap align-items-center justify-content-between mb-25">
					<div className="db-counter-icon d-flex flex-column align-items-center justify-content-center rounded-circle">
						<Image
							src="/images/icons/eye.svg"
							width="32"
							height="32"
							alt="Users"
						/>
					</div>
					<div className="db-counter-text">
						<span>Total Companies</span>
						<h3>{companies}+</h3>
					</div>
				</div>
			</div>
			<div className="col-xl-3 col-md-6">
				<div className="db-counter-card bg-white d-flex flex-wrap align-items-center justify-content-between mb-25">
					<div className="db-counter-icon d-flex flex-column align-items-center justify-content-center rounded-circle">
						<Image
							src="/images/icons/list-numbers.svg"
							alt="Users"
							width="32"
							height="32"
						/>
					</div>
					<div className="db-counter-text">
						<span>Shortlisted</span>
						<h3>32+</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stats;
