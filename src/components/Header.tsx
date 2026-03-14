import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import punjaLogo from "@/assets/punja-logo-full.png";
import scissors1 from "@/assets/product-scissors-1.jpg";
import razor1 from "@/assets/product-razor-1.jpg";
import manicure1 from "@/assets/razor-classic-silver.jpg";
import accessories1 from "@/assets/product-accessories-1.jpg";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SearchBar from "@/components/SearchBar";
import ThemeToggle from "@/components/ThemeToggle";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  const navItems = [
    { 
      key: "scissors", 
      label: t('nav.scissors'), 
      path: "/scissors",
      preview: {
        title: t('nav.scissors'),
        description: t('pages.scissors.description'),
        image: scissors1,
        items: [
          { name: t('product.category.c440'), path: "/scissors?series=c440" },
          { name: t('product.category.c420'), path: "/scissors?series=c420" },
          { name: t('product.category.specialist'), path: "/scissors?series=specialist" },
        ]
      }
    },
    { 
      key: "razors", 
      label: t('nav.razors'), 
      path: "/razors",
      preview: {
        title: t('nav.razors'),
        description: t('pages.razors.description'),
        image: razor1,
        items: [
          { name: t('product.category.professional'), path: "/razors?type=professional" },
          { name: t('nav.razors'), path: "/razors" },
          { name: t('sections.seeMore'), path: "/razors" },
        ]
      }
    },
    { 
      key: "manicure", 
      label: t('nav.manicure'), 
      path: "/manicure-pedicure",
      preview: {
        title: t('nav.manicure'),
        description: t('pages.manicure.description'),
        image: manicure1,
        items: [
          { name: t('product.category.manicure'), path: "/manicure-pedicure?type=manicure" },
          { name: t('product.category.pedicure'), path: "/manicure-pedicure?type=pedicure" },
          { name: t('sections.seeMore'), path: "/manicure-pedicure" },
        ]
      }
    },
    { 
      key: "accessories", 
      label: t('nav.accessories'), 
      path: "/accessories",
      preview: {
        title: t('nav.accessories'),
        description: t('pages.accessories.description'),
        image: accessories1,
        items: [
          { name: t('product.category.barberTools'), path: "/accessories?type=barber" },
          { name: t('product.category.kitchen'), path: "/accessories?type=kitchen" },
          { name: t('sections.seeMore'), path: "/accessories" },
        ]
      }
    },
    { 
      key: "more", 
      label: t('nav.more'), 
      path: "/more" 
    },
  ];

  return (
    <header className="relative z-50 bg-gradient-to-br from-background via-background/95 to-surface/30 border-b border-border/60 shadow-md">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-secondary/5 opacity-60" />
      <div className="relative max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 md:gap-5 py-4 md:py-5">
          {/* Logo - Enhanced with better hover effect */}
          <Link to="/" className="flex items-center group relative z-10">
            <div className="absolute -inset-2 bg-secondary/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <img 
              src={punjaLogo} 
              alt="Punja" 
              className="relative h-10 md:h-12 lg:h-14 w-auto transition-all duration-500 group-hover:scale-110 filter drop-shadow-xl" 
              style={{ imageRendering: 'crisp-edges' }}
            />
          </Link>

          {/* Search Bar - Desktop - Better integration */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4 lg:mx-8">
            <SearchBar />
          </div>

          {/* Desktop Navigation with Enhanced Previews */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <NavigationMenu>
              <NavigationMenuList className="gap-0.5">
                {navItems.map((item) => {
                  if (item.preview) {
                    return (
                      <NavigationMenuItem key={item.key}>
                        <NavigationMenuTrigger 
                          className={cn(
                            "text-sm font-semibold transition-all duration-300 rounded-lg px-4 py-2.5 relative group",
                            location.pathname === item.path 
                              ? "text-secondary bg-gradient-to-r from-secondary/15 to-secondary/5 shadow-md" 
                              : "text-foreground hover:text-secondary hover:bg-gradient-to-r hover:from-accent/50 hover:to-accent/30"
                          )}
                        >
                          <span className="relative z-10">{item.label}</span>
                          {location.pathname === item.path && (
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-secondary" />
                          )}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid gap-0 w-[600px] bg-popover border border-border/60 shadow-2xl rounded-2xl overflow-hidden">
                            {/* Hero Image Section */}
                            <div className="relative h-48 overflow-hidden group">
                              <img
                                src={item.preview.image}
                                alt={item.preview.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                              <div className="absolute bottom-0 left-0 right-0 p-5">
                                <h4 className="text-2xl font-elegant font-bold text-white mb-1">{item.preview.title}</h4>
                                <p className="text-sm text-white/90 leading-relaxed line-clamp-2">
                                  {item.preview.description}
                                </p>
                              </div>
                            </div>
                            {/* Quick Links Grid */}
                            <div className="grid grid-cols-3 gap-0 divide-x divide-border/50">
                              {item.preview.items.map((subItem, idx) => (
              <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  className="block p-4 text-center hover:bg-gradient-to-br hover:from-secondary/10 hover:to-secondary/5 transition-all duration-300 group"
                                >
                                  <div className="text-sm font-elegant font-semibold text-popover-foreground group-hover:text-secondary transition-colors">
                                    {subItem.name}
                                  </div>
                                  <div className="mt-1 text-xs text-muted-foreground group-hover:text-secondary/70 transition-colors">
                                    {t('sections.seeMore')}
                                  </div>
              </Link>
            ))}
                            </div>
                            {/* View All Link */}
                            <div className="border-t border-border/50 bg-gradient-to-r from-secondary/5 to-transparent">
                              <Link
                                to={item.path}
                                className="block p-4 text-center text-sm font-elegant font-bold text-secondary hover:bg-secondary/10 transition-colors"
                              >
                                {t('sections.viewAll')} {item.preview.title} →
                              </Link>
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  }
                  return (
                    <NavigationMenuItem key={item.key}>
                      <Link
                        to={item.path}
                        className={cn(
                          "text-sm font-semibold transition-all duration-300 px-4 py-2.5 rounded-lg relative group",
                          location.pathname === item.path
                            ? "text-secondary bg-gradient-to-r from-secondary/15 to-secondary/5 shadow-md"
                            : "text-foreground hover:text-secondary hover:bg-gradient-to-r hover:from-accent/50 hover:to-accent/30"
                        )}
                      >
                        <span className="relative z-10">{item.label}</span>
                        {location.pathname === item.path && (
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-secondary" />
                        )}
                      </Link>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Right Actions - Better spacing and styling */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden md:flex items-center gap-2 px-2 py-1 rounded-lg bg-surface/50 border border-border/50">
              <ThemeToggle />
              <div className="w-px h-5 bg-border/50" />
            <LanguageSwitcher />
            </div>
            
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu - Enhanced */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="rounded-lg hover:bg-accent/50"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-gradient-to-br from-background to-surface/50">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="md:hidden mb-2">
                    <SearchBar />
                  </div>
                  <div className="space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.key}
                      to={item.path}
                        className={cn(
                          "block text-base font-semibold transition-all duration-300 py-3 px-4 rounded-lg",
                          location.pathname === item.path
                            ? "text-secondary bg-gradient-to-r from-secondary/15 to-secondary/5 shadow-sm"
                            : "text-foreground hover:text-secondary hover:bg-accent/50"
                        )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
