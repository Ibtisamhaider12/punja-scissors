import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useTranslation } from "react-i18next";
import scissors1 from "@/assets/product-scissors-1.jpg";
import scissors2 from "@/assets/product-scissors-2.jpg";
import scissors3 from "@/assets/product-scissors-3.jpg";
import razor1 from "@/assets/product-razor-1.jpg";
import razorBlack from "@/assets/razor-classic-black.jpg";
import razorSilver from "@/assets/razor-classic-silver.jpg";
import { getImageByType } from "@/data/products";

const ManicurePedicure = () => {
  const { t } = useTranslation();
  
  const tools = [
    { id: 1, image: scissors1, titleKey: "products.manicure.professionalManicure", categoryKey: "product.category.manicure" },
    { id: 2, image: scissors2, titleKey: "products.manicure.curvedCuticle", categoryKey: "product.category.manicure" },
    { id: 3, image: scissors3, titleKey: "products.manicure.completePedicure", categoryKey: "product.category.pedicure" },
    { id: 4, image: razor1, titleKey: "products.manicure.premiumClipper", categoryKey: "product.category.manicure" },
    { id: 5, image: razorBlack, titleKey: "products.manicure.cuticlePusher", categoryKey: "product.category.manicure" },
    { id: 6, image: razorSilver, titleKey: "products.manicure.nailFileSet", categoryKey: "product.category.manicure" },
    { id: 7, image: getImageByType('scissors', 0), titleKey: "products.manicure.toenailClippers", categoryKey: "product.category.pedicure" },
    { id: 8, image: getImageByType('scissors', 1), titleKey: "products.manicure.completeKit", categoryKey: "product.category.pedicure" },
    { id: 9, image: getImageByType('razors', 0), titleKey: "products.manicure.precisionNail", categoryKey: "product.category.manicure" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gradient-to-br from-background via-background to-secondary/5">
        <div className="max-w-container mx-auto px-6 md:px-10 lg:px-12 py-12 md:py-16 lg:py-20">
          <div className="text-center mb-14 md:mb-20 animate-in fade-in slide-in-from-bottom-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-elegant font-bold text-foreground mb-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              {t('pages.manicure.title')}
            </h1>
            <p className="text-muted-foreground text-xs md:text-sm max-w-2xl mx-auto">
              {t('pages.manicure.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {tools.map((item) => (
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

export default ManicurePedicure;
