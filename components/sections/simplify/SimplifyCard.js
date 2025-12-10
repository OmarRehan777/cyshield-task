export default function SimplifyCard({ title, description, imageUrl }) {
	return (
		// Card Styling
		<div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center h-full justify-between">
			<div className="relative w-full h-40 bg-light-grey-2 flex items-center justify-center">
				<img
					src={imageUrl}
					alt={title}
					className="w-full h-full object-cover"
				/>
			</div>

			{/* 2. Content */}
			<div className="p-4 flex-grow flex flex-col justify-between w-full">
				<h3 className="text-xl font-bold text-black-DEFAULT mb-2">
					{title}
				</h3>
				<p className="text-xs text-black-3 mb-4 font-semibold">
					{description}
				</p>
			</div>
		</div>
	);
}
