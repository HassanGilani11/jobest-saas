import { getCurrentUser } from "@/actions/getCurrentUser";
import ProfileContent from "@/components/Dashbaord/Profile/ProfileContent";

const page = async () => {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect(`/${lang}`);
	}
	return (
		<>
			<ProfileContent currentUser={currentUser} />
		</>
	);
};

export default page;
