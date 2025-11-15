import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import C420StaticSection from "@/components/C420StaticSection";
import TopSellersCarousel from "@/components/TopSellersCarousel";
import NewArrivalsGrid from "@/components/NewArrivalsGrid";
import ProductKnowledge from "@/components/ProductKnowledge";
import ProductGrid from "@/components/ProductGrid";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroCarousel />
        <C420StaticSection />
        <TopSellersCarousel />
        <NewArrivalsGrid />
        <ProductKnowledge />
        <ProductGrid />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
