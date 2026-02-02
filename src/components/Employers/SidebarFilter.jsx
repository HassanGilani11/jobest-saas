"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import toast from "react-hot-toast";

const SidebarFilter = () => {
	const searchParams = useSearchParams();
	const queryValue = searchParams?.get("query");
	const [query, setQuery] = useState(queryValue || "");
	const { lang } = useParams();
	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (query == "") {
			toast.error("Please ensure the query is set correctly.", {
				style: {
					border: "1px solid #D8000C",
					padding: "16px",
					color: "#D8000C",
				},
				iconTheme: {
					primary: "#D8000C",
					secondary: "#FFFAEE",
				},
			});
			return;
		}
		router.push(`/${lang}/employers/?query=${query}`);
	};
	return (
		<div className="col-xl-4 order-xl-1 order-2">
			<div className="sidebar style-one bg-aqua round-10">
				<div className="sidebar-widget">
					<h3 className="sidebar-widget-title fs-18 fw-semibold">
						Search
					</h3>
					<form
						onSubmit={handleSubmit}
						className="searchbox-widget position-relative"
					>
						<Image
							src="/images/icons/search-green.svg"
							alt="Search Icon"
							className="search-icon"
							width="16"
							height="16"
						/>
						<input
							type="search"
							className="bg-white w-100 round-4 text-paraThree border-0"
							placeholder="Company titles/keywords"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SidebarFilter;
