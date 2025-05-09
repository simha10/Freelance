import HeroSection from "@/components/HeroSection";
import FeaturedCards from "@/components/FeaturedCards";
import Globe from "@/components/Globe";
import "./globals.css";
import Feedbacks from "@/components/Feedbacks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <div className="globe-container">
          <Globe />
        </div>
        <div className="featured-cards-container">
          <FeaturedCards />
        </div>
        <Feedbacks />
        <Footer />
      </main>
    </>
  );
}