"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const Navbar = () => {
	const { lang } = useParams();
	// State to keep track of whether the class is added or not
	const [isClassAdded, setIsClassAdded] = useState(false);

	// Function to toggle the class on the body element
	const toggleBodyClass = () => {
		if (isClassAdded) {
			document.body.classList.remove("minimized"); // Remove the class
		} else {
			document.body.classList.add("minimized"); // Add the class
		}
		setIsClassAdded(!isClassAdded); // Update state
	};

	return (
		<>
			<div className="db-header bg-white mb-35 navbar-area transition">
				<div className="row align-items-center">
					<div className="col-md-6">
						<div className="db-header-left d-flex flex-wrap">
							<button
								onClick={toggleBodyClass}
								className="header-burger-menu transition position-relative lh-1 bg-transparent p-0 border-0 lg-none"
							>
								<Image
									src="/images/icons/sidebar-menu.svg"
									alt="Image"
									width="20"
									height="16"
								/>
							</button>
						</div>
					</div>

					<div className="col-md-6">
						<div className="db-header-right d-flex flex-wrap align-items-center justify-content-lg-end justify-content-center">
							<h6 className="m-0">Admin Dashboard</h6>

							<button 
								onClick={toggleBodyClass}
								className="mobile-menu transition position-relative lh-1 bg-transparent p-0 border-0 d-xl-none"
							>
								<Image
									src="/images/icons/sidebar-menu-2.svg"
									alt="Image"
									width="20"
									height="16"
								/>
							</button>
						</div>
					</div>
				</div>
			</div>

			<div onClick={toggleBodyClass} className="close-outside"></div>
		</>
	);
};

export default Navbar;
