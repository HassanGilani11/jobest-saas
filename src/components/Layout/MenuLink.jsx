"use client";
import { useParams, usePathname } from "next/navigation";
import { motion, useMotionValue } from "framer-motion";
import Link from "next/link";

const MenuLink = ({ link }) => {
	const { lang } = useParams();
	const pathname = usePathname();
	const MotionLink = motion(Link);

	const mapRange = (inputLower, inputUpper, outputLower, outputUpper) => {
		const INPUT_RANGE = inputUpper - inputLower;
		const OUTPUT_RANGE = outputUpper - outputLower;

		return (value) =>
			outputLower +
			(((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
	};

	const setTransform = (item, event, x, y) => {
		const bounds = item.getBoundingClientRect();
		const relativeX = event.clientX - bounds.left;
		const relativeY = event.clientY - bounds.top;
		const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
		const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);
		x.set(xRange * 5);
		y.set(yRange * 5);
	};
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	return (
		<motion.li
			className="nav-item"
			onPointerMove={(event) => {
				const item = event.currentTarget;
				setTransform(item, event, x, y);
			}}
			onPointerLeave={(event) => {
				x.set(0);
				y.set(0);
			}}
			style={{ x, y }}
		>
			<MotionLink
				href={`/${lang}${link.path}`}
				className={`nav-link ${
					(pathname === `/${lang}` && link.path === "/") ||
					pathname === `/${lang}${link.path}`
						? "active"
						: ""
				}`}
			>
				{link.name}
			</MotionLink>
		</motion.li>
	);
};

export default MenuLink;
