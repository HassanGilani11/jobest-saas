"use client";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			subject: "",
			email: "",
			phone: "",
			message: "",
		},
	});

	const onSubmit = (data) => {
		toast.success("Thank you for your message.");
		reset();
	};
	return (
		<div className="sidebar-widget style-two bg-aqua round-10">
			<h3 className="sidebar-widget-title fs-20 font-semibold">
				Contact Employer
			</h3>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="contact-employer"
			>
				<div className="form-group mb-20">
					<label className="text-title">Subject</label>
					<input
						className={`bg-white border-0 w-100 round-4`}
						{...register("subject", { required: true })}
						placeholder="Subject"
					/>
				</div>
				<div className="form-group mb-20">
					<label className="text-title">Email</label>
					<input
						className="bg-white border-0 w-100 round-4"
						{...register("email", { required: true })}
						placeholder="Email"
					/>
				</div>
				<div className="form-group mb-20">
					<label className="text-title">Phone Number</label>
					<input
						className="bg-white border-0 w-100 round-4"
						{...register("phone", { required: true })}
						placeholder="Phone"
					/>
				</div>
				<div className="form-group mb-20">
					<label className="text-title">Your Message</label>
					<textarea
						{...register("message", { required: true })}
						cols="30"
						rows="10"
						placeholder="Your message here"
						className="bg-white border-0 w-100 round-4"
					/>
				</div>
				<button className="btn style-four d-block w-100">
					Send Message Now
				</button>
			</form>
		</div>
	);
};

export default Contact;
