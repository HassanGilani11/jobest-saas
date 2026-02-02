"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";

const BannerSlider = () => {
	return (
		<div
			className="container-fluid hero-shape-animation pb-70 wow animate__animated animate__fadeIn"
			data-wow-duration="1.4s"
			data-wow-delay="0.2s"
		>
			<div className="row gx-xxl-25">
				<div className="col-xl-3 col-md-6">
					<Swiper
						spaceBetween={30}
						slidesPerView={1}
						effect={"fade"}
						autoplay={true}
						fadeEffect={{ crossFade: true }}
						modules={[EffectFade, Autoplay]}
						className="img-slider"
					>
						<SwiperSlide>
							<Image
								src="/images/hero/hero-shape-1.png"
								alt="Image"
								className="w-100"
								width={402}
								height={312}
							/>
						</SwiperSlide>

						<SwiperSlide>
							<Image
								src="/images/hero/hero-shape-2.png"
								alt="Image"
								className="w-100"
								width={402}
								height={303}
							/>
						</SwiperSlide>
					</Swiper>
				</div>

				<div className="col-xl-3 col-md-6">
					<Swiper
						spaceBetween={30}
						slidesPerView={1}
						effect={"fade"}
						autoplay={true}
						fadeEffect={{ crossFade: true }}
						modules={[EffectFade, Autoplay]}
						className="img-slider"
					>
						<SwiperSlide>
							<Image
								src="/images/hero/hero-shape-3.png"
								alt="Image"
								className="w-100"
								width={402}
								height={312}
							/>
						</SwiperSlide>

						<SwiperSlide>
							<Image
								src="/images/hero/hero-shape-4.png"
								alt="Image"
								className="w-100"
								width={402}
								height={303}
							/>
						</SwiperSlide>
					</Swiper>
				</div>

				<div className="col-xl-3 col-md-6">
					<Swiper
						spaceBetween={30}
						slidesPerView={1}
						effect={"fade"}
						autoplay={true}
						fadeEffect={{ crossFade: true }}
						modules={[EffectFade, Autoplay]}
						className="img-slider"
					>
						<SwiperSlide>
							<Image
								src="/images/hero/hero-shape-5.png"
								alt="Image"
								className="w-100"
								width={402}
								height={312}
							/>
						</SwiperSlide>

						<SwiperSlide>
							<Image
								src="/images/hero/hero-shape-6.png"
								alt="Image"
								className="w-100"
								width={402}
								height={303}
							/>
						</SwiperSlide>
					</Swiper>
				</div>

				<div className="col-xl-3 col-md-6">
					<Swiper
						spaceBetween={30}
						slidesPerView={1}
						effect={"fade"}
						autoplay={true}
						fadeEffect={{ crossFade: true }}
						modules={[EffectFade, Autoplay]}
						className="img-slider"
					>
						<SwiperSlide>
							<Image
								src="/images/hero/hero-shape-7.png"
								alt="Image"
								className="w-100"
								width={402}
								height={312}
							/>
						</SwiperSlide>

						<SwiperSlide>
							<Image
								src="/images/hero/hero-shape-8.png"
								alt="Image"
								className="w-100"
								width={402}
								height={303}
							/>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default BannerSlider;
