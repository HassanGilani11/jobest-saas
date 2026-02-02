import { useCallback, useMemo } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const useFavourite = ({ jobId, currentUser }) => {
	const router = useRouter();

	const hasFavourited = useMemo(() => {
		const item = currentUser?.favourites || [];

		return item.find((fav) => fav.jobId === jobId);
	}, [currentUser, jobId]);

	const toggleFavourite = useCallback(
		async (e) => {
			e.stopPropagation();
			if (!currentUser) {
				router.push("/login");
			}

			try {
				let request;
				if (hasFavourited) {
					// console.log("hasFav");
					request = () => axios.delete(`/api/favorites/${jobId}`);
				} else {
					// console.log("useFav");
					request = () => axios.post(`/api/favorites/${jobId}`);
				}

				await request();
				hasFavourited
					? toast.success("Removed from bookmarked list.")
					: toast.success("Added to bookmark list.");
				router.refresh();
			} catch (error) {
				toast.error(error.response.data.message);
				// console.log(error);
			}
		},
		[currentUser, hasFavourited, jobId, router]
	);

	return {
		hasFavourited,
		toggleFavourite,
	};
};

export default useFavourite;
