import { useTranslation } from "react-i18next";
import ProductCard from "./ProductCard";
import { cn } from "@/lib/utils";
import scissors1 from "@/assets/product-scissors-1.jpg";
import scissors2 from "@/assets/product-scissors-4.jpg";
import scissors3 from "@/assets/product-scissors-3.jpg";
import scissors4 from "@/assets/product-scissors-4.jpg";
import scissors5 from "@/assets/product-scissors-5.jpg";
import thinning from "@/assets/product-scissors-1.jpg";
import curved from "@/assets/curved-scissors.jpg";
import texturizing from "@/assets/razor-classic-silver.jpg";
import razor1 from "@/assets/product-razor-1.jpg";
import razorBlack from "@/assets/razor-classic-black.jpg";
import razorSilver from "@/assets/razor-classic-silver.jpg";
import { getImageByType } from "@/data/products";

const NewArrivalsGrid = () => {
  const { t } = useTranslation();
  
  // 12 new professional tool products
  const newArrivals = [
    { id: 1, image: scissors1, titleKey: "products.scissors.c440Professional", categoryKey: "product.category.c440" },
    { id: 2, image: scissors2, titleKey: "products.scissors.c440Premium", categoryKey: "product.category.c440" },
    { id: 3, image: scissors3, titleKey: "products.scissors.c420Classic", categoryKey: "product.category.c420" },
    { id: 4, image: scissors4, titleKey: "products.scissors.c420Thinning", categoryKey: "product.category.c420" },
    { id: 5, image: scissors5, titleKey: "products.scissors.c2Ergonomic", categoryKey: "product.category.c2" },
    { id: 6, image: thinning, titleKey: "products.scissors.professionalThinning", categoryKey: "product.category.specialist" },
    { id: 7, image: curved, titleKey: "products.scissors.curvedDetail", categoryKey: "product.category.specialist" },
    { id: 8, image: texturizing, titleKey: "products.scissors.texturizing", categoryKey: "product.category.specialist" },
    { id: 9, image: razor1, titleKey: "products.razors.classicStraight", categoryKey: "product.category.professional" },
    { id: 10, image: razorBlack, titleKey: "products.razors.premiumBlack", categoryKey: "product.category.professional" },
    { id: 11, image: razorSilver, titleKey: "products.razors.chromeFinish", categoryKey: "product.category.professional" },
    { id: 12, image: getImageByType('scissors', 0), titleKey: "products.scissors.c440Titanium", categoryKey: "product.category.c440" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-secondary/5 via-background to-background py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Background lightening effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-secondary/5 opacity-30" />
      
      {/* Animated radial gradient lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse opacity-40" style={{ animation: 'float 6s ease-in-out infinite' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-pulse opacity-50" style={{ animation: 'float 8s ease-in-out infinite reverse' }} />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse opacity-30 transform -translate-x-1/2 -translate-y-1/2" style={{ animation: 'float 7s ease-in-out infinite' }} />
      
      {/* Light rays effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,140,0,0.1),transparent_50%)] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,140,0,0.08),transparent_50%)] opacity-25" />
      
      {/* Animated glow orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/25 rounded-full blur-2xl opacity-20 animate-pulse" style={{ animation: 'float 10s ease-in-out infinite' }} />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-secondary/20 rounded-full blur-2xl opacity-25 animate-pulse" style={{ animation: 'float 9s ease-in-out infinite reverse' }} />
      
      <div className="relative max-w-container mx-auto px-6 md:px-10 lg:px-12 z-10">
        <div className="text-center mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-elegant font-bold text-foreground mb-3 md:mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            {t('newArrivals.title')}
          </h2>
          <p className="text-muted-foreground text-xs md:text-sm max-w-2xl mx-auto">
            {t('newArrivals.description')}
          </p>
        </div>
        {/* Dynamic Masonry Layout - All Cards Visible with Varied Sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-max">
          {newArrivals.map((product, index) => {
            // Create a dynamic pattern where certain cards span multiple columns
            // Pattern: Large card every 5th item starting at 0 and 3
            const isLarge = index % 5 === 0 || index % 5 === 3;
            
            // Determine column span
            const colSpan = isLarge ? 'sm:col-span-2 lg:col-span-2' : 'sm:col-span-1 lg:col-span-1';
            
            // Row span for large cards to create masonry effect
            const rowSpan = isLarge ? 'sm:row-span-2' : '';
            
            return (
              <div 
                key={product.id} 
                className={`${colSpan} ${rowSpan} animate-in fade-in slide-in-from-bottom-4 group relative`}
                style={{ animationDelay: `${index * 60}ms` }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget.querySelector('.product-card-wrapper') as HTMLElement;
                  if (card) {
                    card.style.filter = 'brightness(1.15) drop-shadow(0 0 30px rgba(255, 140, 0, 0.6)) drop-shadow(0 0 60px rgba(255, 140, 0, 0.3))';
                    card.style.boxShadow = '0 20px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(255, 140, 0, 0.5), 0 0 80px rgba(255, 140, 0, 0.3), inset 0 0 40px rgba(255, 140, 0, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget.querySelector('.product-card-wrapper') as HTMLElement;
                  if (card) {
                    card.style.filter = 'none';
                    card.style.boxShadow = 'none';
                  }
                }}
              >
                {/* 3D Card background lightening effects */}
                <div className="absolute -inset-1 bg-gradient-to-br from-secondary/30 via-secondary/10 to-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,140,0,0.25),transparent_60%)] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,140,0,0.15),transparent_70%)] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated light orb on card */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-secondary/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-secondary/25 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
                
                <div className="h-full flex flex-col transition-all duration-500 hover:scale-[1.02] relative z-10 product-card-wrapper">
                  <ProductCard 
                    image={product.image}
                    title={t(product.titleKey)}
                    category={t(product.categoryKey)}
                    titleKey={product.titleKey}
                    categoryKey={product.categoryKey}
                    isLarge={isLarge}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsGrid;
