import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useTranslation } from "react-i18next";
import razor1 from "@/assets/product-razor-1.jpg";
import razorBlack from "@/assets/razor-classic-black.jpg";
import razorSilver from "@/assets/razor-classic-silver.jpg";
import { getImageByType } from "@/data/products";

const Razors = () => {
  const { t } = useTranslation();
  
  const razors = [
    { 
      id: 1, 
      image: razor1, 
      titleKey: "products.razors.classicStraight", 
      categoryKey: "product.category.professional",
      descriptionKey: "products.razors.descriptions.classicStraight"
    },
    { 
      id: 2, 
      image: razorBlack, 
      titleKey: "products.razors.premiumBlack", 
      categoryKey: "product.category.professional",
      descriptionKey: "products.razors.descriptions.premiumBlack"
    },
    { 
      id: 3, 
      image: razorSilver, 
      titleKey: "products.razors.chromeFinish", 
      categoryKey: "product.category.professional",
      descriptionKey: "products.razors.descriptions.chromeFinish"
    },
    { 
      id: 4, 
      image: razor1, 
      titleKey: "products.razors.damascusSteel", 
      categoryKey: "product.category.professional",
      descriptionKey: "products.razors.descriptions.damascusSteel"
    },
    { 
      id: 5, 
      image: razorBlack, 
      titleKey: "products.razors.vintageStyle", 
      categoryKey: "product.category.professional",
      descriptionKey: "products.razors.descriptions.vintageStyle"
    },
    { 
      id: 6, 
      image: razorSilver, 
      titleKey: "products.razors.carbonSteel", 
      categoryKey: "product.category.professional",
      descriptionKey: "products.razors.descriptions.carbonSteel"
    },
    { 
      id: 7, 
      image: razor1, 
      titleKey: "products.razors.swedishSteel", 
      categoryKey: "product.category.professional",
      descriptionKey: "products.razors.descriptions.swedishSteel"
    },
    { 
      id: 8, 
      image: razorBlack, 
      titleKey: "products.razors.goldPlated", 
      categoryKey: "product.category.professional",
      descriptionKey: "products.razors.descriptions.goldPlated"
    },
    { 
      id: 9, 
      image: razorSilver, 
      titleKey: "products.razors.japaneseStyle", 
      categoryKey: "product.category.professional",
      descriptionKey: "products.razors.descriptions.japaneseStyle"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gradient-to-br from-background via-background to-secondary/5">
        <div className="max-w-container mx-auto px-6 md:px-10 lg:px-12 py-12 md:py-16 lg:py-20">
          <div className="text-center mb-14 md:mb-20 animate-in fade-in slide-in-from-bottom-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-elegant font-bold text-foreground mb-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              {t('pages.razors.title')}
            </h1>
            <p className="text-muted-foreground text-xs md:text-sm max-w-2xl mx-auto">
              {t('pages.razors.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {razors.map((item) => (
              <div key={item.id} className="flex flex-col h-full">
                <div className="flex-grow flex flex-col">
                  <ProductCard 
                    image={item.image}
                    title={t(item.titleKey)}
                    category={t(item.categoryKey)}
                    titleKey={item.titleKey}
                    categoryKey={item.categoryKey}
                  />
                </div>
                <p className="mt-3 text-xs text-muted-foreground px-2 leading-relaxed flex-shrink-0">{t(item.descriptionKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Razors;
