import BreadCrumb from "@/components/Shared/BreadCrumb";
import Image from "next/image";
import Link from "next/link";

const page = () => {
	return (
		<>
			<BreadCrumb
				title="Terms & Conditions"
				pageTitle="Terms & Conditions"
			/>

			<div className="terms-wrap ptb-100">
				<div className="container">
					<div className="row">
						<div className="col-xl-10 offset-xl-1">
							<div className="single-para">
								<h3>Legal Disclaimer: </h3>
								<p>
									We may collect personal identification
									information from Users in a variety of ways,
									including, but not limited to, when Users
									visit our site, subscribe to the newsletter,
									fill out a form, and in connection with
									other <strong>activities</strong>, services,
									features or resources we make available on
									our Site. Users may be asked for, as
									appropriate, name, email address, mailing
									address, phone number,{" "}
									<Link href="/">company name</Link>. We will
									collect personal identification information
									from Users only if they voluntarily consent
									such information to us. Users can always
									refuse to supply personally identification
									information, except that it may prevent them
									from engaging in certain Site related
									activities.
								</p>
							</div>
							<div className="single-para">
								<h3>Credit Reporting Terms of Service</h3>
								<p>
									Lorem ipsum dolor sit, amet consectetur
									adipisicing elit. Harum, quod. Ratione ex
									delectus quis tenetur odio non alias numquam
									official ipsum dolor sit, amet consectetur
									adipisicing elit. Accusamus, laborum.
								</p>
								<ol>
									<li>
										Mauris ut in vestibulum hasellus
										ultrices fusce nibh justo, venenatis,
										amet. Lectus quam in lobortis.
									</li>
									<li>
										Consectetur phasellus{" "}
										<strong>ultrices</strong> fusce nibh
										justo, venenatis, amet. Lectus quam in
										lobortis justo venenatis amet.
									</li>
									<li>
										Lectus quam there are two thing is very
										important in Consectetur phasellus
										ultrices fusce nibh justo, venenatis,
										amet in lobortis.
									</li>
									<li>
										Web Development very creative to do
										something , mauris ut in vestibulum.
										Consectetur phasellus ultrices fusce
										nibh justo, venenatis, amet to all
										design.
									</li>
								</ol>
							</div>
							<div className="single-para">
								<h3>
									Ownership of Site Agreement to Terms of Use
								</h3>
								<p>
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Maxime nulla minus quasi.
									Voluptatem, facilis saepe ullam autem magni
									quod sint tempore, eius molestias aliquam
									debitis. Neque saepe dignissimos repudiandae
									fuga.
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur,
									adipisicing elit. Nihil eveniet quas
									dignissimos doloribus ea pariatur corrupti
									rerum deserunt, ipsum, ipsa eos veniam
									aspernatur fuga, optio soluta? Libero neque
									reiciendis cupiditate dolores nam. Earum
									eius similique sapiente. Iure, sit non. At
									fuga ipsam veniam.
								</p>
							</div>
							<div className="single-para">
								<h3>Provision of Services</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur,
									adipisicing elit. Nihil eveniet quas
									dignissimos doloribus ea pariatur corrupti
									rerum deserunt, ipsum, ipsa eos veniam
									aspernatur fuga, optio soluta? Libero neque
									reiciendis cupiditate dolores nam. Earum
									eius similique sapiente. Iure, sit non. At
									fuga ipsam veniam.
								</p>
								<ul className="feature-list list-unstyle">
									<li className="position-relative">
										<Image
											src="/images/icons/check.svg"
											alt="Icon"
											className="position-absolute start-0"
											width="16"
											height="15"
										/>{" "}
										Lorem ipsum dolor, sit amet.
									</li>
									<li className="position-relative">
										<Image
											src="/images/icons/check.svg"
											alt="Icon"
											className="position-absolute start-0"
											width="16"
											height="15"
										/>{" "}
										Amet consectetur adipisicing elit.
										Officia, odit!
									</li>
									<li className="position-relative">
										<Image
											src="/images/icons/check.svg"
											alt="Icon"
											className="position-absolute start-0"
											width="16"
											height="15"
										/>
										Aquaerat ipsa quis possimus.
									</li>
									<li className="position-relative">
										<Image
											src="/images/icons/check.svg"
											alt="Icon"
											className="position-absolute start-0"
											width="16"
											height="15"
										/>{" "}
										Consectetur adipisicing elit.
										Voluptatibus, dignissimos.
									</li>
									<li className="position-relative">
										<Image
											src="/images/icons/check.svg"
											alt="Icon"
											className="position-absolute start-0"
											width="16"
											height="15"
										/>{" "}
										Highly professional administration.
									</li>
								</ul>
							</div>
							<div className="single-para">
								<h3> Limitation of Liability</h3>
								<p>
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Maxime nulla minus quasi.
									Voluptatem, facilis saepe ullam autem magni
									quod sint tempore, eius molestias aliquam
									debitis. Neque saepe dignissimos repudiandae
									fuga.
								</p>
							</div>
							<div className="single-para">
								<h3> Accounts, Passwords and Security</h3>
								<p>
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Maxime nulla minus quasi.
									Voluptatem, facilis saepe ullam autem magni
									quod sint tempore, eius molestias aliquam
									debitis. Neque saepe dignissimos repudiandae
									fuga.
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur,
									adipisicing elit. Nihil eveniet quas
									dignissimos doloribus ea pariatur corrupti
									ullam autem magni quod sint tempore saepe
									ullam autem magni.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
