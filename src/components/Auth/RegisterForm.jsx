"use client";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import FormInput from "./FormInput";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";

const RegisterForm = () => {
	const { lang } = useParams();
	const route = useRouter();
	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors, isLoading, isSubmitting, isValid },
	} = useForm({
		defaultValues: {
			name: "",
			email: "",
			designation: "",
			password: "",
		},
	});

	const onSubmit = async (data) => {
		await axios
			.post("/api/register", data)
			.then((response) => {
				toast.success("Registration success! Please login.", {
					style: {
						border: "1px solid #4BB543",
						padding: "16px",
						color: "#2f2d2d",
					},
				});
				reset();
				route.push(`/${lang}/login`);
			})
			.catch((error) => {
				toast.error(error.response.data.message, {
					style: {
						border: "1px solid #ff3333",
						padding: "12px",
						color: "#ff3333",
					},
				});
			});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="login-form">
			<FormInput
				label="Full Name"
				id="name"
				disabled={isLoading || isSubmitting}
				register={register}
				errors={errors}
				required
			/>
			<FormInput
				label="Email"
				id="email"
				type="email"
				disabled={isLoading || isSubmitting}
				register={register}
				errors={errors}
				required
			/>
			<FormInput
				label="Designaton"
				id="designation"
				disabled={isLoading || isSubmitting}
				register={register}
				errors={errors}
				required
			/>
			<FormInput
				label="Password"
				id="password"
				type="password"
				disabled={isLoading || isSubmitting}
				register={register}
				errors={errors}
				required
			/>

			<div className="form-check checkbox">
				<input
					className="form-check-input"
					type="checkbox"
					{...register("acceptTerms", { required: true })}
					id="acceptTerms"
				/>

				<label className="form-check-label" htmlFor="acceptTerms">
					By hitting the Register button, you agree to the{" "}
					<Link
						href={`/${lang}/terms-conditions`}
						className="link style-one"
					>
						Terms conditions
					</Link>{" "}
					&{" "}
					<Link
						href={`/${lang}/privacy-policy`}
						className="link style-one"
					>
						Privacy Policy
					</Link>
				</label>
			</div>

			<div className="text-center mt-20">
				<button
					className="btn style-four"
					disabled={isLoading || isSubmitting || !isValid}
				>
					{isLoading || isSubmitting
						? "Please wait..."
						: "Register Now"}
				</button>
				<p className="mb-0 mt-3">
					Have an account?{" "}
					<Link
						href={`/${lang}/login`}
						className="link style-three fw-semibold"
					>
						Login Now
					</Link>
				</p>
			</div>
		</form>
	);
};

export default RegisterForm;
