"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const BlogSection = () => {
	const { lang } = useParams();
	return (
		<div className="container position-relative index-1 pb-70">
			<Image
				src="/images/section-shape-1.png"
				alt="Blog Image"
				className="blog-section-shape position-absolute animationFramesTwo"
				width={28}
				height={31}
			/>
			<div className="row align-items-center mb-35">
				<div className="col-md-8">
					<div className="section-title style-one mb-sm-10">
						<h2
							className="mb-10 title-anim wow animate__animated animate__fadeInUp"
							data-wow-duration="1.4s"
							data-wow-delay="0.1s"
						>
							Jobest <strong>Insights</strong>
						</h2>
						<p
							className="text-ash mb-0 wow animate__animated animate__fadeInUp"
							data-wow-duration="1.4s"
							data-wow-delay="0.2s"
						>
							Read and gain knowledge from the expert.
						</p>
					</div>
				</div>
				<div
					className="col-md-4 text-md-end wow animate__animated animate__fadeInUp"
					data-wow-duration="1.4s"
					data-wow-delay="0.1s"
				>
					<Link
						href={`/${lang}/blog`}
						className="link style-two fs-14 fw-semibold"
					>
						Browse All Articles
						<i className="ri-arrow-right-line"></i>
					</Link>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-xxl-3 col-xl-4 col-md-6">
					<div
						className="blog-card style-one mb-30 wow animate__animated animate__fadeInUp"
						data-wow-duration="1.4s"
						data-wow-delay="0.1s"
					>
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
								<Link href={`/${lang}/blog`}>22 Jul, 2024</Link>
							</li>
						</ul>
						<h3>
							<Link href={`/${lang}/blog`}>
								Print, publishing qui visual layout mockups.
							</Link>
						</h3>
						<Link
							href={`/${lang}/blog`}
							className="link style-three fs-14 fw-semibold"
						>
							Read More<i className="ri-arrow-right-line"></i>
						</Link>
					</div>
				</div>
				<div className="col-xxl-3 col-xl-4 col-md-6">
					<div
						className="blog-card style-one mb-30 wow animate__animated animate__fadeInUp"
						data-wow-duration="1.4s"
						data-wow-delay="0.2s"
					>
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
								<Link href={`/${lang}/blog`}>21 Jul, 2024</Link>
							</li>
						</ul>
						<h3>
							<Link href={`/${lang}/blog`}>
								Make more productive work flow in few steps
							</Link>
						</h3>
						<Link
							href={`/${lang}/blog`}
							className="link style-three fs-14 fw-semibold"
						>
							Read More<i className="ri-arrow-right-line"></i>
						</Link>
					</div>
				</div>
				<div className="col-xxl-3 col-xl-4 col-md-6">
					<div
						className="blog-card style-one mb-30 wow animate__animated animate__fadeInUp"
						data-wow-duration="1.4s"
						data-wow-delay="0.3s"
					>
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
								<Link href={`/${lang}/blog`}>20 Jul, 2024</Link>
							</li>
						</ul>
						<h3>
							<Link href={`/${lang}/blog`}>
								Designers checklist for every UX/UI project
							</Link>
						</h3>
						<Link
							href={`/${lang}/blog`}
							className="link style-three fs-14 fw-semibold"
						>
							Read More<i className="ri-arrow-right-line"></i>
						</Link>
					</div>
				</div>
				<div className="col-xxl-3 col-xl-4 col-md-6">
					<div
						className="blog-card style-one mb-30 wow animate__animated animate__fadeInUp"
						data-wow-duration="1.4s"
						data-wow-delay="0.4s"
					>
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
								<Link href={`/${lang}/blog`}>15 Jul, 2024</Link>
							</li>
						</ul>
						<h3>
							<Link href={`/${lang}/blog`}>
								Full Stack Developer with Machine Learning
							</Link>
						</h3>
						<Link
							href={`/${lang}/blog`}
							className="link style-three fs-14 fw-semibold"
						>
							Read More<i className="ri-arrow-right-line"></i>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogSection;
