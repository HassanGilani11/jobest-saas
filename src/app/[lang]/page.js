import Banner from "@/components/Index/Banner";
import CategorySection from "@/components/Index/CategorySection";
import AboutSection from "@/components/Index/AboutSection";
import FeaturedJobs from "@/components/Index/FeaturedJobs";
import HowItWorks from "@/components/Index/HowItWorks";
import JoinUs from "@/components/Index/JoinUs";
import TestimonialSection from "@/components/Index/TestimonialSection";
import BrandSection from "@/components/Index/BrandSection";
import BlogSection from "@/components/Index/BlogSection";
import AppSection from "@/components/Index/AppSection";
import PostJob from "@/components/Index/PostJob";
import {
	getCategories,
	getJobs,
	getLocations,
	getMostPopularCat,
} from "@/actions/getJobs";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { getDictionary } from "./dictionaries";

const searchParams = {
	sort: "desc",
	featured: true,
	page: "1",
	page_size: "5",
};

export default async function Home({ params }) {
	const { lang } = await params;
	const dict = await getDictionary(lang);
	const currentUser = await getCurrentUser();
	const { categories } = await getCategories();
	const { locations } = await getLocations();
	const { popularCategories } = await getMostPopularCat();
	const { jobs } = await getJobs(searchParams);
	return (
		<>
			<Banner
				categories={categories}
				locations={locations}
				popularCategories={popularCategories}
				{...dict}
			/>
			<CategorySection />
			<AboutSection />
			<FeaturedJobs
				popularCategories={popularCategories}
				jobs={jobs}
				currentUser={currentUser}
			/>
			<HowItWorks />
			<JoinUs currentUser={currentUser} />
			<TestimonialSection />
			<BrandSection />
			<BlogSection />
			<AppSection />
			<PostJob />
		</>
	);
}
