import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Star, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import scissors1 from "@/assets/product-scissors-1.jpg";
import scissors2 from "@/assets/product-scissors-5.jpg";
import scissors3 from "@/assets/product-scissors-3.jpg";
import scissors4 from "@/assets/product-scissors-4.jpg";
import scissors5 from "@/assets/product-scissors-5.jpg";
import thinning from "@/assets/product-scissors-3.jpg";

const TopSellersCarousel = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  
  const topSellers = [
    { id: 1, image: scissors1, titleKey: "products.scissors.c440Professional", categoryKey: "product.category.c440", rating: 4.9, sales: 1250 },
    { id: 2, image: scissors2, titleKey: "products.scissors.c440Premium", categoryKey: "product.category.c440", rating: 4.8, sales: 980 },
    { id: 3, image: scissors3, titleKey: "products.scissors.c420Classic", categoryKey: "product.category.c420", rating: 4.7, sales: 850 },
    { id: 4, image: scissors4, titleKey: "products.scissors.c420Thinning", categoryKey: "product.category.c420", rating: 4.9, sales: 720 },
    { id: 5, image: scissors5, titleKey: "products.scissors.c2Ergonomic", categoryKey: "product.category.c2", rating: 4.6, sales: 650 },
    { id: 6, image: thinning, titleKey: "products.scissors.professionalThinning", categoryKey: "product.category.specialist", rating: 4.8, sales: 580 },
  ];

  // Auto-rotate every 3 seconds (2 seconds faster)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % topSellers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [topSellers.length]);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % topSellers.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + topSellers.length) % topSellers.length);
  };

  const goToIndex = (index: number) => {
    setActiveIndex(index);
  };

  // Get visible items (active + 2 on each side)
  const getVisibleItems = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (activeIndex + i + topSellers.length) % topSellers.length;
      visible.push({ ...topSellers[index], position: i });
    }
    return visible;
  };

  const visibleItems = getVisibleItems();
  const activeProduct = topSellers[activeIndex];

  return (
    <section className="relative bg-gradient-to-br from-surface via-background to-surface/50 py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-secondary/5 opacity-40" />
      <div className="relative max-w-container mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex items-center justify-between mb-8 md:mb-10 animate-in fade-in slide-in-from-bottom-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <TrendingUp className="h-4 w-4 text-secondary" />
              <h2 className="text-xl md:text-2xl lg:text-3xl font-premium font-bold text-foreground bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                {t('topSellers.title')}
              </h2>
            </div>
            <p className="text-muted-foreground text-[10px] md:text-xs max-w-xl">
              {t('topSellers.description')}
            </p>
          </div>
        </div>

        {/* Spotlight Carousel */}
        <div className="relative">
          {/* Main Featured Product */}
          <div className="relative mb-4">
            <div className="group relative bg-gradient-to-br from-card via-card/95 to-card/90 rounded-lg overflow-hidden shadow-md border border-secondary/20 transform transition-all duration-500 max-w-2xl mx-auto">
              {/* Rating Badge - Smaller */}
              <div className="absolute top-2 left-2 z-20 flex items-center gap-0.5 bg-secondary/90 backdrop-blur-sm text-white px-1.5 py-0.5 rounded text-[9px] font-medium shadow-sm">
                <Star className="h-2.5 w-2.5 fill-white" />
                <span>{activeProduct.rating}</span>
              </div>
              
              {/* Sales Badge - Smaller */}
              <div className="absolute top-2 right-2 z-20 bg-background/90 backdrop-blur-sm text-foreground px-1.5 py-0.5 rounded text-[9px] font-medium shadow-sm border border-border/50">
                {activeProduct.sales}+
              </div>

              {/* Image Container - Smaller */}
              <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent p-2 md:p-3">
                <img
                  src={activeProduct.image}
                  alt={t(activeProduct.titleKey)}
                  className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-2 md:inset-3 bg-gradient-to-t from-black/40 via-black/10 to-transparent rounded-md" />
              </div>
              
              {/* Content - Smaller padding */}
              <div className="p-2.5 md:p-3 bg-gradient-to-b from-card to-card/95">
                <div className="flex items-start justify-between mb-1.5">
                  <div className="flex-1">
                    <span className="inline-block px-1 py-0.5 text-[8px] font-semibold bg-gradient-to-r from-secondary/20 to-secondary/10 text-secondary rounded-full mb-1 border border-secondary/30">
                      {t(activeProduct.categoryKey)}
                    </span>
                    <h3 className="text-xs md:text-sm font-premium font-bold text-foreground group-hover:text-secondary transition-colors mb-0.5">
                      {t(activeProduct.titleKey)}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1.5 border-t border-border/50">
                  <div className="flex items-center gap-0.5">
                    <Star className="h-2 w-2 fill-secondary text-secondary" />
                    <span className="text-[8px] font-medium text-foreground">{activeProduct.rating}</span>
                    <span className="text-[8px] text-muted-foreground">({activeProduct.sales})</span>
                  </div>
                  <div className="px-1 py-0.5 bg-secondary/10 text-secondary rounded-full text-[7px] font-semibold">
                    Top Seller
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Preview Thumbnails with Scroll Indicators */}
          <div className="relative max-w-xl mx-auto">
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/95 backdrop-blur-sm border-2 border-secondary/30 rounded-full p-1.5 hover:bg-secondary/10 hover:border-secondary shadow-md transition-all hover:scale-110"
              aria-label="Previous product"
            >
              <ChevronLeft className="h-4 w-4 text-secondary" />
            </button>

            <div className="flex items-center justify-center gap-1.5 md:gap-2 px-10 overflow-visible">
              {visibleItems.map((item, idx) => {
                const isActive = item.position === 0;
                const scale = isActive ? 1 : 0.75;
                const opacity = Math.abs(item.position) <= 1 ? 1 : 0.4;
                
                return (
                  <div
                    key={item.id}
                    onClick={() => goToIndex((activeIndex + item.position + topSellers.length) % topSellers.length)}
                    className={`flex-shrink-0 cursor-pointer transition-all duration-500 ${
                      isActive ? 'z-10' : 'z-0'
                    }`}
                    style={{
                      transform: `scale(${scale}) translateY(${isActive ? '-6px' : '0px'})`,
                      opacity,
                    }}
                  >
                    <div className={`relative rounded overflow-hidden border-2 transition-all duration-500 ${
                      isActive 
                        ? 'border-secondary shadow-lg ring-2 ring-secondary/20' 
                        : 'border-border/50 shadow-sm hover:border-secondary/50'
                    }`}>
                      <div className="relative aspect-square w-12 md:w-14 overflow-hidden bg-gradient-to-br from-secondary/5 to-transparent p-1">
                        <img
                          src={item.image}
                          alt={t(item.titleKey)}
                          className="w-full h-full object-cover rounded"
                        />
                        {isActive && (
                          <div className="absolute inset-1 bg-secondary/20 rounded" />
                        )}
                      </div>
                      {isActive && (
                        <div className="absolute -top-0.5 -right-0.5 bg-secondary rounded-full p-0.5 shadow-md">
                          <Star className="h-2 w-2 fill-white text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/95 backdrop-blur-sm border-2 border-secondary/30 rounded-full p-1.5 hover:bg-secondary/10 hover:border-secondary shadow-md transition-all hover:scale-110"
              aria-label="Next product"
            >
              <ChevronRight className="h-4 w-4 text-secondary" />
            </button>
          </div>

          {/* Enhanced Progress Indicator */}
          <div className="mt-4 space-y-1.5">
            {/* Progress Bar */}
            <div className="flex items-center justify-center gap-1 max-w-sm mx-auto">
              <div className="flex-1 h-0.5 bg-border/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-secondary to-secondary/80 rounded-full transition-all duration-500"
                  style={{ width: `${((activeIndex + 1) / topSellers.length) * 100}%` }}
                />
              </div>
              <span className="text-[10px] font-medium text-muted-foreground min-w-[2.5rem] text-right">
                {activeIndex + 1} / {topSellers.length}
              </span>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-1">
              {topSellers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeIndex
                      ? 'w-6 h-1.5 bg-secondary shadow-sm'
                      : 'w-1.5 h-1.5 bg-border hover:bg-secondary/50'
                  }`}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellersCarousel;
