import { getCurrentUser } from "@/actions/getCurrentUser";
import { getEducations, getExperiences } from "@/actions/getMyProfileInfo";
import QualificationContent from "@/components/Dashbaord/Qualification/QualificationContent";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";

const page = async ({ params }) => {
	const { lang } = await params;
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect(`/${lang}`);
	}
	const { educations } = await getEducations(currentUser.id);
	const { experiences } = await getExperiences(currentUser.id);
	return (
		<QualificationContent
			educations={educations}
			experiences={experiences}
		/>
	);
};

export default page;
