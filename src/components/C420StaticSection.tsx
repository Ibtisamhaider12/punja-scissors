import static1 from "@/assets/c420-static-1.jpg";
import static2 from "@/assets/c420-static-2.jpg";
import static3 from "@/assets/c420-static-3.jpg";
import { useTranslation } from "react-i18next";

const C420StaticSection = () => {
  const { t } = useTranslation();
  
  const images = [
    {
      src: static1,
      alt: "C420 Professional Scissors",
      title: t('c420.image1.title', 'Professional Precision'),
      description: t('c420.image1.description', 'Engineered for professional barbers with unmatched cutting precision and durability.')
    },
    {
      src: static2,
      alt: "C420 Scissors Detail",
      title: t('c420.image2.title', 'Elegant Design'),
      description: t('c420.image2.description', 'Sleek ergonomic design that combines comfort with exceptional performance.')
    },
    {
      src: static3,
      alt: "C420 Scissors Arrangement",
      title: t('c420.image3.title', 'Master Craftsmanship'),
      description: t('c420.image3.description', 'Handcrafted excellence that meets the highest standards of professional grooming.')
    }
  ];
  
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-secondary/5 py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-secondary/5 opacity-50" />
      <div className="relative max-w-container mx-auto px-6 md:px-10 lg:px-12">
        <div className="text-center mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-elegant font-bold text-foreground mb-3 md:mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            C420 Collection
          </h2>
          <p className="text-muted-foreground text-xs md:text-sm max-w-2xl mx-auto">
            {t('sections.c420Description', 'Discover the elegance and precision of our C420 scissors range')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-card via-card/95 to-card/90 border border-border/60 transition-all duration-500 ease-out cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-[1.01] hover:border-secondary/40"
            >
              {/* Glow effect on hover - properly aligned */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/0 via-secondary/20 to-secondary/0 rounded-lg opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 -z-10" />
              
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-secondary/5 to-transparent p-4 md:p-5">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Enhanced overlay gradient - aligned with image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Shine effect on hover - aligned with image */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5 md:p-6 relative">
                {/* Decorative accent line */}
                <div className="absolute top-0 left-5 right-5 h-0.5 bg-gradient-to-r from-transparent via-secondary/0 to-transparent group-hover:via-secondary/50 transition-all duration-500" />
                
                <h3 className="text-base font-elegant font-bold text-foreground mb-2 group-hover:text-secondary transition-colors duration-300">
                  {image.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {image.description}
                </p>
                
                {/* Read more indicator */}
                <div className="mt-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-semibold text-secondary">Learn more</span>
                  <svg className="w-3.5 h-3.5 text-secondary transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default C420StaticSection;
