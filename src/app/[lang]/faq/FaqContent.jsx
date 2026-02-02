"use client";

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

const FaqContent = () => {
	const { lang } = useParams();
	return (
		<>
			<div className="container pt-100 pb-70">
				<div className="section-title text-center mb-35">
					<h2>
						Find Your Answers From <strong>The FAQ</strong>
					</h2>
				</div>

				<div className="faq-box position-relative round-10 pb-100">
					<Accordion preExpanded={["a"]}>
						<AccordionItem uuid="a">
							<AccordionItemHeading>
								<AccordionItemButton>
									How do I create an account on your job
									portal?
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<p>
									To create an account, click on the
									&quot;Sign Up&quot; button at the top right
									corner of the homepage, and fill in the
									required information such as your email
									address, name, and password. You can also
									sign up using your social media accounts.
								</p>
							</AccordionItemPanel>
						</AccordionItem>

						<AccordionItem uuid="b">
							<AccordionItemHeading>
								<AccordionItemButton>
									How do I create an account on your job
									portal?
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<p>
									To create an account, click on the
									&quot;Sign Up&quot; button at the top right
									corner of the homepage, and fill in the
									required information such as your email
									address, name, and password. You can also
									sign up using your social media accounts.
								</p>
							</AccordionItemPanel>
						</AccordionItem>

						<AccordionItem uuid="c">
							<AccordionItemHeading>
								<AccordionItemButton>
									How do I create an account on your job
									portal?
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<p>
									To create an account, click on the
									&quot;Sign Up&quot; button at the top right
									corner of the homepage, and fill in the
									required information such as your email
									address, name, and password. You can also
									sign up using your social media accounts.
								</p>
							</AccordionItemPanel>
						</AccordionItem>
					</Accordion>
				</div>
			</div>

			<div className="container pb-70">
				<div className="row align-items-center">
					<div className="col-md-6 pe-xxl-2">
						<div className="contact-content mb-30">
							<div className="section-title style-one mb-30">
								<h2 className="mb-15">
									Didn&quot;t Find Answer{" "}
									<strong>Ask Here</strong>
								</h2>
								<p>We are always ready to connect you.</p>
							</div>
							<form className="contact-form">
								<div className="row">
									<div className="col-lg-6">
										<div className="form-group position-relative mb-20">
											<label
												className="text-title fw-medium"
												htmlFor="name"
											>
												Name
											</label>
											<input
												type="text"
												name="name"
												id="name"
												required
												className="bg-gray border-0 w-100 round-4"
												placeholder="Your Name"
											/>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group mb-20">
											<label
												className="text-title fw-medium"
												htmlFor="email"
											>
												Email
											</label>
											<input
												type="email"
												name="email"
												id="email"
												required
												className="bg-gray border-0 w-100 round-4"
												placeholder="Email address"
											/>
										</div>
									</div>
									<div className="col-12">
										<div className="form-group mb-20">
											<label
												className="text-title fw-medium"
												htmlFor="url"
											>
												Subject
											</label>
											<input
												type="url"
												name="url"
												id="url"
												required
												className="bg-gray border-0 w-100 round-4"
												placeholder="Your Subject"
											/>
										</div>
									</div>
									<div className="col-12">
										<div className="form-group mb-20">
											<label
												className="text-title fw-medium"
												htmlFor="url"
											>
												Your message here
											</label>
											<textarea
												name="messages"
												id="messages"
												cols="30"
												rows="10"
												className="bg-gray border-0 w-100 round-4"
												placeholder="Your message here"
											></textarea>
										</div>
									</div>
									<div className="col-12">
										<div className="form-check checkbox mb-20">
											<input
												className="form-check-input"
												type="checkbox"
												id="test_20"
											/>
											<label
												className="form-check-label"
												htmlFor="test_20"
											>
												I accept to the{" "}
												<Link
													href={`/${lang}/terms-conditions`}
													className="link style-one fs-15"
												>
													Terms &amp; Conditions
												</Link>{" "}
												and{" "}
												<Link
													href={`/${lang}/privacy-policy`}
													className="link style-one fs-15"
												>
													Privacy Policy
												</Link>
											</label>
										</div>
									</div>
									<div className="col-12">
										<button className="btn style-four">
											Send Message Now
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>

					<div className="col-md-6 ps-xxl-5 pe-xxl-1">
						<div className="contact-img-wrap position-relative index-1 mb-30">
							<Image
								src="/images/section-shape-4.png"
								alt="Shape"
								className="contact-shape position-absolute moveHorizontal sm-none"
								width={38}
								height={45}
							/>
							<Image
								src="/images/contact-img.png"
								alt="Contact Image"
								className="contact-img"
								width={522}
								height={546}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FaqContent;
