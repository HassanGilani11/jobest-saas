import { getCurrentUser } from "@/actions/getCurrentUser";
import Sidebar from "@/components/Dashbaord/Sidebar";
import MainModalFunction from "@/components/Modals/MainModalFunction";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children, params }) {
	const { lang } = await params;
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect(`/${lang}/`);
	}
	return (
		<div className="db-wrapper ">
			{" "}
			<Sidebar currentUser={currentUser} /> {children}
			<MainModalFunction />
		</div>
	);
}
