import Link from "next/link";

export default function FooterColumn({ title, links }) {
	return (
		<div>
			<h3 className="text-white font-semibold mb-4 md:mb-5 uppercase text-lg">
				{title}
			</h3>
			<ul className="space-y-3">
				{links.map((link, index) => (
					<li key={index}>
						<Link
							href={link.url}
							className="text-light-grey-DEFAULT text-sm hover:text-white transition-colors"
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
