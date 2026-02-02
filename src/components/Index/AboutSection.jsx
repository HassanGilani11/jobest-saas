"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const AboutSection = ({ clsAtts = "pb-100" }) => {
	const { lang } = useParams();
	return (
		<div className={`about-wrap style-one ${clsAtts} position-relative`}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div
							className="about-img-wrap position-relative index-1 wow animate__animated animate__fadeInUp"
							data-wow-duration="1.4s"
							data-wow-delay="0.1s"
						>
							<Image
								src="/images/section-shape-4.png"
								alt="Shape"
								className="about-shape-one position-absolute bounce"
								width={38}
								height={45}
							/>
							<Image
								src="/images/footer-shape.png"
								alt="Shape"
								className="about-shape-two position-absolute zoomIn"
								width={32}
								height={37}
							/>
							<div className="client-box position-absolute start-0 d-flex flex-wrap align-items-center bg-white round-6 bounce">
								<ul className="client-list list-unstyle">
									<li>
										<Image
											src="/images/clients/client-1.jpg"
											alt="Client Image"
											width={60}
											height={61}
										/>
									</li>
									<li>
										<Image
											src="/images/clients/client-2.jpg"
											alt="Client Image"
											width={60}
											height={61}
										/>
									</li>
									<li>
										<Image
											src="/images/clients/client-3.jpg"
											alt="Client Image"
											width={60}
											height={61}
										/>
									</li>
									<li>
										<Image
											src="/images/clients/client-4.jpg"
											alt="Client Image"
											width={60}
											height={61}
										/>
									</li>
								</ul>
								<p className="mb-0 fs-15 text-title">
									<span>5K+</span> people found their jobs
								</p>
							</div>
							<div className="review-box position-absolute bg-white round-6 moveHorizontal">
								<div className="ratings d-flex align-items-center">
									<span className="fs-18 fw-semibold text-title">
										4.9
									</span>
									<ul className="list-unstyle">
										<li>
											<Image
												src="/images/icons/star.svg"
												alt="Star Icon"
												width="16"
												height="15"
											/>
										</li>
										<li>
											<Image
												src="/images/icons/star.svg"
												alt="Star Icon"
												width="16"
												height="15"
											/>
										</li>
										<li>
											<Image
												src="/images/icons/star.svg"
												alt="Star Icon"
												width="16"
												height="15"
											/>
										</li>
										<li>
											<Image
												src="/images/icons/star.svg"
												alt="Star Icon"
												width="16"
												height="15"
											/>
										</li>
										<li>
											<Image
												src="/images/icons/star.svg"
												alt="Star Icon"
												width="16"
												height="15"
											/>
										</li>
									</ul>
								</div>
								<p className="mb-0 text-title">
									Average Ratings
								</p>
							</div>
							<Image
								src="/images/about/about-img-1.png"
								alt="About image"
								className="about-img w-100"
								width={601}
								height={507}
							/>
						</div>
					</div>
					<div className="col-lg-6 pe-xxl-0">
						<div className="about-content position-relative index-1">
							<Image
								src="/images/section-shape-5.png"
								alt="Shape"
								className="about-shape-three position-absolute bounce"
								width="58"
								height="58"
							/>
							<div className="section-title style-one mb-35">
								<h2
									className="mb-20 title-anim wow animate__animated animate__fadeInUp"
									data-wow-duration="1.4s"
									data-wow-delay="0.1s"
								>
									Choose Your Dream Job From Over{" "}
									<strong>50,000+ Jobs</strong>
								</h2>
								<p
									className="mb-0 wow animate__animated animate__fadeInUp"
									data-wow-duration="1.4s"
									data-wow-delay="0.2s"
								>
									We understand the importance of finding the
									right job. Thats why weve created a platform
									where job seekers can explore a wide range
									of opportunities tailored to their skills
								</p>
							</div>
							<ul
								className="feature-list list-unstyle wow animate__animated animate__fadeInUp"
								data-wow-duration="1.4s"
								data-wow-delay="0.3s"
							>
								<li className="position-relative text-title fs-18 fw-semibold">
									<Image
										src="/images/icons/check.svg"
										alt="Check Icon"
										width="16"
										height="15"
									/>
									Seamless job searching
								</li>
								<li className="position-relative text-title fs-18 fw-semibold">
									<Image
										src="/images/icons/check.svg"
										alt="Check Icon"
										width="16"
										height="15"
									/>
									Get top 3% experts for your project
								</li>
								<li className="position-relative text-title fs-18 fw-semibold">
									<Image
										src="/images/icons/check.svg"
										alt="Check Icon"
										width="16"
										height="15"
									/>
									Trustworthy payment gateway
								</li>
							</ul>
							<Link
								href={`/${lang}/jobs`}
								className="btn style-three wow animate__animated animate__fadeInUp"
								data-wow-duration="1.4s"
								data-wow-delay="0.4s"
							>
								Search Job Now
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
