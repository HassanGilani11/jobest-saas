import ContactBody from "@/components/Contact/ContactBody";
import ContactForm from "@/components/Contact/ContactForm";
import BreadCrumb from "@/components/Shared/BreadCrumb";

const page = async () => {
	return (
		<>
			<BreadCrumb title="Contact Us" pageTitle="Contact Us" />
			<ContactBody />
			<ContactForm />
		</>
	);
};

export default page;
