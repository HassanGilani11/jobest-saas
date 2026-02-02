"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const PopularSearchesTags = ({ popularCategories }) => {
	const { lang } = useParams();
	return (
		<div
			className="popular-taglist d-flex align-items-md-center align-items-start justify-content-center wow animate__animated animate__fadeInUp"
			data-wow-duration="1.4s"
			data-wow-delay="0.4s"
		>
			<span className="text-title fw-semibold">Popular:</span>
			<ul className="taglist list-unstyle">
				{popularCategories.map((cat) => (
					<li key={cat.id}>
						<Link
							href={`/${lang}/jobs/category/${cat.slug}`}
							className="fs-14 round-4 transition"
						>
							{cat.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PopularSearchesTags;
