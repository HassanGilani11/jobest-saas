"use client";

import React from "react";
import NoticeBar from "./NoticeBar";
import Logo from "./Logo";
import Link from "next/link";
import { useParams } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import UserMenu from "./UserMenu";
import MenuLink from "./MenuLink";

const Navbar = ({ currentUser, navigation }) => {
	const { lang } = useParams();

	const [menu, setMenu] = React.useState(true);
	const toggleNavbar = () => {
		setMenu(!menu);
	};

	React.useEffect(() => {
		let elementId = document.getElementById("navbar");
		document.addEventListener("scroll", () => {
			if (window.scrollY > 170) {
				elementId.classList.add("sticky");
			} else {
				elementId.classList.remove("sticky");
			}
		});
	});

	const classOne = menu
		? "collapse navbar-collapse mean-menu"
		: "collapse navbar-collapse show";
	const classTwo = menu
		? "navbar-toggler navbar-toggler-right d-lg-none collapsed"
		: "navbar-toggler navbar-toggler-right d-lg-none";

	return (
		<div id="navbar" className="navbar-area style-one position-relative">
			<NoticeBar />

			<nav className="navbar navbar-expand-lg bg_dark d-flex justify-content-between align-items-center">
				<div className="container position-relative">
					<Logo />

					<button
						onClick={toggleNavbar}
						className={classTwo}
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="icon-bar top-bar"></span>
						<span className="icon-bar middle-bar"></span>
						<span className="icon-bar bottom-bar"></span>
					</button>

					<div className={classOne}>
						<ul className="navbar-nav mx-auto">
							<AnimatePresence>
								{navigation.links.map((link) => {
									return (
										<MenuLink key={link.path} link={link} />
									);
								})}
							</AnimatePresence>
						</ul>

						{currentUser ? (
							<UserMenu currentUser={currentUser} />
						) : (
							<div className="other-options d-flex align-items-center justify-content-end">
								<Link
									href={`/${lang}/login`}
									className="link style-four fw-medium"
								>
									{navigation.login}
								</Link>
								<Link
									href={`/${lang}/register`}
									className="btn style-four"
								>
									{navigation.register}
								</Link>
							</div>
						)}
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
