"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const TestimonialSection = () => {
	const swiperRef = useRef();

	return (
		<div className="testimonial-wrap style-one position-relative ptb-100">
			<div className="container">
				<div className="section-title style-one text-center mb-35">
					<h2
						className="title-anim  wow animate__animated animate__fadeInUp"
						data-wow-duration="1.4s"
						data-wow-delay="0.1s"
					>
						Have A Look Our <strong>Success Stories</strong>
					</h2>
					<p
						className="mb-0  wow animate__animated animate__fadeInUp"
						data-wow-duration="1.4s"
						data-wow-delay="0.2s"
					>
						Jobest have changed thousands life!
					</p>
				</div>
				<div
					className="testimonial-slider swiper wow animate__animated animate__fadeInUp"
					data-wow-duration="1.4s"
					data-wow-delay="0.2s"
				>
					<Swiper
						onBeforeInit={(swiper) => {
							swiperRef.current = swiper;
						}}
						autoHeight={true}
						modules={[Navigation]}
						className="swiper-wrapper"
						breakpoints={{
							640: {
								slidesPerView: 1,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 1,
								spaceBetween: 40,
							},
							1024: {
								slidesPerView: 2,
								spaceBetween: 50,
							},
						}}
					>
						<SwiperSlide>
							<div className="testimonial-card style-one bg-gray round-20">
								<div className="testimonial-header d-flex align-items-center justify-content-between">
									<Image
										src="/images/clients/trustpilot.png"
										alt="Image"
										width={134}
										height={32}
									/>
									<div className="ratings d-flex align-items-center justify-content-md-end">
										<span className="fs-18 fw-bold text-title">
											5.0
										</span>
										<ul className="rating list-unstyle">
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
										</ul>
									</div>
								</div>
								<p className="client-quote fw-medium text-title">
									&quot;When you want to create a business
									bigger than yourself, you need a lot of
									help. Thats what Jobest does for you
									tremendiously.&quot;
								</p>
								<h6 className="client-info fs-16">
									John Watson,{" "}
									<span className="fs-14 text-paraThree fw-normal">
										Marketing Chief at Solit IT
									</span>
								</h6>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="testimonial-card style-one bg-gray round-20">
								<div className="testimonial-header d-flex align-items-center justify-content-between">
									<Image
										src="/images/clients/trustpilot.png"
										alt="Image"
										width={134}
										height={32}
									/>
									<div className="ratings d-flex align-items-center justify-content-md-end">
										<span className="fs-18 fw-bold text-title">
											5.0
										</span>
										<ul className="rating list-unstyle">
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
										</ul>
									</div>
								</div>
								<p className="client-quote fw-medium text-title">
									&quot;Lorem ipsum dolor sit amet
									consectetur. Felis diam vestibulum massa
									tincidunt sit pharetra. Dolor viverra justo
									massa facilisis tortor aliquet. Mauris neque
									dis et molestie. Elit et adipiscing feugiat
									adipiscing odio.&quot;
								</p>
								<h6 className="client-info fs-16">
									Jenny Angela,
									<span className="fs-14 text-paraThree fw-normal">
										{" "}
										CEO at Medizo
									</span>
								</h6>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="testimonial-card style-one bg-gray round-20">
								<div className="testimonial-header d-flex align-items-center justify-content-between">
									<Image
										src="/images/clients/trustpilot.png"
										alt="Image"
										width={134}
										height={32}
									/>
									<div className="ratings d-flex align-items-center justify-content-md-end">
										<span className="fs-18 fw-bold text-title">
											5.0
										</span>
										<ul className="rating list-unstyle">
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
										</ul>
									</div>
								</div>
								<p className="client-quote fw-medium text-title">
									&quot;When you want to create a business
									bigger than yourself, you need a lot of
									help. Thats what Jobest does for you
									tremendiously.&quot;
								</p>
								<h6 className="client-info fs-16">
									John Watson,{" "}
									<span className="fs-14 text-paraThree fw-normal">
										Accounts Manager at Bistro IT
									</span>
								</h6>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
			<div className="slider-btn">
				<div
					className="testimonial-prev"
					onClick={() => swiperRef.current?.slidePrev()}
					style={{ cursor: "pointer" }}
				>
					<Image
						src="/images/icons/left-arrow.svg"
						alt="Arrow Icon"
						width="22"
						height="18"
					/>
				</div>
				<div
					className="testimonial-next"
					onClick={() => swiperRef.current?.slideNext()}
					style={{ cursor: "pointer" }}
				>
					<Image
						src="/images/icons/right-arrow.svg"
						alt="Arrow Icon"
						width="22"
						height="18"
					/>
				</div>
			</div>
		</div>
	);
};

export default TestimonialSection;
