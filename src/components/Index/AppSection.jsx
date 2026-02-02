"use client";
import React from "react";
import Image from "next/image";

const AppSection = () => {
	return (
		<div className="container">
			<div className="app-box position-relative index-1 round-10 ptb-100">
				<Image
					src="/images/app/app-shape-2.png"
					alt="Shape"
					className="app-shape-two position-absolute bounce"
					width={44}
					height={49}
				/>
				<div className="row">
					<div className="col-xl-4 col-lg-4">
						<div className="app-text">
							<div className="section-title style-one">
								<h2
									className="text-white wow animate__animated animate__fadeInUp"
									data-wow-duration="1.4s"
									data-wow-delay="0.2s"
								>
									Download Our <strong> Mobile App</strong>{" "}
									For Better <strong>Experience</strong>
								</h2>
								<Image
									src="/images/app/app-shape-1.png"
									alt="Shape"
									className="app-shape-one d-block moveHorizontal"
									width={46}
									height={46}
								/>
							</div>
						</div>
					</div>
					<div className="col-xl-5 col-lg-4">
						<div className="app-img-wrap position-relative index-1">
							<div className="app-img d-flex justify-content-between position-relative">
								<Image
									src="/images/app/app-img-1.png"
									alt="App Image"
									className="app-img-one position-relative bounce"
									width={203}
									height={444}
								/>
								<Image
									src="/images/app/app-img-2.png"
									alt="App Image"
									className="app-img-two position-relative bounce"
									width={203}
									height={439}
								/>
							</div>
							<Image
								src="/images/app/app-bg-shape.png"
								alt="App Image"
								className="app-bg-shape position-absolute"
								width={502}
								height={502}
							/>
						</div>
					</div>
					<div className="col-xl-3 col-lg-4 mt-lg-auto ps-xxl-45 pe-xxl-0">
						<div
							className="app-btn-wrap wow animate__animated animate__fadeInUp"
							data-wow-duration="1.4s"
							data-wow-delay="0.2s"
						>
							<p className="text-white">
								Take your job search on the go! Download the app
								today and find your dream job anytime, anywhere.
								Available on iOS and Android.
							</p>
							<a
								href="https://www.apple.com/app-store/"
								target="_blank"
								className="btn apple-btn"
							>
								<Image
									src="/images/app/apple-btn.png"
									alt="Apple Play Store"
									width={146}
									height={35}
								/>
							</a>
							<a
								href="https://play.google.com/store/games?hl=en&pli=1"
								target="_blank"
								className="btn google-play"
							>
								<Image
									src="/images/app/google-play.png"
									alt="Google Playstore"
									width={146}
									height={35}
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppSection;
