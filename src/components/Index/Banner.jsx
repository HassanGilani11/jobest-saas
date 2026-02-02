"use client";
import Image from "next/image";
import React from "react";

import BannerSearch from "./BannerSearch";
import PopularSearchesTags from "./PopularSearchesTags";
import BannerSlider from "./BannerSlider";

const Banner = ({ categories, locations, popularCategories, homepage }) => {
	return (
		<div className="hero-wrap style-one position-relative index-1 overflow-hidden">
			<Image
				src="/images/hero/hero-shape-left.png"
				alt="Shape"
				className="hero-shape-left position-absolute sm-none moveContent"
				width={210}
				height={324}
			/>
			<Image
				src="/images/hero/hero-shape-right.png"
				alt="Shape"
				className="hero-shape-right position-absolute sm-none moveContent"
				width={249}
				height={271}
			/>
			<div className="container">
				<div className="row">
					<div className="col-xl-10 offset-xl-1">
						<div className="hero-content">
							<h1 className="text-center">
								<div
									dangerouslySetInnerHTML={{
										__html: homepage.banner.h1,
									}}
								/>
							</h1>
							<p className="fs-xxl-18 fw-medium text-center animate__animated animate__fadeInUp">
								{homepage.banner.p}
							</p>
							<BannerSearch
								categories={categories}
								locations={locations}
							/>
							<PopularSearchesTags
								popularCategories={popularCategories}
							/>
						</div>
					</div>
				</div>
			</div>
			<BannerSlider />
		</div>
	);
};

export default Banner;
