"use client";
import React, { useEffect } from "react";
import useModalStore, { useStore } from "@/store/useModalStore";
import { motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import ModalInput from "./ModalInput";
import ModalTextArea from "./ModalTextArea";
import Spinner from "../Spinner";
import { useRouter } from "next/navigation";
import { dateInputFormate } from "@/utils/dateFormat";

const Education = () => {
	const { closeModal } = useModalStore();
	const data = useStore((state) => state.data);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		setError,
		setValue,
		reset,
		formState: { errors, isLoading, isSubmitting, isValid },
	} = useForm({
		defaultValues: {
			educationId: null,
			institution: "",
			degree: "",
			start_date: "",
			end_date: "",
			description: "",
		},
	});

	useEffect(() => {
		setValue("educationId", data.length > 0 ? data[0].id : "");
		setValue("institution", data.length > 0 ? data[0].institution : "");
		setValue("degree", data.length > 0 ? data[0].degree : "");
		setValue(
			"start_date",
			data.length > 0 ? dateInputFormate(data[0].start_date) : ""
		);
		setValue(
			"end_date",
			data.length > 0 && data[0].end_date
				? dateInputFormate(data[0].end_date)
				: ""
		);
		setValue("description", data.length > 0 ? data[0].description : "");
	}, [data, setValue]);

	const onSubmit = async (data) => {
		await axios
			.post("/api/user/education", data)
			.then((response) => {
				toast.success(
					"Thank you! Your educational background has been added to your profile."
				);
				reset();
				closeModal();
				router.push(`/en/dashboard/qualification`);
			})
			.catch((error) => {
				toast.error(error.response.data.message);
			});
	};

	return (
		<div className="modal" style={modalStyles.overlay}>
			<motion.div
				style={modalStyles.modal}
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, y: "100%" }}
				transition={{ duration: 0.2 }}
			>
				<div className="modal-header pt-0">
					<h1 className="modal-title fs-5">Education</h1>
					<button
						type="button"
						className="btn-close"
						onClick={closeModal}
					></button>
				</div>
				<div className="modal-body">
					<form onSubmit={handleSubmit(onSubmit)}>
						<ModalInput
							label="Institution"
							id="institution"
							disabled={isLoading || isSubmitting}
							register={register}
							errors={errors}
							required
						/>
						<ModalInput
							label="Degree"
							id="degree"
							disabled={isLoading || isSubmitting}
							register={register}
							errors={errors}
							required
						/>
						<ModalInput
							label="Start Date"
							id="start_date"
							type="date"
							disabled={isLoading || isSubmitting}
							register={register}
							errors={errors}
							required
						/>
						<ModalInput
							label="End Date"
							id="end_date"
							type="date"
							disabled={isLoading || isSubmitting}
							register={register}
							errors={errors}
							required={false}
						/>

						<ModalTextArea
							label="Description"
							id="description"
							disabled={isLoading || isSubmitting}
							register={register}
							errors={errors}
							required
						/>
						<div className="text-end">
							<button
								type="submit"
								className="btn btn-primary"
								disabled={isLoading || isSubmitting || !isValid}
							>
								{isSubmitting ? (
									<>
										<Spinner /> Please Wait...
									</>
								) : (
									<>Add Education</>
								)}
							</button>
						</div>
					</form>
				</div>
			</motion.div>
		</div>
	);
};

const modalStyles = {
	overlay: {
		position: "fixed",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		zIndex: 999,
	},
	modal: {
		background: "#fff",
		padding: "20px",
		borderRadius: "8px",
		width: "500px",
		position: "relative",
	},
};

export default Education;
