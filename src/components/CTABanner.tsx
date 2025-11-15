import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const CTABanner = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative bg-gradient-to-br from-secondary/10 via-background to-secondary/5 py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-secondary/5 opacity-50" />
      <div className="relative max-w-container mx-auto px-6 md:px-10 lg:px-12">
        <div className="bg-gradient-to-r from-secondary/10 via-surface to-secondary/10 rounded-lg shadow-elevated p-6 md:p-10 lg:p-12 text-center border border-secondary/20 animate-in fade-in slide-in-from-bottom-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-elegant font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            {t('cta.bannerTitle')}
          </h2>
          <p className="text-muted-foreground text-xs md:text-sm mb-5 max-w-2xl mx-auto">
            {t('cta.bannerDescription')}
          </p>
          <Button size="sm" className="bg-secondary text-white hover:bg-secondary/90 font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
            {t('cta.bannerButton')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
