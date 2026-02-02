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
						href={`/${lang}/dashboard/profile`}
						className={isActive(`/${lang}/dashboard/profile`)}
					>
						<i className="ri-user-line"></i>
						Profile
					</Link>
				</li>

				<li>
					<Link
						href={`/${lang}/dashboard/qualification`}
						className={isActive(`/${lang}/dashboard/qualification`)}
					>
						<i className="ri-graduation-cap-fill"></i>
						Qualification
					</Link>
				</li>

				<li>
					<Link
						href={`/${lang}/dashboard/my-portfolio`}
						className={isActive(`/${lang}/dashboard/my-portfolio`)}
					>
						<i className="ri-file-copy-line"></i>
						Portfolio
					</Link>
				</li>

				<li>
					<Link
						href={`/${lang}/dashboard/em/companies`}
						className={
							isActive(`/${lang}/dashboard/em/companies`) ||
							isActive(`/${lang}/dashboard/em/company/new`)
						}
					>
						<i className="ri-file-list-3-line"></i>
						My Organizations
					</Link>
				</li>

				<li>
					<Link
						href={`/${lang}/dashboard/em/jobs`}
						className={isActive(`/${lang}/dashboard/em/jobs`)}
					>
						<i className="ri-file-list-line"></i>
						My Posted Jobs
					</Link>
				</li>

				<li>
					<Link
						href={`/${lang}/dashboard/my-applications`}
						className={isActive(
							`/${lang}/dashboard/my-applications`
						)}
					>
						<i className="ri-list-view"></i>
						My Applied Jobs
					</Link>
				</li>

				<li>
					<Link
						href={`/${lang}/dashboard/bookmarked`}
						className={isActive(`/${lang}/dashboard/bookmarked`)}
					>
						<i className="ri-bookmark-fill"></i>
						Bookmarked
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
