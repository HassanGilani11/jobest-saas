"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import LoginForm from "./LoginForm";

const LoginBody = () => {
	return (
		<div className="container ptb-100">
			<div className="section-title style-one text-center mb-35">
				<h2>
					Login <strong>Account</strong>
				</h2>
			</div>
			<div className="row justify-content-center">
				<div className="col-xxl-6 col-lg-8">
					<div className="login-form-wrap bg-haze">
						<LoginForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginBody;
