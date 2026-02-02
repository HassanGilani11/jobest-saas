import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const NoticeBar = () => {
	const { lang } = useParams();
	return (
		<div className="navbar-top">
			<div className="container">
				<p className="fs-14 fw-medium ps-xl-3 mb-0 text-center">
					Get your dream job with
					<Link
						href={`/${lang}/jobs`}
						className="link style-one fw-bold"
					>
						Jobest{" "}
						<Image
							src="/images/icons/right-arrow-dark.svg"
							alt="Arrow"
							width="14"
							height="12"
						/>
					</Link>
				</p>
			</div>
		</div>
	);
};

export default NoticeBar;
