// Sub-Component: 5 Stars rating
export const StarRating = () => (
	<div className="flex justify-center text-black mb-4">
		{"★★★★★".split("").map((star, index) => (
			<span key={index} className="text-xl">
				★
			</span>
		))}
	</div>
);
