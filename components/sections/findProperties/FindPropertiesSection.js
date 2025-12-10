import FindPropertiesCard from "./FindPropertiesCard";
import Link from "next/link";

export default function FindPropertiesSection() {
	const listings = [
		{
			id: 1,
			title: "Luxury Villa",
			price: "$1,000,000",
			location: "Oceanfront",
			imageUrl: "/images/properties/Luxury_Villa.png",
		},
		{
			id: 2,
			title: "Modern Apartment",
			price: "$500,000",
			location: "City Center",
			imageUrl: "/images/properties/Modern_Apartment.png",
		},
		{
			id: 3,
			title: "Cozy Cottage",
			price: "$300,000",
			location: "Mountain View",
			imageUrl: "/images/properties/Cozy_Cottage.png",
		},
		{
			id: 4,
			title: "Spacious Condo",
			price: "$700,000",
			location: "Beachfront",
			imageUrl: "/images/properties/Spacious_Condo.png",
		},
		{
			id: 5,
			title: "Luxury Penthouse",
			price: "$1,500,000",
			location: "Downtown",
			imageUrl: "/images/properties/Luxury_Penthouse.png",
		},
		{
			id: 6,
			title: "Lakefront Retreat",
			price: "$800,000",
			location: "Lake View",
			imageUrl: "/images/properties/Lakefront_Retreat.png",
		},
		{
			id: 7,
			title: "Charming Bungalow",
			price: "$400,000",
			location: "Garden View",
			imageUrl: "/images/properties/Charming_Bungalow.png",
		},
		{
			id: 8,
			title: "Luxury Villa",
			price: "$1,000,000",
			location: "Oceanfront",
			imageUrl: "/images/properties/Luxury_Villa.png",
		},
	];

	return (
		// Section Container
		<section className="container mx-auto px-4 py-20 max-w-7xl FindPropertiesSection">
			{/* Header: Title and Description (Centered) */}
			<div className="text-center mb-12">
				{/* العنوان الصغير: Find */}
				<p className="text-sm text-black font-semibold mb-1 opacity-70">
					Find
				</p>

				{/* العنوان الرئيسي: Properties (H1/H2 حجم كبير) */}
				<h2 className="text-4xl md:text-5xl font-extrabold text-black mb-3">
					Properties
				</h2>

				<p className="text-base text-grey-DEFAULT max-w-3xl mx-auto">
					Explore our curated list of properties and find your dream
					home.
				</p>
			</div>

			{/* Listings Grid: 4 columns على الـ Desktop */}
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
				{listings.map((listing) => (
					<FindPropertiesCard
						className="FindPropertiesCard"
						key={listing.id}
						title={listing.title}
						price={listing.price}
						location={listing.location}
						imageUrl={listing.imageUrl}
					/>
				))}
			</div>
			<div className="text-center mt-12">
				<Link
					href="#View All"
					className="px-6 py-3 rounded-xl bg-primary text-Black font-semibold text-base transition-colors hover:bg-primary-2 shadow-md"
				>
					View All
				</Link>
			</div>
		</section>
	);
}
