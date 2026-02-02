"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const DetailsContent = () => {
	const { lang } = useParams();
	return (
		<div className="container ptb-100">
			<div className="row justify-content-center">
				<div className="col-xl-8">
					<div className="blog-desc mb-50">
						<ul className="blog-taglist list-unstyle">
							<li>
								<Link
									href={`/${lang}/bolg/details`}
									className="fs-14 round-4"
								>
									Career
								</Link>
							</li>
							<li>
								<Link
									href={`/${lang}/bolg/details`}
									className="fs-14 round-4"
								>
									Skills
								</Link>
							</li>
						</ul>
						<h1>
							Exploring the Future of Remote Work: Trends,
							Challenges, and Opportunities
						</h1>
						<ul className="blog-metainfo list-unstyle">
							<li className="blog-author fs-14 d-inline-flex align-items-center">
								<span className="author-img rounded-circle me-2">
									<Image
										src="/images/blog/author-1.jpg"
										alt="Image"
										className="rounded-circle"
										width={55}
										height={55}
									/>
								</span>
								Written by{" "}
								<Link
									href={`/${lang}/bolg/details`}
									className="ms-1 link style-one fw-semibold text-decoration-underline"
								>
									Anna Frank
								</Link>
							</li>
							<li className="position-relative fs-14">
								<Image
									src="/images/icons/calendar.svg"
									alt="Calendar Icon"
									className="position-absolute"
									width={20}
									height={20}
								/>
								<Link href={`/${lang}/bolg/details`}>
									15 Jul, 2024
								</Link>
							</li>
							<li className="position-relative fs-14">
								<Image
									src="/images/icons/clock.svg"
									alt="Clock Icon"
									className="position-absolute"
									width={20}
									height={20}
								/>
								5 mins read
							</li>
						</ul>
						<div className="single-img round-6 mt-30">
							<Image
								src="/images/blog/single-blog-1.jpg"
								alt="Blog Image"
								className="round-6"
								width={1160}
								height={627}
							/>
						</div>
						<div className="single-para">
							<p>
								The landscape of work has undergone a
								significant transformation over the past few
								years, and remote work has emerged as a key
								component of this evolution. As companies and
								employees alike adapt to new ways of working, it
								is essential to explore the trends, challenges,
								and opportunities that define the future of
								remote work.
							</p>
							<p>
								As a leader in Reliability-as-a-Service (RaaS),
								Supabase is dedicated to optimizing uptime for
								EV charging infrastructure by implementing
								cutting-edge monitoring solutions and proactive
								problem-solving.
							</p>
						</div>
						<div className="single-para">
							<h5>Trends Shaping Remote Work</h5>
							<ul className="content-feature-list style-one list-unstyle">
								<li className="position-relative">
									<Image
										src="/images/icons/check.svg"
										alt="Icon"
										width={20}
										height={20}
									/>
									<h6>Increased Adoption of Hybrid Models</h6>
									<p>
										Many organizations are moving towards
										hybrid work models, where employees
										split their time between working
										remotely and in the office. This
										flexibility allows for a better
										work-life balance and accommodates
										different work styles.
									</p>
								</li>
								<li className="position-relative">
									<Image
										src="/images/icons/check.svg"
										alt="Icon"
										width={20}
										height={20}
									/>
									<h6>Advancements in Technology</h6>
									<p>
										The development of collaboration tools
										like Zoom, Slack, and Microsoft Teams
										has made remote work more feasible and
										efficient. Virtual reality (VR) and
										augmented reality (AR) are also being
										explored to create immersive remote work
										environments.
									</p>
								</li>
								<li className="position-relative">
									<Image
										src="/images/icons/check.svg"
										alt="Icon"
										width={20}
										height={20}
									/>
									<h6>Focus on Employee Well-being</h6>
									<p>
										Companies are prioritizing mental health
										and wellness initiatives to support
										remote employees. Flexible schedules,
										wellness programs, and virtual
										team-building activities are becoming
										common practices.
									</p>
								</li>
								<li className="position-relative">
									<Image
										src="/images/icons/check.svg"
										alt="Icon"
										width={20}
										height={20}
									/>
									<h6>Global Talent Pool</h6>
									<p>
										Remote work enables companies to hire
										talent from anywhere in the world,
										breaking geographical barriers and
										fostering diverse workforces. This trend
										is particularly beneficial for startups
										and tech companies looking for
										specialized skills.
									</p>
								</li>
							</ul>
						</div>
						<div className="wp-blockquote d-flex flex-wrap align-items-start round-4">
							<Image
								src="/images/icons/quote.svg"
								alt="Icon"
								width="29"
								height="24"
							/>
							<p className="fs-20 fw-semibold text-title">
								Remote work isnt just a change in where we work;
								its a change in how we work. The future belongs
								to those who adapt and innovate.
							</p>
							<h6 className="mb-0">John Krug</h6>
						</div>
						<div className="single-para">
							<h5>Opportunities In Remote Work</h5>
							<ul className="content-feature-list style-two list-unstyle">
								<li className="position-relative">
									<h6>Cost Saving</h6>
									<p>
										Both employers and employees can save
										money with remote work. Companies can
										reduce overhead costs associated with
										office space, while employees can save
										on commuting expenses and other
										work-related costs.
									</p>
								</li>
								<li className="position-relative">
									<h6>Increased Productivity</h6>
									<p>
										Many employees report higher
										productivity levels when working
										remotely, due to fewer distractions and
										the ability to create a personalized
										work environment. Flexible schedules
										also allow employees to work during
										their most productive hours.
									</p>
								</li>
							</ul>
						</div>
						<div className="row justify-content-center mb-10">
							<div className="col-md-4">
								<div className="single-img round-4">
									<Image
										src="/images/blog/single-blog-2.jpg"
										alt="Blog Image"
										className="round-4"
										width="570"
										height="675"
									/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="single-img round-4">
									<Image
										src="/images/blog/single-blog-3.jpg"
										alt="Blog Image"
										className="round-4"
										width="570"
										height="675"
									/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="single-img round-4">
									<Image
										src="/images/blog/single-blog-4.jpg"
										alt="Blog Image"
										className="round-4"
										width="570"
										height="675"
									/>
								</div>
							</div>
						</div>
						<div className="single-para">
							<ul className="content-feature-list style-two list-unstyle">
								<li className="position-relative">
									<h6>Environmental Impact</h6>
									<p>
										Remote work contributes to a reduction
										in carbon emissions, as fewer employees
										commute to work. This shift can have a
										positive impact on the environment and
										help companies meet sustainability
										goals.
									</p>
								</li>
								<li className="position-relative">
									<h6>Access to a Broader Talent Pool</h6>
									<p>
										By embracing remote work, companies can
										attract and retain top talent from
										around the world, enhancing innovation
										and diversity within their teams.
									</p>
								</li>
								<li className="position-relative">
									<h6>Enhanced Job Satisfaction</h6>
									<p>
										Employees who have the flexibility to
										work remotely often report higher job
										satisfaction. This can lead to increased
										employee retention and a more motivated
										workforce.
									</p>
								</li>
							</ul>
						</div>
						<div className="single-para">
							<p>
								The future of remote work is bright, with
								numerous trends and opportunities that promise
								to reshape how we work. However, it also comes
								with its set of challenges that companies and
								employees must navigate.
							</p>
							<p>
								By embracing technological advancements,
								fostering clear communication, and prioritizing
								employee well-being, organizations can create a
								thriving remote work environment. As we move
								forward, the key to success will be adaptability
								and a willingness to innovate in the face of
								change.
							</p>
						</div>
					</div>
					<div className="post-metaoption style-one d-flex flex-wrap align-items-center justify-content-between mb-50">
						<h6 className="fw-semibold">Share the post</h6>
						<div className="post-share d-flex align-items-center justify-content-md-end">
							<ul className="social-profile style-one list-unstyle">
								<li>
									<a
										href="https://www.facebook.com"
										target="_blank"
										className="d-flex flex-column align-items-center justify-content-center rounded-circle transition"
									>
										<i className="ri-facebook-fill"></i>
									</a>
								</li>
								<li>
									<a
										href="https://www.instagram.com"
										target="_blank"
										className="d-flex flex-column align-items-center justify-content-center rounded-circle transition"
									>
										<i className="ri-instagram-line"></i>
									</a>
								</li>
								<li>
									<a
										href="https://www.twitter.com"
										target="_blank"
										className="d-flex flex-column align-items-center justify-content-center rounded-circle transition"
									>
										<i className="ri-twitter-x-fill"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="post-pagination d-flex flex-wrap justify-content-between">
						<div className="prev-post position-relative">
							<span className="fs-14 fw-semibold text_green">
								<Image
									src="/images/icons/left-arow-green.svg"
									alt="Arrow"
									width="14"
									height="12"
								/>
								Previous Articles
							</span>
							<div className="pp-post-item d-flex flex-wrap align-items-center">
								<Link
									href={`/${lang}/bolg/details`}
									className="pp-post-img round-10"
								>
									<Image
										src="/images/blog/post-thumb-1.jpg"
										alt="Image"
										className="round-10"
										width="80"
										height="96"
									/>
								</Link>
								<div className="pp-post-info">
									<ul className="blog-metainfo list-unstyle">
										<li className="position-relative fs-14">
											<Image
												src="/images/icons/calendar.svg"
												alt="Calendar Icon"
												width="20"
												height="20"
											/>
											<Link
												href={`/${lang}/bolg/details`}
											>
												{" "}
												15 Jul, 2024
											</Link>
										</li>
									</ul>
									<h6 className="fs-16 font-medium mb-0">
										<Link href={`/${lang}/bolg/details`}>
											Networking 101: Building Connections
											to Boost Career
										</Link>
									</h6>
								</div>
							</div>
							<Link
								href={`/${lang}/bolg/details`}
								className="position-absolute top-0 start-0 w-100 h-100"
							></Link>
						</div>
						<div className="next-post position-relative">
							<span className="fs-14 fw-semibold text_green text-end">
								Next Articles
								<Image
									src="/images/icons/right-arrow-green.svg"
									alt="Arrow"
									width="14"
									height="12"
								/>
							</span>
							<div className="pp-post-item d-flex flex-wrap align-items-center">
								<div className="pp-post-info text-end">
									<ul className="blog-metainfo list-unstyle">
										<li className="position-relative fs-14">
											<Image
												src="/images/icons/calendar.svg"
												alt="Calendar Icon"
												width="20"
												height="20"
											/>
											<Link
												href={`/${lang}/bolg/details`}
											>
												18 Jul, 2024
											</Link>
										</li>
									</ul>
									<h6 className="fs-16 font-medium mb-0">
										<Link href={`/${lang}/bolg/details`}>
											Top 10 Tips for Crafting a Winning
											Resume
										</Link>
									</h6>
								</div>
								<Link
									href={`/${lang}/bolg/details`}
									className="pp-post-img round-10"
								>
									<Image
										src="/images/blog/post-thumb-2.jpg"
										alt="Image"
										className="round-10"
										width="80"
										height="96"
									/>
								</Link>
							</div>
							<Link
								href={`/${lang}/bolg/details`}
								className="position-absolute top-0 start-0 w-100 h-100"
							></Link>
						</div>
					</div>
					<h3 className="fs-24 pt-100 mb-30">02 Comments</h3>
					<div className="comment-item-wrap pb-100">
						<div className="comment-item d-flex flex-wrap round-5">
							<div className="comment-author w-100 d-flex flex-wrap">
								<div className="comment-author-img rounded-circle">
									<Image
										src="/images/blog/author-2.jpg"
										alt="Image"
										className="rounded-circle"
										width="56"
										height="56"
									/>
								</div>
								<div className="comment-author-info">
									<h5 className="fs-16 fw-semibold">
										Zinia Farnandiz{" "}
										<span className="fs-14 text-paraThree fw-normal ms-2">
											May 18, 2024 - 08:34
										</span>
									</h5>
									<p className="comment-text">
										As a UI/UX designer reporting directly
										to the CTO, your insights will have a
										direct impact on our products direction.
										This role requires an insightful UI/UX
										Designer with a passion for creating
										seamless and engaging digital
										experiences.
									</p>
									<a
										href="#cmt-form"
										className="link style-one reply-btn fs-14"
									>
										Reply<i className="ri-arrow-right-line"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="comment-item d-flex flex-wrap">
							<div className="comment-author w-100 d-flex flex-wrap">
								<div className="comment-author-img rounded-circle">
									<Image
										src="/images/blog/author-3.jpg"
										alt="Image"
										className="rounded-circle"
										width="56"
										height="56"
									/>
								</div>
								<div className="comment-author-info">
									<h5 className="fs-16 fw-semibold">
										Walter White{" "}
										<span className="fs-14 text-paraThree fw-normal ms-2">
											May 18, 2024 - 08:45
										</span>
									</h5>
									<p className="comment-text">
										Employees who have the flexibility to
										work remotely often report higher job
										satisfaction. This can lead to increased
										employee retention and a more motivated
										workforce.
									</p>
									<a
										href="#cmt-form"
										className="link style-one reply-btn fs-14"
									>
										Reply<i className="ri-arrow-right-line"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="comment-item d-flex flex-wrap round-5 reply">
							<div className="comment-author w-100 d-flex flex-wrap">
								<div className="comment-author-img rounded-circle">
									<Image
										src="/images/blog/author-1.jpg"
										alt="Image"
										className="rounded-circle"
										width="56"
										height="56"
									/>
								</div>
								<div className="comment-author-info">
									<h5 className="fs-16 fw-semibold">
										Loren Watson{" "}
										<span className="fs-14 text-paraThree fw-normal ms-2">
											May 18, 2024 - 10:34
										</span>
									</h5>
									<p className="comment-text">
										Cover broad of topic in web development
										industry. Explained a lot of basic
										programming knowledge with easy to
										understand explanation.
									</p>
									<a
										href="#cmt-form"
										className="link style-one reply-btn fs-14"
									>
										Reply<i className="ri-arrow-right-line"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<h3 className="fs-24 mb-30">Post A Comment</h3>
					<form action="#" className="comment-form" id="cmt-form">
						<div className="row">
							<div className="col-md-6">
								<div className="form-group mb-20">
									<label className="text-dark" htmlFor="name">
										Name
									</label>
									<input
										type="text"
										name="name"
										id="name"
										placeholder="Your Name"
										required
										className="bg-gray border-0 w-100 round-4"
									/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group mb-20">
									<label className="text-dark" htmlFor="email">
										Email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										placeholder="Your Email"
										required
										className="bg-gray border-0 w-100 round-4"
									/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group mb-20">
									<label className="text-dark" htmlFor="phone_no">
										Phone Number
									</label>
									<input
										type="number"
										name="phone_no"
										placeholder="Your Phone No"
										required
										className="bg-gray border-0 w-100 round-4"
									/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group mb-20">
									<label className="text-dark" htmlFor="company">
										Company
									</label>
									<input
										type="text"
										name="company"
										id="company"
										placeholder="Your Company"
										required
										className="bg-gray border-0 w-100 round-4"
									/>
								</div>
							</div>
							<div className="col-lg-12">
								<div className="form-group mb-20">
									<label className="text-dark" htmlFor="msg">
										Your Message
									</label>
									<textarea
										name="messages"
										id="messages"
										cols="30"
										rows="10"
										placeholder="Your message here"
										className="bg-gray border-0 w-100 round-4"
									></textarea>
								</div>
							</div>
							<div className="col-md-12 mb-25">
								<div className="form-check checkbox">
									<input
										className="form-check-input"
										type="checkbox"
										id="test_2"
									/>
									<label
										className="form-check-label"
										htmlFor="test_2"
									>
										Save my name, email, and website in this
										browser for the next time I comment.
									</label>
								</div>
							</div>
							<div className="col-xl-4 col-lg-4 col-md-6">
								<button className="btn style-four w-100 d-block">
									Post A Comment
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default DetailsContent;
