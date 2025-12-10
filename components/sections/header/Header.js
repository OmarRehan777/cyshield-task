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
			<div className="container mx-auto px-4 flex justify-between items-center max-w-7xl h-16">
				{/* 1. Logo (AyEstate) */}
				<Link
					href="/"
					className="text-2xl font-normal text-black-DEFAULT tracking-tight font-playball"
				>
					AyEstate
				</Link>

				{/* 2. Desktop Navigation (Visible on lg screens and above) */}
				<nav className="hidden lg:flex lg:justify-between space-x-6 h-full items-center text-black-2 text-base font-medium w-[70%]">
					<div className="lg:flex lg:gap-6">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className="hover:text-accent transition-colors px-2 inline-block"
							>
								{link.name}
							</Link>
						))}
					</div>

					{/* Contact Us' button*/}
					<Link
						href="#contact"
						// Added custom class for color override
						className="inline-flex items-center justify-center px-5 py-2 rounded-md 
                                   bg-primary font-semibold text-sm transition-colors 
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
