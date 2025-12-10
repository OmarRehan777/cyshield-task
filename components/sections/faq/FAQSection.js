"use client";

import Link from "next/link";
import FAQItem from "./FAQItem";

export default function FAQSection() {
	const faqs = [
		{
			id: 1,
			question: "What Types Of Properties Are Available On Your Website?",
			isOpened: true,
		},
		{
			id: 2,
			question:
				"How Do I Schedule A Viewing Of A Property Listed On Your Website?",
			isOpened: false,
		},
		{
			id: 3,
			question:
				"Can I List My Property For Sale Or Rent On Your Website?",
			isOpened: false,
		},
		{
			id: 4,
			question: "What Should I Consider When Buying A Home?",
			isOpened: false,
		},
		{
			id: 5,
			question: "How Do I Determine The Value Of My Property?",
			isOpened: false,
		},
		{ id: 6, question: "Do We Get Cv From Jobify?", isOpened: false }, // سؤال مكرر من صورة أخرى
		{
			id: 7,
			question: "Can We Reschedule The Interview Meeting?",
			isOpened: false,
		}, // سؤال مكرر
		{ id: 8, question: "Can We Apply For All Jobs?", isOpened: false }, // سؤال مكرر
	];

	// تقسيم الأسئلة لعمودين (العمود الأول به السؤال المفتوح)
	const column1Faqs = faqs.slice(0, 2);
	const column2Faqs = faqs.slice(2, 6); // نستخدم أول 4 أسئلة عشان الشكل يكون متوازن

	return (
		<section className="bg-white py-20">
			<div className="container mx-auto px-4 max-w-7xl">
				{/* Header (الـ FAQ و العنوان الرئيسي) */}
				<div className="text-center mb-16">
					{/* العنوان الصغير: FAQ (لون Accent الأحمر) */}
					<p className="text-sm text-accent font-semibold uppercase mb-1">
						F A Q
					</p>

					{/* العنوان الرئيسي */}
					<h2 className="text-4xl md:text-5xl font-extrabold text-black mb-3">
						Frequently Asked Question
					</h2>

					{/* الوصف */}
					<p className="text-base text-grey-DEFAULT">
						Did you find the question as you expected?
					</p>
				</div>

				{/* FAQ Grid: Layout (عمودين على Desktop) */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
					{/* العمود الأيسر (السؤال المفتوح) */}
					<div>
						{/* استخدام الـ FAQItem بشكل يدوي لتمثيل السؤال المفتوح بالـ Description الكامل */}
						<FAQItem
							question={"How Many Steps To Get A Job?"}
							answer={
								"Et lectus viverra aenean malesuada praesent. Egestas praesent quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida tellus auctor ac, vitae justo."
							}
						/>

						{/* الأسئلة المغلقة في نفس العمود (لو موجودة في الـ Design) */}
						{column1Faqs.slice(1).map((faq) => (
							<FAQItem key={faq.id} question={faq.question} />
						))}
					</div>

					{/* العمود الأيمن (الأسئلة المغلقة) */}
					<div>
						{column2Faqs.map((faq) => (
							<FAQItem key={faq.id} question={faq.question} />
						))}
					</div>
				</div>

				{/* CTA Button: Give a Quote (في المنتصف) */}
				<div className="text-center mt-12">
					<Link
						href="#quote"
						// الزرار ده أخضر فاتح (primary)
						className="inline-block px-10 py-3 rounded-lg bg-primary text-black font-semibold transition-colors hover:bg-primary-2 shadow-lg"
					>
						Give a Quote
					</Link>
				</div>
			</div>
		</section>
	);
}
