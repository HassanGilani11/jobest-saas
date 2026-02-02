"use client";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import FormInput from "./FormInput";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginForm = () => {
	const { lang } = useParams();
	const router = useRouter();
	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors, isLoading, isSubmitting, isValid },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (data) => {
		signIn("credentials", {
			...data,
			redirect: false,
		}).then((callback) => {
			if (!callback?.error) {
				toast.success("Logged in");
				router.refresh();
			}

			if (callback?.error) {
				toast.error(callback.error);
			}
		});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="login-form">
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
				label="Password"
				id="password"
				type="password"
				disabled={isLoading || isSubmitting}
				register={register}
				errors={errors}
				required
			/>

			<div className="text-center mt-20">
				<button
					className="btn style-four"
					disabled={isLoading || isSubmitting || !isValid}
				>
					{isLoading || isSubmitting ? "Please wait..." : "Login Now"}
				</button>
				<p className="mb-0 mt-3">
					Don not have an account?{" "}
					<Link
						href={`/${lang}/register`}
						className="link style-three fw-semibold"
					>
						Register Now
					</Link>
				</p>
			</div>
		</form>
	);
};

export default LoginForm;
