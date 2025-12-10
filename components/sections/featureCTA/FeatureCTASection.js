import Link from "next/link";
import { FeatureItem } from "./FeatureItem";

export default function FeatureCTASection() {
	const features = [
		{
			icon: "✅",
			title: "Expert Consultation",
			description:
				"Get tailored advice from our dedicated real estate specialists.",
		},
		{
			icon: "🤝",
			title: "Seamless Transactions",
			description:
				"We handle the paperwork and coordination for a hassle-free closing.",
		},
		{
			icon: "🌐",
			title: "Wider Market Access",
			description:
				"Gain access to exclusive listings and off-market opportunities.",
		},
	];

	return (
		// Section Container: خلفية فاتحة عشان تفصلها عن الـ Sections البيضاء اللي فوقها
		<section className="container mx-auto px-4 py-20 max-w-7xl bg-white">
			{/* Grid للعمودين (1 على الموبايل، 2 على اللابتوب) */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				{/* العمود الأيسر: Image Placeholder (في الديزاين ده بيكون فيه صورة كبيرة على الشمال أو اليمين) */}
				{/* هنخليه على اليسار هنا عشان يمشي مع ترتيب الـ Content على اليمين */}
				<div className="hidden lg:block order-2 lg:order-1">
					{/* صندوق بلون خفيف كـ Placeholder للصورة/الـ Visual */}
					<div className="w-full h-96 bg-primary-2 rounded-2xl flex items-center justify-center text-xl text-black-3 font-bold shadow-xl">
						[Placeholder for Feature Visual]
					</div>
				</div>

				{/* العمود الأيمن: Content (العنوان والمزايا) */}
				<div className="order-1 lg:order-2">
					{/* Subtitle */}
					<p className="text-sm text-accent-DEFAULT font-semibold uppercase mb-2">
						Exclusive Benefits
					</p>

					<h2 className="text-3xl md:text-4xl font-extrabold text-black-DEFAULT leading-tight mb-6">
						Streamline Your Property Buying or Selling Process
					</h2>

					<p className="text-lg text-black-3 mb-8">
						Our powerful platform and personalized guidance simplify
						every step, giving you clarity and control over your
						real estate journey.
					</p>

					{/* Features List (الـ 3 مزايا) */}
					<div className="space-y-6 mb-10">
						{features.map((feature, index) => (
							<FeatureItem
								key={index}
								icon={feature.icon}
								title={feature.title}
								description={feature.description}
							/>
						))}
					</div>

					{/* CTA Button */}
					<Link
						href="#contact-us"
						className="inline-block px-8 py-4 rounded-xl bg-black-DEFAULT text-white font-semibold transition-colors hover:bg-black-3 shadow-xl"
					>
						Start Your Journey
					</Link>
				</div>
			</div>
		</section>
	);
}
