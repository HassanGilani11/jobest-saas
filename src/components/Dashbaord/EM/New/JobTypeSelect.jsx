"use client";

import Select from "react-select";

const types = [
	{ value: "FULL_TIME", label: "FULL TIME" },
	{ value: "PART_TIME", label: "PART TIME" },
	{ value: "CONTRACT", label: "CONTRACT" },
	{ value: "INTERNSHIP", label: "INTERNSHIP" },
	{ value: "FREELANCE", label: "FREELANCE" },
	{ value: "TEMPORARY", label: "TEMPORARY" },
];

const JobTypeSelect = ({ value, onChange, classAtts = "col-md-4" }) => {
	const defaultType = types.find((type) => type.value === value);

	return (
		<div className={classAtts}>
			<div className="mb-20">
				<label className="text-dark d-block mb-2">Job Type</label>
				<div className="bg-gray border-0 w-100 round-4">
					<Select
						placeholder="Select Category"
						required
						isClearable
						isSearchable={true}
						options={types}
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
		</div>
	);
};

export default JobTypeSelect;
