"use client";

import React from "react";

export default function FAQItem({ question, answer }) {
	// (Accordion)
	const [isOpen, setIsOpen] = React.useState(false);

	// الـ Design بيظهر سؤال مفتوح و 4 أسئلة مغلقة
	const defaultAnswer =
		"Et lectus viverra aenean malesuada praesent. Egestas praesent quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida tellus auctor ac, vitae justo.";

	return (
		<div className="border border-light-grey-DEFAULT rounded-lg mb-4 bg-white transition-shadow duration-300 hover:shadow-md">
			{/* السؤال (الـ Header) */}
			<button
				className="flex justify-between items-center w-full p-4 text-left font-semibold text-black"
				onClick={() => setIsOpen(!isOpen)}
			>
				{question}
				{/* أيقونة فتح/غلق (+ أو -) */}
				<span className="text-xl font-medium">
					{isOpen ? "—" : "+"}
				</span>
			</button>

			{/* الإجابة (الـ Content) */}
			{isOpen && (
				<div className="p-4 pt-0 text-grey-DEFAULT text-sm">
					<p>{answer || defaultAnswer}</p>
					{/* زر Read More اللي ظهر في السؤال المفتوح */}
					{answer && (
						<a
							href="#"
							className="text-primary font-semibold mt-2 inline-block"
						>
							Read More
						</a>
					)}
				</div>
			)}
		</div>
	);
}
