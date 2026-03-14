import ProductCard from "./ProductCard";
import { useTranslation } from "react-i18next";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import scissors1 from "@/assets/product-scissors-1.jpg";
import scissors2 from "@/assets/product-scissors-4.jpg";
import scissors3 from "@/assets/product-scissors-3.jpg";
import scissors4 from "@/assets/product-scissors-4.jpg";
import scissors5 from "@/assets/product-scissors-5.jpg";
import thinning from "@/assets/razor-classic-silver.jpg";
import curved from "@/assets/curved-scissors.jpg";
import texturizing from "@/assets/440C_107b.jpg";
import razor1 from "@/assets/product-razor-1.jpg";
import razorBlack from "@/assets/razor-classic-black.jpg";
import razorSilver from "@/assets/razor-classic-silver.jpg";
import { getImageByType } from "@/data/products";

const ProductGrid = () => {
  const { t } = useTranslation();
  
  // 12 professional tool products
  const products = [
    {
      id: 1,
      image: scissors1,
      title: t("products.scissors.c440Professional"),
      titleKey: "products.scissors.c440Professional",
      category: t("product.category.c440"),
      categoryKey: "product.category.c440",
    },
    {
      id: 2,
      image: scissors2,
      title: t("products.scissors.c440Premium"),
      titleKey: "products.scissors.c440Premium",
      category: t("product.category.c440"),
      categoryKey: "product.category.c440",
    },
    {
      id: 3,
      image: scissors3,
      title: t("products.scissors.c420Classic"),
      titleKey: "products.scissors.c420Classic",
      category: t("product.category.c420"),
      categoryKey: "product.category.c420",
    },
    {
      id: 4,
      image: scissors4,
      title: t("products.scissors.c420Thinning"),
      titleKey: "products.scissors.c420Thinning",
      category: t("product.category.c420"),
      categoryKey: "product.category.c420",
    },
    {
      id: 5,
      image: scissors5,
      title: t("products.scissors.c2Ergonomic"),
      titleKey: "products.scissors.c2Ergonomic",
      category: t("product.category.c2"),
      categoryKey: "product.category.c2",
    },
    {
      id: 6,
      image: thinning,
      title: t("products.scissors.professionalThinning"),
      titleKey: "products.scissors.professionalThinning",
      category: t("product.category.specialist"),
      categoryKey: "product.category.specialist",
    },
    {
      id: 7,
      image: curved,
      title: t("products.scissors.curvedDetail"),
      titleKey: "products.scissors.curvedDetail",
      category: t("product.category.specialist"),
      categoryKey: "product.category.specialist",
    },
    {
      id: 8,
      image: texturizing,
      title: t("products.scissors.texturizing"),
      titleKey: "products.scissors.texturizing",
      category: t("product.category.specialist"),
      categoryKey: "product.category.specialist",
    },
    {
      id: 9,
      image: razor1,
      title: t("products.razors.classicStraight"),
      titleKey: "products.razors.classicStraight",
      category: t("product.category.professional"),
      categoryKey: "product.category.professional",
    },
    {
      id: 10,
      image: razorBlack,
      title: t("products.razors.premiumBlack"),
      titleKey: "products.razors.premiumBlack",
      category: t("product.category.professional"),
      categoryKey: "product.category.professional",
    },
    {
      id: 11,
      image: razorSilver,
      title: t("products.razors.chromeFinish"),
      titleKey: "products.razors.chromeFinish",
      category: t("product.category.professional"),
      categoryKey: "product.category.professional",
    },
    {
      id: 12,
      image: getImageByType('scissors', 0),
      title: t("products.scissors.c440Titanium"),
      titleKey: "products.scissors.c440Titanium",
      category: t("product.category.c440"),
      categoryKey: "product.category.c440",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-background via-secondary/5 to-background py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-secondary/5 opacity-50" />
      <div className="relative max-w-container mx-auto px-6 md:px-10 lg:px-12">
        <div className="text-center mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-elegant font-bold text-foreground mb-3 md:mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            {t('sections.featuredProducts')}
          </h2>
          <p className="text-muted-foreground text-xs md:text-sm max-w-2xl mx-auto">
            {t('sections.featuredDescription', 'Explore our collection of premium scissors and grooming tools, crafted with precision for professionals.')}
          </p>
        </div>
        {/* Horizontal scrolling carousel for unique design */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map((product, index) => (
              <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="h-full flex flex-col">
                  <ProductCard {...product} />
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

export default ProductGrid;
