import { lazy, Suspense } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy loaded pages
const Index = lazy(() => import("./pages/Index"));
const Digital = lazy(() => import("./pages/digital"));
const Consulting = lazy(() => import("./pages/consulting"));
const About = lazy(() => import("./pages/holding/a-propos"));
const FitXP = lazy(() => import("./pages/FitXP"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Minimal loading fallback
const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-black text-violet-500">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-current" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Holding / Chooser */}
            <Route path="/" element={<Index />} />
            
            {/* Digital Branch */}
            <Route path="/digital" element={<Digital />} />
            <Route path="/digital/*" element={<Digital />} />
            
            {/* Consulting Branch */}
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/consulting/*" element={<Consulting />} />
            
            {/* Holding Pages */}
            <Route path="/holding/a-propos" element={<About />} />
            
            {/* Product Page */}
            <Route path="/fitxp" element={<FitXP />} />
            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
