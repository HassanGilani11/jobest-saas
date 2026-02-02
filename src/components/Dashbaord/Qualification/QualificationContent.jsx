"use client";
import React from "react";
import Navbar from "../Navbar";
import useModalStore, { useStore } from "@/store/useModalStore";
import EducationList from "./EducationList";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import ExperienceList from "./ExperienceList";

const QualificationContent = ({ educations, experiences }) => {
	const { openModal } = useModalStore();
	const addData = useStore((state) => state.addData);
	const router = useRouter();

	const dataModalForEdit = (data) => {
		addData(data);
		openModal("education");
	};
	const dataModalForEditEx = (data) => {
		addData(data);
		openModal("experience");
	};

	const handleDeleteEdu = async (educationId) => {
		await axios
			.delete(`/api/user/education/${educationId}`)
			.then((response) => {
				toast.success(response.data.message);
				router.refresh();
			})
			.catch((error) => {
				toast.error("Something went wrong!");
			});
	};
	const handleDeleteEx = async (experienceId) => {
		await axios
			.delete(`/api/user/experience/${experienceId}`)
			.then((response) => {
				toast.success(response.data.message);
				router.refresh();
			})
			.catch((error) => {
				toast.error("Something went wrong!");
			});
	};

	return (
		<div className="db-main transition">
			<Navbar />
			<div className="db-content">
				<div className="db-content-box bg-white mb-25">
					<div className="row">
						<div className="col-md-6 pe-5 mb-4">
							<div className="d-flex align-items-center justify-content-between mb-3">
								<h4 className="m-0">Educations</h4>
								<button
									className="btn btn-success btn-sm py-3"
									onClick={() => openModal("education")}
								>
									+ Educational Info
								</button>
							</div>

							{educations.length > 0 ? (
								educations.map((edu) => (
									<EducationList
										key={edu.id}
										edu={edu}
										handleEdit={() => dataModalForEdit(edu)}
										onDelete={() => handleDeleteEdu(edu.id)}
									/>
								))
							) : (
								<div className="card mb-3">
									<div className="card-body">Empty!</div>
								</div>
							)}
						</div>

						<div className="col-md-6 ps-5 mb-4">
							<div className="d-flex align-items-center justify-content-between mb-3">
								<h4 className="m-0">Experiences</h4>
								<button
									className="btn btn-success btn-sm py-3"
									onClick={() => openModal("experience")}
								>
									+ Experience
								</button>
							</div>
							{experiences.length > 0 ? (
								experiences.map((ex) => (
									<ExperienceList
										key={ex.id}
										ex={ex}
										handleEdit={() =>
											dataModalForEditEx(ex)
										}
										onDelete={() => handleDeleteEx(ex.id)}
									/>
								))
							) : (
								<div className="card mb-3">
									<div className="card-body">Empty!</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QualificationContent;
