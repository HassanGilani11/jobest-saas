"use client";
import Link from "next/link";
import React from "react";

const Pagination = ({
	totalPages,
	searchParams: { page: currentPageString },
}) => {
	const currentPage = parseInt(currentPageString?.toString(), 10) || 1;

	const renderPageNumbers = () => {
		const pages = [];
		for (let i = 1; i <= totalPages; i++) {
			pages.push(
				<li key={i}>
					<Link
						href={`?page=${i}`}
						className={`d-flex flex-column align-items-center justify-content-center rounded-circle fw-semibold text-title ${
							i === currentPage ? "active" : ""
						}`}
					>
						{i}
					</Link>
				</li>
			);
		}
		return pages;
	};

	return (
		<ul className="page-nav d-flex align-items-center justify-content-center list-unstyle mt-2">
			<li>
				<Link
					href="#"
					className="d-flex flex-column align-items-center justify-content-center rounded-circle fw-semibold text-title"
				>
					<i className="ri-arrow-left-line"></i>
				</Link>
			</li>
			{renderPageNumbers()}
			<li>
				<Link
					href="#"
					className="d-flex flex-column align-items-center justify-content-center rounded-circle fw-semibold text-title"
				>
					<i className="ri-arrow-right-line"></i>
				</Link>
			</li>
		</ul>
	);
};

export default Pagination;
