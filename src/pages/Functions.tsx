import { useState } from "react";
import { Download, Mail, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import FAQ from "@/components/FAQ";
import functionsVenue1 from "@/assets/functions-venue-1.jpg";
import functionsVenue2 from "@/assets/functions-venue-2.jpg";
import functionsExterior from "@/assets/functions-exterior.jpg";
import functionsVenueUpper from "@/assets/functions-venue-upper.jpg";

import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const faqs = [
  { q: "Can I host a function or private event at Times Berwick?", a: "Yes. Our venue is available for private events including corporate functions, birthdays, celebrations, and special occasions." },
  { q: "What types of events can you host?", a: "We host a range of events including corporate dinners, birthday celebrations, engagement parties, and private dining experiences." },
  { q: "Do you offer set menus for functions?", a: "Yes. We offer a variety of curated menus designed specifically for group dining and private events." },
  { q: "How do I enquire about hosting a function?", a: "You can submit an enquiry through our Functions page or contact our team directly." },
  { q: "Can I book for a large group?", a: "Yes. For groups of 8 or more, we recommend contacting us directly so we can ensure the best dining experience for your group." },
];

const Functions = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", guests: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-enquiry", {
        body: { type: "functions", ...form },
      });
      if (error) throw error;
      toast.success("Thank you! We'll be in touch within 24 hours.");
      setForm({ name: "", email: "", phone: "", date: "", guests: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again or call us.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="pt-20 md:pt-24">
        {/* Hero + Venue */}
        <section className="relative min-h-[70vh] md:min-h-[80vh] overflow-hidden">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover brightness-[0.45]">
            <source src="/videos/functions-hero-bg.mp4" type="video/mp4" />
            <img src={functionsExterior} alt="Times Berwick venue exterior" className="w-full h-full object-cover" />
          </video>
          <div className="hero-overlay absolute inset-0" />
          <div className="relative z-10 flex flex-col justify-end min-h-[70vh] md:min-h-[80vh]">
            <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-24 w-full animate-fade-in">
              <p className="hero-label mb-3 md:mb-4">Private events at Times Berwick</p>
              <h1 className="font-serif text-3xl md:text-6xl font-light leading-[0.9]">Functions and Events space in Berwick, Melbourne</h1>
            </div>
            <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-16 pb-12 md:pb-24">
              <p className="text-primary uppercase tracking-[0.3em] text-xs mb-3 md:mb-4">The Venue</p>
              <h2 className="font-serif text-3xl md:text-5xl font-light leading-[1.05] mb-4 md:mb-6">Up to 160 guests</h2>
              <div className="gold-divider max-w-20 mb-4 md:mb-6" />
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">Birthday celebrations, work functions, corporate events & more. Our upstairs semi-private dining room seats 50 and ensures privacy for you and your guests.</p>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="bg-secondary">
          <div className="max-w-7xl mx-auto px-6 py-16 lg:py-32">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row flex-wrap items-start md:items-end justify-between gap-4 mb-14 md:mb-20">
                <div>
                  <p className="text-primary uppercase tracking-[0.2em] text-sm mb-3 md:mb-4">Packages from $95pp</p>
                  <h2 className="font-serif text-4xl md:text-6xl font-light">Let us look after it</h2>
                  <p className="text-muted-foreground mt-2 md:mt-3 text-base md:text-lg">You just invite your guests & we'll give them a night to remember at Times Berwick</p>
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  <a
                    href="/Times-Berwick-Set-Menus.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-2.5 text-sm uppercase tracking-[0.15em] hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                  <a
                    href="#enquiry-form"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm uppercase tracking-[0.15em] hover:bg-gold-light transition-colors duration-300"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 max-w-5xl">
              <ScrollReveal delay={0.1}>
                <h3 className="font-serif text-3xl mb-2">Set Menu 1</h3>
                <p className="text-primary font-serif text-2xl mb-6">$95<span className="text-base text-muted-foreground">pp</span></p>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-border">
                    <p className="font-medium text-foreground mb-1">Pre-Starter</p>
                    <p className="text-muted-foreground text-sm italic">Garlic & parmesan bread (VG)</p>
                  </div>
                  <div className="pb-4 border-b border-border">
                    <p className="font-medium text-foreground mb-1">Starters <span className="text-muted-foreground text-sm font-normal">(your choice of)</span></p>
                    <p className="text-muted-foreground text-sm italic">Mushroom & truffle arancini (VG) · Signature fried calamari (GFO) · Hot chicken wings (GFO)</p>
                  </div>
                  <div className="pb-4 border-b border-border">
                    <p className="font-medium text-foreground mb-1">Mains <span className="text-muted-foreground text-sm font-normal">(your choice of)</span></p>
                    <p className="text-muted-foreground text-sm italic">O'Connor striploin 350gm MB:3+ (GFO) · Flame grilled chicken (GFO) · Times signature gnocchi (VG) · Crispy skinned salmon (GFO) · Harissa lamb skewer (GFO) · Wagyu rump cap skewer (GFO)</p>
                  </div>
                  <div className="pb-4 border-b border-border">
                    <p className="font-medium text-foreground mb-1">Desserts <span className="text-muted-foreground text-sm font-normal">(your choice of)</span></p>
                    <p className="text-muted-foreground text-sm italic">Sticky date pudding · Duo of ice-cream or sorbet</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <h3 className="font-serif text-3xl mb-2">Set Menu 2</h3>
                <p className="text-primary font-serif text-2xl mb-6">$110<span className="text-base text-muted-foreground">pp</span></p>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-border">
                    <p className="font-medium text-foreground mb-1">Pre-Starter</p>
                    <p className="text-muted-foreground text-sm italic">Garlic & parmesan bread (VG)</p>
                  </div>
                  <div className="pb-4 border-b border-border">
                    <p className="font-medium text-foreground mb-1">Starters <span className="text-muted-foreground text-sm font-normal">(your choice of)</span></p>
                    <p className="text-muted-foreground text-sm italic">Mushroom & truffle arancini (VG) · Signature fried calamari (GFO) · Times bruschetta (VG, GFO) · Hot chicken wings (GFO)</p>
                  </div>
                  <div className="pb-4 border-b border-border">
                    <p className="font-medium text-foreground mb-1">Mains <span className="text-muted-foreground text-sm font-normal">(your choice of)</span></p>
                    <p className="text-muted-foreground text-sm italic">O'Connor rib-eye 400gm MB:4+ (GFO) · Wagyu striploin 300g MB:5+ (GFO) · Times signature gnocchi (VG) · Crispy skinned salmon (GFO) · Pork belly skewer (GFO) · Flame grilled chicken (GFO)</p>
                  </div>
                  <div className="pb-4 border-b border-border">
                    <p className="font-medium text-foreground mb-1">Desserts <span className="text-muted-foreground text-sm font-normal">(your choice of)</span></p>
                    <p className="text-muted-foreground text-sm italic">Sticky date pudding · Crème brûlée</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>


            {/* Enquire CTA */}
            <ScrollReveal delay={0.1} className="mt-20 max-w-5xl">
              <a
                href="#enquiry-form"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm uppercase tracking-[0.2em] hover:bg-gold-light transition-colors duration-300"
              >
                Enquire Now
              </a>
            </ScrollReveal>

            {/* Beverage packages */}
            <ScrollReveal delay={0.1} className="mt-10 max-w-5xl">
              <h3 className="font-serif text-3xl mb-8">Beverage packages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
                <div className="pb-6 border-b border-border">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-serif text-xl">Standard</span>
                    <span className="text-primary font-serif text-2xl">$62<span className="text-base text-muted-foreground">pp</span></span>
                  </div>
                  <p className="text-muted-foreground text-sm italic">Cocktail on arrival, house wine, beer & sparkling</p>
                </div>
                <div className="pb-6 border-b border-border">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-serif text-xl">Premium</span>
                    <span className="text-primary font-serif text-2xl">$90<span className="text-base text-muted-foreground">pp</span></span>
                  </div>
                  <p className="text-muted-foreground text-sm italic">Premium spirits, cocktails, wines & champagne</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="mt-20 max-w-3xl">
              <h3 className="font-serif text-xl font-bold mb-4">Booking terms</h3>
              <p className="text-muted-foreground text-sm italic leading-relaxed">
                Booking hold fee is required for bookings of 8+ guests. $25 per person cancellation fee within 24 hours of booking. Final guest numbers must be confirmed 24 hours prior. A 15% surcharge applies on public holidays.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Venue gallery strip */}
        <section className="h-[40vh]">
          <div className="relative overflow-hidden h-full">
            <img src={functionsVenue2} alt="Two-level venue view" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* FAQ */}
        <FAQ items={faqs} className="!bg-background" />

        {/* Need more info? */}
        <section className="bg-background pt-4 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="max-w-3xl">
            <h3 className="font-serif text-3xl mb-6">Need more info?</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:info@timesberwick.com.au"
                className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 text-sm uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
              <a
                href="tel:+61397071574"
                className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 text-sm uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                Phone Us
              </a>
            </div>
          </ScrollReveal>
          </div>
        </section>

        {/* Enquiry Form */}
        <section id="enquiry-form" className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative overflow-hidden min-h-[500px]">
            <img src={functionsVenue1} alt="Upper level dining" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="hero-overlay absolute inset-0" />
            <ScrollReveal direction="left" className="relative z-10 flex items-end h-full px-8 md:px-16 pb-16">
              <div>
                <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4">Get In Touch</p>
                <h2 className="font-serif text-5xl md:text-6xl font-light leading-[1]">Function<br />Enquiry</h2>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="right" className="bg-secondary flex items-center px-8 md:px-16 py-16 lg:py-0">
            <form onSubmit={handleSubmit} className="space-y-5 w-full max-w-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3.5 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
                <input type="email" placeholder="Email Address" required maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3.5 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input type="tel" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3.5 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
                <input type="date" placeholder="Preferred Date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full px-4 py-3.5 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
                <input type="number" placeholder="Guests" min={1} max={200} value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className="w-full px-4 py-3.5 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
              <textarea placeholder="Tell us about your event..." rows={4} maxLength={1000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3.5 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
              <button type="submit" disabled={submitting} className="px-10 py-3.5 bg-primary text-primary-foreground uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:bg-gold-light disabled:opacity-60 disabled:cursor-not-allowed">{submitting ? "Sending..." : "Send Enquiry"}</button>
            </form>
          </ScrollReveal>
        </section>
      </div>
    </Layout>
  );
};

export default Functions;
