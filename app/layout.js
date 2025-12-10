import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-sora",
});

export const metadata = {
	title: "AyEstate Home Page - CyShield Task",
	description:
		"A responsive real estate landing page built with Next.js 13.5.6 and Tailwind CSS 3.4.7.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${sora.variable}`}>
			<body className="font-sans text-black-DEFAULT bg-white antialiased">
				{children}
			</body>
		</html>
	);
}
