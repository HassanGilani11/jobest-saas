import BreadCrumb from "@/components/Shared/BreadCrumb";
import Image from "next/image";
import Link from "next/link";

const page = () => {
	return (
		<>
			<BreadCrumb title="Cookies Policy" pageTitle="Cookies Policy" />

			<div className="terms-wrap ptb-100">
				<div className="container">
					<div className="row gx-5">
						<div className="col-lg-12">
							<div className="single-para">
								<h3>Information Collection</h3>
								<p>
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Maxime nulla minus quasi.
									Voluptatem,{" "}
									<Link href="/">company name</Link> saepe
									ullam autem magni quod sint tempore, eius
									molestias aliquam debitis. Neque saepe
									dignissimos repudiandae fuga.
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur,
									adipisicing elit. Nihil eveniet quas
									dignissimos <strong>activities</strong> ea
									pariatur corrupti rerum deserunt, ipsum,
									ipsa eos veniam aspernatur fuga, optio
									soluta? Libero neque reiciendis cupiditate
									dolores nam. Earum eius similique sapiente.
									Iure, sit non. At fuga ipsam veniam.
								</p>
							</div>
							<div className="single-para">
								<h3>How We Use Cookies</h3>
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
								<h3>
									The Collection, Process, and Use of Personal
									Data
								</h3>
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
								<h3>Data Protection</h3>
								<p>
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Maxime nulla minus quasi.
									Voluptatem, company name saepe ullam autem
									magni quod sint tempore, eius molestias
									aliquam debitis. Neque saepe dignissimos
									repudiandae fuga.
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur,
									adipisicing elit. Nihil eveniet quas
									dignissimos <strong>aspernatur</strong> ea
									pariatur corrupti rerum deserunt, ipsum,
									ipsa eos veniam aspernatur fuga, optio
									soluta? Libero neque reiciendis cupiditate
									dolores nam. Earum eius similique sapiente.
									Iure, sit non. At fuga ipsam veniam.
								</p>
							</div>
							<div className="single-para">
								<h3>
									The Collection, Process and Use of Personal
									Data
								</h3>
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
									</li>
								</ol>
							</div>
							<div className="single-para">
								<h3>Our Policy For Age Under 18</h3>
								<p>
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Maxime nulla minus quasi.
									Voluptatem, facilis saepe ullam autem magni
									quod sint tempore, eius molestias aliquam
									debitis. Neque saepe dignissimos repudiandae
									fuga.
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
