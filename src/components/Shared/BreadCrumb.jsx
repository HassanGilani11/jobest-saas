"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const BreadCrumb = ({ title = "Page", pageTitle = "New Page" }) => {
	const { lang } = useParams();
	return (
		<div className="breadcrumb-wrap style-one position-relative index-1">
			<Image
				src="/images/breadcrumb/br-shape-left.png"
				alt="Breadcrumb Shape"
				className="br-shape-left position-absolute"
				width={314}
				height={168}
			/>
			<Image
				src="/images/breadcrumb/br-shape-right.png"
				alt="Breadcrumb Shape"
				className="br-shape-right position-absolute"
				width={379}
				height={107}
			/>
			<div className="container">
				<div className="br-content text-center">
					<h2 className="text-white">{title}</h2>
					<ul className="br-menu list-unstyle">
						<li>
							<Link href={`/${lang}`}>HOME</Link>
						</li>
						<li>{pageTitle}</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default BreadCrumb;
