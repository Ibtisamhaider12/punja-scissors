import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const ProductKnowledge = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-background">
        <div className="max-w-container mx-auto px-5 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-premium font-semibold text-foreground mb-4">
              {t('productKnowledge.page.title')}
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {t('productKnowledge.page.description')}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold font-premium">
                  {t('productKnowledge.page.questions.chooseScissors.title')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {t('productKnowledge.page.questions.chooseScissors.answer')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold font-premium">
                  {t('productKnowledge.page.questions.careMaintenance.title')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {t('productKnowledge.page.questions.careMaintenance.answer')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold font-premium">
                  {t('productKnowledge.page.questions.scissorTypes.title')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <div dangerouslySetInnerHTML={{ __html: t('productKnowledge.page.questions.scissorTypes.answer') }} />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold font-premium">
                  {t('productKnowledge.page.questions.c440Special.title')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {t('productKnowledge.page.questions.c440Special.answer')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold font-premium">
                  {t('productKnowledge.page.questions.razorCare.title')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {t('productKnowledge.page.questions.razorCare.answer')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg font-semibold font-premium">
                  {t('productKnowledge.page.questions.warrantySupport.title')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {t('productKnowledge.page.questions.warrantySupport.answer')}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductKnowledge;
