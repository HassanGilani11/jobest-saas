"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const CategorySection = () => {
	const { lang } = useParams();
	return (
		<div className="container pt-100 pb-70">
			<div className="row align-items-center mb-40">
				<div className="col-md-8">
					<div className="section-title style-one">
						<h2
							className="mb-10 title-anim wow animate__animated animate__fadeInUp"
							data-wow-duration="1.4s"
							data-wow-delay="0.1s"
						>
							Popular <strong>Job Categories</strong>
						</h2>
						<p
							className="text-ash mb-0 wow animate__animated animate__fadeInUp"
							data-wow-duration="1.4s"
							data-wow-delay="0.2s"
						>
							Recruitment made easy in just 1 Min!
						</p>
					</div>
				</div>
				<div
					className="col-md-4 text-md-end wow animate__animated animate__fadeInUp"
					data-wow-duration="1.4s"
					data-wow-delay="0.1s"
				>
					<Link
						href={`/${lang}/jobs`}
						className="link style-two fs-14 fw-semibold"
					>
						View All Categories
						<i className="ri-arrow-right-line"></i>
					</Link>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-xxl-2 col-xl-3 col-md-4 col-sm-6">
					<div
						className="category-card style-one text-center position-relative index-1 round-20 transition mb-30 wow animate__animated animate__fadeInUp"
						data-wow-duration="1.4s"
						data-wow-delay="0.1s"
					>
						<div className="cat-icon d-flex flex-column align-items-center justify-content-center rounded-circle transition">
							<Image
								src="/images/category/design.svg"
								alt="Design Icon"
								className="transition"
								width="36"
								height="36"
							/>
						</div>
						<h3 className="transition">Design</h3>
						<span className="fs-14 transition">241+ Jobs</span>
						<Link
							href={`/${lang}/jobs`}
							className="d-block position-absolute top-0 start-0 w-100 h-100"
						></Link>
					</div>
				</div>
				<div className="col-xxl-2 col-xl-3 col-md-4 col-sm-6">
					<div
						className="category-card style-one text-center position-relative index-1 round-20 transition mb-30 wow animate__animated animate__fadeInUp"
						data-wow-duration="1.4s"
						data-wow-delay="0.2s"
					>
						<div className="cat-icon d-flex flex-column align-items-center justify-content-center rounded-circle transition">
							<Image
								src="/images/category/code.svg"
								alt="Design Icon"
								className="transition"
								width="36"
								height="36"
							/>
						</div>
						<h3 className="transition">Development</h3>
						<span className="fs-14 transition">1K+ Jobs</span>
						<Link
							href={`/${lang}/jobs`}
							className="d-block position-absolute top-0 start-0 w-100 h-100"
						></Link>
					</div>
				</div>
				<div className="col-xxl-2 col-xl-3 col-md-4 col-sm-6">
					<div
						className="category-card style-one text-center position-relative index-1 round-20 transition mb-30 wow animate__animated animate__fadeInUp"
						data-wow-duration="1.4s"
						data-wow-delay="0.3s"
					>
						<div className="cat-icon d-flex flex-column align-items-center justify-content-center rounded-circle transition">
							<Image
								src="/images/category/marketing.svg"
								alt="Design Icon"
								className="transition"
								width="36"
								height="36"
							/>
						</div>
						<h3 className="transition">Marketing</h3>
						<span className="fs-14 transition">124+ Jobs</span>
						<Link
							href={`/${lang}/jobs`}
							className="d-block position-absolute top-0 start-0 w-100 h-100"
						></Link>
					</div>
				</div>
				<div className="col-xxl-2 col-xl-3 col-md-4 col-sm-6">
					<div
						className="category-card style-one text-center position-relative index-1 round-20 transition mb-30 wow animate__animated animate__fadeInUp"
						data-wow-duration="1.4s"
						data-wow-delay="0.4s"
					>
						<div className="cat-icon d-flex flex-column align-items-center justify-content-center rounded-circle transition">
							<Image
								src="/images/category/editing.svg"
								alt="Design Icon"
								className="transition"
								width="36"
								height="36"
							/>
						</div>
						<h3 className="transition">Editing</h3>
						<span className="fs-14 transition">24+ Jobs</span>
						<Link
							href={`/${lang}/jobs`}
							className="d-block position-absolute top-0 start-0 w-100 h-100"
						></Link>
					</div>
				</div>
				<div className="col-xxl-2 col-xl-3 col-md-4 col-sm-6">
					<div
						className="category-card style-one text-center position-relative index-1 round-20 transition mb-30 wow animate__animated animate__fadeInUp"
						data-wow-duration="1.4s"
						data-wow-delay="0.5s"
					>
						<div className="cat-icon d-flex flex-column align-items-center justify-content-center rounded-circle transition">
							<Image
								src="/images/category/businessplan.svg"
								alt="Design Icon"
								className="transition"
								width="36"
								height="36"
							/>
						</div>
						<h3 className="transition">Business</h3>
						<span className="fs-14 transition">1.2K+ Jobs</span>
						<Link
							href={`/${lang}/jobs`}
							className="d-block position-absolute top-0 start-0 w-100 h-100"
						></Link>
					</div>
				</div>
				<div className="col-xxl-2 col-xl-3 col-md-4 col-sm-6">
					<div
						className="category-card style-one text-center position-relative index-1 round-20 transition mb-30 wow animate__animated animate__fadeInUp"
						data-wow-duration="1.4s"
						data-wow-delay="0.6s"
					>
						<div className="cat-icon d-flex flex-column align-items-center justify-content-center rounded-circle transition">
							<Image
								src="/images/category/it-business.svg"
								alt="Design Icon"
								className="transition"
								width="36"
								height="36"
							/>
						</div>
						<h3 className="transition">IT</h3>
						<span className="fs-14 transition">1.3K+ Jobs</span>
						<Link
							href={`/${lang}/jobs`}
							className="d-block position-absolute top-0 start-0 w-100 h-100"
						></Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategorySection;
