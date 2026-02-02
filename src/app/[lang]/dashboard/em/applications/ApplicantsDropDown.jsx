"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Select from "react-select";

const status = [
	{ value: "Pending", label: "In Pending" },
	{ value: "Accepted", label: "Accept" },
	{ value: "Rejected", label: "Reject" },
];

const ApplicantsDropDown = ({ value, applicationId }) => {
	const router = useRouter();
	const defaultType = status.find((type) => type.value === value);
	const onChange = (data) => {
		axios
			.post(`/api/em/job/${applicationId}`, data)
			.then((response) => {
				toast.success(response.data.message);
				router.refresh();
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="mt-20">
			<div className="bg-gray border-0 w-100 round-4">
				<Select
					placeholder="Select Status"
					required
					isClearable
					isSearchable={true}
					options={status}
					value={defaultType}
					onChange={(value) => onChange(value)}
					formatOptionLabel={(option) => (
						<div className="d-flex items-center gap-3">
							<div>{option.label}</div>
						</div>
					)}
					classNames={{
						control: (state) =>
							`form-control p-1 border ${
								state.isFocused
									? "border-primary"
									: "border-secondary"
							}`,
					}}
					theme={(theme) => ({
						...theme,
						borderRadius: 6,
						colors: {
							...theme.colors,
							primary: "green",
							primary25: "#ffe4e6",
						},
					})}
				/>
			</div>
		</div>
	);
};

export default ApplicantsDropDown;
