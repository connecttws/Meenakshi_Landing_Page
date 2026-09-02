import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import JourneySection from "@/components/JourneySection";
import TransformationSection from "@/components/TransformationSection";
import CoachProfileSection from "@/components/CoachProfileSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import ProgramDetailsSection from "@/components/ProgramDetailsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-[100dvh] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustStrip />
      <AboutSection />
      <TransformationSection />
      <CoachProfileSection />
      <TargetAudienceSection />
      <TestimonialSection />
      <JourneySection />
      <ProgramDetailsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
