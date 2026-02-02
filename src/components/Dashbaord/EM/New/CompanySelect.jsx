"use client";

import Select from "react-select";
import axios from "axios";
import { useEffect, useState } from "react";

const CompanySelect = ({ value, onChange }) => {
	const [companies, setCompanies] = useState([]);

	useEffect(() => {
		axios
			.get("/api/dashboard/companies")
			.then((response) => {
				const { data } = response;
				const transformedData = data.map((item) => ({
					id: item.id, // Incremental ID based on index
					label: item.name, // Use 'name' as 'label'
					value: item.name, // Use 'name' as 'value'
				}));

				setCompanies(transformedData);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<div className="col-md-4">
			<div className="mb-20">
				<label className="text-dark d-block mb-2">Company</label>

				<div className="bg-gray border-0 w-100 round-4">
					<Select
						placeholder="Select Category"
						required
						isClearable
						isSearchable={true}
						options={companies}
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

export default CompanySelect;
