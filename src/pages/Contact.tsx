import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import FAQ from "@/components/FAQ";
import heroBg from "@/assets/times-exterior.jpg";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const faqs = [
  { q: "Do I need to make a reservation?", a: "Not always. We take walk-ins but we do recommend booking a table in advance, especially on the weekend to avoid disappointment." },
  { q: "How do I make a booking?", a: "You can reserve a spot on our website using any of the orange \"book now\" buttons or call us on +61 3 8796 3883 to reserve a spot over the phone during opening hours." },
  { q: "What happens if I'm running late?", a: "Please contact us if you're running late. We will hold your table for a short period, but reservations may be released if guests do not arrive within the allocated time." },
  { q: "Is there parking available nearby?", a: "Yes, there are a number of free parking spots right outside the venue as well as free street parking nearby." },
  { q: "Are children welcome?", a: "Yes. Families are welcome at Times Berwick." },
  { q: "Do you offer gift vouchers?", a: <>Yes, you can buy e-gift cards to be delivered straight to their inbox through our website <a href="https://giftcards.oolio.io/timesberwick" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-gold-light transition-colors">here</a>, or you can buy physical gift cards in the restaurant if you'd prefer. Our gift cards range from $50-$200.</> },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-enquiry", {
        body: { type: "contact", ...form },
      });
      if (error) throw error;
      toast.success("Message sent! We'll get back to you shortly.");
      setForm({ name: "", email: "", message: "" });
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
        {/* Hero */}
        <section className="relative h-[40vh] md:h-[50vh] flex items-end overflow-hidden">
          <img src={heroBg} width={1824} height={1216} alt="Times Berwick interior" className="absolute inset-0 w-full h-full object-cover" />
          <div className="hero-overlay absolute inset-0" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 md:pb-20 w-full animate-fade-in">
            <p className="hero-label mb-3 md:mb-4">Get In Touch</p>
            <h1 className="font-serif text-5xl md:text-8xl font-light leading-[0.9]">Contact</h1>
          </div>
        </section>

        {/* Info + Form */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          <ScrollReveal direction="left" className="bg-secondary px-6 lg:px-12 py-14 md:py-20">
            <div className="max-w-md">
              <div className="mb-12">
                <p className="text-primary uppercase tracking-[0.2em] text-xs mb-3">Address</p>
                <p className="font-serif text-xl">13/84 Bemersyde Drive,<br />Berwick VIC 3806</p>
              </div>
              <div className="mb-12">
                <p className="text-primary uppercase tracking-[0.2em] text-xs mb-3">Reservations</p>
                <a href="tel:+61387963883" className="font-serif text-xl hover:text-primary transition-colors block">+61 3 8796 3883</a>
                <a href="mailto:timesberwick@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors block mt-1">timesberwick@gmail.com</a>
              </div>
              <div className="mb-12">
                <p className="text-primary uppercase tracking-[0.2em] text-xs mb-3">Trading Hours</p>
                <div className="space-y-1 text-sm">
                  <p><span className="text-foreground font-medium">Mon – Thu</span> <span className="text-muted-foreground ml-4">11:30am – 3pm & 5pm – 9pm</span></p>
                  <p><span className="text-foreground font-medium">Fri – Sat</span> <span className="text-muted-foreground ml-4">11:30am – 10pm</span></p>
                  <p><span className="text-foreground font-medium">Sun</span> <span className="text-muted-foreground ml-4">11:30am – 9pm</span></p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <Link to="/functions" className="text-primary hover:text-gold-light transition-colors block">Planning a large group? View our Functions page →</Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="px-6 lg:px-12 py-14 md:py-20 flex items-center">
            <div className="w-full max-w-lg">
              <h2 className="font-serif text-4xl mb-10">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" placeholder="Your Name" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-0 py-3.5 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
                <input type="email" placeholder="Email Address" required maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-0 py-3.5 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
                <textarea placeholder="Your Message" rows={5} required maxLength={1000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-0 py-3.5 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
                <button type="submit" disabled={submitting} className="px-10 py-3.5 bg-primary text-primary-foreground uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:bg-gold-light disabled:opacity-60 disabled:cursor-not-allowed">{submitting ? "Sending..." : "Send Message"}</button>
              </form>
            </div>
          </ScrollReveal>
        </section>

        {/* FAQ */}
        <FAQ items={faqs} className="!bg-background" />

        {/* Map */}
        <ScrollReveal>
          <section className="w-full">
            <iframe title="Times Berwick Location" src="https://www.google.com/maps?q=13%2F84%20Bemersyde%20Drive%2C%20Berwick%20VIC%203806&z=15&output=embed" width="100%" height="400" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
          </section>
        </ScrollReveal>
      </div>
    </Layout>
  );
};

export default Contact;
