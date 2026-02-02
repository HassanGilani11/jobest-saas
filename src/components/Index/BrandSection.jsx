"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const BrandSection = () => {
	return (
		<div className="container pb-100">
			<div className="brand-wrapper round-10 ptb-100">
				<h6
					className="fs-16 fw-medium text-center text-white mb-50 title-anim  wow animate__animated animate__fadeInUp"
					data-wow-duration="1.4s"
					data-wow-delay="0.1s"
				>
					Trusted by 150+ Partners All Over The World
				</h6>
				<div
					className="brand-slider swiper wow animate__animated animate__fadeInUp"
					data-wow-duration="1.4s"
					data-wow-delay="0.2"
				>
					<Swiper
						spaceBetween={10}
						loop={true}
						speed={9000}
						freeMode={false}
						simulateTouch={false}
						autoplay={{
							delay: 2500,
							disableOnInteraction: true,
						}}
						modules={[Autoplay]}
						className="swiper-wrapper align-items-center"
						breakpoints={{
							0: {
								slidesPerView: 1.5,
							},
							576: {
								slidesPerView: 2.5,
							},
							768: {
								slidesPerView: 3.2,
							},
							992: {
								slidesPerView: 4,
							},
							1200: {
								slidesPerView: 4.4,
							},
							1400: {
								slidesPerView: 5.5,
							},
						}}
					>
						<SwiperSlide>
							<div className="brand-logo">
								<Image
									src="/images/brand/brand-1.svg"
									alt="Brand Logo"
									className="d-block mx-auto"
									width="150"
									height="30"
								/>
							</div>
						</SwiperSlide>
						 
						<SwiperSlide>
							<div className="brand-logo">
								<Image
									src="/images/brand/brand-3.svg"
									alt="Brand Logo"
									className="d-block mx-auto"
									width="150"
									height="30"
								/>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="brand-logo">
								<Image
									src="/images/brand/brand-4.svg"
									alt="Brand Logo"
									className="d-block mx-auto"
									width="150"
									height="30"
								/>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="brand-logo">
								<Image
									src="/images/brand/brand-5.svg"
									alt="Brand Logo"
									className="d-block mx-auto"
									width="150"
									height="30"
								/>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="brand-logo">
								<Image
									src="/images/brand/brand-6.svg"
									alt="Brand Logo"
									className="d-block mx-auto"
									width="150"
									height="30"
								/>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="brand-logo">
								<Image
									src="/images/brand/brand-1.svg"
									alt="Brand Logo"
									className="d-block mx-auto"
									width="150"
									height="30"
								/>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default BrandSection;
