"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";

const Footer = () => {
	const { lang } = useParams();
	return (
		<footer className="footer-wrap style-one position-relative bg-gray index-1 pt-100">
			<div className="container">
				<div className="row pb-70">
					<div className="col-xxl-2 col-xl-2 col-lg-2 col-md-5">
						<div className="footer-widget mb-30 wow animate__animated animate__fadeInUp">
							<Link href="/" className="logo">
								<Image
									src="/images/logo.svg"
									alt="Image"
									className="logo-light"
									width={124}
									height={30}
								/>
								<Image
									src="/images/logo-white.svg"
									alt="Image"
									className="logo-dark"
									width={124}
									height={30}
								/>
							</Link>
							<Image
								src="/images/footer-shape.png"
								alt="Image"
								className="footer-shape d-block"
								width={32}
								height={37}
							/>
						</div>
					</div>
					<div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6 ps-xxl-55 pe-xxl-0">
						<div
							className="footer-widget mb-30 wow animate__animated animate__fadeInUp"
							data-wow-duration="1.4s"
							data-wow-delay="0.2s"
						>
							<h4 className="fs-18 fw-bold text-title widget-title">
								Services
							</h4>
							<ul className="footer-menu list-unstyle">
								<li>
									<Link href={`/${lang}/jobs`}>
										Browse Jobs
									</Link>
								</li>
								<li>
									<Link href={`/${lang}/employers`}>
										Companies
									</Link>
								</li>
								<li>
									<Link href={`/${lang}/candidates`}>
										Candidates
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xxl-3 col-xl-2 col-lg-2 col-md-3 col-sm-6 ps-xxl-65">
						<div
							className="footer-widget mb-30 wow animate__animated animate__fadeInUp"
							data-wow-duration="1.4s"
							data-wow-delay="0.3s"
						>
							<h4 className="fs-18 fw-bold text-title widget-title">
								Company
							</h4>
							<ul className="footer-menu list-unstyle">
								<li>
									<Link href={`/${lang}/about`}>
										About Us
									</Link>
								</li>
								<li>
									<Link href={`/${lang}/blog`}>Blog</Link>
								</li>
								<li>
									<Link href={`/${lang}/faq`}>
										FAQ&rsquo;s
									</Link>
								</li>
								<li>
									<Link href={`/${lang}/contact`}>
										Contact
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xxl-2 col-xl-3 col-lg-3 col-md-5 col-sm-6 ps-xxl-0">
						<div
							className="footer-widget mb-30 wow animate__animated animate__fadeInUp"
							data-wow-duration="1.4s"
							data-wow-delay="0.4s"
						>
							<h4 className="fs-18 fw-bold text-title widget-title">
								Support
							</h4>
							<ul className="footer-menu list-unstyle">
								<li>
									<Link href={`/${lang}/terms-conditions`}>
										Terms Of Use
									</Link>
								</li>
								<li>
									<Link href={`/${lang}/privacy-policy`}>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link href={`/${lang}/cookies-policy`}>
										Cookies Policy
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-3 col-md-7 col-sm-6 ps-xxl-4 pe-xxl-1">
						<div
							className="footer-widget mb-30 wow animate__animated animate__fadeInUp"
							data-wow-duration="1.4s"
							data-wow-delay="0.5s"
						>
							<h4 className="fs-18 fw-bold text-title widget-title">
								Subscribe
							</h4>
							<form action="#" className="subscribe-form">
								<input
									type="email"
									placeholder="Email"
									className="bg-white border-0 round-6"
								/>
								<button className="btn style-one d-block w-100">
									Subscribe Now
								</button>
							</form>
							<p className="fs-14 mb-0">
								We only send interesting and relevant emails.
							</p>
						</div>
					</div>
				</div>
				<div
					className="footer-bottom wow animate__animated animate__fadeIn"
					data-wow-duration="1.4s"
					data-wow-delay="0.1s"
				>
					<div className="row">
						<div className="col-md-6">
							<p className="copyright-text mb-0">
								<i className="ri-copyright-line"></i>
								<span className="fw-bold">Jobest</span>. All
								rights reserved by{" "}
								<a
									href="https://envytheme.com"
									target="_blank"
									className="link style-one fw-bold"
								>
									EnvyTheme
								</a>
							</p>
						</div>
						<div className="col-md-6">
							<ul className="social-profile text-md-end list-unstyle">
								<li>
									<a
										target="_blank"
										href="https://www.facebook.com"
									>
										<i className="ri-facebook-fill"></i>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										href="https://www.instagram.com"
									>
										<i className="ri-instagram-line"></i>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										href="https://www.twitter.com"
									>
										<i className="ri-twitter-fill"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
