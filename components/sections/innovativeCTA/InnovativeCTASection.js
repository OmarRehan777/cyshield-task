import Link from "next/link";
import { StatItem } from "./StatItem";

export default function InnovativeCTASection() {
	const stats = [
		{ value: "30%", label: "Success Rate" },
		{ value: "30%", label: "Properties Listed" },
		{ value: "30%", label: "Client Satisfaction" },
	];

	return (
		<section className="bg-Black py-20">
			<div className="container mx-auto px-4 max-w-7xl">
				{/* 1. Header (نظام العمودين) */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
					{/* العمود الأيسر: Heading (العنوان الكبير) */}
					<div className="lg:pr-12">
						<p className="text-sm text-white font-semibold mb-2 ">
							Innovative
						</p>

						<h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
							Transforming the Real Estate Industry with
							Excellence
						</h2>
					</div>

					{/* العمود الأيمن: Description and CTA Button */}
					<div>
						<p className="text-lg text-white mb-6">
							At our company, we take pride in our exceptional
							success rate, having listed thousands of properties,
							and ensuring client satisfaction is our top
							priority.
						</p>

						<Link
							href="#learn-more"
							className="inline-block px-8 py-4 rounded-xl bg-primary text-black font-semibold transition-colors hover:bg-primary-2 shadow-xl"
						>
							Learn More
						</Link>
					</div>
				</div>

				{/* 2. Stats Section (الـ 30% الثلاثة) */}
				<div className="flex flex-col gap-8 md:flex-row justify-between items-start w-full max-w-4xl mx-auto pt-8">
					{stats.map((stat, index) => (
						<StatItem
							key={index}
							value={stat.value}
							label={stat.label}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
