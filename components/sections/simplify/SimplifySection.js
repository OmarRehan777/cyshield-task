import SimplifyCard from "./SimplifyCard";

export default function DiscoverSection() {
	// البيانات لـ 3 كروت Process
	const processSteps = [
		{
			title: "Find Your Dream Property",
			description:
				"Browse through a wide selection of properties that match your preferences and requirements.",
			imageUrl: "images/streamline/find.png",
		},
		{
			title: "Connect with Trusted Agents",
			description:
				"Our platform connects you with experienced and reliable real estate experts to off guide you through the process.",
			imageUrl: "images/streamline/connect.png",
		},
		{
			title: "Negotiate and Close the Deal",
			description:
				"Our experts will assist you in negotiating the best terms and ensuring a smooth closing process.",
			imageUrl: "images/streamline/negotiate.png",
		},
	];

	return (
		// Section Container
		<section className="container mx-auto px-4 py-16 max-w-7xl flex flex-col items-center">
			{/* Header: Title and Description (Centered) */}
			<div className="text-center mb-12 lg:w-1/2 w-4/5">
				<p className="text-sm text-black-3 font-semibold mb-2">
					Simplify
				</p>

				<h2 className="text-3xl md:text-4xl font-extrabold text-black-DEFAULT mb-4">
					Streamline Your Property Buying or Selling Process
				</h2>

				<p className="text-lg text-black-3 max-w-3xl mx-auto">
					Our website provides a step-by-step guide to help you
					seamlessly navigate the process of buying or selling
					property. From finding the perfect property to closing the
					deal, we've got you covered.
				</p>
			</div>

			{/* Cards Grid: 3 columns on desktop */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{processSteps.map((step, index) => (
					<SimplifyCard
						key={index}
						title={step.title}
						description={step.description}
						imageUrl={step.imageUrl}
					/>
				))}
			</div>
		</section>
	);
}
