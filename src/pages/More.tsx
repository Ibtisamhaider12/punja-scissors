import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const More = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-background">
        <div className="max-w-container mx-auto px-5 py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-premium font-semibold text-foreground mb-8">
              {t('about.title', 'About Punja')}
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {t('about.intro', 'Punja represents decades of dedication to the craft of precision tool manufacturing. Our heritage is built on an unwavering commitment to quality, combining traditional craftsmanship with modern innovation.')}
              </p>

              <h2 className="text-2xl font-premium font-semibold text-foreground mt-12 mb-4">
                {t('about.craftsmanship.title', 'Our Craftsmanship')}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t('about.craftsmanship.description', 'Every Punja product is meticulously crafted using premium materials and time-honored techniques. Our master craftsmen bring generations of expertise to each piece, ensuring that every scissor, razor, and tool meets the exacting standards that professionals demand.')}
              </p>

              <h2 className="text-2xl font-premium font-semibold text-foreground mt-12 mb-4">
                {t('about.heritage.title', 'Heritage & Innovation')}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t('about.heritage.description', 'While we honor traditional manufacturing methods, we continuously innovate to meet the evolving needs of modern professionals. Our legendary C440 series exemplifies this balance, combining classic design with cutting-edge precision engineering.')}
              </p>

              <h2 className="text-2xl font-premium font-semibold text-foreground mt-12 mb-4">
                {t('about.dedication.title', 'Industry Dedication')}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t('about.dedication.description', 'Punja tools are trusted by professionals worldwide. From master barbers to skilled craftsmen, our products empower artisans to perform their craft with confidence and precision. We don\'t just make tools—we create instruments that enable excellence.')}
              </p>

              <div className="mt-12 p-8 bg-surface rounded-lg border border-border">
                <p className="text-foreground text-lg font-medium text-center">
                  "{t('about.quote', 'Quality is not an act, it is a habit. At Punja, excellence is our standard.')}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default More;
