import { getCurrentUser } from "@/actions/getCurrentUser";
import Sidebar from "@/components/Admin/Sidebar";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children, params }) {
	const { lang } = await params;
	const currentUser = await getCurrentUser();
	console.log("Admin Layout Check:", { 
		email: currentUser?.email, 
		role: currentUser?.role, 
		isAdmin: currentUser?.role === "ADMIN" 
	});
	const isAdmin = currentUser && currentUser.role === "ADMIN";
	if (!currentUser || !isAdmin) {
		redirect(`/${lang}/`);
	}
	return (
		<div className="db-wrapper ">
			{" "}
			<Sidebar currentUser={currentUser} /> {children}
		</div>
	);
}
