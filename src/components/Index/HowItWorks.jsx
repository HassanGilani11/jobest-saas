"use client";
import React from "react";
import Image from "next/image";

const HowItWorks = () => {
	return (
		<div className="hw-wrap style-one position-relative index-1">
			<Image
				src="/images/section-shape-2.png"
				alt="Shape"
				className="section-shape position-absolute bounce sm-none"
				width={59}
				height={81}
			/>
			<div className="container ptb-100">
				<div className="section-title text-center mb-35">
					<h2
						className="title-anim  wow animate__animated animate__fadeInUp"
						data-wow-duration="1.4s"
						data-wow-delay="0.1s"
					>
						How <strong>Jobest Works</strong> for you
					</h2>
					<p
						className="mb-0 wow animate__animated animate__fadeInUp"
						data-wow-duration="1.4s"
						data-wow-delay="0.2s"
					>
						Recruitment made easy in just 1 Min!
					</p>
				</div>
				<div className="row justify-content-center gx-xxl-6">
					<div className="col-xl-4 col-md-6 ps-xxl-1">
						<div
							className="hw-card style-one text-center mb-30 wow animate__animated animate__fadeInUp"
							data-wow-duration="1.4s"
							data-wow-delay="0.1s"
						>
							<div className="hw-img-wrap position-relative index-1">
								<Image
									src="/images/how-it-works/shape-1.png"
									alt="Shape"
									className="hw-shape transition"
									width={384}
									height={345}
								/>
								<Image
									src="/images/how-it-works/register.png"
									alt="How It Works"
									className="hw-img position-absolute"
									width={221}
									height={203}
								/>
							</div>
							<h3 className="fs-22">Create An Account</h3>
							<p className="mb-0">
								Its very easy to open an account and start your
								journey.
							</p>
						</div>
					</div>
					<div className="col-xl-4 col-md-6">
						<div
							className="hw-card style-one text-center mb-30 wow animate__animated animate__fadeInUp"
							data-wow-duration="1.4s"
							data-wow-delay="0.2s"
						>
							<div className="hw-img-wrap position-relative index-1">
								<Image
									src="/images/how-it-works/shape-2.png"
									alt="Shape"
									className="hw-shape transition"
									width={384}
									height={345}
								/>
								<Image
									src="/images/how-it-works/profile.png"
									alt="How It Works"
									className="hw-img position-absolute"
									width={221}
									height={203}
								/>
							</div>
							<h3 className="fs-22">Complete Your Profile</h3>
							<p className="mb-0">
								Complete your profile with all the info to get
								attention of client.
							</p>
						</div>
					</div>
					<div className="col-xl-4 col-md-6">
						<div
							className="hw-card style-one text-center mb-30 wow animate__animated animate__fadeInUp"
							data-wow-duration="1.4s"
							data-wow-delay="0.3s"
						>
							<div className="hw-img-wrap position-relative index-1">
								<Image
									src="/images/how-it-works/shape-3.png"
									alt="Shape"
									className="hw-shape transition"
									width={384}
									height={345}
								/>
								<Image
									src="/images/how-it-works/success.png"
									alt="How It Works"
									className="hw-img position-absolute"
									width={221}
									height={203}
								/>
							</div>
							<h3 className="fs-22">Apply For Job & Hired</h3>
							<p className="mb-0">
								Apply & get your preferable jobs with all the
								requirements and get it.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HowItWorks;
