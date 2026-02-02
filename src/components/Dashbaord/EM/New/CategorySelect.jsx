"use client";

import Select from "react-select";
import axios from "axios";
import { useEffect, useState } from "react";

const CategorySelect = ({ value, onChange, classAtts = "col-md-4" }) => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		axios
			.get("/api/dashboard/category")
			.then((response) => {
				setCategories(response.data);
				// console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<div className={classAtts}>
			<div className="mb-20">
				<label className="text-dark d-block mb-2">Job Category</label>

				<div className="bg-gray border-0 w-100 round-4">
					<Select
						placeholder="Select Category"
						required
						isClearable
						isSearchable={true}
						options={categories}
						value={value}
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

export default CategorySelect;
