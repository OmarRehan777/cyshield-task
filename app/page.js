import MainLayout from "../components/layouts/MainLayout";
import HeroSection from "../components/sections/hero/HeroSection";
import SimplifySection from "../components/sections/simplify/SimplifySection";
import InnovativeCTASection from "../components/sections/innovativeCTA/InnovativeCTASection";
import FindPropertiesSection from "../components/sections/findProperties/FindPropertiesSection";
import TestimonialsSection from "../components/sections/testimonials/TestimonialsSection";
import FAQSection from "../components/sections/faq/FAQSection";
import DiscoverSection from "../components/sections/discover/DiscoverSection";

export default function Home() {
	return (
		<MainLayout>
			<HeroSection />
			<DiscoverSection />
			<SimplifySection />
			<InnovativeCTASection />
			<FindPropertiesSection />
			<TestimonialsSection />
			<FAQSection />
		</MainLayout>
	);
}
