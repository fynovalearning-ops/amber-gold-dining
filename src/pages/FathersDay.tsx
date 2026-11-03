import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import fathersDayHero from "@/assets/fathers-day-steak.jpg.asset.json";
import giftCardImg from "@/assets/cocktails.jpg";

const GIFT_CARD_URL = "https://giftcards.oolio.io/timesberwick";
const BOOKING_URL =
  "https://www.opentable.com.au/r/times-berwick-reservations-berwick?restref=266717&lang=en-AU&ot_source=Restaurant%20website";

const highlights = [
  {
    title: "Reduced à la carte menu",
    desc: "A tighter version of our à la carte for the day, so the kitchen can look after every table properly. Steaks from the flame grill, house-made pastas, ribs and our sharing boards.",
  },
  {
    title: "Made for sharing",
    desc: "Bring the whole family. Sharing steaks, the Times Carnivore Board and dessert boards to share are all on offer.",
  },
  {
    title: "Book early",
    desc: "Father's Day books out quickly. Reserve your table online, and let us know about any dietary requirements in your booking notes.",
  },
];

const FathersDay = () => {
  return (
    <Layout>
      <title>Father's Day | Times Berwick</title>
      <meta
        name="description"
        content="Celebrate Father's Day, Sunday 6 September, at Times Berwick with a reduced a la carte menu. Book your table or treat Dad to a gift card."
      />

      <div className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="relative min-h-[55vh] md:min-h-[70vh] flex items-end overflow-hidden">
          <img
            src={fathersDayHero.url}
            alt="Flame grilled steak at Times Berwick for Father's Day"
            width={1440}
            height={1920}
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16 w-full animate-fade-in">
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-3">
              Sunday 6 September 2026
            </p>
            <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-6">
              Father's Day
            </h1>
            <div className="gold-divider max-w-20 mb-6" />
            <p className="text-foreground/80 leading-relaxed max-w-lg text-sm md:text-base">
              Spoil Dad this Father's Day at Times Berwick, we're open for lunch and dinner. If you can't make it in, buy him a Times gift card he can use later!
            </p>
          </div>
        </section>

        {/* CTA band */}
        <ScrollReveal>
          <section className="bg-secondary/30 border-y border-border">
            <div className="max-w-4xl mx-auto px-6 py-10 md:py-14 text-center">
              <p className="font-serif text-xl md:text-2xl mb-6 leading-relaxed">
                Reduced à la carte menu, available all day Sunday 6 September.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 min-h-[48px] bg-primary text-primary-foreground uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:bg-gold-light"
                >
                  Book a Table
                </a>
                <a
                  href={GIFT_CARD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 min-h-[48px] border border-primary text-primary uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  Buy a Gift Card
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Highlights */}
        <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">What to expect</h2>
              <div className="gold-divider mx-auto" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {highlights.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="text-center md:text-left">
                  <h3 className="font-serif text-xl md:text-2xl font-light mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Gift cards */}
        <ScrollReveal>
          <section className="border-t border-border">
            <div className="max-w-7xl mx-auto px-6 py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
              <div className="aspect-[16/9] overflow-hidden bg-secondary/40">
                <img
                  src={giftCardImg}
                  alt="Cocktails at Times Berwick - gift cards available"
                  width={1920}
                  height={1080}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-primary uppercase tracking-[0.22em] text-xs mb-4">Gift Cards</p>
                <h2 className="font-serif text-3xl md:text-4xl font-light mb-5">Still stuck for a present?</h2>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-7">
                  A Times Berwick gift card lets Dad choose his own night - a steak from the flame grill, a bottle from the list, or the full feed me experience. Delivered straight to your inbox, ready to hand over on the day.
                </p>
                <a
                  href={GIFT_CARD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 min-h-[48px] border border-primary text-primary uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  Buy a Gift Card
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Bottom CTA */}
        <ScrollReveal>
          <section className="bg-secondary/20 border-t border-border">
            <div className="max-w-3xl mx-auto px-6 py-14 md:py-20 text-center">
              <h2 className="font-serif text-2xl md:text-4xl font-light mb-4">Book Dad's table</h2>
              <div className="gold-divider mx-auto mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
                Sunday 6 September. Tables go fast, so secure yours now and leave the rest to us.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-3.5 min-h-[48px] bg-primary text-primary-foreground uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:bg-gold-light"
              >
                Book Now
              </a>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </Layout>
  );
};

export default FathersDay;
