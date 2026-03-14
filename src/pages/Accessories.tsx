import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useTranslation } from "react-i18next";
import accessories1 from "@/assets/product-accessories-1.jpg";
import barberAccessories from "@/assets/barber-accessories.jpg";
import scissors1 from "@/assets/product-scissors-1.jpg";
import scissors2 from "@/assets/440C_107b.jpg";
import razor1 from "@/assets/product-razor-1.jpg";
import razorBlack from "@/assets/razor-classic-black.jpg";
import { getImageByType } from "@/data/products";

const Accessories = () => {
  const { t } = useTranslation();
  
  const accessories = [
    { id: 1, image: accessories1, titleKey: "products.accessories.groomingKit", categoryKey: "product.category.barberTools" },
    { id: 2, image: barberAccessories, titleKey: "products.accessories.barberSet", categoryKey: "product.category.barberTools" },
    { id: 3, image: scissors1, titleKey: "products.accessories.barberCape", categoryKey: "product.category.barberTools" },
    { id: 4, image: scissors2, titleKey: "products.accessories.combSet", categoryKey: "product.category.barberTools" },
    { id: 5, image: razor1, titleKey: "products.accessories.shearsCase", categoryKey: "product.category.barberTools" },
    { id: 6, image: razorBlack, titleKey: "products.accessories.groomingKit", categoryKey: "product.category.barberTools" },
    { id: 7, image: getImageByType('scissors', 0), titleKey: "products.accessories.barberCape", categoryKey: "product.category.barberTools" },
    { id: 8, image: getImageByType('scissors', 1), titleKey: "products.accessories.combSet", categoryKey: "product.category.barberTools" },
    { id: 9, image: getImageByType('razors', 0), titleKey: "products.accessories.shearsCase", categoryKey: "product.category.barberTools" },
    { id: 10, image: getImageByType('razors', 1), titleKey: "products.accessories.barberSet", categoryKey: "product.category.barberTools" },
    { id: 11, image: getImageByType('scissors', 2), titleKey: "products.accessories.groomingKit", categoryKey: "product.category.barberTools" },
    { id: 12, image: getImageByType('razors', 2), titleKey: "products.accessories.barberSet", categoryKey: "product.category.barberTools" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gradient-to-br from-background via-background to-secondary/5">
        <div className="max-w-container mx-auto px-6 md:px-10 lg:px-12 py-12 md:py-16 lg:py-20">
          <div className="text-center mb-14 md:mb-20 animate-in fade-in slide-in-from-bottom-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-elegant font-bold text-foreground mb-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              {t('pages.accessories.title')}
            </h1>
            <p className="text-muted-foreground text-xs md:text-sm max-w-2xl mx-auto">
              {t('pages.accessories.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {accessories.map((item) => (
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

export default Accessories;
