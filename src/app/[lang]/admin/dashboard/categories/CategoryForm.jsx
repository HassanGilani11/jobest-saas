"use client";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useEffect } from "react";
import InputField from "@/components/Dashbaord/Company/InputField";
import Spinner from "@/components/Spinner";

const CategoryForm = ({ category }) => {
	const router = useRouter();
	const { catId } = useParams();
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		reset,
		formState: { errors, isLoading, isSubmitting, isValid },
	} = useForm({
		defaultValues: {
			label: "",
		},
	});

	useEffect(() => {
		setValue("label", category ? category.label : "");
	}, [category, setValue]);

	const onSubmit = async (data) => {
		if (catId) {
			await axios
				.put(`/api/category/${catId}`, data)
				.then((response) => {
					toast.success("Category has been updated.");
					router.push(`/en/admin/dashboard/categories`);
				})
				.catch((error) => {
					toast.error(error.response.data.message);
				});
		} else {
			await axios
				.post("/api/category/new", data)
				.then((response) => {
					toast.success("Category has been added.");
					router.push(`/en/admin/dashboard/categories`);
				})
				.catch((error) => {
					toast.error(error.response.data.message);
				});
		}
	};
	return (
		<div className="bg-white p-3">
			<form className="comment-form" onSubmit={handleSubmit(onSubmit)}>
				<div className="row">
					<InputField
						label="Category Name"
						id="label"
						disabled={isLoading || isSubmitting}
						register={register}
						errors={errors}
						required
					/>

					<div className="form-btn">
						<button
							type="submit"
							className="btn style-four me-3"
							disabled={isLoading || isSubmitting || !isValid}
						>
							{isSubmitting ? (
								<>
									<Spinner /> Please Wait...
								</>
							) : (
								<>Save</>
							)}
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CategoryForm;
