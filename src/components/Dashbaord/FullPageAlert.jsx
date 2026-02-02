"use client";
import React, { useState } from "react";
import CreateForm from "./Company/CreateForm";

const FullPageAlert = ({ message }) => {
	return (
		<div className="alert-overlay">
			<div className="alert-content">
				<h6>{message}</h6>
				<CreateForm />
			</div>
		</div>
	);
};

export default FullPageAlert;
