import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import TransformationSection from "@/components/TransformationSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import ProgramDetailsSection from "@/components/ProgramDetailsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustStrip />
      <TransformationSection />
      <TargetAudienceSection />
      <ProgramDetailsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
