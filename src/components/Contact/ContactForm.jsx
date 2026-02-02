"use client";

import Image from "next/image";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const ContactForm = () => {
	const { lang } = useParams();
	const router = useRouter();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid, isSubmitting },
	} = useForm({
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
	});

	const onSubmit = (data) => {
		axios
			.post("/api/contact", data)
			.then((response) => {
				toast.success(response.data.message);
				router.refresh();
				reset();
			})
			.catch((error) => {
				toast.error(error.response.data.message);
			});
	};

	return (
		<div className="container pt-100 pb-70">
			<div className="row align-items-center">
				<div className="col-md-6 pe-xxl-2">
					<div className="contact-content mb-30">
						<div className="section-title style-one mb-30">
							<h2 className="mb-15">
								We will Love To Here From You,{" "}
								<strong>Message Us</strong>
							</h2>
							<p>We are always ready to connect you.</p>
						</div>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="contact-form"
						>
							<div className="row">
								<div className="col-lg-6">
									<div className="form-group position-relative mb-20">
										<label className="text-title fw-medium">
											Name
										</label>
										<input
											{...register("name", {
												required: true,
											})}
											className="bg-gray border-0 w-100 round-4"
											placeholder="Your Name"
											type="text"
										/>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="form-group mb-20">
										<label className="text-title fw-medium">
											Email
										</label>
										<input
											{...register("email", {
												required: true,
											})}
											className="bg-gray border-0 w-100 round-4"
											placeholder="Email"
											type="email"
										/>
									</div>
								</div>
								<div className="col-12">
									<div className="form-group mb-20">
										<label className="text-title fw-medium">
											Subject
										</label>
										<input
											{...register("subject", {
												required: true,
											})}
											className="bg-gray border-0 w-100 round-4"
											placeholder="Subject"
											type="text"
										/>
									</div>
								</div>
								<div className="col-12">
									<div className="form-group mb-20">
										<label className="text-title fw-medium">
											Your message here
										</label>
										<textarea
											{...register("message", {
												required: true,
											})}
											cols="30"
											rows="10"
											className="bg-gray border-0 w-100 round-4"
											placeholder="Your message here"
										></textarea>
									</div>
								</div>
								<div className="col-12">
									<div className="form-check checkbox mb-20">
										<input
											className="form-check-input"
											type="checkbox"
											id="test_20"
										/>
										<label className="form-check-label">
											I accept to the{" "}
											<Link
												href={`/${lang}/terms-conditions`}
												className="link style-one fs-15"
											>
												Terms &amp; Conditions
											</Link>{" "}
											and{" "}
											<Link
												href={`/${lang}/privacy-policy`}
												className="link style-one fs-15"
											>
												Privacy Policy
											</Link>
										</label>
									</div>
								</div>
								<div className="col-12">
									<button
										className="btn style-four"
										disabled={isSubmitting || !isValid}
									>
										Send Message Now
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className="col-md-6 ps-xxl-5 pe-xxl-1">
					<div className="contact-img-wrap position-relative index-1 mb-30">
						<Image
							src="/images/section-shape-4.png"
							alt="Shape"
							className="contact-shape position-absolute moveHorizontal sm-none"
							width={38}
							height={45}
						/>
						<Image
							src="/images/contact-img.png"
							alt="Contact Image"
							className="contact-img"
							width={522}
							height={546}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
