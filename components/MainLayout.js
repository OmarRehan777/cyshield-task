import Header from "./sections/header/Header";

export default function MainLayout({ children }) {
	return (
		// Header structure: min-h-screen for sticky footer effect
		<div className="flex flex-col min-h-screen">
			{/* The Header component will be rendered at the top of every page */}
			<Header />

			{/* The main content of the page goes here. */}
			<main className="flex-grow">{children}</main>

			{/* The Footer will be added later */}
			{/* <Footer /> */}
		</div>
	);
}
