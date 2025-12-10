import { StarRating } from "./StarRating";

export default function TestimonialsSection() {
	// بيانات الرأي كما وردت في الـ Screenshots
	const testimonial = {
		quote: "Our experience with this real estate website design has been nothing short of amazing. The team was professional, responsive, and delivered beyond our expectations.",
		name: "John Doe",
		title: "CEO, ABC Realty",
	};


	const customBgStyle = { backgroundColor: "#FFF0F3" };

	return (
		// Section Container: خلفية وردي باهت، و Padding كبير
		<section className="py-20" style={customBgStyle}>
			<div className="container mx-auto px-4 max-w-2xl">
				{/* المحتوى كله في المنتصف */}
				<div className="text-center">
					{/* العنوان الرئيسي */}
					<h2 className="text-3xl md:text-4xl font-extrabold text-black mb-8">
						Customer Testimonials
					</h2>

					{/* النجوم */}
					<StarRating />

					{/* نص الاقتباس - خط Bold وحجم كبير */}
					<p className="text-xl font-bold text-black mb-8 leading-relaxed">
						{testimonial.quote}
					</p>

					{/* صورة الشخص (Avatar Placeholder) */}
					<div className="mx-auto w-16 h-16 bg-grey rounded-full mb-3 flex items-center justify-center overflow-hidden">
						{/* Avatar Placeholder */}
						<span className="text-white text-sm">Pic</span>
					</div>

					{/* اسم الشخص ورتبته */}
					<p className="text-black font-semibold mb-1">
						{testimonial.name}
					</p>
					<p className="text-sm text-black opacity-70">
						{testimonial.title}
					</p>
				</div>
			</div>
		</section>
	);
}
