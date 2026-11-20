import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import christmasImgAsset from "@/assets/TIMESNOV_WEB_068.jpg";
import christmas2ImgAsset from "@/assets/TIMESNOV_WEB_052.jpg";
import dateNightImg from "@/assets/date-night-approved.jpeg";

type Promo = {
  id: string;
  images: string[];
  imageAlt: string;
  eyebrow: string;
  title: string;
  price?: string;
  priceNote?: string;
  description: string;
  cta: { label: string; to: string };
  expires?: Date; // popup stops showing after this date
  hideOn?: (pathname: string, search: string) => boolean; // don't show on its own page
};

// Order = order they appear in
const PROMOS: Promo[] = [
  {
    id: "christmas-feast-2026",
    images: [christmasImgAsset, christmas2ImgAsset],
    imageAlt: "Times Sharing Christmas Feast at Times Berwick",
    eyebrow: "Festive Season",
    title: "Times Sharing Christmas Feast",
    price: "$149",
    priceNote: "per person · designed for 2 people",
    description:
      "Premium cold seafood platter, O'Connor T-Bone or roast duo of duck & pork, festive sides and shared desserts. Starts with a welcome drink on arrival.",
    cta: { label: "View Feast Menu", to: "/menu?tab=chefs-table" },
    expires: new Date("2026-12-26T00:00:00"),
    hideOn: (p, s) => p === "/menu" && s.includes("tab=chefs-table"),
  },

  {
    id: "date-night",
    images: [dateNightImg],
    imageAlt: "Date night at Times Berwick",
    eyebrow: "Date Night",
    title: "Date Night at Times",
    description:
      "Share a flame-grilled steak, a glass of wine and a dessert to finish. The perfect night out for two in Berwick.", // 👈 edit
    cta: { label: "Explore Date Night", to: "/date-night" },
    hideOn: (p) => p === "/date-night",
  },
];

const dismissed = new Set<string>();
const wasDismissed = (id: string) => dismissed.has(id);
const markDismissed = (id: string) => dismissed.add(id);

const EventPopup = () => {
  const { pathname, search } = useLocation();
  const [ready, setReady] = useState(false);
  const [, force] = useState(0);

  // Wait a moment before the first popup appears
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 2500);
    return () => clearTimeout(t);
  }, []);

  const now = new Date();
  const eligible = PROMOS.filter(
    (p) => !(p.expires && now >= p.expires) && !wasDismissed(p.id) && !p.hideOn?.(pathname, search),
  );
  const active = ready ? eligible[0] : undefined;

  const close = () => {
    if (!active) return;
    markDismissed(active.id);
    force((n) => n + 1); // next popup (if any) shows
  };

  // Used by the buttons: visitor engaged, so don't pop the next one up
  const closeAll = () => {
    PROMOS.forEach((p) => markDismissed(p.id));
    force((n) => n + 1);
  };

  // Escape key + lock page scroll while open
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active?.id]);

  return (
    <AnimatePresence mode="wait">
      {active && (
        <motion.div
          key={active.id}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={close} />

          {/* Dialog */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${active.id}-title`}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2 bg-secondary border border-primary/30 rounded-sm shadow-2xl"
          >
            <button
              onClick={close}
              aria-label="Close popup"
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/70 backdrop-blur-sm text-foreground hover:text-primary border border-border/40 transition-colors duration-300"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Images */}
            <div className="relative h-56 md:h-auto md:min-h-[480px] overflow-hidden">
              <div
                className={`absolute inset-0 grid gap-1 ${
                  active.images.length > 1 ? "grid-cols-2 md:grid-cols-1 md:grid-rows-2" : "grid-cols-1"
                }`}
              >
                {active.images.map((src, i) => (
                  <div key={i} className="relative overflow-hidden">
                    <img
                      src={src}
                      alt={i === 0 ? active.imageAlt : `${active.imageAlt} (${i + 1})`}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ objectPosition: "50% 70%" }}
                    />
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-secondary/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-secondary/30" />
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center text-center md:text-left">
              <p className="text-primary uppercase tracking-[0.3em] text-xs mb-3">{active.eyebrow}</p>
              <h3 id={`${active.id}-title`} className="font-serif text-3xl md:text-4xl leading-tight mb-2">
                {active.title}
              </h3>
              <div className="gold-divider max-w-16 mt-2 mb-5 mx-auto md:mx-0" />

              {active.price && (
                <p className="font-serif text-3xl text-primary mb-4">
                  {active.price}
                  {active.priceNote && (
                    <span className="block md:inline md:ml-2 text-muted-foreground text-sm font-sans">
                      {active.priceNote}
                    </span>
                  )}
                </p>
              )}

              <p className="text-muted-foreground text-sm leading-relaxed mb-8">{active.description}</p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link
                  to={active.cta.to}
                  onClick={closeAll}
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 text-sm uppercase tracking-[0.2em] hover:bg-primary/90 transition-colors duration-300"
                >
                  {active.cta.label}
                </Link>
                <a
                  href="https://www.opentable.com.au/r/times-berwick-reservations-berwick?restref=266717&lang=en-AU&ot_source=Restaurant%20website"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeAll}
                  className="inline-flex items-center justify-center border border-primary text-primary px-8 py-3 text-sm uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  Book a Table
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventPopup;
