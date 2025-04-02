
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CourseSection from "@/components/CourseSection";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <CourseSection />
        <AboutSection />
        <TestimonialSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
