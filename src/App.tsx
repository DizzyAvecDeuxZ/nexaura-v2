import { lazy, Suspense } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DigitalLayout, ConsultingLayout } from "@/components/layout";

// ═══════════════════════════════════════════════════════════════
// NEXAURA HOLDING V2.0 - ROUTER
// Multi-page architecture: Digital | Consulting | Holding
// ═══════════════════════════════════════════════════════════════

// Holding pages
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/holding/a-propos"));

// Digital pages
const Digital = lazy(() => import("./pages/digital"));
const DigitalApps = lazy(() => import("./pages/digital/apps"));
const DigitalMaintenance = lazy(() => import("./pages/digital/maintenance"));
const DigitalContact = lazy(() => import("./pages/digital/contact"));

// Consulting pages
const Consulting = lazy(() => import("./pages/consulting"));
const ConsultingAudit = lazy(() => import("./pages/consulting/audit"));
const ConsultingPoc = lazy(() => import("./pages/consulting/poc"));
const ConsultingCases = lazy(() => import("./pages/consulting/cases"));
const ConsultingContact = lazy(() => import("./pages/consulting/contact"));

// Product & Error pages
const FitXP = lazy(() => import("./pages/FitXP"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Minimal loading fallback
const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-black">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* ═══════════════════════════════════════════════════
                HOLDING - Chooser & Corporate
               ═══════════════════════════════════════════════════ */}
            <Route path="/" element={<Index />} />
            <Route path="/holding/a-propos" element={<About />} />

            {/* ═══════════════════════════════════════════════════
                DIGITAL - Layout violet
               ═══════════════════════════════════════════════════ */}
            <Route element={<DigitalLayout />}>
              <Route path="/digital" element={<Digital />} />
              <Route path="/digital/apps" element={<DigitalApps />} />
              <Route path="/digital/maintenance" element={<DigitalMaintenance />} />
              <Route path="/digital/contact" element={<DigitalContact />} />
            </Route>

            {/* ═══════════════════════════════════════════════════
                CONSULTING - Layout jaune
               ═══════════════════════════════════════════════════ */}
            <Route element={<ConsultingLayout />}>
              <Route path="/consulting" element={<Consulting />} />
              <Route path="/consulting/audit" element={<ConsultingAudit />} />
              <Route path="/consulting/poc" element={<ConsultingPoc />} />
              <Route path="/consulting/cases" element={<ConsultingCases />} />
              <Route path="/consulting/contact" element={<ConsultingContact />} />
            </Route>

            {/* ═══════════════════════════════════════════════════
                PRODUCTS & LEGACY
               ═══════════════════════════════════════════════════ */}
            <Route path="/fitxp" element={<FitXP />} />

            {/* ═══════════════════════════════════════════════════
                404 - Catch all
               ═══════════════════════════════════════════════════ */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
