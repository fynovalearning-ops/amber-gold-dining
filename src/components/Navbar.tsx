import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const MOTHERS_DAY_EXPIRY = new Date("2026-05-12T00:00:00");

const isMothersDayActive = () => new Date() < MOTHERS_DAY_EXPIRY;

type NavLink = { label: string; path: string; external?: boolean };
type NavItem = NavLink | { label: string; children: NavLink[] };

const buildNavLinks = (): NavItem[] => {
  return [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/menu" },
    { label: "What's On", path: "/whats-on" },
    { label: "Functions", path: "/functions" },
    { label: "Gift Cards", path: "https://giftcards.oolio.io/timesberwick", external: true },
    { label: "Contact", path: "/contact" },
  ];
};

const isLink = (item: NavItem): item is NavLink => "path" in item;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navItems = buildNavLinks();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isChildActive = (children: NavLink[]) =>
    children.some((c) => location.pathname === c.path);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center -ml-2 md:-ml-4">
          <img src={logo} alt="Times Berwick" className="h-12 md:h-14" fetchPriority="high" width={42} height={56} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            isLink(item) ? (
              item.external ? (
                <a
                  key={item.label}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-[0.15em] font-body font-medium transition-colors duration-300 hover:text-primary text-muted-foreground"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm uppercase tracking-[0.15em] font-body font-medium transition-colors duration-300 hover:text-primary ${
                    location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )
            ) : (
              <div key={item.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`inline-flex items-center gap-1 text-sm uppercase tracking-[0.15em] font-body font-medium transition-colors duration-300 hover:text-primary ${
                    isChildActive(item.children) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[180px] bg-background border border-border shadow-lg py-2"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setDropdownOpen(false)}
                          className={`block px-5 py-2.5 text-sm uppercase tracking-[0.12em] font-body font-medium transition-colors duration-200 hover:text-primary hover:bg-secondary/50 ${
                            location.pathname === child.path ? "text-primary" : "text-muted-foreground"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          )}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="https://ordering.oolio.io/the-times-berwick"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-2.5 border border-primary text-primary text-sm uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            Order Online
          </a>
          <a
            href="https://www.opentable.com.au/r/times-berwick-reservations-berwick?restref=266717&lang=en-AU&ot_source=Restaurant%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-2.5 bg-primary text-primary-foreground text-sm uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:bg-gold-light"
          >
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-2">
              {navItems.map((item, i) =>
                isLink(item) ? (
                  item.external ? (
                    <motion.div key={item.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05, duration: 0.25 }}>
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="block py-3 px-4 min-h-[48px] flex items-center text-lg font-serif tracking-wide rounded-sm transition-colors duration-300 hover:text-primary hover:bg-secondary/50 text-foreground"
                      >
                        {item.label}
                      </a>
                    </motion.div>
                  ) : (
                    <motion.div key={item.path} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05, duration: 0.25 }}>
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block py-3 px-4 min-h-[48px] flex items-center text-lg font-serif tracking-wide rounded-sm transition-colors duration-300 hover:text-primary hover:bg-secondary/50 ${
                          location.pathname === item.path ? "text-primary bg-secondary/30" : "text-foreground"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  )
                ) : (
                  <motion.div key={item.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05, duration: 0.25 }}>
                    <button
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className={`w-full flex items-center justify-between py-3 px-4 min-h-[48px] text-lg font-serif tracking-wide rounded-sm transition-colors duration-300 hover:text-primary hover:bg-secondary/50 ${
                        isChildActive(item.children) ? "text-primary bg-secondary/30" : "text-foreground"
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={18} className={`transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobileDropdownOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              onClick={() => { setIsOpen(false); setMobileDropdownOpen(false); }}
                              className={`block py-2.5 pl-10 pr-4 min-h-[44px] flex items-center text-base font-serif tracking-wide rounded-sm transition-colors duration-300 hover:text-primary hover:bg-secondary/50 ${
                                location.pathname === child.path ? "text-primary" : "text-muted-foreground"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              )}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.25 }}>
                <a
                  href="https://ordering.oolio.io/the-times-berwick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-center px-6 py-4 min-h-[48px] border border-primary text-primary text-sm uppercase tracking-[0.15em] font-medium"
                >
                  Order Online
                </a>
                <a
                  href="https://www.opentable.com.au/r/times-berwick-reservations-berwick?restref=266717&lang=en-AU&ot_source=Restaurant%20website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-center px-6 py-4 min-h-[48px] bg-primary text-primary-foreground text-sm uppercase tracking-[0.15em] font-medium"
                >
                  Book Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
