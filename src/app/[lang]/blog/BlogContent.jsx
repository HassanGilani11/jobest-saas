"use client";
import Image from "next/image";
import Link from "next/link";

const BlogContent = () => {
	return (
		<div className="container ptb-100">
			<div className="row align-items-center mb-10">
				<div className="col-xl-4 col-md-4">
					<p className="filter-result mb-25">
						Showing <strong className="text-title">1 - 8</strong> of
						211 results
					</p>
				</div>
				<div className="col-xl-3 offset-xl-2 col-md-4">
					<select className="filter-cat fs-14 border-0 mb-25">
						<option value="0">Sort By(Default)</option>
						<option value="1">Sort By Recent</option>
						<option value="2">Sort By Oldest</option>
					</select>
				</div>
				<div className="col-xl-3 col-md-4">
					<select className="filter-cat fs-14 border-0 mb-25">
						<option value="0">08 per page</option>
						<option value="1">15 per page</option>
						<option value="2">20 per page</option>
					</select>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-xxl-3 col-xl-4 col-md-6">
					<div className="blog-card style-one mb-30">
						<div className="blog-img overflow-hidden round-6">
							<Image
								src="/images/blog/blog-1.jpg"
								alt="Blog Image"
								className="transition round-6"
								width={570}
								height={410}
							/>
						</div>
						<ul className="blog-metainfo list-unstyle">
							<li className="position-relative fs-14">
								<Image
									src="/images/icons/calendar.svg"
									alt="Calendar Icon"
									width="20"
									height="20"
								/>
								<Link href="/blog/details">22 Jul, 2024</Link>
							</li>
						</ul>
						<h3>
							<Link href="/blog/details">
								Mastering LinkedIn: Strategies for Job Seekers
							</Link>
						</h3>
						<Link
							href="/blog/details"
							className="link style-three fs-14 fw-semibold"
						>
							Read More<i className="ri-arrow-right-line"></i>
						</Link>
					</div>
				</div>
				<div className="col-xxl-3 col-xl-4 col-md-6">
					<div className="blog-card style-one mb-30">
						<div className="blog-img overflow-hidden round-6">
							<Image
								src="/images/blog/blog-2.jpg"
								alt="Blog Image"
								className="transition round-6"
								width={570}
								height={410}
							/>
						</div>
						<ul className="blog-metainfo list-unstyle">
							<li className="position-relative fs-14">
								<Image
									src="/images/icons/calendar.svg"
									alt="Calendar Icon"
									width="20"
									height="20"
								/>
								<Link href="/blog">21 Jul, 2024</Link>
							</li>
						</ul>
						<h3>
							<Link href="/blog/details">
								Make more productive work flow in few steps.
							</Link>
						</h3>
						<Link
							href="/blog/details"
							className="link style-three fs-14 fw-semibold"
						>
							Read More<i className="ri-arrow-right-line"></i>
						</Link>
					</div>
				</div>
				<div className="col-xxl-3 col-xl-4 col-md-6">
					<div className="blog-card style-one mb-30">
						<div className="blog-img overflow-hidden round-6">
							<Image
								src="/images/blog/blog-3.jpg"
								alt="Blog Image"
								className="transition round-6"
								width={570}
								height={410}
							/>
						</div>
						<ul className="blog-metainfo list-unstyle">
							<li className="position-relative fs-14">
								<Image
									src="/images/icons/calendar.svg"
									alt="Calendar Icon"
									width="20"
									height="20"
								/>
								<Link href="/blog">20 Jul, 2024</Link>
							</li>
						</ul>
						<h3>
							<Link href="/blog/details">
								From Application to Offer: Navigating the Hiring
								Process
							</Link>
						</h3>
						<Link
							href="/blog/details"
							className="link style-three fs-14 fw-semibold"
						>
							Read More<i className="ri-arrow-right-line"></i>
						</Link>
					</div>
				</div>
				<div className="col-xxl-3 col-xl-4 col-md-6">
					<div className="blog-card style-one mb-30">
						<div className="blog-img overflow-hidden">
							<Image
								src="/images/blog/blog-4.jpg"
								alt="Blog Image"
								width={570}
								height={410}
							/>
						</div>
						<ul className="blog-metainfo list-unstyle">
							<li className="position-relative fs-14">
								<Image
									src="/images/icons/calendar.svg"
									alt="Calendar Icon"
									width="20"
									height="20"
								/>
								<Link href="/blog">16 Jul, 2024</Link>
							</li>
						</ul>
						<h3>
							<Link href="/blog/details">
								Full Stack Developer with Machine Learning
							</Link>
						</h3>
						<Link
							href="/blog/details"
							className="link style-three fs-14 fw-semibold"
						>
							Read More<i className="ri-arrow-right-line"></i>
						</Link>
					</div>
				</div>
				<div className="col-xxl-3 col-xl-4 col-md-6">
					<div className="blog-card style-one mb-30">
						<div className="blog-img overflow-hidden">
							<Image
								src="/images/blog/blog-17.jpg"
								alt="Blog Image"
								width={570}
								height={410}
							/>
						</div>
						<ul className="blog-metainfo list-unstyle">
							<li className="position-relative fs-14">
								<Image
									src="/images/icons/calendar.svg"
									alt="Calendar Icon"
									width="20"
									height="20"
								/>
								<Link href="/blog">15 Jul, 2024</Link>
							</li>
						</ul>
						<h3>
							<Link href="/blog/details">
								Full Stack Developer with Machine Learning
							</Link>
						</h3>
						<Link
							href="/blog/details"
							className="link style-three fs-14 fw-semibold"
						>
							Read More<i className="ri-arrow-right-line"></i>
						</Link>
					</div>
				</div>
				<div className="col-xxl-3 col-xl-4 col-md-6">
					<div className="blog-card style-one mb-30">
						<div className="blog-img overflow-hidden round-6">
							<Image
								src="/images/blog/blog-14.jpg"
								alt="Blog Image"
								className="transition round-6"
								width={570}
								height={410}
							/>
						</div>
						<ul className="blog-metainfo list-unstyle">
							<li className="position-relative fs-14">
								<Image
									src="/images/icons/calendar.svg"
									alt="Calendar Icon"
									width="20"
									height="20"
								/>
								<Link href="/blog">22 Jul, 2024</Link>
							</li>
						</ul>
						<h3>
							<Link href="/blog/details">
								Print, publishing qui visual layout mockups.
							</Link>
						</h3>
						<Link
							href="/blog/details"
							className="link style-three fs-14 fw-semibold"
						>
							Read More<i className="ri-arrow-right-line"></i>
						</Link>
					</div>
				</div>
				<div className="col-xxl-3 col-xl-4 col-md-6">
					<div className="blog-card style-one mb-30">
						<div className="blog-img overflow-hidden round-6">
							<Image
								src="/images/blog/blog-8.jpg"
								alt="Blog Image"
								className="transition round-6"
								width={570}
								height={410}
							/>
						</div>
						<ul className="blog-metainfo list-unstyle">
							<li className="position-relative fs-14">
								<Image
									src="/images/icons/calendar.svg"
									alt="Calendar Icon"
									width="20"
									height="20"
								/>
								<Link href="/blog">22 Jul, 2024</Link>
							</li>
						</ul>
						<h3>
							<Link href="/blog/details">
								Mastering LinkedIn: Strategies for Job Seekers
							</Link>
						</h3>
						<Link
							href="/blog/details"
							className="link style-three fs-14 fw-semibold"
						>
							Read More<i className="ri-arrow-right-line"></i>
						</Link>
					</div>
				</div>
				<div className="col-xxl-3 col-xl-4 col-md-6">
					<div className="blog-card style-one mb-30">
						<div className="blog-img overflow-hidden round-6">
							<Image
								src="/images/blog/blog-15.jpg"
								alt="Blog Image"
								className="transition round-6"
								width={570}
								height={410}
							/>
						</div>
						<ul className="blog-metainfo list-unstyle">
							<li className="position-relative fs-14">
								<Image
									src="/images/icons/calendar.svg"
									alt="Calendar Icon"
									width="20"
									height="20"
								/>
								<Link href="/blog">22 Jul, 2024</Link>
							</li>
						</ul>
						<h3>
							<Link href="/blog/details">
								Print, publishing qui visual layout mockups.
							</Link>
						</h3>
						<Link
							href="/blog/details"
							className="link style-three fs-14 fw-semibold"
						>
							Read More<i className="ri-arrow-right-line"></i>
						</Link>
					</div>
				</div>
			</div>
			<ul className="page-nav d-flex align-items-center justify-content-center list-unstyle mt-2">
				<li>
					<Link
						href="/blog"
						className="d-flex flex-column align-items-center justify-content-center rounded-circle fw-semibold text-title"
					>
						<i className="ri-arrow-left-line"></i>
					</Link>
				</li>
				<li>
					<Link
						href="/blog"
						className="d-flex flex-column align-items-center justify-content-center rounded-circle fw-semibold"
					>
						1
					</Link>
				</li>
				<li>
					<Link
						href="/blog"
						className="active d-flex flex-column align-items-center justify-content-center rounded-circle fw-semibold text-title"
					>
						2
					</Link>
				</li>
				<li>
					<Link
						href="/blog"
						className="d-flex flex-column align-items-center justify-content-center rounded-circle fw-semibold text-title"
					>
						3
					</Link>
				</li>
				<li>
					<Link
						href="/blog"
						className="d-flex flex-column align-items-center justify-content-center rounded-circle fw-semibold text-title"
					>
						<i className="ri-arrow-right-line"></i>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default BlogContent;
