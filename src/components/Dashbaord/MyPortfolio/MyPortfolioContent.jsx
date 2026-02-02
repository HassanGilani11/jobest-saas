"use client";
import React from "react";
import Navbar from "../Navbar";
import useModalStore, { useStore } from "@/store/useModalStore";
import PortfolioList from "./PortfolioList";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const MyPortfolioContent = ({ portfolios }) => {
	const { openModal } = useModalStore();
	const addData = useStore((state) => state.addData);
	const router = useRouter();

	const dataModalForEdit = (data) => {
		addData(data);
		openModal("portfolio");
	};

	const handleDelete = async (portfolioId) => {
		await axios
			.delete(`/api/user/portfolio/${portfolioId}`)
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
			<div className="db-content mb-70">
				<div className="db-content-box bg-white mb-25">
					<div className="d-flex align-items-center justify-content-between mb-25">
						<h4 className="db-content-title fs-20 fw-bold mb-0">
							My Portfolio
						</h4>
						<button
							className="btn btn-primary btn-sm py-3"
							onClick={() => openModal("portfolio")}
						>
							+ Portfolio
						</button>
					</div>
					<div className="db-candidate-wrapper style-two">
						{portfolios.length > 0 ? (
							portfolios.map((prt) => (
								<PortfolioList
									key={prt.id}
									prt={prt}
									handleEdit={() => dataModalForEdit(prt)}
									onDelete={() => handleDelete(prt.id)}
								/>
							))
						) : (
							<h2>Empty!</h2>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyPortfolioContent;
