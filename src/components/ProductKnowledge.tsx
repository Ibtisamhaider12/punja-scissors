import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProductKnowledge = () => {
  const { t } = useTranslation();
  return (
    <section className="relative bg-gradient-to-br from-surface via-background to-secondary/5 py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-secondary/5 opacity-50" />
      <div className="relative max-w-container mx-auto px-6 md:px-10 lg:px-12">
        <div className="bg-gradient-to-br from-card via-card to-card/95 rounded-lg shadow-elevated p-6 md:p-10 lg:p-12 border border-card-border animate-in fade-in slide-in-from-bottom-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-elegant font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              {t('sections.productKnowledge')}
            </h2>
              <p className="text-muted-foreground text-xs md:text-sm mb-4">
                {t('productKnowledge.description')}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary mt-1.5"></span>
                  <span className="text-foreground text-xs md:text-sm">{t('productKnowledge.premiumSteel')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary mt-1.5"></span>
                  <span className="text-foreground text-xs md:text-sm">{t('productKnowledge.ergonomicDesign')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary mt-1.5"></span>
                  <span className="text-foreground text-xs md:text-sm">{t('productKnowledge.maintenance')}</span>
                </li>
              </ul>
              <Link to="/product-knowledge">
                <Button size="sm" className="bg-secondary text-white hover:bg-secondary/90 font-semibold shadow-md">
                  {t('sections.seeMore')}
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-surface rounded-lg p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="text-2xl font-premium font-semibold text-secondary mb-1">25+</div>
                <div className="text-xs text-muted-foreground">{t('productKnowledge.yearsExperience')}</div>
              </div>
              <div className="bg-surface rounded-lg p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="text-2xl font-premium font-semibold text-secondary mb-1">100%</div>
                <div className="text-xs text-muted-foreground">{t('productKnowledge.qualityAssured')}</div>
              </div>
              <div className="bg-surface rounded-lg p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="text-2xl font-premium font-semibold text-secondary mb-1">50k+</div>
                <div className="text-xs text-muted-foreground">{t('productKnowledge.professionalsTrust')}</div>
              </div>
              <div className="bg-surface rounded-lg p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="text-2xl font-premium font-semibold text-secondary mb-1">200+</div>
                <div className="text-xs text-muted-foreground">{t('productKnowledge.productRange')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductKnowledge;
