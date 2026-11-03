import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import dateNightImg from "@/assets/date-night-approved.jpeg";

const STORAGE_KEY = "date-night-popup-dismissed";

const DateNightPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm px-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-labelledby="date-night-popup-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-2xl bg-background border border-border shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 min-w-[44px] min-h-[44px] flex items-center justify-center text-foreground/80 hover:text-primary bg-background/70 backdrop-blur-sm rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            <div className="aspect-[4/5] md:aspect-auto md:h-full overflow-hidden bg-secondary">
              <img
                src={dateNightImg}
                alt="Date Night at Times Berwick"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-7 md:p-9 flex flex-col justify-center text-center md:text-left">
              <p className="text-primary uppercase tracking-[0.3em] text-xs mb-3">
                Every Thursday
              </p>
              <h2
                id="date-night-popup-title"
                className="font-serif text-3xl md:text-4xl font-light leading-[1.05] mb-4"
              >
                Date Night at Times Berwick
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-7">
                A set menu for two with seatings from 6-6.45pm in the upstairs dining room.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <Link
                  to="/date-night"
                  onClick={close}
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] bg-primary text-primary-foreground text-sm uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:bg-gold-light"
                >
                  Learn More
                </Link>
                <button
                  onClick={close}
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] border border-border text-foreground text-sm uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DateNightPopup;
