import BreadCrumb from "@/components/Shared/BreadCrumb";
import FaqContent from "./FaqContent";

export default async function Faq() {
	return (
		<>
			<BreadCrumb title="FAQ" pageTitle="FAQ" />
			<FaqContent />
		</>
	);
}
