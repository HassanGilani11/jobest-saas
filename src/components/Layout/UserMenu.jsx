"use client";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { signOut } from "next-auth/react";

const UserMenu = ({ currentUser }) => {
	const { lang } = useParams();
	const isAdmin = currentUser && currentUser.role === "ADMIN";
	return (
		<div className="nav-item admin-dropdown">
			<div
				className="nav-link dropdown-toggle text-white d-flex align-items-center gap-2"
				style={{
					cursor: "pointer",
					fontSize: "15px",
				}}
			>
				<Image
					src={
						currentUser.image
							? currentUser.image
							: "/images/admin.jpg"
					}
					alt="admin"
					width={30}
					height={30}
					className="rounded-circle"
				/>
				<span className="d-none d-sm-block">{currentUser.name}</span>
			</div>

			<ul className="dropdown-menu">
				{isAdmin && (
					<li>
						<Link
							className="dropdown-item"
							href={`/${lang}/admin/dashboard`}
						>
							<i className="ri-file-list-line"></i> Admin
							Dashboard
						</Link>
					</li>
				)}

				<li>
					<Link
						className="dropdown-item"
						href={`/${lang}/dashboard/em/jobs`}
					>
						<i className="ri-file-list-line"></i> Employer Dashboard
					</Link>
				</li>

				<li>
					<Link
						className="dropdown-item"
						href={`/${lang}/dashboard/profile`}
					>
						<i className="ri-user-line"></i> My Profile
					</Link>
				</li>
				<li>
					<Link
						className="dropdown-item"
						href={`/${lang}/dashboard/bookmarked`}
					>
						<i className="ri-bookmark-fill"></i> Bookmarked
					</Link>
				</li>

				<li>
					<button className="dropdown-item" onClick={() => signOut()}>
						<i className="ri-logout-circle-r-line"></i> Logout
					</button>
				</li>
			</ul>
		</div>
	);
};

export default UserMenu;
