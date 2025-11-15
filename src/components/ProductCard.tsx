import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";
import { useTranslation } from "react-i18next";
import Product3DPreview from "./Product3DPreview";

interface ProductCardProps {
  image: string;
  title: string;
  category: string;
  titleKey?: string;
  categoryKey?: string;
  isLarge?: boolean;
}

const ProductCard = ({ image, title, category, titleKey, categoryKey, isLarge = false }: ProductCardProps) => {
  const { t } = useTranslation();
  const [show3D, setShow3D] = useState(false);
  
  // Use translation keys if provided, otherwise use direct values
  // Check if translation exists by comparing result with key
  const getTranslation = (key: string, fallback: string): string => {
    const translated = t(key);
    // If translation returns the key itself, it means translation doesn't exist
    return translated !== key ? translated : fallback;
  };
  
  const displayTitle = titleKey ? getTranslation(titleKey, title) : title;
  const displayCategory = categoryKey ? getTranslation(categoryKey, category) : category;
  
  return (
    <div className="group bg-card border border-card-border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 bg-gradient-to-br from-card via-card to-card/95 h-full flex flex-col max-h-full relative">
      {/* 3D Light effects on card */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,140,0,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,140,0,0.08),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg" />
      
      <div className="relative aspect-[3/2] overflow-hidden bg-gradient-to-br from-secondary/5 via-transparent to-secondary/10 p-3 md:p-4 flex-shrink-0 w-full">
        <img
          src={image}
          alt={displayTitle}
          className="w-full h-full object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // Fallback to a placeholder if image fails to load
            (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23ddd" width="800" height="600"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage Loading...%3C/text%3E%3C/svg%3E';
          }}
        />
        <div className="absolute inset-3 md:inset-4 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
        <div className="absolute inset-3 md:inset-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-10 rounded-md">
            <div className={`flex ${isLarge ? 'gap-2' : 'gap-1.5'}`}>
              <Button 
                size={isLarge ? "sm" : "sm"}
                variant="outline"
                className={`${isLarge ? 'text-xs px-3 py-1.5 h-auto' : 'text-[10px] px-2 py-1 h-auto min-h-0'} font-semibold backdrop-blur-sm bg-white/95 text-foreground border-foreground/20 hover:bg-white hover:text-foreground shadow-md dark:bg-gray-800/95 dark:text-white dark:border-white/20 dark:hover:bg-gray-800`}
                onClick={() => setShow3D(true)}
              >
                <Eye className={isLarge ? "h-4 w-4 mr-1" : "h-3 w-3 mr-0.5"} />
                {t('product.quickView')}
              </Button>
              <Button 
                size={isLarge ? "sm" : "sm"}
                className={`${isLarge ? 'text-xs px-3 py-1.5 h-auto' : 'text-[10px] px-2 py-1 h-auto min-h-0'} bg-secondary text-white hover:bg-secondary/90 backdrop-blur-sm shadow-md font-semibold`}
              >
                <ShoppingCart className={isLarge ? "h-4 w-4 mr-1" : "h-3 w-3 mr-0.5"} />
                {t('product.addToCart')}
              </Button>
            </div>
        </div>
      </div>
      <div className="p-3 flex-shrink-0 flex-grow flex flex-col">
        <span className="inline-block px-2 py-0.5 text-[10px] font-medium bg-gradient-to-r from-secondary/10 to-secondary/5 text-foreground rounded-full mb-1.5 border border-secondary/20 w-fit">
          {displayCategory}
        </span>
        <h3 className="text-sm font-elegant font-bold text-foreground group-hover:text-secondary transition-colors line-clamp-2 flex-grow">
          {displayTitle}
        </h3>
      </div>
      <Product3DPreview
        image={image}
        title={displayTitle}
        isOpen={show3D}
        onClose={() => setShow3D(false)}
      />
    </div>
  );
};

export default ProductCard;
