"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import RegisterForm from "./RegisterForm";

const RegisterBody = () => {
	return (
		<div className="container ptb-100">
			<div className="section-title style-one text-center mb-35">
				<h2>
					Create <strong>Account</strong>
				</h2>
			</div>
			<div className="row justify-content-center">
				<div className="col-xxl-6 col-lg-8">
					<div className="login-form-wrap bg-haze">
						{/* <Link
							href="/"
							className="login-btn d-block w-100 round-4 transition"
						>
							<Image
								src="/images/icons/facebook.png"
								alt="Facebook"
								width={12}
								height={20}
							/>{" "}
							Continue With <strong>Facebook</strong>
						</Link>
						<Link
							href="/"
							className="login-btn d-block w-100 round-4 transition"
						>
							<Image
								src="/images/icons/google.png"
								alt="Facebook"
								width={12}
								height={20}
							/>{" "}
							Continue With <strong>Google</strong>
						</Link>
						<div className="or-text position-relative index-1">
							<span className="fs-14">or</span>
						</div> */}

						<RegisterForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterBody;
