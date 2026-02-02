"use client";
import React from "react";
import useFavourite from "@/hooks/useFavourite";
import Image from "next/image";

const Bookmark = ({ jobId, currentUser }) => {
	const { hasFavourited, toggleFavourite } = useFavourite({
		jobId,
		currentUser,
	});
	return (
		<>
			{hasFavourited ? (
				<button
					onClick={toggleFavourite}
					className="add-to-bookmark border-0 d-flex flex-column justify-content-center align-items-center rounded-circle transition"
					style={{ width: "54px", height: "54px" }}
				>
					<Image
						src="/images/icons/bookmark-fill.svg"
						alt="Bookmark Icon"
						className="transition"
						width="12"
						height="18"
					/>
				</button>
			) : (
				<button
					onClick={toggleFavourite}
					className="add-to-bookmark border-0 d-flex flex-column justify-content-center align-items-center rounded-circle transition"
					style={{ width: "54px", height: "54px" }}
				>
					<Image
						src="/images/icons/bookmark.svg"
						alt="Bookmark Icon"
						className="transition"
						width="12"
						height="18"
					/>
				</button>
			)}
		</>
	);
};

export default Bookmark;
