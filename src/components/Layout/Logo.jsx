"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const Logo = () => {
	const { lang } = useParams();
	return (
		<Link href={`/${lang}`} className="navbar-brand">
			<Image
				src="/images/logo-white.svg"
				alt="Logo"
				width={124}
				height={30}
			/>
		</Link>
	);
};

export default Logo;
