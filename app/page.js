import MainLayout from "../components/MainLayout";

export default function Home() {
	return (
		<MainLayout>
			{/* 4. Placeholder for the main sections (e.g., HeroSection, Listings, Testimonials) 
          We will replace this with the actual sections later. */}
			<section className="p-4 text-center text-grey-DEFAULT">
				{/* We can remove this placeholder once we start building sections */}
				<h1 className="text-xl font-bold">
					AyEstate Home Page Content Placeholder
				</h1>
				<p>Start building sections here...</p>
			</section>
		</MainLayout>
	);
}
