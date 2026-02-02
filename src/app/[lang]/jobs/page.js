import BreadCrumb from "@/components/Shared/BreadCrumb";
import BannerSearch from "@/components/Index/BannerSearch";
import PopularSearchesTags from "@/components/Index/PopularSearchesTags";
import JobContent from "@/components/Jobs/JobContent";
import {
	getCategories,
	getJobs,
	getLocations,
	getMostPopularCat,
	getTags,
} from "@/actions/getJobs";
import { getCurrentUser } from "@/actions/getCurrentUser";

export default async function Jobs({ searchParams }) {
	const currentUser = await getCurrentUser();
	const { jobs, totalPages, totalItems } = await getJobs(searchParams);
	const { categories } = await getCategories();
	const { locations } = await getLocations();
	const { tags } = await getTags();

	const { popularCategories } = await getMostPopularCat();

	// console.log(tags);
	return (
		<>
			<BreadCrumb title="Find Your Dream Job" pageTitle="Jobs" />
			<div className="container">
				<div className="row">
					<div className="col-xl-10 offset-xl-1 px-xxl-2">
						<BannerSearch
							categories={categories}
							locations={locations}
							popularCategories={popularCategories}
							classAtts="hero-searchbox style-two form-group-wrap d-flex flex-wrap align-items-center justify-content-between round-10"
						/>
						<PopularSearchesTags
							popularCategories={popularCategories}
						/>
					</div>
				</div>
			</div>
			<JobContent
				jobs={jobs}
				tags={tags}
				currentUser={currentUser}
				searchParams={searchParams}
				totalPages={totalPages}
				totalItems={totalItems}
			/>
		</>
	);
}
