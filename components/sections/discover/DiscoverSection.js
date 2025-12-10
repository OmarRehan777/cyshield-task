import Link from "next/link";
import { ServiceCard } from "./ServiceCard";

export default function ServiceIntroSection() {
	const services = [
		{
			icon: "📄",
			title: "Property Buying and Selling",
			description:
				"We provide expert guidance for buying and selling properties, ensuring a smooth and successful transaction.",
		},
		{
			icon: "⚖️",
			title: "Property Valuation Services",
			description:
				"Our team of certified appraisers offers accurate property valuations to help you make informed decisions.",
		},
		{
			icon: "📈",
			title: "Real Estate Investment Advice",
			description:
				"Get expert advice on real estate investment strategies to maximize your returns.",
		},
	];

	return (
		<section className="bg-light-grey-3 py-20">
			<div className="container mx-auto px-4 max-w-7xl">
				{/* 1. Header Section: العنوان والوصف (بدون Buttons) */}
				{/* في الديسكتوب: Grid 2 columns، بس الـ Content في اليمين بيكون Align Top. */}
				{/* في الموبايل: Block فوق بعض. */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 lg:mb-16 items-start">
					{/* A. العمود الأيسر: العنوان */}
					<div className="lg:text-left ">
						<p className="text-sm text-grey-DEFAULT font-semibold mb-1">
							Discover
						</p>
						<h2 className="text-4xl md:text-5xl font-extrabold font-sans text-black text-center ">
							Find Your Dream Property with Us
						</h2>
					</div>

					{/* B. العمود الأيمن: الوصف فقط */}
					{/* في الموبايل: بيأتي تحت العنوان. في الديسكتوب: بيأتي جنبه. */}
					<div className="flex flex-col justify-start items-center lg:items-start text-center lg:text-left pt-2">
						<p className="text-base text-grey-DEFAULT">
							At our real estate agency, we offer a range of
							services to help you with your property needs.
							Whether you're looking to buy, sell, or get a
							valuation, our experienced team is here to assist
							you every step of the way.
						</p>
					</div>
				</div>

				{/* 2. Services Cards Grid */}
				{/* في الديسكتوب grid-cols-3، في الموبايل grid-cols-1 */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
					{services.map((service, index) => (
						<ServiceCard
							key={index}
							icon={service.icon}
							title={service.title}
							description={service.description}
						/>
					))}
				</div>

				{/* 3. NEW POSITION: CTA Buttons (تحت الـ Cards) */}
				{/* الأزرار متوسطة بالنسبة للـ Section كلها في الـ Design */}
				<div className="text-center mt-12">
					<div className="flex space-x-4 items-center justify-start">
						{/* Learn More Button (أخضر فاتح) */}
						<Link
							href="#learn-more"
							className="px-8 py-3 rounded-lg bg-primary text-black font-semibold transition-colors hover:bg-primary-2 shadow-md"
						>
							Learn More
						</Link>

						{/* Contact Link (نص Contact عادي) */}
						<Link
							href="#contact"
							className="flex items-center text-black font-semibold hover:text-primary transition-colors"
						>
							Contact
							{/* أيقونة سهم صغير */}
							<span className="ml-1">›</span>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
