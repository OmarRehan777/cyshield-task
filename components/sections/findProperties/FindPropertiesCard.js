import Link from "next/link";

export default function FindPropertiesCard({
	title,
	price,
	location,
	imageUrl,
}) {
	return (
		<div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
			{/* Image */}
			<div className="relative w-full h-48 bg-light-grey-DEFAULT flex items-center justify-center">
				<img
					src={imageUrl}
					alt={title}
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Content */}
			<div className="p-4 flex flex-col items-center text-center">
				<h3 className="text-lg font-bold text-black mb-1 truncate w-full">
					{title}
				</h3>

				<p className="text-grey-DEFAULT text-sm mb-2">{location}</p>

				<p className="text-Black text-xl font-bold mb-4">
					{price}
				</p>

				<Link
					href="#"
					className="block w-full text-center py-2 bg-white text-black border-2 border-grey-2 rounded-lg font-semibold transition-all hover:bg-grey-3"
				>
					View Details
				</Link>
			</div>
		</div>
	);
}
