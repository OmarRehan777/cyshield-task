"use client";

import Header from "../sections/header/Header";
import Footer from "../sections/footer/Footer";

export default function MainLayout({ children }) {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-grow">{children}</main>
			<Footer />{" "}
		</div>
	);
}
