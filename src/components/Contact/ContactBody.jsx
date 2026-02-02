"use client";
import Image from "next/image";

const ContactBody = () => {
	return (
		<div className="pt-100">
			<div className="container">
				<div className="contact-info-box bg-aqua round-4 pt-100 pb-70">
					<div className="section-title style-one text-center mb-45">
						<h2 className="ls-0 mb-0">
							Our Contact <strong>Information</strong>
						</h2>
					</div>
					<div className="contact-card-wrap d-flex flex-wrap">
						<div className="contact-info-card text-center mb-30">
							<div className="contact-icon d-flex flex-column align-items-center justify-content-center rounded-circle bg-white">
								<Image
									src="/images/icons/map-4.svg"
									alt="Icon"
									width="36"
									height="36"
								/>
							</div>
							<h3 className="fs-24">Location</h3>
							<p className="text-ash fw-semibold mb-0">
								4379 137th Avenue, Edmonton, Alberta, USA
							</p>
						</div>
						<div className="contact-info-card text-center mb-30">
							<div className="contact-icon d-flex flex-column align-items-center justify-content-center rounded-circle bg-white">
								<Image
									src="/images/icons/phone-2.svg"
									alt="Icon"
									width="36"
									height="36"
								/>
							</div>
							<h3 className="fs-24">Phone No</h3>
							<a
								href="tel:7804732920"
								className="text-ash fw-semibold"
							>
								780-473-2920
							</a>
						</div>
						<div className="contact-info-card text-center mb-30">
							<div className="contact-icon d-flex flex-column align-items-center justify-content-center rounded-circle bg-white">
								<Image
									src="/images/icons/mail-2.svg"
									alt="Icon"
									width="36"
									height="36"
								/>
							</div>
							<h3 className="fs-24">Email</h3>
							<a
								href="mailto:info@jobest.com"
								className="text-ash fw-semibold"
							>
								info@jobest.com
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactBody;
