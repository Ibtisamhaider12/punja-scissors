import { createContext, useContext, useState, ReactNode } from 'react';

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  performSearch: (query: string) => void;
  searchResults: any[];
  getRecommendations: (productId: number) => any[];
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within SearchProvider');
  }
  return context;
};

interface SearchProviderProps {
  children: ReactNode;
}

// All products data - centralized for search with translation keys
export const allProducts = [
  // Scissors
  { id: 1, title: "C440 Professional Barber Scissors", titleKey: "products.scissors.c440Professional", category: "Scissors", categoryKey: "product.category.c440", type: "scissors", path: "/scissors" },
  { id: 2, title: "C440 Premium Grooming Scissors", titleKey: "products.scissors.c440Premium", category: "Scissors", categoryKey: "product.category.c440", type: "scissors", path: "/scissors" },
  { id: 3, title: "C420 Classic Haircutting Scissors", titleKey: "products.scissors.c420Classic", category: "Scissors", categoryKey: "product.category.c420", type: "scissors", path: "/scissors" },
  { id: 4, title: "C420 Thinning Scissors", titleKey: "products.scissors.c420Thinning", category: "Scissors", categoryKey: "product.category.c420", type: "scissors", path: "/scissors" },
  { id: 5, title: "C2 Ergonomic Cutting Shears", titleKey: "products.scissors.c2Ergonomic", category: "Scissors", categoryKey: "product.category.c2", type: "scissors", path: "/scissors" },
  { id: 6, title: "Professional Thinning Scissors", titleKey: "products.scissors.professionalThinning", category: "Scissors", categoryKey: "product.category.specialist", type: "scissors", path: "/scissors" },
  { id: 7, title: "Curved Detail Scissors", titleKey: "products.scissors.curvedDetail", category: "Scissors", categoryKey: "product.category.specialist", type: "scissors", path: "/scissors" },
  { id: 8, title: "Texturizing Shears", titleKey: "products.scissors.texturizing", category: "Scissors", categoryKey: "product.category.specialist", type: "scissors", path: "/scissors" },
  { id: 9, title: "C440 Titanium Coated Scissors", titleKey: "products.scissors.c440Titanium", category: "Scissors", categoryKey: "product.category.c440", type: "scissors", path: "/scissors" },
  { id: 10, title: "Professional Hair Cutting Shears 6.5\"", titleKey: "products.scissors.professional65", category: "Scissors", categoryKey: "product.category.c440", type: "scissors", path: "/scissors" },
  { id: 11, title: "C420 Precision Cutting Scissors", titleKey: "products.scissors.c420Precision", category: "Scissors", categoryKey: "product.category.c420", type: "scissors", path: "/scissors" },
  { id: 12, title: "Japanese Steel Professional Scissors", titleKey: "products.scissors.japaneseSteel", category: "Scissors", categoryKey: "product.category.c2", type: "scissors", path: "/scissors" },
  { id: 13, title: "Premium Barber Scissors 7\"", titleKey: "products.scissors.premium7", category: "Scissors", categoryKey: "product.category.c440", type: "scissors", path: "/scissors" },
  { id: 14, title: "Surgical Grade Cutting Shears", titleKey: "products.scissors.surgicalGrade", category: "Scissors", categoryKey: "product.category.specialist", type: "scissors", path: "/scissors" },
  { id: 15, title: "Ergonomic Left-Handed Scissors", titleKey: "products.scissors.leftHanded", category: "Scissors", categoryKey: "product.category.specialist", type: "scissors", path: "/scissors" },
  { id: 16, title: "Professional Blending Scissors", titleKey: "products.scissors.blending", category: "Scissors", categoryKey: "product.category.specialist", type: "scissors", path: "/scissors" },
  
  // Razors
  { id: 17, title: "Classic Straight Razor", titleKey: "products.razors.classicStraight", category: "Razors", categoryKey: "product.category.professional", type: "razors", path: "/razors" },
  { id: 18, title: "Premium Black Handle Razor", titleKey: "products.razors.premiumBlack", category: "Razors", categoryKey: "product.category.professional", type: "razors", path: "/razors" },
  { id: 19, title: "Chrome Finish Straight Razor", titleKey: "products.razors.chromeFinish", category: "Razors", categoryKey: "product.category.professional", type: "razors", path: "/razors" },
  { id: 20, title: "Damascus Steel Straight Razor", titleKey: "products.razors.damascusSteel", category: "Razors", categoryKey: "product.category.professional", type: "razors", path: "/razors" },
  { id: 21, title: "Vintage Style Barber Razor", titleKey: "products.razors.vintageStyle", category: "Razors", categoryKey: "product.category.professional", type: "razors", path: "/razors" },
  { id: 22, title: "Professional Carbon Steel Razor", titleKey: "products.razors.carbonSteel", category: "Razors", categoryKey: "product.category.professional", type: "razors", path: "/razors" },
  { id: 23, title: "Swedish Steel Straight Razor", titleKey: "products.razors.swedishSteel", category: "Razors", categoryKey: "product.category.professional", type: "razors", path: "/razors" },
  { id: 24, title: "Gold-Plated Luxury Razor", titleKey: "products.razors.goldPlated", category: "Razors", categoryKey: "product.category.professional", type: "razors", path: "/razors" },
  { id: 25, title: "Japanese Style Straight Razor", titleKey: "products.razors.japaneseStyle", category: "Razors", categoryKey: "product.category.professional", type: "razors", path: "/razors" },
  
  // Manicure/Pedicure
  { id: 26, title: "Professional Manicure Scissors", titleKey: "products.manicure.professionalManicure", category: "Manicure", categoryKey: "product.category.manicure", type: "manicure", path: "/manicure-pedicure" },
  { id: 27, title: "Curved Cuticle Scissors", titleKey: "products.manicure.curvedCuticle", category: "Manicure", categoryKey: "product.category.manicure", type: "manicure", path: "/manicure-pedicure" },
  { id: 28, title: "Complete Pedicure Tool Set", titleKey: "products.manicure.completePedicure", category: "Pedicure", categoryKey: "product.category.pedicure", type: "manicure", path: "/manicure-pedicure" },
  { id: 29, title: "Premium Nail Clipper Set", titleKey: "products.manicure.premiumClipper", category: "Manicure", categoryKey: "product.category.manicure", type: "manicure", path: "/manicure-pedicure" },
  { id: 30, title: "Professional Cuticle Pusher", titleKey: "products.manicure.cuticlePusher", category: "Manicure", categoryKey: "product.category.manicure", type: "manicure", path: "/manicure-pedicure" },
  { id: 31, title: "Stainless Steel Nail File Set", titleKey: "products.manicure.nailFileSet", category: "Manicure", categoryKey: "product.category.manicure", type: "manicure", path: "/manicure-pedicure" },
  { id: 32, title: "Professional Toenail Clippers", titleKey: "products.manicure.toenailClippers", category: "Pedicure", categoryKey: "product.category.pedicure", type: "manicure", path: "/manicure-pedicure" },
  { id: 33, title: "Complete Manicure & Pedicure Kit", titleKey: "products.manicure.completeKit", category: "Pedicure", categoryKey: "product.category.pedicure", type: "manicure", path: "/manicure-pedicure" },
  { id: 34, title: "Precision Nail Scissors", titleKey: "products.manicure.precisionNail", category: "Manicure", categoryKey: "product.category.manicure", type: "manicure", path: "/manicure-pedicure" },
  
  // Accessories
  { id: 35, title: "Professional Grooming Kit", titleKey: "products.accessories.groomingKit", category: "Barber Tools", categoryKey: "product.category.barberTools", type: "accessories", path: "/accessories" },
  { id: 36, title: "Barber Accessories Set", titleKey: "products.accessories.barberSet", category: "Barber Tools", categoryKey: "product.category.barberTools", type: "accessories", path: "/accessories" },
  { id: 37, title: "Professional Kitchen Knife", titleKey: "products.accessories.kitchenKnife", category: "Kitchen", categoryKey: "product.category.kitchen", type: "accessories", path: "/accessories" },
  { id: 38, title: "Chef's Knife 8\" Premium", titleKey: "products.accessories.chefKnife8", category: "Kitchen", categoryKey: "product.category.kitchen", type: "accessories", path: "/accessories" },
  { id: 39, title: "Japanese Santoku Knife", titleKey: "products.accessories.santokuKnife", category: "Kitchen", categoryKey: "product.category.kitchen", type: "accessories", path: "/accessories" },
  { id: 40, title: "Boning Knife Professional", titleKey: "products.accessories.boningKnife", category: "Kitchen", categoryKey: "product.category.kitchen", type: "accessories", path: "/accessories" },
  { id: 41, title: "Barber Cape & Clipper Set", titleKey: "products.accessories.barberCape", category: "Barber Tools", categoryKey: "product.category.barberTools", type: "accessories", path: "/accessories" },
  { id: 42, title: "Professional Comb Set", titleKey: "products.accessories.combSet", category: "Barber Tools", categoryKey: "product.category.barberTools", type: "accessories", path: "/accessories" },
  { id: 43, title: "Paring Knife Set 3-Piece", titleKey: "products.accessories.paringKnife", category: "Kitchen", categoryKey: "product.category.kitchen", type: "accessories", path: "/accessories" },
  { id: 44, title: "Bread Knife Serrated", titleKey: "products.accessories.breadKnife", category: "Kitchen", categoryKey: "product.category.kitchen", type: "accessories", path: "/accessories" },
  { id: 45, title: "Barber Shears Case Set", titleKey: "products.accessories.shearsCase", category: "Barber Tools", categoryKey: "product.category.barberTools", type: "accessories", path: "/accessories" },
  { id: 46, title: "Steak Knife Set 6-Piece", titleKey: "products.accessories.steakKnife", category: "Kitchen", categoryKey: "product.category.kitchen", type: "accessories", path: "/accessories" },
];

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const queryLower = query.toLowerCase().trim();
    const results = allProducts.filter(product => 
      product.title.toLowerCase().includes(queryLower) ||
      product.category.toLowerCase().includes(queryLower) ||
      product.type.toLowerCase().includes(queryLower) ||
      (product.titleKey && product.titleKey.toLowerCase().includes(queryLower))
    );

    setSearchResults(results);
  };

  // Smart recommendations based on product similarity
  const getRecommendations = (productId: number) => {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return [];

    // Find products in same category or type, excluding the current product
    const recommendations = allProducts
      .filter(p => 
        p.id !== productId && 
        (p.type === product.type || p.categoryKey === product.categoryKey)
      )
      .slice(0, 4); // Return top 4 recommendations

    return recommendations;
  };

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, performSearch, searchResults, getRecommendations }}>
      {children}
    </SearchContext.Provider>
  );
};

