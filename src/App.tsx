import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchProvider } from "@/contexts/SearchContext";
import FloatingParticles from "@/components/FloatingParticles";
import Index from "./pages/Index";
import Scissors from "./pages/Scissors";
import Razors from "./pages/Razors";
import ManicurePedicure from "./pages/ManicurePedicure";
import Accessories from "./pages/Accessories";
import More from "./pages/More";
import ProductKnowledge from "./pages/ProductKnowledge";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  <QueryClientProvider client={queryClient}>
      <SearchProvider>
    <TooltipProvider>
          <FloatingParticles />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/scissors" element={<Scissors />} />
          <Route path="/razors" element={<Razors />} />
          <Route path="/manicure-pedicure" element={<ManicurePedicure />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/more" element={<More />} />
          <Route path="/product-knowledge" element={<ProductKnowledge />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
      </SearchProvider>
  </QueryClientProvider>
  </ThemeProvider>
);

export default App;
