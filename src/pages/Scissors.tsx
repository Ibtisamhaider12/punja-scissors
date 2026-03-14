import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useTranslation } from "react-i18next";
import scissors1 from "@/assets/440C_100.jpg";
import scissors2 from "@/assets/440C_107b.jpg";
import scissors3 from "@/assets/product-scissors-3.jpg";
import scissors4 from "@/assets/product-scissors-4.jpg";
import scissors5 from "@/assets/product-scissors-5.jpg";
import thinning from "@/assets/product-scissors-1.jpg";
import curved from "@/assets/curved-scissors.jpg";
import texturizing from "@/assets/product-scissors-1.jpg";
import { getImageByType } from "@/data/products";

const Scissors = () => {
  const { t } = useTranslation();
  
  const scissors = [
    { id: 1, image: scissors1, titleKey: "products.scissors.c440Professional", categoryKey: "product.category.c440" },
    { id: 2, image: scissors2, titleKey: "products.scissors.c440Premium", categoryKey: "product.category.c440" },
    { id: 3, image: scissors3, titleKey: "products.scissors.c420Classic", categoryKey: "product.category.c420" },
    { id: 4, image: scissors4, titleKey: "products.scissors.c420Thinning", categoryKey: "product.category.c420" },
    { id: 5, image: scissors5, titleKey: "products.scissors.c2Ergonomic", categoryKey: "product.category.c2" },
    { id: 6, image: thinning, titleKey: "products.scissors.professionalThinning", categoryKey: "product.category.specialist" },
    { id: 7, image: curved, titleKey: "products.scissors.curvedDetail", categoryKey: "product.category.specialist" },
    { id: 8, image: texturizing, titleKey: "products.scissors.texturizing", categoryKey: "product.category.specialist" },
    { id: 9, image: getImageByType('scissors', 0), titleKey: "products.scissors.c440Titanium", categoryKey: "product.category.c440" },
    { id: 10, image: getImageByType('scissors', 1), titleKey: "products.scissors.professional65", categoryKey: "product.category.c440" },
    { id: 11, image: getImageByType('scissors', 2), titleKey: "products.scissors.c420Precision", categoryKey: "product.category.c420" },
    { id: 12, image: getImageByType('scissors', 3), titleKey: "products.scissors.japaneseSteel", categoryKey: "product.category.c2" },
    { id: 13, image: getImageByType('scissors', 4), titleKey: "products.scissors.premium7", categoryKey: "product.category.c440" },
    { id: 14, image: getImageByType('scissors', 5), titleKey: "products.scissors.surgicalGrade", categoryKey: "product.category.specialist" },
    { id: 15, image: getImageByType('scissors', 6), titleKey: "products.scissors.leftHanded", categoryKey: "product.category.specialist" },
    { id: 16, image: getImageByType('scissors', 7), titleKey: "products.scissors.blending", categoryKey: "product.category.specialist" },
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gradient-to-br from-background via-background to-secondary/5">
        <div className="max-w-container mx-auto px-6 md:px-10 lg:px-12 py-12 md:py-16 lg:py-20">
          <div className="text-center mb-14 md:mb-20 animate-in fade-in slide-in-from-bottom-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-elegant font-bold text-foreground mb-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              {t('pages.scissors.title')}
            </h1>
            <p className="text-muted-foreground text-xs md:text-sm max-w-2xl mx-auto">
              {t('pages.scissors.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {scissors.map((item) => (
              <div key={item.id} className="flex flex-col h-full">
                <ProductCard 
                  image={item.image}
                  title={t(item.titleKey)}
                  category={t(item.categoryKey)}
                  titleKey={item.titleKey}
                  categoryKey={item.categoryKey}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Scissors;
