"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const PostJob = () => {
	const { lang } = useParams();
	return (
		<div className="container pt-100 pb-70">
			<div className="row align-items-center">
				<div className="col-lg-6">
					<div className="section-title style-one mb-30">
						<h2
							className="wow animate__animated animate__fadeInUp"
							data-wow-duration="1.4s"
							data-wow-delay="0.1s"
						>
							The Ultimate <strong>Job Portal</strong>
						</h2>
						<p
							className="mb-0 wow animate__animated animate__fadeInUp"
							data-wow-duration="1.4s"
							data-wow-delay="0.2s"
						>
							Signup now and start finding your job or talents.
						</p>
					</div>
				</div>
				<div className="col-lg-6 text-lg-end">
					<div
						className="post-btn mb-30 wow animate__animated animate__fadeInUp"
						data-wow-duration="1.4s"
						data-wow-delay="0.2s"
					>
						<Link
							href={`/${lang}/jobs`}
							className="btn style-two me-sm-3"
						>
							Looking For A Job
						</Link>
						<Link
							href={`/${lang}/dashboard/em/jobs/new`}
							className="btn style-three"
						>
							Post A Job
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostJob;
