// components/sections/header/MobileMenu.js

"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function MobileMenu({ navLinks }) {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen(!isOpen);

	// Define the Contact Us link separately for button styling
	const contactLink = {
		name: "Contact Us",
		href: "#contact",
		isButton: true,
	};

	return (
		<>
			{/* Hamburger Icon Button (Mobile) - Centered with parent items-center */}
			<button
				onClick={toggleMenu}
				aria-label="Toggle Mobile Menu"
				className="p-2 text-black-DEFAULT"
			>
				<Bars3Icon className="h-6 w-6" />
			</button>

			{/* Full-Screen Menu Overlay (Conditionally rendered) */}
			{isOpen && (
				<div className="fixed inset-0 z-40 bg-white p-6">
					{/* Header of the Overlay: Close Button */}
					<div className="flex justify-end">
						<button
							onClick={toggleMenu}
							aria-label="Close Mobile Menu"
							className="p-2 text-black-DEFAULT"
						>
							<XMarkIcon className="h-6 w-6" />
						</button>
					</div>

					{/* Navigation Links List */}
					<nav className="flex flex-col space-y-6 mt-8 items-center">
						{/* Regular Links (Home, Listings, Company, etc.) */}
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								onClick={toggleMenu} // Close menu on link click (UX Best Practice)
								className="text-xl font-medium text-black-DEFAULT hover:text-accent transition-colors"
							>
								{link.name}
							</Link>
						))}

						{/* Separator for the button */}
						<div className="pt-4 border-t border-light-grey-3"></div>

						{/* Contact Us Button - Applying the Primary Green Style */}
						<Link
							href={contactLink.href}
							onClick={toggleMenu}
							className="text-center w-full"
						>
							<span
								// FINAL COLOR FIX: Using Custom CSS Class for max priority
								className="px-5 py-3 flex items-center justify-center rounded-full 
                               force-primary-bg font-semibold text-lg transition-colors
                               hover:bg-primary-2"
							>
								{contactLink.name}
							</span>
						</Link>
					</nav>
				</div>
			)}
		</>
	);
}
