import { Facebook, Instagram, Youtube } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  
  const footerSections = [
    {
      title: t('footer.punja'),
      links: [
        { label: t('footer.aboutPunja'), href: "/punja" },
        { label: t('footer.qualityMarks'), href: "/quality-marks" },
        { label: t('footer.production'), href: "/production" },
      ],
    },
    {
      title: t('footer.shop'),
      links: [
        { label: t('footer.scissors'), href: "/scissors" },
        { label: t('footer.razors'), href: "/razors" },
        { label: t('footer.manicurePedicure'), href: "/manicure-pedicure" },
        { label: t('footer.accessories'), href: "/accessories" },
      ],
    },
    {
      title: t('footer.service'),
      links: [
        { label: t('footer.sharpening'), href: "/sharpening" },
        { label: t('footer.faq'), href: "/faq" },
        { label: t('footer.resellerFinder'), href: "/reseller-finder" },
      ],
    },
    {
      title: t('footer.legal'),
      links: [
        { label: t('footer.terms'), href: "/terms" },
        { label: t('footer.privacy'), href: "/privacy" },
        { label: t('footer.contact'), href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="py-12 md:py-16" style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }} data-theme="light">
      <div className="max-w-container mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-premium font-semibold text-lg mb-4" style={{ color: '#ffffff' }}>{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="transition-colors text-sm hover:opacity-80"
                      style={{ color: '#ffffff', opacity: 0.8 }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: '#ffffff', opacity: 0.8 }}>{t('footer.copyright')}</p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:opacity-80"
                style={{ color: '#ffffff', opacity: 0.8 }}
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:opacity-80"
                style={{ color: '#ffffff', opacity: 0.8 }}
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:opacity-80"
                style={{ color: '#ffffff', opacity: 0.8 }}
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
