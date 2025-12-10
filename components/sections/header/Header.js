// components/sections/header/Header.js

import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
	const navLinks = [
		{ name: "Home", href: "#home" },
		{ name: "Listings", href: "#listings" },
		{ name: "Company", href: "#company" },
		{ name: "Blog", href: "#blog" },
		{ name: "About Us", href: "#about" },
	];

	return (
		<header className="sticky top-0 z-50 bg-white shadow-md">
			{/* Main Header Container: Explicit Height (h-16), Flex, items-center to vertically center everything */}
			<div className="container mx-auto px-4 flex justify-between items-center max-w-7xl h-16">
				{/* 1. Logo (AyEstate) - Centered vertically due to parent items-center */}
				<Link
					href="/"
					className="text-2xl font-bold text-black-DEFAULT tracking-tight"
				>
					AyEstate
				</Link>

				{/* 2. Desktop Navigation (Visible on lg screens and above) */}
				<nav className="hidden lg:flex space-x-6 h-full items-center text-black-3 text-base font-medium">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							// FINAL ALIGNMENT FIX: Using inline-block helps stabilize vertical alignment
							className="hover:text-accent transition-colors px-2 inline-block"
						>
							{link.name}
						</Link>
					))}

					{/* Contact Us' button - FINAL COLOR FIX: Using Custom CSS Class for max priority */}
					<Link
						href="#contact"
						// Added custom class for color override
						className="inline-flex items-center justify-center px-5 py-2 rounded-full 
                                   force-primary-bg font-semibold text-sm transition-colors 
                                   hover:bg-primary-2 ml-4"
					>
						Contact Us
					</Link>
				</nav>

				{/* 3. Mobile Menu Toggle (Only visible on screens smaller than large (lg)) */}
				<div className="lg:hidden">
					<MobileMenu navLinks={navLinks} />
				</div>
			</div>
		</header>
	);
}
