import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Top row — brand + columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <h3 className="font-serif text-4xl font-semibold mb-4">
              Times <span className="text-primary">Berwick</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              A multi-award winning steakhouse in Berwick, Melbourne. Truly a hidden gem, we serve everything from premium Black Angus and handmade pasta to Nasi Goreng and local seafood. Come see us for an experience that stands out.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <a href="https://www.instagram.com/times.berwick/?hl=en" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/timesberwick" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@timesberwick" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="TikTok">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.16z"/></svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="text-primary uppercase tracking-[0.2em] text-xs mb-4">Contact</p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>13/84 Bemersyde Drive,<br />Berwick VIC 3806</p>
              <a href="tel:+61387963883" className="hover:text-primary transition-colors block">+61 3 8796 3883</a>
              <a href="mailto:timesberwick@gmail.com" className="hover:text-primary transition-colors block">timesberwick@gmail.com</a>
            </div>
          </div>

          {/* Hours */}
          <div className="lg:col-span-3">
            <p className="text-primary uppercase tracking-[0.2em] text-xs mb-4">Hours</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><span className="text-foreground">Mon – Thu</span><br />11:30am – 3pm & 5pm – 9pm</p>
              <p><span className="text-foreground">Fri – Sat</span><br />11:30am – 10pm</p>
              <p><span className="text-foreground">Sun</span><br />11:30am – 9pm</p>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <p className="text-primary uppercase tracking-[0.2em] text-xs mb-4">Explore</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/menu" className="text-muted-foreground hover:text-primary transition-colors">Menu</Link></li>
              <li><Link to="/functions" className="text-muted-foreground hover:text-primary transition-colors">Functions</Link></li>
              <li><Link to="/chefs-table" className="text-muted-foreground hover:text-primary transition-colors">Chef's Table</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Map — full width */}
        <div className="overflow-hidden mb-12">
          <iframe
            title="Times Berwick Location"
            src="https://www.google.com/maps?q=13%2F84%20Bemersyde%20Drive%2C%20Berwick%20VIC%203806&z=15&output=embed"
            width="100%"
            height="250"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Times Berwick. All rights reserved.</p>
          <p className="text-primary/80">A 15% surcharge applies on public holidays.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
