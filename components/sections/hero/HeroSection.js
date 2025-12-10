import Link from "next/link";
export default function HeroSection() {
	return (
		// Main Section Container
		<section className="container mx-auto px-4 py-8 md:py-16 max-w-7xl bg-light-grey">
			{/* Desktop Layout: Flex, Mobile Layout: flex-col */}
			<div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
				{/* Left Column: Content (Approx 50% width on large screens) */}
				{/* Use lg:w-[50%] or lg:w-6/12 for an approximate 50% split */}
				<div className="w-10/12 lg:w-6/12 order-1 flex items-center flex-col">
					{/* Headline */}
					<h1 className="text-5xl md:text-5xl  text-center md:text-left lg:text-left font-extrabold text-black-DEFAULT leading-[4rem] mb-6">
						Discover Your Dream Home Today
					</h1>

					{/* Description Paragraph */}
					<p className="text-sm text-black-3 mb-8 max-w-lg font-semibold text-center">
						Find the perfect property that suits your lifestyle. Our
						real estate service offers unique selling propositions
						that set us apart from the competition. Find your
						perfect home today!
					</p>

					{/* Action Buttons (Primary and Secondary) */}
					<div className="flex space-x-4">
						{/* 1. Primary Button: Explore Now (Solid Primary Green) */}
						<Link
							href="#listings"
							className="px-6 py-3 rounded-xl bg-primary text-black-DEFAULT font-semibold text-base transition-colors hover:bg-primary-2 shadow-md"
						>
							Explore Now
						</Link>

						{/* 2. Secondary Button: Learn More (Outline or simple Text Button) */}
						<Link
							href="#about"
							className="px-6 py-3 rounded-xl border border-black-3 text-black-3 font-semibold text-base transition-colors hover:bg-light-grey-2"
						>
							Learn More
						</Link>
					</div>
				</div>

				{/* Right Column: Image (50% width on large screens) */}
				{/* Use lg:w-[55%] or lg:w-7/12 for an approximate 60% split */}
				<div className="w-full lg:w-6/12 order-2 lg:order-2">
					{/* Image Container: Responsive height, rounded edges, shadow */}
					<div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
						<img
							src={"/images/hero/hero_chair.jpg"}
							alt={"fancy living room"}
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
