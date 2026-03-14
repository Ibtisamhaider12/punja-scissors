import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "react-i18next";
import hero1 from "@/assets/c440-hero-1.jpg";
import hero2 from "@/assets/c440-hero-2.jpg";
import hero3 from "@/assets/c440-hero-3.jpg";
import hero4 from "@/assets/c440-hero-4.jpg";
import hero6 from "@/assets/c440-hero-6.jpg";

const heroImages = [
  { id: 1, image: hero1, alt: "C440 Professional Barber Scissors" },
  { id: 2, image: hero2, alt: "C440 Scissors Close-up Detail" },
  { id: 3, image: hero3, alt: "C440 Scissors in Action" },
  { id: 4, image: hero4, alt: "C440 Scissors Collection" },
  { id: 6, image: hero6, alt: "C440 Premium Scissors Studio Shot" },
];

const HeroCarousel = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative w-full bg-gradient-to-br from-background via-surface to-secondary/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-secondary/5 opacity-50" />
      <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 10000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {heroImages.map((item) => (
            <CarouselItem key={item.id}>
              <div className="relative w-full aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/7] overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                  <div className="max-w-container mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-elegant font-bold text-foreground mb-3 drop-shadow-lg">
                      {t('hero.title')}
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground max-w-2xl drop-shadow-md">
                      {t('hero.description')}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-background/95 backdrop-blur-sm border-2 border-secondary/30 rounded-full hover:bg-secondary/10 hover:border-secondary shadow-lg transition-all hover:scale-110 text-secondary" />
        <CarouselNext className="right-4 bg-background/95 backdrop-blur-sm border-2 border-secondary/30 rounded-full hover:bg-secondary/10 hover:border-secondary shadow-lg transition-all hover:scale-110 text-secondary" />
      </Carousel>
      </div>
    </section>
  );
};

export default HeroCarousel;
