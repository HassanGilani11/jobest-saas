"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const Sidebar = ({ currentUser }) => {
	const { lang } = useParams();
	const pathname = usePathname();
	// const isActive = pathname === pathname;
	const isActive = (urlPath) => {
		return urlPath === pathname ? "active" : null;
	};
	return (
		<div className="db-sidebar transition">
			<Link href={`/${lang}`} className="logo">
				<Image
					src="/images/logo-white.svg"
					alt="Logo"
					width={124}
					height={30}
				/>
			</Link>
 
			<div className="db-user-option">
				<button
					className="d-flex align-items-center p-0 position-relative d-block w-100 bg-transparent border-0 transition"
					type="button"
				>
					<Image
						src={
							currentUser.image
								? currentUser.image
								: "/images/dashbboard/user.png"
						}
						alt="User Avatar"
						className="user-img rounded-circle"
						width={48}
						height={48}
					/>
					<span className="fs-18 fw-bold text-white">
						{currentUser.name}
					</span>
				</button>
			</div>

			<ul className="db-menu list-unstyle">
				<li>
					<Link
						href={`/${lang}/admin/dashboard`}
						className={isActive(`/${lang}/admin/dashboard`)}
					>
						<i className="ri-dashboard-line"></i>
						Dashboard
					</Link>
				</li>

				<li>
					<Link
						href={`/${lang}/admin/dashboard/candidates`}
						className={isActive(
							`/${lang}/admin/dashboard/candidates`
						)}
					>
						<i className="ri-group-line"></i>
						Candidates
					</Link>
				</li>

				<li>
					<Link
						href={`/${lang}/admin/dashboard/jobs`}
						className={isActive(`/${lang}/admin/dashboard/jobs`)}
					>
						<i className="ri-file-list-2-line"></i>
						Jobs
					</Link>
				</li>

				<li>
					<Link
						href={`/${lang}/admin/dashboard/categories`}
						className={isActive(
							`/${lang}/admin/dashboard/categories`
						)}
					>
						<i className="ri-hashtag"></i>
						Categories
					</Link>
				</li>

				<li>
					<Link
						href={`/${lang}/dashboard/em/jobs`}
						className={isActive(
							`/${lang}/dashboard/em/jobs`
						)}
					>
						<i className="ri-speed-up-line"></i>
						Employer Dashboard
					</Link>
				</li>

				<li>
					<a onClick={signOut}>
						<i className="ri-logout-circle-r-line"></i>
						Logout
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
