"use client";
import React from "react";

const Spinner = () => {
	return (
		<>
			<span className="spinner-border spinner-border-sm"></span>
			<span className="visually-hidden" role="status">
				Loading...
			</span>
		</>
	);
};

export default Spinner;
