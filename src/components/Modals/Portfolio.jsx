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
import ImageUpload from "./ImageUpload";

const Portfolio = () => {
	const { closeModal } = useModalStore();
	const data = useStore((state) => state.data);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		setValue,
		reset,
		watch,
		formState: { errors, isLoading, isSubmitting, isValid },
	} = useForm({
		defaultValues: {
			projectId: null,
			project_name: "",
			project_url: "",
			project_image: "",
			description: "",
		},
	});

	useEffect(() => {
		setValue("projectId", data.length > 0 ? data[0].id : "");
		setValue("project_name", data.length > 0 ? data[0].project_name : "");
		setValue("project_url", data.length > 0 ? data[0].project_url : "");
		setValue("project_image", data.length > 0 ? data[0].project_image : "");
		setValue("description", data.length > 0 ? data[0].description : "");
	}, [data, setValue]);

	const project_image = watch("project_image");

	const onSubmit = async (data) => {
		await axios
			.post("/api/user/portfolio", data)
			.then((response) => {
				toast.success(
					"Thank you! Your portfolio has been added to your profile."
				);
				reset();
				closeModal();
				router.push(`/en/dashboard/my-portfolio`);
			})
			.catch((error) => {
				toast.error(error.response.data.message);
			});
	};

	const setCustomValue = (id, value) => {
		setValue(id, value, {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: true,
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
					<h1 className="modal-title fs-5">Portfolio</h1>
					<button
						type="button"
						className="btn-close"
						onClick={closeModal}
					></button>
				</div>
				<div className="modal-body">
					<form onSubmit={handleSubmit(onSubmit)}>
						<ModalInput
							label="Project Name"
							id="project_name"
							disabled={isLoading || isSubmitting}
							register={register}
							errors={errors}
							required
						/>

						<ModalInput
							label="Project URL"
							id="project_url"
							disabled={isLoading || isSubmitting}
							register={register}
							errors={errors}
							required
						/>
						<ImageUpload
							onChange={(value) =>
								setCustomValue("project_image", value)
							}
							value={project_image}
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
								) : data.length > 0 && data[0].id ? (
									"Update Portfolio"
								) : (
									"Add Portfolio"
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
		height: "100%",
		overflowY: "auto",
	},
};

export default Portfolio;
