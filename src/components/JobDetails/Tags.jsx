"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const Tags = ({ tags }) => {
	const { lang } = useParams();
	return (
		<div className="sidebar-widget style-two bg-aqua round-10">
			<h3 className="sidebar-widget-title fs-18 fw-semibold">
				Jobs Tags
			</h3>
			<ul className="tag-list list-unstyle">
				{tags.map((tg) => (
					<li key={tg.id}>
						<Link href={`/${lang}/jobs/tag/${tg.tag.name}`}>
							{tg.tag.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Tags;
