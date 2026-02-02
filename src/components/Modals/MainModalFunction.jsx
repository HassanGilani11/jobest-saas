"use client";
import React from "react";
import { AnimatePresence } from "framer-motion";
import useModalStore from "@/store/useModalStore";
import Education from "./Education";
import Experiences from "./Experience";
import Portfolio from "./Portfolio";

const MainModalFunction = () => {
	const { action } = useModalStore();
	return (
		<AnimatePresence>
			{action === "education" ? (
				<Education />
			) : action === "experience" ? (
				<Experiences />
			) : action === "portfolio" ? (
				<Portfolio />
			) : null}
		</AnimatePresence>
	);
};

export default MainModalFunction;
