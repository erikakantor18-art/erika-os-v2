import Hero from "@/components/landing/Hero";
import DashboardPreview from "@/components/landing/DashboardPreview";
import Features from "@/components/landing/Features";
import Statistics from "@/components/landing/Statistics";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <DashboardPreview />
      <Features />
      <Statistics />
      <CTA />
      <Footer />
    </>
  );
}