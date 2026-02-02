import { getCurrentUser } from "@/actions/getCurrentUser";
import { getPortfolios } from "@/actions/getMyProfileInfo";
import MyPortfolioContent from "@/components/Dashbaord/MyPortfolio/MyPortfolioContent";

const page = async ({ params }) => {
	const { lang } = await params;
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect(`/${lang}`);
	}
	const { portfolios } = await getPortfolios(currentUser.id);
	return (
		<>
			<MyPortfolioContent portfolios={portfolios} />
		</>
	);
};

export default page;
