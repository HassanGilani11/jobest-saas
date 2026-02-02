"use client";

import React from "react";
import {
	useParams,
	usePathname,
	useRouter,
	useSearchParams,
} from "next/navigation";
import Link from "next/link";

const Language = () => {
	const { lang } = useParams();
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const query = searchParams.get("query");

	function switchLocale(locale) {
		const currentLocale = pathname.split("/")[1]; // Extract current language code
		const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
		const queryString = query
			? `?${new URLSearchParams({ q: query }).toString()}`
			: ""; // Check if query exists
		router.push(`${newPath}${queryString}`, undefined, { shallow: true });
	}

	return (
		<>
			<ul className="language-list">
				<li>
					<button
						className={lang === "en" ? "active" : null}
						onClick={() => switchLocale("en")}
					>
						EN
					</button>
				</li>
				<li>
					<button
						className={lang === "ar" ? "active" : null}
						onClick={() => switchLocale("ar")}
					>
						AR
					</button>
				</li>
				<li>
					<button
						className={lang === "fr" ? "active" : null}
						onClick={() => switchLocale("fr")}
					>
						FR
					</button>
				</li>
			</ul>
		</>
	);
};

export default Language;
