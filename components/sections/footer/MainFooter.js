import FooterColumn from "./FooterColumn";

export default function MainFooter() {
	// تقسيم الروابط (نفس البيانات، بس هنستخدمها بترتيب يخدم الـ Mobile Grid)
	const footerLinks = [
		{
			title: "Pages",
			links: [
				{ label: "Listings", url: "#" },
				{ label: "About us", url: "#" },
				{ label: "Blog", url: "#" },
			],
		},
		{
			title: "Support",
			links: [
				{ label: "Properties", url: "#" },
				{ label: "FAQ", url: "#" },
				{ label: "Contact Us", url: "#" },
			],
		},
		{
			title: "Legal",
			links: [
				{ label: "Terms of Services", url: "#" },
				{ label: "Terms and Condition", url: "#" },
				{ label: "Complaints Process", url: "#" },
				{ label: "Privacy Policy", url: "#" },
			],
		},
		{
			title: "Platform",
			links: [
				{ label: "Desktop App", url: "#" },
				{ label: "Mobile App", url: "#" },
			],
		},
	];

	return (
		<footer className="bg-Black py-12 md:py-16 text-white">
			<div className="container mx-auto px-4 max-w-7xl">
				{/* 1. Main Content Grid */}
				{/* Grid-cols-2 في الموبايل عشان يدينا 2x2 */}
				{/* Grid-cols-5 في الديسكتوب عشان يدينا 1+4 أعمدة */}
				<div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 md:gap-8 border-light-grey-DEFAULT/20 pb-12 mb-8">
					{/* A. العمود الأول: Logo and Contact Info */}
					{/* في الموبايل لازم ياخد عرض العمودين (col-span-2) عشان يظهر فوق الكل لوحده. */}
					{/* في الديسكتوب بياخد عمود واحد بس (md:col-span-1). */}
					<div className="col-span-2 md:col-span-1">
						<h3 className="text-2xl font-normal mb-4  font-playball">
							AyEstate
						</h3>

						<p className="text-light-grey-DEFAULT text-sm mb-1">
							hello.ayestate@example.com
						</p>
						<p className="text-light-grey-DEFAULT text-sm mb-1">
							(+1) 2345 6789
						</p>
						<p className="text-light-grey-DEFAULT text-sm mt-3">
							4140 Parker Rd. Allentown,
						</p>
						<p className="text-light-grey-DEFAULT text-sm">
							New Mexico 31134
						</p>
					</div>

					{/* B. الأعمدة 2 و 3: Pages و Support */}
					{/* دول بياخدوا عمود واحد لكل واحد في كل الأحجام (col-span-1) */}
					{footerLinks.slice(0, 2).map((column, index) => (
						<FooterColumn
							key={index}
							title={column.title}
							links={column.links}
						/>
					))}

					{/* C. الأعمدة 4 و 5: Legal و Platform */}
					{/* دول بياخدوا عمود واحد لكل واحد في كل الأحجام (col-span-1) */}
					{footerLinks.slice(2, 4).map((column, index) => (
						<FooterColumn
							key={column.title}
							title={column.title}
							links={column.links}
						/>
					))}
				</div>

				{/* 2. Copyright Footer */}
				<div className=" md:text-left text-sm text-light-grey ">
					<p className="text-center">
						Copyright © AyEstate | Designed by AY Studio
					</p>
				</div>
			</div>
		</footer>
	);
}
