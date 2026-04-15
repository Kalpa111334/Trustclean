import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { GallerySection } from "@/components/GallerySection";
import { PricingSection } from "@/components/PricingSection";
import { BookingSection } from "@/components/BookingSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "TrustClean Lanka — Professional Cleaning Services in Sri Lanka" },
      { name: "description", content: "Sri Lanka's most trusted professional cleaning service. Home cleaning, office cleaning, deep cleaning & more. Book online today!" },
      { property: "og:title", content: "TrustClean Lanka — Professional Cleaning Services" },
      { property: "og:description", content: "Experience spotless spaces with TrustClean Lanka. Reliable, eco-friendly cleaning for homes, offices, and events." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <GallerySection />
      <PricingSection />
      <BookingSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
