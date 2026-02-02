export const readableDate = (dateString) => {
	// Convert to Date object
	const date = new Date(dateString);

	// Format using Intl.DateTimeFormat
	const formattedDate = new Intl.DateTimeFormat("en-US", {
		month: "long", // Full month name
		day: "numeric", // Day of the month
		year: "numeric", // Year
	}).format(date);

	return formattedDate;
};

export const dateInputFormate = (isoString) => {
	const date = new Date(isoString);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
	const day = String(date.getDate()).padStart(2, "0");
	return `${year}-${month}-${day}`;
};
