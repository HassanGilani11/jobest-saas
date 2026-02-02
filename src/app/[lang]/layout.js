import { EB_Garamond, Wix_Madefor_Display } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "react-accessible-accordion/dist/fancy-example.css";
import "@/styles/animate.min.css";
import "@/styles/remixicon.css";
import "@/styles/header.css";
import "@/styles/style.css";
import "@/styles/footer.css";
import "@/styles/responsive.css";
import "@/styles/dark-theme.css";
import "@/styles/rtl.css";

import ClientProvider from "@/providers/ClientProvider";
import { getCurrentUser } from "@/actions/getCurrentUser";
import ThemeSwitcher from "@/providers/ThemeSwitcher";
import { getDictionary } from "./dictionaries";

export const metadata = {
	title: "Jobest - Job Posting and Job-Seeking Hub Template",
	openGraph: {
		title: "Jobest - Job Posting and Job-Seeking Hub Template",
		description:
			"Jobest is a cutting-edge job portal built with Next.js, connecting job seekers with their dream opportunities effortlessly.",
		images: [
			"https://res.cloudinary.com/dev-empty/image/upload/v1727583132/jobest-got-my-job.png",
		],
	},
};

// For all body text font
const wix_madefor_display = Wix_Madefor_Display({
	subsets: ["latin"],
	variable: "--font-wix-madefor-display",
});

// For all heading font
const eb_garamond = EB_Garamond({
	subsets: ["latin"],
	variable: "--font-eb-garamond",
});

export const viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

export default async function RootLayout({ children, params }) {
	const { lang } = await params;
	const dict = await getDictionary(lang);
	const currentUser = await getCurrentUser();

	return (
		<html lang={lang}>
			<body
				className={`${wix_madefor_display.variable} ${eb_garamond.variable}  `}
			>
				<ThemeSwitcher />
				<ClientProvider currentUser={currentUser} {...dict}>
					{children}
				</ClientProvider>
			</body>
		</html>
	);
}
