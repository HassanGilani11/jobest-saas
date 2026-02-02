"use client";
import React from "react";
import SidebarFilter from "./SidebarFilter";
import AboveFilter from "./AboveFilter";
import EmployerList from "./EmployerList";
import Pagination from "../Jobs/Pagination";

const EmployerContent = ({
	companies,
	totalPages,
	totalCompanies,
	searchParams,
}) => {
	return (
		<div className="container ptb-100">
			<div className="row">
				<SidebarFilter />
				<div className="col-xl-8 order-xl-2 order-1 ps-xxl-5">
					<AboveFilter
						totalCompanies={totalCompanies}
						searchParams={searchParams}
					/>
					<div className="row justify-content-center">
						<div className="col-12">
							{companies.map((company) => (
								<EmployerList
									key={company.id}
									company={company}
								/>
							))}
						</div>
					</div>
					<Pagination
						totalPages={totalPages}
						searchParams={searchParams}
					/>
				</div>
			</div>
		</div>
	);
};

export default EmployerContent;
