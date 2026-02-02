"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const JobFilter = ({ tags }) => {
	// console.log(tags);
	const { lang } = useParams();
	return (
		<div className="col-xl-4 order-xl-1 order-2">
			<div className="sidebar style-one bg-aqua round-10">
				<h3 className="fs-24 sidebar-title">Filter By</h3>

				<div className="sidebar-widget">
					<h3 className="sidebar-widget-title fs-18 fw-semibold">
						Tags
					</h3>
					<ul className="tag-list list-unstyle">
						{tags.map((tag) => (
							<li key={tag.id}>
								<Link href={`/${lang}/jobs/tag/${tag.name}`}>
									{tag.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default JobFilter;
