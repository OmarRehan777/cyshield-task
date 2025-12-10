import Link from "next/link";

export default function FooterCTA() {
	return (
		<section className="bg-[#040316] py-20 text-white">
			<div className="container mx-auto px-4 max-w-4xl text-center">
				<h2 className="text-4xl md:text-5xl font-bold leading-6 mb-4 font-sans ">
					Let's start a <br></br> <span className="uppercase">SUCCESSFUL PROJECT</span>
				</h2>
				<p className="text-lg text-white/80 mb-8 max-w-lg mx-auto">
					We deliver immediate business impact and long-term ROI for
					your brand. Find out why Astheris are Australia's trusted
					Digital Agency.
				</p>
				<Link
					href="#contact"
					className="inline-block px-10 py-3 rounded-3xl bg-primary text-black font-semibold transition-colors hover:bg-primary-2 shadow-lg"
				>
					Start A Project
					<span className="ml-2 inline-block">↗</span>
				</Link>
			</div>
		</section>
	);
}
