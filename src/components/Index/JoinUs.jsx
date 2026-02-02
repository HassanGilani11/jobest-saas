"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from "react-accessible-accordion";

const JoinUs = ({ currentUser }) => {
	const { lang } = useParams();
	return (
		<div className="wh-wrap style-one position-relative ptb-100">
			<div className="container">
				<div className="row align-items-xl-start align-items-center">
					<div className="col-lg-6">
						<div className="wh-content">
							<div className="section-title style-one mb-20">
								<h2
									className="text-white title-anim  wow animate__animated animate__fadeInUp"
									data-wow-duration="1.4s"
									data-wow-delay="0.1s"
								>
									Why Should You Join <strong>Jobest </strong>
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

							<Accordion
								preExpanded={["a"]}
								className="join-us-accordion"
							>
								<AccordionItem uuid="a">
									<AccordionItemHeading>
										<AccordionItemButton>
											<div className="d-flex align-items-center gap-3">
												<Image
													src="/images/icons/check.svg"
													alt="Check Icon"
													width="16"
													height="15"
												/>
												<span>Interview Reminders</span>
											</div>
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											Voice bot directly calls the
											candidate on their mobile phone and
											reminds them of pending interview.
										</p>
									</AccordionItemPanel>
								</AccordionItem>

								<AccordionItem uuid="b">
									<AccordionItemHeading>
										<AccordionItemButton>
											<div className="d-flex align-items-center gap-3">
												<Image
													src="/images/icons/check.svg"
													alt="Check Icon"
													width="16"
													height="15"
												/>
												<span>
													Remote Interviews with Lip
													Sync Detection
												</span>
											</div>
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											Voice bot directly calls the
											candidate on their mobile phone and
											reminds them of pending interview.
										</p>
									</AccordionItemPanel>
								</AccordionItem>

								<AccordionItem uuid="c">
									<AccordionItemHeading>
										<AccordionItemButton>
											<div className="d-flex align-items-center gap-3">
												<Image
													src="/images/icons/check.svg"
													alt="Check Icon"
													width="16"
													height="15"
												/>
												<span>
													Fresher & University Hiring
												</span>
											</div>
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											Voice bot directly calls the
											candidate on their mobile phone and
											reminds them of pending interview.
										</p>
									</AccordionItemPanel>
								</AccordionItem>
							</Accordion>

							{!currentUser && (
								<Link
									href={`/${lang}/register`}
									className="btn style-four wow animate__animated animate__fadeInUp"
									data-wow-duration="1.4s"
									data-wow-delay="0.3s"
								>
									Join Jobest Now
								</Link>
							)}
						</div>
					</div>

					<div className="col-lg-6 pe-xxl-2">
						<div
							className="wh-img-wrap position-relative wow animate__animated animate__fadeInUp"
							data-wow-duration="1.4s"
							data-wow-delay="0.2s"
						>
							<div className="secure-box position-absolute d-flex flex-wrap align-items-center round-6 moveHorizontal">
								<div className="secure-icon d-flex flex-column align-items-center justify-content-center rounded-circle bg-white">
									<Image
										src="/images/icons/shield-lock.svg"
										alt="Shield"
										width="24"
										height="24"
									/>
								</div>
								<span className="fs-15 fw-bold text-title">
									Safe & Secure
								</span>
							</div>
							<div className="client-box position-absolute  d-flex flex-wrap align-items-center bg-white round-6 bounce">
								<ul className="client-list list-unstyle">
									<li>
										<Image
											src="/images/clients/client-6.jpg"
											alt="Client Image"
											width={60}
											height={60}
										/>
									</li>
									<li>
										<Image
											src="/images/clients/client-5.jpg"
											alt="Client Image"
											width={60}
											height={60}
										/>
									</li>
									<li>
										<Image
											src="/images/clients/client-7.jpg"
											alt="Client Image"
											width={60}
											height={60}
										/>
									</li>
									<li>
										<Image
											src="/images/clients/client-8.jpg"
											alt="Client Image"
											width={60}
											height={60}
										/>
									</li>
								</ul>
								<p className="mb-0 fs-15 text-title">
									<span>1M+</span> Candidates
								</p>
							</div>
							<Image
								src="/images/why-join-us/wh-img-1.png"
								alt="Shape"
								className="wh-img"
								width={566}
								height={565}
							/>
							<Image
								src="/images/why-join-us/wh-shape-2.png"
								alt="Shape"
								className="wh-shape position-absolute animationFramesTwo"
								width={46}
								height={46}
							/>
							<Image
								src="/images/why-join-us/wh-shape-3.png"
								alt="Shape"
								className="wh-bg-shape position-absolute"
								width={539}
								height={490}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JoinUs;
