"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import toast from "react-hot-toast";

const BannerSearch = ({
	categories,
	locations,
	classAtts = "hero-searchbox form-group-wrap d-flex flex-wrap align-items-center justify-content-between round-10 wow animate__animated animate__fadeInUp",
}) => {
	const [category, setCategory] = useState("");
	const [location, setLocation] = useState("");
	const searchParams = useSearchParams();
	const queryValue = searchParams?.get("query");
	const [query, setQuery] = useState(queryValue || "");
	const { lang } = useParams();
	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (category == "" || location == "" || query == "") {
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
		router.push(
			`/${lang}/jobs/?query=${query}&category=${category}&location=${location}`
		);
	};
	return (
		<form onSubmit={handleSubmit}>
			<div
				className={classAtts}
				data-wow-duration="1.4s"
				data-wow-delay="0.3s"
			>
				<div className="form-group">
					<label
						htmlFor="category"
						className="fs-14 fw-medium text-title d-block"
					>
						Job Categories
					</label>
					<select
						onChange={(e) => setCategory(e.target.value)}
						className="fs-18 fw-semibold text-title"
					>
						<option value="">Select</option>
						{categories.map((cat) => (
							<option key={cat.id} value={cat.id}>
								{cat.label}
							</option>
						))}
					</select>
				</div>
				<div className="form-group">
					<label
						htmlFor="job_location"
						className="fs-14 fw-medium text-title d-block"
					>
						Location
					</label>
					<select
						onChange={(e) => setLocation(e.target.value)}
						className="fs-18 fw-semibold text-title"
					>
						<option value="">Select</option>
						{locations.map((loc) => (
							<option key={loc.location} value={loc.location}>
								{loc.location}
							</option>
						))}
					</select>
				</div>
				<div className="form-group">
					<label
						htmlFor="job_title"
						className="fs-14 fw-medium text-title d-block"
					>
						Keywords or Titles
					</label>
					<input
						type="text"
						placeholder="Designer"
						className="fs-18 fw-semibold text-title border-0 w-100 bg-transparent"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
				</div>
				<div className="form-group mb-0">
					<button type="submit" className="btn border-0 text-white">
						Search
						<Image
							src="/images/icons/search-icon-2.svg"
							alt="Search Icon"
							width="16"
							height="16"
						/>
					</button>
				</div>
			</div>
		</form>
	);
};

export default BannerSearch;
