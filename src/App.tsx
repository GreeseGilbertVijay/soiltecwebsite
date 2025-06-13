import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import FontProvider from "@/components/FontProvider";
import AnimatedBackground from "@/components/AnimatedBackground";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import CreditHealth from "./pages/CreditHealth";
import Impact from "./pages/Impact";
import Services from "./pages/Services";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <FontProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AnimatedBackground />
          <WhatsAppButton />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/CreditHealth" element={<CreditHealth />} />
              <Route path="/Impact" element={<Impact />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/About" element={<About />} />
              <Route path="/FAQ" element={<FAQ />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </FontProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
