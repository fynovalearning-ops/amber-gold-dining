import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "@/components/ScrollToTop";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const Index = lazy(() => import("./pages/Index.tsx"));
const MenuPage = lazy(() => import("./pages/MenuPage.tsx"));
const Functions = lazy(() => import("./pages/Functions.tsx"));
const ChefsTable = lazy(() => import("./pages/ChefsTable.tsx"));
const DateNight = lazy(() => import("./pages/DateNight.tsx"));
const MothersDay = lazy(() => import("./pages/MothersDay.tsx"));
const FathersDay = lazy(() => import("./pages/FathersDay.tsx"));
const WhatsOn = lazy(() => import("./pages/WhatsOn.tsx"));
const Rewards = lazy(() => import("./pages/Rewards.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const Gallery = lazy(() => import("./pages/Gallery.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const MOTHERS_DAY_EXPIRY = new Date("2026-05-11T00:00:00");
const isMothersDayActive = () => new Date() < MOTHERS_DAY_EXPIRY;

const FATHERS_DAY_EXPIRY = new Date("2026-09-07T00:00:00");
const isFathersDayActive = () => new Date() < FATHERS_DAY_EXPIRY;


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/functions" element={<Functions />} />
            <Route path="/whats-on" element={<WhatsOn />} />
            <Route path="/chefs-table" element={<ChefsTable />} />
            {isMothersDayActive() && <Route path="/mothers-day" element={<MothersDay />} />}
            {isFathersDayActive() && <Route path="/fathers-day" element={<FathersDay />} />}

            <Route path="/rewards" element={<Rewards />} />
            <Route path="/date-night" element={<DateNight />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/a-la-carte" element={<Navigate to="/menu" replace />} />
            <Route path="/a-la-carte/" element={<Navigate to="/menu" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
